"use client";
import React, { useContext } from "react";
import { ProductItemsContext } from "../store/ItemsStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CartBox = () => {
  const router = useRouter;
  const context = useContext(ProductItemsContext);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { cart } = context;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          <div className="max-h-60 overflow-y-auto space-y-3">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 border-b pb-2"
              >
                <div className="flex items-center gap-2">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">1×</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-3 border-t bg-gray-50">
          <Link href="/checkout">
            <button className="w-full bg-black text-white py-2 text-sm font-medium rounded-md hover:bg-gray-800 transition">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartBox;
