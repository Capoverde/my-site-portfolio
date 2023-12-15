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
import { VscGithub } from "react-icons/vsc";
import { BsGlobe2 } from "react-icons/bs";       
import { BackgroundBlob } from "../components/Blobs/Blobs";
import styles from "./PortfolioPage.module.css";
import classNames from "classnames";


const features = [
  {
    title: "FullStack ToDo Applicaton",
    describe: "The FullStack ToDo Application, developed using React.js and Typescript, offers a seamless blend of a modern UI and powerful functionality. It showcases the effectiveness of React.js and the reliability of Typescript for creating dynamic and scalable web solutions with an intuitive task management experience.",
    id: "to-do-app",
    card: TodoApp,
    visual: TodoVisual,
    projectLink: "https://Capoverde.github.io/react_todo-app-with-api/",
    codeLink: "https://github.com/Capoverde"
  },
  {
    title: "FullStack product catalog store",
    id: "product-catalog",
    describe: "The FullStack Online Store project, centered around iPhones and iPads, demonstrates the fusion of React.js and Typescript to deliver a sophisticated and responsive e-commerce platform. This project showcases the versatility of React and the reliability of Typescript, ensuring a seamless user experience for online shopping with Apple devices.",
    card: WebsiteNext,
    visual: ThirdVisual,
    projectLink: "https://pl-fe-may23-codecrusaders.github.io/product_catalog/",
    codeLink: "https://github.com/Capoverde"
  },
  {
    title: "Website in Next.js",
    id: "lawyers-ebsite",
    describe: "A website for a friendly law firm, built with Next.js",
    card: EventHorizon,
    visual: PortfolioVisual,
    projectLink: "https://anna-kopczynska.vercel.app/",
    codeLink: "https://github.com/Capoverde"
  },
  {
    title: "The Event Horizon",
    id: "website-and-gallery",
    describe: "application with cool features",
    card: TheMet,
    visual: OtherVisual,
    projectLink: "https://Capoverde.github.io/react_todo-app-with-api/",
    codeLink: "https://github.com/Capoverde"
  },
  {
    title: "Nothing",
    id: "nothing-phone",
    describe: "The landing page for 'Nothing Phone' is a minimalist showcase crafted entirely with HTML, CSS, and JavaScript. It features a clean and modern design, reflecting the simplicity and elegance of the product. Through seamless interactivity and smooth animations, users are introduced to the unique features of the 'Nothing Phone in an engaging and user-friendly manner.",
    card: Nothing,
    visual: NothingVisual,
    projectLink: "https://capoverde.github.io/layout_miami/",
    codeLink: "https://github.com/Capoverde"
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
        [".back-to-site-btn", {opacity: 1, y: "0px", translateX:"-50%" }, {at:"<", duration: 0.3}]
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
       <AnimatedHeader
        text="Portfolio"
        className="title font-bold text-[6rem] text-gray-200 " 
       />
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
                             fixed bottom-0 left-1/2 
                             translate-y-[300%] 
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
                className="border-b  border-[#3e3e3e] px-6 flex flex-col 
                           overflow-hidden
                          "
               >
                 <FeaturesTitle id={feature.id}>
                   <AnimatedHeader text ={feature.title} />
                   <AnimatedP 
                     text={feature.describe} 
                     className="py-6 text-gray-300 text-[1rem] font-thin leading-relaxed " 
                   />
                   <div className="flex w-full">
                   <Link href={feature.projectLink || '#'}
                     target="_blank"
                     className="
                      flex
                      text-[1rem]
                      bg-transparent text-gray-700 
                      font-normal hover:text-gray-900 hover:bg-gray-200
                      transition-all
                      border border-[#3e3e3e] 
                      shadow-lg rounded-full 
                      px-8 py-4 z-[100] cursor-pointer
                     "
                   >
                    <BsGlobe2 />
                      <span className="ml-3">Visit the project</span> 
                   </Link>
                   <Link href={feature.codeLink || '#'}
                     target="_blank"
                     className="
                      flex
                      text-[1rem] ml-6
                      bg-transparent text-gray-700 
                      font-normal hover:text-gray-900 hover:bg-gray-200
                      transition-all
                      border border-[#3e3e3e] 
                      shadow-lg rounded-full 
                      px-8 py-4 z-[100] cursor-pointer
                     "
                   >
                    <VscGithub />
                      <span className="ml-3">View the code</span> 
                   </Link>                   
                   </div>
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
