import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { motion as m, AnimatePresence } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import styles from "./Menu.module.css";

export const Menu = ({ isOpen, onClose }) => {

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
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

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.5,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.nav
          className={`${styles.menu} ${isOpen ? styles.open : ""} menu w-full h-screen py-10 mt-16 mx-0
             flex justify-center align-center
             bg-black
             absolute
             top-0 left-0
             z-[999]
           `}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <div className={`${styles.blob1} blob absolute bottom-0 left-1/2 w-[50rem] h-[50rem] bg-gray-700 top-[10%] rounded-full`}></div>
          <div className={`${styles.blob1} bg-red-700 opacity-50 rounded-full absolute w-[600px] h-[400px] left-1/2 bottom-0`}></div>
          <div className={`${styles.blob1} bg-gray-600 opacity-50 rounded-full absolute w-[600px] h-[600px]`}></div>
          <div className={`${styles.blob1} bg-gray-400 opacity-50 rounded-full absolute w-[600px] h-[600px] right-5`}></div>
          <ul className="nav__list uppercase w-full h-screen text-gray-400 z-30 absolute ">
            {['home', 'About', 'Portfolio', 'Contact'].map((page, index) => (
              <m.li
                key={index}
                className={`${styles.nav__listItem} flex justify-center text-[6rem]`}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  href={page === 'home' ? '/' : `/${page}Page`}
                  passHref
                    className={`${styles.nav__listItemLink} flex relative justify-between 
                              items-center w-full h-full px-32`}
                  >
                    <span className="text-[3rem] font-bold">#{String(index + 1).padStart(2, '0')}</span>
                    <span className='inline-block'>{page}</span> <GoArrowDownRight />
                    <div className={`${styles.linkImageBox} absolute left-[${page === 'home' ? 5 : 5}%]`}>
                      <Image
                        className='linkImage brightness-75'
                        src={`/${page}LinkImage.png`}
                        width={300}
                        height={200}
                      />
                    </div>
                </Link>
              </m.li>
            ))}
            <m.li 
                className={`${styles.nav__listItem} flex justify-center pt-10 text-[6rem] px-32`}
            >
            <div className="socials flex gap-10">
              <Link
                href="https://www.linkedin.com/in/piotr-s%C5%82obi%C5%84ski-1b432428b/"
                target="_blank"
                title="LinkedIn"
              >
               <RiLinkedinLine color="#9ca3af" />
              </Link>
              <Link
                href="https://github.com/Capoverde"
                target="_blank"
                title="github.com/Capoverde"
              >
               <VscGithubAlt color="#9ca3af" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100092179127170"
                target="_blank"
                title="Facebook"
              >
               <RiFacebookLine color="#9ca3af" />
              </Link>
            </div>
            </m.li>
          </ul>
        </m.nav>
      )}
    </AnimatePresence>
  );
};
