"use client";
import React, { useRef, useEffect } from "react";
import { motion as m, AnimatePresence, useAnimate, stagger} from "framer-motion";
import {
  CardProductCatalog,
  WbsitteNext,
  EventHorizon,
  TheMet,
  Interdom,
} from "../components/Card";
import { useFeatureStore, setFullScreenFeature } from "../components/store";
import { Header } from "../components/Header/Header";
import { Footer } from '../components/Footer/Footer'
import { FeaturesTitle } from "../components/FeaturesTitle";
import { AnimatedHeader } from "../components/AnimatedText/AnimatedHeader";
import { AnimatedP } from "../components/AnimatedText/AnimatedP";
import { OtherVisual, PortfolioVisual } from "../components/Visual";
import styles from "./PortfolioPage.module.css";


const features = [
  {
    title: "FullStack ToDo Applicaton",
    describe: "application with cool features",
    id: "to-do-app",
    card: CardProductCatalog,
    visual: OtherVisual
  },
  {
    title: "FullStack product catalog store",
    id: "product-catalog",
    describe: "application with cool features",
    card: WbsitteNext,
    visual: OtherVisual

  },
  {
    title: "Website in Next.js",
    id: "lawyers-ebsite",
    describe: "application with cool features",
    card: EventHorizon,
    visual: PortfolioVisual
  },
  {
    title: "The Event Horizon",
    id: "website and gallery",
    describe: "application with cool features",
    card: TheMet,
    visual: OtherVisual
  },
  {
    title: "The Met",
    id: "museum-website",
    describe: "application with cool features",
    card: Interdom,
    visual: OtherVisual

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

  const [scope, animate] = useAnimate();
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const setFullScreenFeature = useFeatureStore(state => state.setFullScreenFeature);

  useEffect(() => {
    if(fullScreenFeature) {
      animate(".feature-title", {opacity: 0, x: "-200px"}, {duration: 0.3, delay: stagger(0.05)})
    } else {
      animate(".feature-title", {opacity: 1, x: "0px"}, {duration: 0.3, delay: stagger(0.05)})
    }
  }, [fullScreenFeature])

  return (
    <div className={`${styles.fadeIn} w-screen h-screen puff-in-center relative`}>
      <Header />
      <header className="Portfolio__header pl-6 mx-[10%] border-b border-l border-r border-[#3e3e3e] ">
       <AnimatedHeader text="Portfolio" className="title font-bold text-[6rem] text-gray-200" />
      </header>
      <main className="min-w-screen min-h-screen  mx-[10%] boder-l border-r border-[#3e3e3e]">
        <div ref={scope}
          className="flex w-full h-full items-start border-l border-[#3e3e3e]">
          <div className="w-full py-[50vh] relative">
            {features.map(feature => 
               <feature.visual id={feature.id} key={feature.id}/>
              )}
              <button 
                  onClick={() => setFullScreenFeature(null)}
                  className="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 bg-black rounded-full px-8 py-4 border-gray-700 text-gray-200">
                  Back to portfolio
              </button>
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
