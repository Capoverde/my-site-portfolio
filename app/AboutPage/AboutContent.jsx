// AboutContent.jsx
import React, { useContext, useState } from 'react';
import { AnimatedP } from '../components/AnimatedText/AnimatedP';
import { useSkillButtonContext } from '../components/SkillButton/SkillButtonContext';

export const AboutContent = () => {
  const { selectedData } = useSkillButtonContext();

  return (
    <>
      <AnimatedP
        text={
          selectedData
            ? selectedData.describe
            : 'A diligent full stack developer with expertise in HTML, CSS, JavaScript/TypeScript, and React, I create intuitive and secure interfaces by combining my creative and analytical skills with robust security measures. My diverse background in programming, property management, and pilot training allows me to adapt to challenges, work closely with teams, and deliver high-quality web applications.'
        }
        className="text-gray-400 px-6 py-6 h-full"
      />
    </>
  );
};
