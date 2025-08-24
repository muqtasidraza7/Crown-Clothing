"use client";
import ShopCard from "./ShopCard";
import Link from "next/link";

interface MainShopProps {
  products: {
    id: number;
    image: any;
    title: string;
    price: number;
  }[];
  title: string;
}

const MainShop = ({ products, title }: MainShopProps) => {
  return (
    <>
      <div className="p-8">
        <Link href={`/shop/${title.toLowerCase()}`}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            {title}
          </h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((p) => (
            <ShopCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainShop;
