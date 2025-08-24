"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import navImg from "@/../public/1-18326_gold-queen-crown-png.png";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ProductItemsContext } from "../store/ItemsStore";
import CartBox from "./CartBox";

const Navigation = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const context = useContext(ProductItemsContext);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { count } = context;

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-lg border-b border-gray-100">
      <div className="flex items-center space-x-3">
        <Image
          src={navImg}
          alt="Crown Clothing Logo"
          width={48}
          height={48}
          className="filter drop-shadow-md"
        />
        <Link href="/">
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent tracking-tight">
            Crown Clothing
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-8 relative">
        <Link
          href="/shop"
          className="text-gray-700 font-medium hover:text-amber-700 transition-colors duration-200"
        >
          Shop
        </Link>

        <SignedOut>
          <Link
            className="text-gray-700 font-medium hover:text-amber-700 transition-colors cursor-pointer"
            href="/auth"
          >
            Sign In
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="relative">
          <button
            onClick={() => setCartOpen((prev) => !prev)}
            className="px-5 py-2.5 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            Cart ({count})
          </button>

          {cartOpen && <CartBox />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
