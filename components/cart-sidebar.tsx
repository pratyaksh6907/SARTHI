'use client'

import { useState } from 'react'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  const totalPrice = getTotalPrice()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Cart Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-16 w-16 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="lg"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-96 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <Card className="h-full rounded-none border-0 flex flex-col">
          <CardHeader className="border-b flex justify-between items-center">
            <CardTitle>Shopping Cart</CardTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </CardHeader>

          <CardContent className="flex-1 py-4 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-12 w-12 text-gray-300 mb-3" />
                <p className="text-gray-500 font-semibold">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-1">Add medicines to get started</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">₹{item.price} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between">
                    <p className="font-bold text-green-600">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 h-6"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </CardContent>

          {cart.length > 0 && (
            <CardFooter className="border-t flex flex-col gap-3 p-4">
              <div className="w-full space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-green-600">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                Proceed to Checkout
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </>
  )
}
