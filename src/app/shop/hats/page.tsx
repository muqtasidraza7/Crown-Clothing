"use client";
import React, { useContext } from "react";
import MainShop from "@/app/components/MainShop";
import { ProductItemsContext } from "@/app/store/ItemsStore";

const Page = () => {
  const contex = useContext(ProductItemsContext);
  if (!contex) {
    throw new Error("Context is undefined");
  }
  const { products } = contex;
  const hats = products?.hats || [];
  return (
    <div>
      <MainShop products={hats} title="Hats"></MainShop>
    </div>
  );
};

export default Page;
