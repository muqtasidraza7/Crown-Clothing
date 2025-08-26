"use client";
import React, { useContext } from "react";
import MainShop from "../components/MainShop";
import { ProductItemsContext } from "@/app/store/ItemsStore";

const Page = () => {
  const contex = useContext(ProductItemsContext);
  if (!contex) {
    throw new Error("Context is undefined");
  }
  const { products } = contex;
  const hats = products?.hats || [];
  const men = products?.men || [];
  const women = products?.women || [];
  const sneakers = products?.sneakers || [];
  const jackets = products?.jackets || [];

  return (
    <>
      <MainShop
        products={men.filter((item) => item.id < 5)}
        title="Men"
      ></MainShop>
      <MainShop
        products={women.filter((item) => item.id < 15)}
        title="Women"
      ></MainShop>
      <MainShop
        products={sneakers.filter((item) => item.id < 35)}
        title="Sneakers"
      ></MainShop>
      <MainShop
        products={jackets.filter((item) => item.id < 25)}
        title="Jackets"
      ></MainShop>
      <MainShop
        products={hats.filter((item) => item.id < 45)}
        title="Hats"
      ></MainShop>
    </>
  );
};

export default Page;
