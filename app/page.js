// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion as m } from 'framer-motion';
// import { Header } from "./components/Header/Header";
// import { Footer } from './components/Footer/Footer';
// import styles from "./Styles/HomePage.module.css";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// export default function Home() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <Header />
//       <main
//         id="mainContainer"
//         className={`${styles.HomePage} ${styles.FadeIn}
//                      min-w-screen min-h-screen
//                      relative overflow-hidden
//                      pl-[10%] bg-gray-200
//       `}
//       >
//         <div
//           className="absolute inset-0
//                      inline-flex flex-row justify-center
//                      top-1/2
//                      "
//         >
//           <div
//             className={`${styles.bgShape1}
//                            bg-gray-700 opacity-50
//                            rounded-full
//                            relative
//                            w-[900px] h-[400px]
//             `}
//           ></div>
//           <div
//             className={`${styles.bgShape2}
//                              bg-red-600 opacity-50
//                              rounded-full relative
//                              w-[600px] h-[600px]
//                 `}
//           ></div>
//           <div
//             className={`${styles.bgShape3}
//                         bg-white-500 opacity-50
//                         rounded-full relative
//                         w-[600px] h-[600px]
//           `}
//           ></div>
//         </div>
//         <section
//           className="
//                      flex
//                      h-full w-full z-10

//         "
//         >
//           <div
//             className={`HomePage__describe
//                          w-[40%] h-full flex flex-col
//           `}
//           >
//             <h1
//               className={`${styles.HomePage__title}
//                            uppercase md:text-[9rem]
//                            headerMain z-10
//                       `}
//             >
//               słobiński<span className="text-white">.dev</span>
//             </h1>
//             <p
//               className={`${styles.HomePage__describe}
//                             text-[2rem]
//             `}
//             >
//               Pationate Fullstack web developer
//               <br />
//               Both artistic and engeneering solu
//               <br />
//               with a keen eye for details.
//             </p>
//             <Link
//               href="/AboutPage"
//               className={`readMoreBtn uppercase my-8
//               font-extrabold text-2xl flex items-center z-30 ${
//                 isHovered ? "jello" : ""
//               }`}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>read more</span>{" "}
//               <FaArrowRight
//                 className={`${styles.ArrowRight} ml-4 inline-block `}
//               />
//             </Link>
//           </div>
//             <Image
//               className="ml-auto"
//               src="/Ja3.png"
//               alt="Piotr Słobiński"
//               width={0}
//               height={0}
//               sizes="100%"
//               style={{ width: "80%", height: "100vh", objectFit: "contain" }}
//             />
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
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
                           bg-gray-700 opacity-50
                           rounded-full
                           relative
                           w-[900px] h-[400px]
            `}
          ></div>
          <div
            className={`${styles.bgShape2} 
                             bg-red-600 opacity-50
                             rounded-full relative
                             w-[600px] h-[600px]         
                `}
          ></div>
          <div
            className={`${styles.bgShape3}  
                        bg-white-500 opacity-50
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
            className={`HomePage__describe
                         w-[40%] h-full flex flex-col
          `}
          >
            <m.h1
              className={`${styles.HomePage__title}
                           uppercase md:text-[9rem] 
                           headerMain z-10
                      `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              słobiński<span className="text-white">.dev</span>
            </m.h1>
            <m.p
              className={`${styles.HomePage__describe}
                            text-[2rem]
            `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Pationate Fullstack web developer
              <br />
              Both artistic and engeneering soul {/* <br /> */}
              with a keen eye for details.
            </m.p>
            <Link
              href="/AboutPage"
              className={`readMoreBtn uppercase my-8 
              font-extrabold text-2xl flex items-center z-30`}
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
            <div className="flex flex-wrap w-full mt-2 pb-4 gap-4 pr-10 z-30">
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  React.js
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  JavaScript
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Next.js
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  CSS
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  TailwindCss
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  git
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Bash
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Sass
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  GtiHub
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  GitLab
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  MongoDB
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  SQL
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Figma
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Less
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Node.js
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Redux
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  HTML
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Vue.js
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Jest
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Cypress
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  Linux
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  REST API
                </button>
              </Link>
              <Link href="/AboutPage" className="">
                <button className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center">
                  jQuery
                </button>
              </Link>
            </div>
          </div>
          <m.div
            className="ml-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/Ja3.png"
              alt="Piotr Słobiński"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "100vh", objectFit: "contain" }}
            />
          </m.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
