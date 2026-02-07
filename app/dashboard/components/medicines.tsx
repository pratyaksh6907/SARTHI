'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface Medicine {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  manufacturer: string
  strength: string
  quantity: string
  prescription?: boolean
  rating?: number
  inStock: boolean
}

const MEDICINES_DATA: Medicine[] = [
  {
    id: '1',
    name: 'Aspirin 500mg',
    price: 45,
    originalPrice: 60,
    description: 'Pain reliever and fever reducer',
    manufacturer: 'Bayer',
    strength: '500mg',
    quantity: '10 tablets',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '2',
    name: 'Paracetamol 650mg',
    price: 35,
    originalPrice: 50,
    description: 'Fever and pain management',
    manufacturer: 'Cipla',
    strength: '650mg',
    quantity: '15 tablets',
    prescription: false,
    rating: 4.7,
    inStock: true,
  },
  {
    id: '3',
    name: 'Ibuprofen 400mg',
    price: 65,
    originalPrice: 85,
    description: 'Anti-inflammatory pain reliever',
    manufacturer: 'GSK',
    strength: '400mg',
    quantity: '10 tablets',
    rating: 4.6,
    inStock: true,
  },
]

export function DashboardMedicines() {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const handleAddToCart = (medicineId: string) => {
    setAddedItems((prev) => new Set(prev).add(medicineId))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(medicineId)
        return newSet
      })
    }, 2000)
  }

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Available Medicines</CardTitle>
            <CardDescription>Order medicines online with free delivery</CardDescription>
          </div>
          <Link href="/pharmacies">
            <Button size="sm" variant="outline">
              View All
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MEDICINES_DATA.map((medicine) => (
            <div
              key={medicine.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-sm">{medicine.name}</h4>
                {medicine.prescription && (
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                    Rx
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-600 mb-2">
                by {medicine.manufacturer}
              </p>
              <p className="text-xs text-gray-500 mb-3">
                {medicine.strength} • {medicine.quantity}
              </p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-bold text-green-600">
                  ₹{medicine.price}
                </span>
                {medicine.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    ₹{medicine.originalPrice}
                  </span>
                )}
              </div>

              {medicine.rating && (
                <div className="flex items-center gap-1 text-xs mb-3">
                  <span>⭐ {medicine.rating}</span>
                </div>
              )}

              <div className="space-y-2">
                <Button
                  onClick={() => handleAddToCart(medicine.id)}
                  disabled={!medicine.inStock}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  {addedItems.has(medicine.id) ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            💡 <strong>Tip:</strong> Browse our complete medicines catalog with more options, detailed descriptions, and ratings at <Link href="/pharmacies" className="text-blue-600 hover:underline font-semibold">Medicines Store</Link>. Find nearby hospitals and pharmacies too!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
