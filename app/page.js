"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import { motion as m } from "framer-motion";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavLinks } from "./components/NavLinks/NavLinks";
import { HomePagePhoto } from "./components/HomePagePhoto/HomePagePhoto";
import styles from "./Styles/HomePage.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MdSubdirectoryArrowLeft } from "react-icons/md"


const accordion =[
  {
    id: 1,
    title: "MY SKILLS",
    bg: "#9ca3af",
    href:"AboutPage"
  },
  {
    id: 2,
    title: "MY PORTFOLIO",
    bg: "#6b7280",
    href:"PortfolioPage"
  },
  {
    id: 3,
    title: "MY RESUME",
    bg: "#374151",
    href:"/Resume_Piotr_Slobinski.pdf"
  }
]

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

const manageMouseEnter = (e, bg) => {
    gsap.to(e.target, {backgroundColor: color, top: "-15px", duration: 0.3});
  };

  const manageMouseLeave = (e, bg) => {
    gsap.to(e.target, {backgroundColor: "#161616", top: "0", duration: 0.3});
    
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
                            //bg-red-600 
                             opacity-70
                             rounded-full relative
                             w-[600px] h-[1200px]         
                `}
          ></div>
          <div
            className={`${styles.bgShape3}  
                        bg-purple-600
                         opacity-50
                        top-[-90%] left-[-10%]
                        rounded-full realtive
                        w-[600px] h-[600px]
          `}
          ></div>
        </div>
        {/* SECTION
        <section
          className={`${styles.HomePage__section}
                     h-full w-full z-50 flex 
                     border-l border-r border-[#3e3e3e]
        `}
        >
          <div className="flex-col">
          <div className="w-full border-b border-[#3e3e3e] pl-3">
          <m.h1
              className={`${styles.HomePage__title}
                           uppercase md:text-[9rem] 
                           headerMain z-50 text-gray-200
                      `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              słobiński.dev
            </m.h1>   
          </div>
       
          <div
            className={`HomePage__describe
                         w-[50%] h-full flex flex-col 
                         border-b  border-[#3e3e3e]
          `}
          >
            <m.p
              className={`${styles.HomePage__describe}
                            text-[2rem] text-gray-400
                            pl-3 border-r border-[#3e3e3e]
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
            <div className="pl-3  border-t border-r border-[#3e3e3e] w-full">
             <h2 className="title text-gray-400 text-[4rem]">
            <div className="flex h-full w-full justify-between align-center">
             <span className="opacity-[50%]">%</span>
             <span className="opacity-[50%]">
              <MdSubdirectoryArrowLeft className="rotate-[-90deg]" />
             </span>
            </div>  
            </h2>
          </div>  
          <div className="flex-col 
             border-b border-r border-t w-full  border-[#3e3e3e] pl-3">
          <Link
              href="/AboutPage"
              className={`readMoreBtn uppercase py-8
              font-extrabold text-2xl text-gray-400 flex items-center z-30
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
              <BsArrowRight
                className={`${styles.ArrowRight} ml-4 inline-block`}
              />
            </Link>
          </div>          
          </div>  
          </div>
          <div
            className="ml-auto z-[30] 
                      //absolute 
                       top-0 
                       right-0 "
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <HomePagePhoto className="absolute top-0 ml-auto right-[-50%]"/>
          </div>
        </section>
            <div className="">
             <NavLinks 
              // initial={{ y: 20, opacity: 0 }}
              // animate={{ y: 0, opacity: 1 }}
              // transition={{ duration: 0.5, delay: 1 }}
              href="/AboutPage" 
              number="01" 
              title="Skills" 
              className="text-gray-400 z-[50]"
             />
            </div>
            <div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className=" z-[50]"
            >
             <NavLinks href={pdfUrl}
                       number="02" 
                       title="Resume" 
                       className="text-gray-500"
                       />
            </div>
            <div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className=" z-[50]"
            >
             <NavLinks href="/PortfolioPage"
                       number="03"
                       title="Portfolio"
                       className="text-gray-600 border-b border-[#3e3e3e]" />
            </div> */}
       <section className="h-full w-full border-r border-l border-[#3e3e3e]">
        <header className="w-full border-b border-[#3e3e3e] pl-8">
           <m.h1
              className={`${styles.HomePage__title}
                           uppercase md:text-[9rem] 
                           headerMain z-50 text-gray-200
                      `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              słobiński.dev
            </m.h1>
        </header>    
             {/* <div className="contnet w-full h-full flex  border-l border-[#3e3e3e]">
              <div className="describe w-[50%] border-r bg-pink-600 border-[#3e3e3e] flex-col h-full  ">
                <m.p
                 className={`${styles.HomePage__describe}
                             text-[2rem] text-gray-400
                             pl-8 border-b border-[#3e3e3e]
                `}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                 Pationate <span className={styles.describeSpan}>&lt;FullStack /&gt;</span> web developer
                 <br />
                 Both artistic and engeneering soul <br />
                 with a keen eye for details.
                </m.p> */}
                {/* READ MORE
                <div className="flex-col bg-green-200
                               border-b  w-full  border-[#3e3e3e] pl-8">
                 <Link
                  href="/AboutPage"
                  className={`readMoreBtn uppercase py-8
                  font-extrabold text-2xl text-gray-400 flex items-center z-30
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
                  <BsArrowRight
                    className={`${styles.ArrowRight} ml-4 inline-block`}
                  />
                 </Link> */}
                {/* </div> */}
                {/* NAVLINKS */}
                {/* <div className="mt-30">
                  <NavLinks 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                   href="/AboutPage" 
                   number="01" 
                   title="Skills" 
                   className="text-gray-400 z-[50]"
                  />
                </div>
                <div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className=" z-[50]"
                >
                 <NavLinks href={pdfUrl}
                         number="02" 
                         title="Resume" 
                         className="text-gray-500"
                         />
                </div>
                <div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3 }}
                  className=" z-[50]"
                >
                 <NavLinks href="/PortfolioPage"
                         number="03"
                         title="Portfolio"
                         className="text-gray-600 " />
                </div> 
              </div> */}
              {/* PHOTO */}
              {/* <div className="photo w-[50%] flex justify-center items-center overflow-hidden"> */}
               {/* <HomePagePhoto className="w-full h-full"/> */}
            {/* </div> */}
           {/* </div> */}
           {/* <div className="bg-red-400 h-screen flex flex-col justify-center pr-16 items-start max-md:pr-5"> */}
            <div className="border  flex w-[720px] max-w-full h-full
                            flex-col items-stretch ">

              {accordion.map((acc) => (
                <m.div key={acc.id} className="w-full
                            text-3xl font-bold py-1 pl-8 
                            flex justify-between items-center transition-all
                            border-t border-[#3e3e3e] mt-[-15px] 
                            text-gray-100 bg-[#161616]
                "
                whileHover={{
                  backgroundColor: acc.bg,
                  marginTop: "15px",
                }}
                // animate={{
                //backgroundColor: "red",
                //   top: "0",
                // }}
                >
                  <Link href={acc.href} className="w-full h-full flex justify-between">
                   <span>{acc.title}</span>
                   <BsArrowRight className="mr-6" />
                  </Link>
                </m.div>
              ))}
            </div>
           {/* </div>  */}
       </section>
      </main>
      <Footer />
    </div>
  );
}
