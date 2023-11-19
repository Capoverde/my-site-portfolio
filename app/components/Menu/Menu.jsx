"use client"
import React from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import styles from "./Menu.module.css";

export const Menu = ({ isOpen, onClose }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleLinkClick = () => {
    onClose(); 
  };

  return (
    <m.nav
      className={`${styles.menu} ${
        isOpen ? styles.open : ""
      } menu min-w-screen min-h-screen 
               flex justify-center align-center
               bg-gray-200 absolute inset-0 z-30
             `}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <ul className="nav__list uppercase w-full h-screen">
        <li
          className={`${styles.nav__listItem}  
                            flex justify-center
                            text-[6rem]
    `}
        >
          <Link
            className={`${styles.nav__listItemLink} 
                                flex justify-between items-center
                                w-full h-full px-32
                                `}
            href="/"
            onClick={handleLinkClick}
          >
            <span className="text-[3rem] font-bold">#01</span>
            <span>home</span> <GoArrowDownRight />
          </Link>
        </li>
        <li
          className={`${styles.nav__listItem}  
                    flex justify-center
                    text-[6rem]
            `}
        >
          <Link
            className={`${styles.nav__listItemLink}
                                 flex justify-between items-center
                                 w-full h-full px-32
                                 `}
            href="/AboutPage"
            onClick={handleLinkClick} 
          >
            <span className="text-[3rem] font-bold">#02</span>
            <span>about</span> <GoArrowDownRight />
          </Link>
        </li>
        <li
          className={`${styles.nav__listItem}  
                    flex justify-center
                    text-[6rem]
            `}
        >
          <Link
            className={`${styles.nav__listItemLink}
                                     flex justify-between items-center
                                     w-full h-full px-32
          `}
            href="/PortfolioPage"
            onClick={handleLinkClick}
          >
            <span className="text-[3rem] font-bold">#03</span>
            <span>portfolio</span> <GoArrowDownRight />
          </Link>
        </li>
        <li
          className={`${styles.nav__listItem}  
                    flex justify-center
                    text-[6rem]
            `}
        >
          <Link
            className={`${styles.nav__listItemLink}
                                     flex justify-between items-center
                                     w-full h-full px-32 
          `}
            href="/ContactPage"
            onClick={handleLinkClick} 
          >
            <span className="text-[3rem] font-bold">#04</span>
            <span>contact</span> <GoArrowDownRight />
          </Link>
        </li>
      </ul>
    </m.nav>
  );
};
