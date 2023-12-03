"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import SkillsList from "./components/SkillButton/SkillList";
import styles from "./Styles/HomePage.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.fadeIn}`}>
      <Header />
      <main
        id="mainContainer"
        className={`${styles.HomePage} ${styles.FadeIn}
                     min-w-screen min-h-screen
                     relative overflow-hidden
                     px-[10%] bg-transparent
                     bg-gray-600
      `}
      >
          <div
            className={`${styles.bgShape1} 
                           bg-gray-300 opacity-30
                           rounded-full
                           absolute top-[-22%] left-[-10%]
                           w-[400px] h-[400px]
            `}
          ></div>
        <div
          className="absolute inset-0 
                     inline-flex flex-row justify-center 
                     top-1/2"
        >
          <div
            className={`${styles.bgShape1} 
                           bg-black-700 opacity-30
                           rounded-full
                           relative
                           w-[900px] h-[900px]
            `}
          ></div>
          <div
            className={`${styles.bgShape2} 
                            //bg-orange-600 
                             opacity-70
                             rounded-full relative
                             w-[600px] h-[1200px]         
                `}
          ></div>
          <div
            className={`${styles.bgShape3}  
                        bg-red-600
                         opacity-50
                        top-[-90%] left-[-10%]
                        rounded-full realtive
                        w-[600px] h-[600px]
          `}
          ></div>
        </div>
        <section
          className={`${styles.HomePage__section}
                     h-full w-full z-50
                     border-l border-r border-[#3e3e3e]
        `}
        >
            <m.h1
              className={`${styles.HomePage__title}
                           uppercase md:text-[9rem] 
                           headerMain z-50 text-gray-200
                           border-b border-[#3e3e3e] pl-3
                      `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              słobiński.dev
            </m.h1>          
          <div
            className={`HomePage__describe
                         w-[50%] h-full flex flex-col 
          `}
          >
            <m.p
              className={`${styles.HomePage__describe}
                            text-[2rem] text-gray-400
                            pl-3 border-b border-r border-[#3e3e3e]
            `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Pationate <span className={styles.describeSpan}>&lt;FullStack /&gt;</span> web developer
              <br />
              Both artistic and engeneering soul <br />
              with a keen eye for details.
            </m.p>
            <Link
              href="/AboutPage"
              className={`readMoreBtn uppercase my-8 
              font-extrabold text-2xl text-gray-400 flex items-center z-30
              pl-3
              `}
            >
              <m.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className={`${isHovered ? "jello" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                read more
              </m.span>{" "}
              <FaArrowRight
                className={`${styles.ArrowRight} ml-4 inline-block `}
              />
            </Link>
            <SkillsList />
          </div>
          <m.div
            className="ml-auto z-[30] absolute top-0 right-0 "
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/Ja4.png"
              alt="Piotr Słobiński"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "100vh", objectFit: "cover"}}
              className={`${styles.profileImage} `}
            />
          </m.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
