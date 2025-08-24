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
  const sneakers = products?.sneakers || [];
  return (
    <div>
      <MainShop products={sneakers} title="Sneakers"></MainShop>
    </div>
  );
};

export default page;
