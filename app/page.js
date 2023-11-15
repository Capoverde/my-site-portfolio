"use client";
import Image from "next/image";
import { Header } from "./components/Header/Header";
import styles from "./Styles/HomePage.module.css";
// import { Link } from "react-router-dom";

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
                     bg-pink-200
        "
        >
          <div
            className="HomePage__describe
                       w-[50%] h-100
          "
          >
            <h1
              className={`${styles.HomePage__title}
                           uppercase md:text-[9rem]
            `}
            >
              słobiński
            </h1>
            <p
              className={`${styles.HomePage__describe}
                            text-[1.1rem] 
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
                               my-5
                `}
              href="/"
            >
              learn more
            </div>
          </div>
          <div
            className="HomePage__image
                       w-[50%] h-100
                       relative
          "
          >
            <Image
              className="ml-auto"
              src="/profilImgTransp.webp"
              alt="Piotr Słobiński"
              width={400}
              height={400}
            />
            <h2
              className="absolute uppercase
                         font-extrabold
                         right-[10%] text-[10rem]
            "
            >
              dev
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
