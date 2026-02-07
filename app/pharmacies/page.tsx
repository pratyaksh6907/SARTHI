'use client'

import { LocationMap } from '@/components/location-map'
import { MedicinesGrid } from '@/components/medicines-grid'
import { CartSidebar } from '@/components/cart-sidebar'
import { CartProvider } from '@/context/cart-context'

export default function PharmaciesPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Find Medicines & Hospitals
            </h1>
            <p className="text-lg text-gray-600">
              Locate nearby medical facilities and order medicines online
            </p>
          </div>

          {/* Map Section */}
          <div className="mb-12">
            <LocationMap />
          </div>

          {/* Medicines Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <MedicinesGrid />
          </div>
        </div>

        {/* Cart Sidebar */}
        <CartSidebar />
      </div>
    </CartProvider>
  )
}
