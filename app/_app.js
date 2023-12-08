import React from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import "../Styles/globals.css"; // Popraw ścieżkę do pliku globals.css
import { SkillButtonProvider } from '../components/SkillButton/SkillButtonContext';
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <m.div
        key={router.route}
        className="base-page-size"
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: { opacity: 0 },
          animateState: { opacity: 1 },
          exitState: { opacity: 0 }, // Popraw błąd w nazwie exitState
        }}
      >
        <SkillButtonProvider>
         <Component {...pageProps} />
        </SkillButtonProvider>
      </m.div>
    </AnimatePresence>
  );
};

export default MyApp;
