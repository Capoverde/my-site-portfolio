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
        // type: "spring",
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
      } menu w-screen h-screen py-10 mt-16
               flex justify-center align-center
               bg-gray-200
               absolute
               top-0 left-0
               z-[999]
             `}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      {/* <div className={`${styles.blob1}
                     blob absolute
                     bottom-0
                     left-1/2
                     w-[50rem]
                     h-[50rem]
                     bg-orange-500
                     rounded-full 
                     `
      }> */}
      {/* </div> */}
          <div
            className={`${styles.blob1} 
                           bg-red-700 opacity-50
                           rounded-full
                           absolute
                           w-[600px] h-[400px]
                           left-1/2
            `}
          ></div>
          <div
            className={`${styles.blob1} 
                             bg-gray-600 opacity-50
                             rounded-full absolute
                             w-[600px] h-[600px]         
                `}
          ></div>
          <div
            className={`${styles.blob1}  
                        bg-gray-300 opacity-50 
                        rounded-full absolute
                        w-[600px] h-[600px]
                        right-5
          `}
          ></div>
      <ul className="nav__list uppercase w-full h-screen z-30 absolute">
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
