// // import React, { useEffect } from "react";
// // import Link from "next/link";
// // import Image from 'next/image';
// // import { motion as m, AnimatePresence } from "framer-motion";
// // import { GoArrowDownRight } from "react-icons/go";
// // import styles from "./Menu.module.css";

// // export const Menu = ({ isOpen, onClose }) => {
// //   useEffect(() => {
// //     const mainElement = Array.from(document.querySelectorAll('nav'));

// //     if (mainElement) {
// //       if (isOpen) {
// //         mainElement.forEach(el => el.classList.add("no-scroll"));
// //       } else {
// //         mainElement.forEach(el => el.classList.remove("no-scroll"));
// //       }
// //     }

// //     return () => {
// //       if (mainElement) {
// //         mainElement.forEach(el => el.classList.remove("no-scroll"));
// //       }
// //     };
// //   }, [isOpen]);

// //   const variants = {
// //     open: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         stiffness: 100,
// //       },
// //     },
// //     closed: {
// //       y: "-100%",
// //       opacity: 0,
// //       transition: {
// //         type: "spring",
// //         stiffness: 100,
// //       },
// //     },
// //   };

// //   const listItemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: (custom) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.5,
// //         delay: custom * 0.5, // 0.5s delay for each link
// //       },
// //     }),
// //   };

// //   const handleLinkClick = () => {
// //     onClose();
// //   };

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <m.nav
// //           className={`${styles.menu} ${isOpen ? styles.open : ""} menu w-full h-screen py-10 mt-16
// //              flex justify-center align-center
// //              bg-gray-200
// //              absolute
// //              top-0 left-0
// //              z-[999]
// //            `}
// //           initial={false}
// //           animate={isOpen ? "open" : "closed"}
// //           variants={variants}
// //         >
// //           <div className={`${styles.blob1} blob absolute bottom-0 left-1/2 w-[50rem] h-[50rem] bg-orange-300 rounded-full`}></div>
// //           <div className={`${styles.blob1} bg-red-700 opacity-50 rounded-full absolute w-[600px] h-[400px] left-1/2`}></div>
// //           <div className={`${styles.blob1} bg-gray-600 opacity-50 rounded-full absolute w-[600px] h-[600px]`}></div>
// //           <div className={`${styles.blob1} bg-gray-300 opacity-50 rounded-full absolute w-[600px] h-[600px] right-5`}></div>
// //           <ul className="nav__list uppercase w-full h-screen z-30 absolute">
// //             {['home', 'about', 'portfolio', 'contact'].map((page, index) => (
// //               <m.li
// //                 key={index}
// //                 className={`${styles.nav__listItem} flex justify-center text-[6rem]`}
// //                 custom={index}
// //                 variants={listItemVariants}
// //                 initial="hidden"
// //                 animate="visible"
// //                 exit="hidden"
// //               >
// //                 <Link
// //                   className={`${styles.nav__listItemLink} flex relative justify-between 
// //                           items-center w-full h-full px-32`}
// //                   href={page === 'home' ? '/' : `/${page}`}
// //                   onClick={handleLinkClick}
// //                 >
// //                   <span className="text-[3rem] font-bold">#{String(index + 1).padStart(2, '0')}</span>
// //                   <span className='inline-block'>{page}</span> <GoArrowDownRight />
// //                   <div className={`${styles.linkImageBox} absolute right-[${page === 'home' ? 20 : 5}%]`}>
// //                     <Image
// //                       className='linkImage brightness-75'
// //                       src={`/${page}LinkImage.png`}
// //                       width={200}
// //                       height={300}
// //                     />
// //                   </div>
// //                 </Link>
// //               </m.li>
// //             ))}
// //           </ul>
// //         </m.nav>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// import React, { useEffect } from "react";
// import Link from "next/link";
// import Image from 'next/image';
// import { motion as m, AnimatePresence } from "framer-motion";
// import { GoArrowDownRight } from "react-icons/go";
// import styles from "./Menu.module.css";

// export const Menu = ({ isOpen, onClose }) => {
//   useEffect(() => {
//     const mainElement = Array.from(document.querySelectorAll('nav'));

//     if (mainElement) {
//       if (isOpen) {
//         mainElement.forEach(el => el.classList.add("no-scroll"));
//       } else {
//         mainElement.forEach(el => el.classList.remove("no-scroll"));
//       }
//     }

