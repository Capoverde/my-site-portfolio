"use client";
import { useState } from 'react'
import Image from "next/image";
import { Header } from "./components/Header/Header";
import styles from "./Styles/HomePage.module.css";
import Link  from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [isHovered, setIsHovered ] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Header />
      <main
        className={`${styles.HomePage}
                         min-w-screen min-h-screen
                         relative overflow-hidden
                         px-[10%] bg-gray-200
      `}
      >
        <div
          className="absolute inset-0 
                     inline-flex flex-row justify-center 
                     top-1/2
                     "
        >
          <div
            className={`${styles.bgShape1} 
                           bg-purple-700 opacity-50
                           rounded-full
                           relative
                           w-[900px] h-[400px]
            `}
          ></div>
          <div
            className={`${styles.bgShape2} 
                             bg-blue-600 opacity-50
                             rounded-full relative
                             w-[600px] h-[600px]         
                `}
          ></div>
          <div
            className={`${styles.bgShape3}  
                        bg-pink-100 opacity-50
                        rounded-full relative
                        w-[600px] h-[600px]
          `}
          ></div>
        </div>
        <section
          className="
                     flex justify-between
                     h-full w-full z-10
                    
        "
        >
          <div
            className="HomePage__describe
                       w-[50%] h-100 flex flex-col
          "
          >
            <h1
              className={`${styles.HomePage__title}
                           uppercase md:text-[10rem]
            `}
            >
              słobiński
            </h1>
            <p
              className={`${styles.HomePage__describe}
                            text-[2rem]
            `}
            >
              Pationate Fullstack web developer
              <br />
              Both artistic and engeneering solu
              <br />
              with a keen eye for details.
            </p>
            <Link
              href="/AboutPage"
              className={`readMoreBtn uppercase my-8 font-extrabold text-2xl flex items-center ${isHovered ? 'jello' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>read more</span>{' '} <FaArrowRight 
                className={`${styles.ArrowRight} ml-4 inline-block `}
              />
            </Link>
            <div className="about-box w-full mt-10">
              <Link
                href='#'
                className={`${styles.portfolioLink}
                               flex justify-between items-center
                               py-1 cursor-pointer
                               uppercase w-full 
              `}
              >
                <span className="font-bold italic">#01</span>
                <span className="font-bold">portfolio</span>
              </Link>
              <Link
                href='#'
                className={`${styles.resumeLink} 
                             flex justify-between align-center 
                             py-1
                             uppercase w-full cursor-pointer`}
              >
                <span className="font-bold italic">#02</span>
                <span className="font-bold">resume</span>
              </Link>
            </div>
          </div>
          <div
            className="HomePage__image
                       w-[50%] h-100
                       relative
          "
          >
            <Image
              className="ml-auto rounded-full"
              src="/profilImgTransp.webp"
              alt="Piotr Słobiński"
              width={500}
              height={300}
            />
            <h2
              className={`${styles.header2} absolute uppercase
                         font-extrabold
                         right-[11%] bottom-[-22%]
                         text-[17rem]
            `}
            >
              dev
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
