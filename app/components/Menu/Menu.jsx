import React from "react";
import { a } from "react-router-dom";
import { motion as m } from "framer-motion";
import styles from "./Menu.module.css";

export const Menu = ({ isOpen }) => {
  return (
    <m.nav
      className={`${styles.menu} ${
        isOpen ? styles.open : ""
      }        menu min-w-screen min-h-screen 
               flex justify-center align-center
               bg-gray-200 absolute inset-0 z-30
             `}
    >
      <ul className="nav__list uppercase w-full h-screen">
        <li
          className={`${styles.nav__listItem}  
                            flex justify-center
                            text-[7rem]
    `}
        >
          <a
            className="nav__list-item-a 
                                flex justify-between align-center
                                w-full h-full px-8"
            href="/"
          >
            <span className="text-[3rem] font-bold">#01</span>
            <span>home</span>
          </a>
        </li>
        <li
          className={`${styles.nav__listItem}  
                    flex justify-center
                    text-[7rem]
            `}
        >
          <a className="nav__list-item-a" href="/">
            about
          </a>
        </li>
      </ul>
    </m.nav>
  );
};
