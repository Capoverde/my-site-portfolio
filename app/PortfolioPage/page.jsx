"use client";
import React, { useState, useEffect } from "react";
import { motion as m, AnimatePresence, useAnimate, stagger} from "framer-motion";
import Link from "next/link";
import {
  TodoApp,
  WebsiteNext,
  EventHorizon,
  TheMet,
  Nothing,
} from "../components/Card";
import { useFeatureStore, setFullScreenFeature } from "../components/store";
import { Header } from "../components/Header/Header";
import { Footer } from '../components/Footer/Footer'
import { FeaturesTitle } from "../components/FeaturesTitle";
import { AnimatedHeader } from "../components/AnimatedText/AnimatedHeader";
import { AnimatedP } from "../components/AnimatedText/AnimatedP";
import { OtherVisual, 
         PortfolioVisual,
         ThirdVisual,
         TodoVisual,
         NothingVisual } from "../components/Visual";
import { BackgroundBlob } from "../components/Blobs/Blobs";
import styles from "./PortfolioPage.module.css";
import classNames from "classnames";


const features = [
  {
    title: "FullStack ToDo Applicaton",
    describe: "application with cool features",
    id: "to-do-app",
    card: TodoApp,
    visual: TodoVisual,
    projectLink: "https://Capoverde.github.io/react_todo-app-with-api/"
  },
  {
    title: "FullStack product catalog store",
    id: "product-catalog",
    describe: "application with cool features",
    card: WebsiteNext,
    visual: ThirdVisual,
    projectLink: "https://www.google.com"
  },
  {
    title: "Website in Next.js",
    id: "lawyers-ebsite",
    describe: "application with cool features",
    card: EventHorizon,
    visual: PortfolioVisual,
    projectLink: "https://Capoverde.github.io/react_todo-app-with-api/"
  },
  {
    title: "The Event Horizon",
    id: "website-and-gallery",
    describe: "application with cool features",
    card: TheMet,
    visual: OtherVisual,
    projectLink: "https://Capoverde.github.io/react_todo-app-with-api/"
  },
  {
    title: "Nothing",
    id: "nothing-phone",
    describe: "application with cool features",
    card: Nothing,
    visual: NothingVisual,
    projectLink: "https://capoverde.github.io/layout_miami/"
  },
];

const portfolioText = `Checkout Portfolio Project by cliking in the button  in the project image on the right.
                       Here You will find my selected projects in a various tech stacks.
                       Click the button "batck t site" to toggle the view.
                      `
const layoutVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PortfolioPage = () => {
  const [scope, animate] = useAnimate();
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const lastFullScreenFeature = useFeatureStore((state) => state.lastFullScreenFeature);
  const setFullScreenFeature = useFeatureStore(state => state.setFullScreenFeature);
  

  useEffect(() => {
    if(fullScreenFeature) {
      animate([
        [".feature-title", {opacity: 0, x: "-200px"}, {duration: 0.3, delay: stagger(0.05)}],
        [`visual-${lastFullScreenFeature}`, {opacity: 1, scale: 1, pointerEvemts: "auto"},
         {at:"<"}],
        [".active-card .gradient", {oapcity: 0, scale: 0}, {at:"<"}],
        [".active-card .show-me-btn", {opacity: 0}, {at:"<"}], 
        [".back-to-site-btn", {opacity: 1, y: "0px"}, {at:"<", duration: 0.3}]
      ])
    } else {
      animate([
        [".feature-title", {opacity: 1, x: "0px"}, {duration: 0.3, delay: stagger(0.05)}],
        [`visual-${fullScreenFeature}`, {opacity: 0, scale: 0.75, pointerEvemts: "none"}, {at:"<"}],
        [".active-card .gradient", {opcity: 1, scale: 1}, {at:"<"}],
        [".back-to-site-btn", {opacity: 0, y: "300px"}, {at:"<", duration: 0.3}],
        [".active-card .show-me-btn", {opacity: 1}]
      ])
    }
  }, [fullScreenFeature])

  return (
    <div className={`${styles.fadeIn} w-screen h-screen puff-in-center relative z-0`}>
      <Header />
      <BackgroundBlob />
      <header className="Portfolio__header pl-6 mx-[10%] border-b border-l border-r border-[#3e3e3e] ">
       <AnimatedHeader text="Portfolio" className="title font-bold text-[6rem] text-gray-200 " />
      </header>
      <main className="min-w-screen min-h-screen  mx-[10%] boder-l border-r border-[#3e3e3e]">
        <div ref={scope}
          className="flex w-full h-full items-start border-l border-[#3e3e3e]">
          <div className="w-full py-[50vh] relative border-r border-[#3e3e3e]">
            {features.map(feature => 
              <feature.visual
                key={feature.id} 
                id={feature.id}
               />
            )} 
              <button 
                  onClick={() => setFullScreenFeature(null)}
              
                  className="back-to-site-btn
                             fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-[300%] 
                           bg-black rounded-full px-8 py-4 mb-4 border-gray-700 text-gray-200
                             shadow-lg opacity-0 z-10"
              >
                
                  Back to portfolio
              </button>
            <div className="h-[200px] w-full absolute top-0 text-gray-300 border-b border-[#3e3e3e] z-[-1]">
             <AnimatedP text={portfolioText} className="py-4 text-gray-300 px-6 " />
            </div>
            <ul>
             {features.map((feature) => (
               <li
                key={feature.id}
                className="border-b  border-[#3e3e3e] px-6 flex flex-col"
               >
                 <FeaturesTitle id={feature.id}>
                   <span className="inline-block">{feature.title}</span>
                   <p className="py-6 text-[1rem] font-normal ">
                     {feature.describe}
                   </p>
                   <Link href={feature.projectLink || '#'}
                     target="_blank"
                     className="
                      text-[1rem]
                      bg-transparent text-gray-700 
                      border border-[#3e3e3e] 
                      shadow-lg rounded-full 
                      px-8 py-4 z-[100] cursor-pointer
                     "
                     >
                       Visit the project
                   </Link>
                 </FeaturesTitle>
               </li>
             ))}
            </ul>
          </div>
          <div className={classNames("w-full sticky top-0 flex h-screen items-center ")}>
            <div 
             className="relative w-full aspect-square [&:has(>_.active-card)]:bg-transparent"
            >
              <AnimatePresence exitBeforeEnter={false} mode="wait">
                <m.div
                  key={features.map((feature) => feature.id).join("-")}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={layoutVariants}
                  transition={{ duration: 0.75 }}
                >
                  {features.map((feature) => (
                    <feature.card id={feature.id} key={feature.id} />
                  ))}
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
      <Footer />              
    </div>
  );
};

export default PortfolioPage;

// "use client"
// import { useEffect } from "react";
// import { motion as m, AnimatePresence, useAnimate, stagger } from "framer-motion";
// import { Link } from "next/link";
// import {
//   TodoApp,
//   WebsiteNext,
//   EventHorizon,
//   TheMet,
//   Nothing,
// } from "../components/Card";
// import { useFeatureStore, setFullScreenFeature } from "../components/store";
// import { Header } from "../components/Header/Header";
// import { Footer } from '../components/Footer/Footer'
// import { FeaturesTitle } from "../components/FeaturesTitle";
// import { AnimatedHeader } from "../components/AnimatedText/AnimatedHeader";
// import { AnimatedP } from "../components/AnimatedText/AnimatedP";
// import { OtherVisual, 
//          PortfolioVisual,
//          ThirdVisual,
//          TodoVisual,
//          NothingVisual } from "../components/Visual";
// import { BackgroundBlob } from "../components/Blobs/Blobs";
// import styles from "./PortfolioPage.module.css";
// import classNames from "classnames";

// const features = [
//   {
//     title: "FullStack ToDo Applicaton",
//     describe: "application with cool features",
//     id: "to-do-app",
//     card: TodoApp,
//     visual: TodoVisual,
//     projectLink: "https://Capoverde.github.io/react_todo-app-with-api/"
//   },
//   {
//     title: "FullStack product catalog store",
//     id: "product-catalog",
//     describe: "application with cool features",
//     card: WebsiteNext,
//     visual: ThirdVisual,
//     projectLink: "https://www.google.com"
//   },
//   {
//     title: "Website in Next.js",
//     id: "lawyers-website",
//     describe: "application with cool features",
//     card: EventHorizon,
//     visual: PortfolioVisual,
//     projectLink: "https://Capoverde.github.io/react_todo-app-with-api/"
//   },
//   {
//     title: "The Event Horizon",
//     id: "website-and-gallery",
//     describe: "application with cool features",
//     card: TheMet,
//     visual: OtherVisual,
//     projectLink: "https://Capoverde.github.io/react_todo-app-with-api/"
//   },
//   {
//     title: "Nothing",
//     id: "nothing-phone",
//     describe: "application with cool features",
//     card: Nothing,
//     visual: NothingVisual,
//     projectLink: "https://www.google.com"
//   },
// ];

// const portfolioText = `Checkout Portfolio Project by clicking on the button in the project image on the right.
//                        Here you will find my selected projects in various tech stacks.
//                        Click the button "back to site" to toggle the view.
//                       `;

// const layoutVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const PortfolioPage = () => {
//   const [scope, animate] = useAnimate();
//   const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
//   const setFullScreenFeature = useFeatureStore(state => state.setFullScreenFeature);

//   useEffect(() => {
//     if (fullScreenFeature) {
//       const selectedFeature = features.find((feature) => feature.id === fullScreenFeature);
//       const projectLink = selectedFeature?.projectLink || "";
//       setFullScreenFeature(null);
//     }
//   }, [fullScreenFeature]);

//   return (
//     <div className={`${styles.fadeIn} w-screen h-screen puff-in-center relative z-0`}>
//       <Header />
//       <BackgroundBlob />
//       <header className="Portfolio__header pl-6 mx-[10%] border-b border-l border-r border-[#3e3e3e] ">
//         <AnimatedHeader text="Portfolio" className="title font-bold text-[6rem] text-gray-200 " />
//       </header>
//       <main className="min-w-screen min-h-screen  mx-[10%] border-l border-r border-[#3e3e3e]">
//         <div ref={scope} className="flex w-full h-full items-start border-l border-[#3e3e3e]">
//           <div className="w-full py-[50vh] relative border-r border-[#3e3e3e]">
//             {features.map(feature => 
//                <feature.visual
//                 key={feature.id} 
//                 id={feature.id}
//                 projectLink={feature.projectLink} 
//                />
//             )}
//             <button 
//                 onClick={() => setFullScreenFeature(null)}
//                 className="back-to-site-btn
//                             fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-[300%] 
//                           bg-black rounded-full px-8 py-4 mb-4 border-gray-700 text-gray-200
//                             shadow-lg opacity-0 z-10"
//             >
//                 Back to portfolio
//             </button>
//             <div className="h-[200px] w-full absolute top-0 text-gray-300 border-b border-[#3e3e3e] z-[-1]">
//               <AnimatedP text={portfolioText} className="py-4 text-gray-300 px-6 " />
//             </div>
//             <ul>
//               {features.map((feature) => (
//                 <li className="border-b  border-[#3e3e3e] px-6" key={feature.id}>
//                   <FeaturesTitle id={feature.id}>
//                     <span className="inline-block">{feature.title}</span>
//                     <p className="py-6 text-[1rem] font-normal ">
//                       {feature.describe}
//                     </p>
//                     <Link
//                       href={feature.projectLink || '#'}
//                       target="_blank"
//                       className="absolute top-[10%] right-[10%] bg-transparent text-gray-700 border border-[#3e3e3e] shadow-lg
//                       rounded-full px-8 py-4 z-[100] cursor-pointer"
//                     >
//                       Visit the project
//                     </Link>
//                   </FeaturesTitle>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className={classNames("w-full sticky top-0 flex h-screen items-center ")}>
//             <div 
//              className="relative w-full aspect-square [&:has(>_.active-card)]:bg-transparent"
//             >
//               <AnimatePresence exitBeforeEnter={false} mode="wait">
//                 <m.div
//                   key={features.map((feature) => feature.id).join("-")}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   variants={layoutVariants}
//                   transition={{ duration: 0.75 }}
//                 >
//                   {features.map((feature) => (
//                     <feature.card id={feature.id} key={feature.id} />
//                   ))}
//                 </m.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />              
//     </div>
//   );
// };

// export default PortfolioPage;
