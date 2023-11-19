import React from "react";
import { a } from "react-router-dom";
import { motion as m } from "framer-motion";
import styles from "./Menu.module.css";

export const Menu = ({ isOpen }) => {
  return (
    <m.nav
      className={`${styles.menu} ${
        isOpen ? styles.open : ""
      } menu min-w-screen min-h-screen flex justify-center bg-red-300`}
    >
      <ul className="nav__list uppercase w-full h-full flex justify-center">
        <li className="nav__list-item">
          <a className="nav__list-item-a" href="/">
            home
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-a" href="#">
            about
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-a" href="#">
            portfolio
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-a" href="#">
            contact
          </a>
        </li>
      </ul>
    </m.nav>
  );
};
