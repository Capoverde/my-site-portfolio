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
import { motion as m } from 'framer-motion';
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';
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
              transition={{ duration: 1, delay: 0.5 }}
            >
              słobiński<span className="text-white">.dev</span>
            </m.h1>
            <m.p
              className={`${styles.HomePage__describe}
                            text-[2rem]
            `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Pationate Fullstack web developer
              <br />
              Both artistic and engeneering solutions
              <br />
              with a keen eye for details.
            </m.p>
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
            <m.div
              className="ml-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Image
                src="/Ja3.png"
                alt="Piotr Słobiński"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "80%", height: "100vh", objectFit: "contain" }}
              />
            </m.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
