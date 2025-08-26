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
  const men = products?.men || [];
  return (
    <div>
      <MainShop products={men} title="Men"></MainShop>
    </div>
  );
};

export default Page;
