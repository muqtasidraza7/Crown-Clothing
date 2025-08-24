"use client";

import React from "react";
import Image from "next/image";
import { ProductItemsContext } from "../store/ItemsStore";
import { useContext } from "react";

interface ShopCardProps {
  id: number;
  image: any;
  title: string;
  price: number;
}

const ShopCard: React.FC<ShopCardProps> = ({ id, image, title, price }) => {
  const contex = useContext(ProductItemsContext);
  if (!contex) {
    throw new Error("Context is undefined");
  }
  const { addToCart } = contex;
  return (
    <div className="flex flex-col">
      <div className="relative group w-full aspect-square overflow-hidden rounded-md bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button
            className="px-5 py-2.5 bg-white text-black font-medium text-sm tracking-wide rounded-sm hover:bg-black hover:text-white transition-colors duration-200 border border-white"
            onClick={() => {
              addToCart(id);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 px-1">
        <span className="text-gray-800 text-sm font-medium truncate max-w-[70%]">
          {title}
        </span>
        <span className="font-semibold text-gray-900">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ShopCard;
