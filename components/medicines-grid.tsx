'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, CheckCircle2 } from 'lucide-react'
import { useCart } from '@/context/cart-context'

export interface Medicine {
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
  image?: string
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
  {
    id: '4',
    name: 'Cough Syrup 100ml',
    price: 85,
    originalPrice: 110,
    description: 'Effective cough relief syrup',
    manufacturer: 'Robitussin',
    strength: 'Standard',
    quantity: '100ml',
    prescription: false,
    rating: 4.3,
    inStock: true,
  },
  {
    id: '5',
    name: 'Antihistamine Tablets',
    price: 55,
    originalPrice: 75,
    description: 'Allergy relief tablets',
    manufacturer: 'Allergan',
    strength: '10mg',
    quantity: '10 tablets',
    prescription: true,
    rating: 4.4,
    inStock: true,
  },
  {
    id: '6',
    name: 'Vitamin C 1000mg',
    price: 125,
    originalPrice: 160,
    description: 'Immune system booster',
    manufacturer: 'Nature Bounty',
    strength: '1000mg',
    quantity: '30 tablets',
    rating: 4.8,
    inStock: true,
  },
]

export function MedicinesGrid() {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const handleAddToCart = (medicine: Medicine) => {
    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      description: medicine.description,
    })
    
    // Show feedback
    setAddedItems((prev) => new Set(prev).add(medicine.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(medicine.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Available Medicines</h2>
        <p className="text-gray-600">Browse and order medicines online</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MEDICINES_DATA.map((medicine) => (
          <Card key={medicine.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1">
                  <CardTitle className="text-lg">{medicine.name}</CardTitle>
                  <CardDescription className="text-xs mt-1">
                    {medicine.manufacturer}
                  </CardDescription>
                </div>
                {medicine.prescription && (
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    Rx
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{medicine.description}</p>
                <p className="text-xs text-gray-500">
                  {medicine.strength} • {medicine.quantity}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-green-600">
                  ₹{medicine.price}
                </span>
                {medicine.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ₹{medicine.originalPrice}
                  </span>
                )}
              </div>

              {medicine.rating && (
                <div className="flex items-center gap-1 text-sm">
                  <span>⭐ {medicine.rating}</span>
                  <span className="text-gray-500">(based on reviews)</span>
                </div>
              )}

              <div className="space-y-2 pt-2">
                <Button
                  onClick={() => handleAddToCart(medicine)}
                  disabled={!medicine.inStock}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  {addedItems.has(medicine.id) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>

                <Button
                  disabled={!medicine.inStock}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  Buy Now
                </Button>
              </div>

              {!medicine.inStock && (
                <p className="text-sm text-red-600 font-semibold text-center">
                  Out of Stock
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
