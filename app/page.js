"use client";
import Image from "next/image";
import { Header } from "./components/Header/Header";
import styles from "./Styles/HomePage.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`${styles.HomePage}
                         min-w-screen min-h-screen
                         relative overflow-hidden
                         px-[10%]
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
            <div
              className={`${styles.HomePage__moreBtn}
                               uppercase font-extrabold
                               my-5 mb-20 py-1
                               flex align-center
                `}
            >
              learn more <FaArrowRight className="inline-block ml-3" />
            </div>
            <div className="about-box w-full">
              <div
                className={`${styles.portfolioLink}
                               flex justify-between items-center
                               py-1
                               uppercase w-full 
              `}
              >
                <span className="font-bold italic">#01</span>
                <span className="font-bold">portfolio</span>
              </div>
              <div
                className={`${styles.resumeLink} 
                             flex justify-between align-center 
                             py-1
                             uppercase w-full`}
              >
                <span className="font-bold italic">#02</span>
                <span className="font-bold">resume</span>
              </div>
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
