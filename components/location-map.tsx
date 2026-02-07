'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Location {
  name: string
  type: 'hospital' | 'pharmacy'
  lat: number
  lng: number
  address: string
  phone?: string
  rating?: number
}

const NEARBY_LOCATIONS: Location[] = [
  {
    name: 'Metro Hospital',
    type: 'hospital',
    lat: 28.7041,
    lng: 77.1025,
    address: '123 Medical Avenue, Main Street',
    phone: '+91-11-2345-6789',
    rating: 4.5,
  },
  {
    name: 'City Health Clinic',
    type: 'hospital',
    lat: 28.7200,
    lng: 77.1050,
    address: '456 Health Park, Secondary Road',
    phone: '+91-11-2345-7890',
    rating: 4.2,
  },
  {
    name: 'Care Pharmacy',
    type: 'pharmacy',
    lat: 28.7100,
    lng: 77.1150,
    address: '789 Medicine Lane, Main Street',
    phone: '+91-11-2345-8901',
    rating: 4.3,
  },
  {
    name: 'Health Plus Pharmacy',
    type: 'pharmacy',
    lat: 28.7150,
    lng: 77.0950,
    address: '321 Drug Store, Medical Lane',
    phone: '+91-11-2345-9012',
    rating: 4.1,
  },
  {
    name: 'Advanced Medical Center',
    type: 'hospital',
    lat: 28.6950,
    lng: 77.1100,
    address: '654 Doctor Square, Health Street',
    phone: '+91-11-2345-0123',
    rating: 4.6,
  },
]

function MapComponent() {
  const mapRef = useRef<any>(null)
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainer.current) return

    const initializeMap = async () => {
      // Dynamic import to avoid SSR issues
      const L = require('leaflet') as any

      if (!L || !L.map) {
        console.error('Leaflet not loaded')
        return
      }

      if (mapRef.current) return

      try {
        // Initialize map centered on Delhi
        const map = L.map(mapContainer.current).setView([28.7041, 77.1025], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map)

        // Define custom icons
        const hospitalIcon = L.icon({
          iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMmM1LjUyMyAwIDEwIDQuNDc3IDEwIDEwcy00LjQ3NyAxMC0xMCAxMFMyIDI3LjUyMyAyIDEybzQuNDc3LTEwIDEwLTEweiIvPjxwYXRoIGQ9Ik0xMiA3djEwTTcgMTJoMTAiIGZpbGw9Im5vbmUiLz48L3N2Zz4=',
          iconSize: [32, 32],
          popupAnchor: [0, -32],
        })

        const pharmacyIcon = L.icon({
          iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZWI4ODEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIi8+PHBhdGggZD0iTTEyIDggdjgiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNOCAxMiBoOCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
          iconSize: [32, 32],
          popupAnchor: [0, -32],
        })

        // Add markers for all locations
        NEARBY_LOCATIONS.forEach((location) => {
          const icon = location.type === 'hospital' ? hospitalIcon : pharmacyIcon
          const marker = L.marker([location.lat, location.lng], { icon }).addTo(map)

          const popupContent = `
            <div class="p-3 max-w-xs">
              <h3 class="font-bold text-sm">${location.name}</h3>
              <p class="text-xs text-gray-600 mt-1">${location.address}</p>
              ${location.phone ? `<p class="text-xs mt-1"><strong>Phone:</strong> ${location.phone}</p>` : ''}
              ${location.rating ? `<p class="text-xs mt-1"><strong>Rating:</strong> ⭐ ${location.rating}/5</p>` : ''}
              <p class="text-xs mt-2 text-blue-600 font-semibold">${location.type === 'hospital' ? '🏥 Hospital' : '💊 Pharmacy'}</p>
            </div>
          `

          marker.bindPopup(popupContent)
        })

        mapRef.current = map
      } catch (error) {
        console.error('Error initializing map:', error)
      }
    }

    initializeMap()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nearby Hospitals & Pharmacies</CardTitle>
        <CardDescription>Find medical facilities near you</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          ref={mapContainer}
          className="w-full h-96 rounded-lg border border-gray-300"
          style={{ opacity: 1 }}
        />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <span>Hospitals</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <span>Pharmacies</span>
          </div>
        </div>

        {/* Locations List */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Nearby Facilities</h3>
          <div className="space-y-3">
            {NEARBY_LOCATIONS.map((location) => (
              <div
                key={location.name}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  {location.type === 'hospital' ? (
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                      🏥
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">
                      💊
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{location.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                  <div className="flex items-center gap-4 mt-2">
                    {location.phone && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">📞</span>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-xs text-blue-600 hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    )}
                    {location.rating && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs">⭐</span>
                        <span className="text-xs text-gray-600">{location.rating}/5</span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="flex-shrink-0 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {location.type === 'hospital' ? 'Hospital' : 'Pharmacy'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function LocationMap() {
  return (
    <div suppressHydrationWarning>
      <MapComponent />
    </div>
  )
}
