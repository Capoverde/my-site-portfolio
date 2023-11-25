"use client";
import { useState } from "react";
import Image from "next/image";
import { Header } from "./components/Header/Header";
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
    <>
      <Header />
      <main
        className={`${styles.HomePage}
                         min-w-screen min-h-screen
                         relative overflow-hidden
                         pl-[10%] bg-gray-200
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
                     flex
                     h-full w-full z-10
                    
        "
        >
          <div
            className="HomePage__describe
                       w-[50%] h-full flex flex-col
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
              className={`readMoreBtn uppercase my-8 
              font-extrabold text-2xl flex items-center z-30 ${
                isHovered ? "jello" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>read more</span>{" "}
              <FaArrowRight
                className={`${styles.ArrowRight} ml-4 inline-block `}
              />
            </Link>
          </div>
          {/* IMAGE CONTAINER */}
          <div
            className="HomePage__image
                       w-full h-screen
                       relative bg-black-100
                       
          "
          >
            <Image
              className="ml-auto"
              src="/Ja3.png"
              alt="Piotr Słobiński"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "90%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
