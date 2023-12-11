"use client"
import "../Styles/globals.css"; // Popraw ścieżkę do pliku globals.css
import { useState, createContext } from "react";
import { SkillButtonProvier } from './components/SkillButton/';
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();


  return (
         <SkillButton.Provider value={{ nameContext, setNameContext}}>
          <Component {...pageProps} />
         </SkillButton.Provider>
  );
};

export default MyApp;
