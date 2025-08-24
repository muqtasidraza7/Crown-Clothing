"use client";
import React, { useContext } from "react";
import MainShop from "@/app/components/MainShop";
import { ProductItemsContext } from "@/app/store/ItemsStore";

const page = () => {
  const contex = useContext(ProductItemsContext);
  if (!contex) {
    throw new Error("Context is undefined");
  }
  const { products } = contex;
  const jackets = products?.jackets || [];
  return (
    <div>
      <MainShop products={jackets} title="Jackets"></MainShop>
    </div>
  );
};

export default page;
