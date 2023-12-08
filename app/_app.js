import React from "react";
import "../Styles/globals.css"; // Popraw ścieżkę do pliku globals.css
import { SkillButtonProvider } from './components/SkillButton/SkillButtonContext';
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
        <SkillButtonProvider>
         <Component {...pageProps} />
        </SkillButtonProvider>
  );
};

export default MyApp;
