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
  const women = products?.women || [];
  return (
    <div>
      <MainShop products={women} title="Women"></MainShop>
    </div>
  );
};

export default page;
