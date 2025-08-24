import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MainCardProps {
  image: any;
  title: string;
  link: string;
}

const MainCard: React.FC<MainCardProps> = ({ image, title, link }) => {
  return (
    <Link
      className="relative w-120 h-62 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      href={`shop/${link}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end pb-5">
        <h2 className="text-white text-2xl font-bold tracking-wide mb-2">
          {title}
        </h2>
        <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 ease-out hover:bg-gray-100 cursor-pointer">
          Shop Now
        </button>
      </div>
    </Link>
  );
};

export default MainCard;
