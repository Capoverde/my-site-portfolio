"use client"
import "../Styles/globals.css";
import { useState, createContext } from "react";
import { SkillButtonProvider } from './components/SkillButton/SkillButtonContext';
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [selectedData, updateSelectedData] = useState(null);

  return (
         <SkillButtonProvider value={{ selectedData, updateSelectedData}}>
          <Component {...pageProps} />
         </SkillButtonProvider>
  );
};

export default MyApp;