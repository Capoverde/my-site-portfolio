"use client";
import React from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import {
  CardProductCatalog,
  WbsitteNext,
  EventHorizon,
  TheMet,
  Interdom,
} from "../components/Card";
import { Header } from "../components/Header/Header";
import { Footer } from '../components/Footer/Footer'
import { FeaturesTitle } from "../components/FeaturesTitle";
import { AnimatedHeader } from "../components/AnimatedText/AnimatedHeader";
import { AnimatedP } from "../components/AnimatedText/AnimatedP";
import styles from "./PortfolioPage.module.css";


const features = [
  {
    title: "FullStack ToDo Applicaton",
    describe: "application with cool features",
    id: "to-do-app",
    card: CardProductCatalog,
  },
  {
    title: "FullStack product catalog store",
    id: "product-catalog",
    describe: "application with cool features",
    card: WbsitteNext,
  },
  {
    title: "Website in Next.js",
    id: "lawyers-ebsite",
    describe: "application with cool features",
    card: EventHorizon,
  },
  {
    title: "The Event Horizon",
    id: "website and gallery",
    describe: "application with cool features",
    card: TheMet,
  },
  {
    title: "The Met",
    id: "museum-website",
    describe: "application with cool features",
    card: Interdom,
  },
];

const portfolioText = `Checkout Portfolio Project by cliking in the button in the project image on the right.
                      Here You will find my selected projects in a various tech stacks. 
 `

const layoutVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PortfolioPage = () => {
  return (
    <div className={`${styles.fadeIn} w-screen h-screen puff-in-center relative`}>
      {/* <div className={`${styles.bgShape2} absolute top-[-50%] left-[-15%] w-[300px] h-[300px] bg-purple-600`}></div> */}
      <Header />
      <header className="Portfolio__header pl-6 mx-[10%] border-b border-l border-r border-[#3e3e3e] ">
       <AnimatedHeader text="Portfolio" className="title font-bold text-[6rem] text-gray-200" />
      </header>
      <main className="min-w-screen min-h-screen mx-[10%] boder-l border-r border-[#3e3e3e]">
        <div className="flex w-full h-full items-start border-l border-[#3e3e3e]">
          <div className="w-full py-[50vh] relative">
            <div className="h-[200px] w-full absolute top-0 text-gray-300 border-b border-[#3e3e3e]">
             <AnimatedP text={portfolioText} className="py-4 text-gray-300 px-6" />
            </div>
            <ul>
              {features.map((feature) => (
                <li className="border-b border-[#3e3e3e] px-6" key={feature.id}>
                  <FeaturesTitle id={feature.id}>
                    <span className="inline-block">{feature.title}</span>
                    <p className="py-6 text-[1rem] font-normal ">
                      {feature.describe}
                    </p>
                  </FeaturesTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sticky top-0 flex h-screen items-center border-l border-[#3e3e3e]">
            <div className="relative w-full aspect-square bg-gray-400">
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
