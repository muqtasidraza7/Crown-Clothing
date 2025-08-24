"use client";

import { createContext, useEffect, useState } from "react";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

type ProductCategories = {
  men: Product[];
  women: Product[];
  jackets: Product[];
  sneakers: Product[];
  hats: Product[];
};

type ProductContextType = {
  products: ProductCategories | null;
  cart: Product[];
  count: number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const ProductItemsContext = createContext<ProductContextType | null>(
  null
);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ProductCategories | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: ProductCategories) => setProducts(data));
  }, []);

  const addToCart = (id: number) => {
    if (!products) return;

    // find product in any category
    const allProducts = Object.values(products).flat();
    const product = allProducts.find((p) => p.id === id);

    if (product) {
      setCart((prev) => [...prev, product]);
      setCount((prev) => prev + 1);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
    setCount((prev) => prev - 1);
  };

  return (
    <ProductItemsContext.Provider
      value={{ products, cart, count, addToCart, removeFromCart }}
    >
      {children}
    </ProductItemsContext.Provider>
  );
};
