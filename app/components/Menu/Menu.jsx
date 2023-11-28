"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { motion as m } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import styles from "./Menu.module.css";

export const Menu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const mainElement = Array.from(document.querySelectorAll('nav'));
  
    if (mainElement) {
      if (isOpen) {
        mainElement.forEach(el => el.classList.add("no-scroll"));
      } else {
        mainElement.forEach(el => el.classList.remove("no-scroll"));
      }
    }
  
    return () => {
      if (mainElement) {
        mainElement.forEach(el => el.classList.remove("no-scroll"));
      }
    };
  }, [isOpen]);
  

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
      } menu w-full h-full py-10 mt-16
               flex justify-center align-center
               bg-gray-200
               absolute
               top-0 left-0
               z-30
             `}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <div className={`${styles.blob1}
                     blob absolute
                     top-5
                     left-5
                     w-[10rem]
                     h-[10rem]
                     bg-orange-400
                     rounded-full 
                     z-1
                     `
      }>
      </div>
      <ul className="nav__list uppercase w-full h-screen">
        <li className={`${styles.nav__listItem} flex justify-center text-[6rem]`}>
          <Link
            className={`${styles.nav__listItemLink} flex justify-between items-center w-full h-full px-32`}
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
             href="/PortfolioPage"             onClick={handleLinkClick}          
           > 
             <span className="text-[3rem] font-bold">#03</span><span>portfolio</span> <GoArrowDownRight /> 
               </Link>
          </li>
          <li className={`${styles.nav__listItem}   
                  flex justify-center
                  text-[6rem]`}
          >
            <Link className={`${styles.nav__listItemLink}
                  flex justify-between items-center      
                  w-full h-full px-32
                  `}
                  href="/ContactPage"
                  onClick={handleLinkClick}
            >
               <span className="text-[3rem] font-bold">#04</span><span>contact</span> <GoArrowDownRight />
            </Link> 
            </li>
          </ul>
    </m.nav>
  );
};
