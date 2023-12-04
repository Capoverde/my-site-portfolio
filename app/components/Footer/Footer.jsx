import React from "react";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-3 flex flex-end
                     bg-black text-gray-600"
    >

        <span className="inline-block ml-auto">Copy Right <sup>&copy;</sup>  {year} </span>
        <Link className="inline-block ml-4 mr-[11%]" href="/">
          Slobinski.dev
        </Link>
      
    </footer>
  );
};