//     return () => {
//       if (mainElement) {
//         mainElement.forEach(el => el.classList.remove("no-scroll"));
//       }
//     };
//   }, [isOpen]);

//   const variants = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         stiffness: 100,
//       },
//     },
//     closed: {
//       y: "-100%",
//       opacity: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   const listItemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         delay: custom * 0.5, // 0.5s delay for each link
//       },
//     }),
//   };

//   const handleLinkClick = () => {
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <m.nav
//           className={`${styles.menu} ${isOpen ? styles.open : ""} menu w-full h-screen py-10 mt-16
//              flex justify-center align-center
//              bg-gray-200
//              absolute
//              top-0 left-0
//              z-[999]
//            `}
//           initial={false}
//           animate={isOpen ? "open" : "closed"}
//           variants={variants}
//         >
//           <div className={`${styles.blob1} blob absolute bottom-0 left-1/2 w-[50rem] h-[50rem] bg-orange-300 rounded-full`}></div>
//           <div className={`${styles.blob1} bg-red-700 opacity-50 rounded-full absolute w-[600px] h-[400px] left-1/2`}></div>
//           <div className={`${styles.blob1} bg-gray-600 opacity-50 rounded-full absolute w-[600px] h-[600px]`}></div>
//           <div className={`${styles.blob1} bg-gray-300 opacity-50 rounded-full absolute w-[600px] h-[600px] right-5`}></div>
//           <ul className="nav__list uppercase w-full h-screen z-30 absolute">
//             {['home', 'about', 'portfolio', 'contact'].map((page, index) => (
//               <m.li
//                 key={index}
//                 className={`${styles.nav__listItem} flex justify-center text-[6rem]`}
//                 custom={index}
//                 variants={listItemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//               >
//                 <Link
//                   href={page === 'home' ? '/' : `/${page}`}
//                   passHref
//                     className={`${styles.nav__listItemLink} flex relative justify-between 
//                               items-center w-full h-full px-32`}
//                     onClick={handleLinkClick}
//                   >
//                     <span className="text-[3rem] font-bold">#{String(index + 1).padStart(2, '0')}</span>
//                     <span className='inline-block'>{page}</span> <GoArrowDownRight />
//                     <div className={`${styles.linkImageBox} absolute right-[${page === 'home' ? 20 : 5}%]`}>
//                       <Image
//                         className='linkImage brightness-75'
//                         src={`/${page}LinkImage.png`}
//                         width={200}
//                         height={300}
//                       />
//                     </div>
                  
//                 </Link>
//               </m.li>
//             ))}
//           </ul>
//         </m.nav>
//       )}
//     </AnimatePresence>
//   );
// };

import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { motion as m, AnimatePresence } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import styles from "./Menu.module.css";

export const Menu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const mainElement = Array.from(document.querySelectorAll('nav'));

    if (mainElement) {
      if (isOpen) {
        mainElement.forEach(el => el.classList.add("no-scroll"));
      } else {
        mainElement.forEach(el => el.classList.remove("no-scroll"));
      }
    }

    return () => {
      if (mainElement) {
        mainElement.forEach(el => el.classList.remove("no-scroll"));
      }
    };
  }, [isOpen]);

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
        delay: custom * 0.5, // 0.5s delay for each link
      },
    }),
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.nav
          className={`${styles.menu} ${isOpen ? styles.open : ""} menu w-full h-screen py-10 mt-16
             flex justify-center align-center
             bg-gray-200
             absolute
             top-0 left-0
             z-[999]
           `}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <div className={`${styles.blob1} blob absolute bottom-0 left-1/2 w-[50rem] h-[50rem] bg-orange-300 rounded-full`}></div>
          <div className={`${styles.blob1} bg-red-700 opacity-50 rounded-full absolute w-[600px] h-[400px] left-1/2`}></div>
          <div className={`${styles.blob1} bg-gray-600 opacity-50 rounded-full absolute w-[600px] h-[600px]`}></div>
          <div className={`${styles.blob1} bg-gray-300 opacity-50 rounded-full absolute w-[600px] h-[600px] right-5`}></div>
          <ul className="nav__list uppercase w-full h-screen z-30 absolute">
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
                    onClick={handleLinkClick}
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
          </ul>
        </m.nav>
      )}
    </AnimatePresence>
  );
};
