"use client";
import React, { useContext } from "react";
import { ProductItemsContext } from "../store/ItemsStore";
import Image from "next/image";
import { X } from "lucide-react";
const CheckoutPage = () => {
  const context = useContext(ProductItemsContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { cart, removeFromCart } = context;
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <span className="font-bold">${item.price.toFixed(2)}</span>
              <button
                className="ml-4 p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
                onClick={() => removeFromCart(item.id)}
              >
                <X className="w-5 h-5 text-red-600" />
              </button>
            </div>
          ))}

          {/* Totals */}
          <div className="flex justify-between text-xl font-bold mt-6">
            <span>Total:</span>
            <span>
              ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </span>
          </div>
          <button
            className="mt-8 w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-amber-700 transition"
            onClick={handleCheckout}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
