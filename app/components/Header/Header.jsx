"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Rotate as Hamburger } from "hamburger-react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      className={`${styles.page__header} 
                      flex justify-between items-center
                      py-2 px-[10%]`}
    >
      <Link href="/" className="block">
        <div className="logo-box font-extrabold">DEV</div>
      </Link>
      <Link href="/" className="block">
        <span className="contact inline-block">cont@ct</span>
      </Link>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </header>
  );
};
