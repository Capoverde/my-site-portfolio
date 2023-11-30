// import React from 'react';
// import SkillButton from './SkillButton';
// import { motion as m } from 'framer-motion';
// import { GrReactjs } from "react-icons/gr";
// import { RiJavascriptLine } from "react-icons/ri"
// import { TbBrandNextjs } from "react-icons/tb"
// import { TbBrandCss3 } from "react-icons/tb";
// import { BiLogoTailwindCss } from "react-icons/bi"
// import { IoIosGitNetwork } from "react-icons/io"
// import { VscTerminalBash } from "react-icons/vsc";
// import { FaSass } from "react-icons/fa6";
// import { VscGithub } from "react-icons/vsc";
// import { LiaGitlab } from "react-icons/lia";
// import { TbBrandMongodb } from "react-icons/tb";
// import { GrMysql } from "react-icons/gr";
// import { PiFigmaLogoLight } from "react-icons/pi";
// import { FaNodeJs } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { AiOutlineHtml5 } from "react-icons/ai";
// import { RiVuejsLine } from "react-icons/ri";
// import { SiJest } from "react-icons/si";
// import { TbBrandCypress } from "react-icons/tb";
// import { FaLinux } from "react-icons/fa6";
// import { TbApi } from "react-icons/tb";
// import { BiLogoJquery } from "react-icons/bi";
// import { TbBrandAdobe } from "react-icons/tb";
// import styles from './SkillButton.module.css';

// const buttonData = [
//   { id:1, text: 'React.js', href: '/AboutPage', icon: <GrReactjs color="#161616" /> },
//   { id:2, text: 'JavaScript', href: '/AboutPage', icon: <RiJavascriptLine color="#161616" />},
//   { id:3, text: 'Next.js', href: '/AboutPage', icon: <TbBrandNextjs color="#161616"/> },
//   { id:4, text: 'CSS', href: '/AboutPage', icon: <TbBrandCss3 color="#161616"/> },
//   { id:5, text: 'TailwindCss', href: '/AboutPage', icon: <BiLogoTailwindCss color="#161616"/> },
//   { id:6, text: 'git', href: '/AboutPage', icon: <IoIosGitNetwork color="#161616" /> },
//   { id:7, text: 'Bash', href: '/AboutPage', icon: <VscTerminalBash color="#161616"/> },
//   { id:8, text: 'Sass', href: '/AboutPage', icon: <FaSass color="#161616" />},
//   { id:9, text: 'GitHub', href: '/AboutPage', icon: <VscGithub color="#161616" /> },
//   { id:10, text: 'GitLab', href: '/AboutPage', icon: <LiaGitlab color="#161616" /> },
//   { id:11, text: 'MongoDB', href: '/AboutPage', icon: <TbBrandMongodb color="#161616"/> },
//   { id:12, text: 'SQL', href: '/AboutPage', icon: <GrMysql color="#161616" /> },
//   { id:13, text: 'Figma', href: '/AboutPage', icon: <PiFigmaLogoLight color="#161616" /> },
//   { id:15, text: 'Node.js', href: '/AboutPage', icon: <FaNodeJs color="#161616" />},
//   { id:16, text: 'Redux', href: '/AboutPage', icon: <SiRedux color="#161616" /> },
//   { id:17, text: 'HTML', href: '/AboutPage', icon: <AiOutlineHtml5 color="#161616" /> },
//   { id:18, text: 'Vue.js', href: '/AboutPage', icon: <RiVuejsLine color="#161616" /> },
//   { id:19, text: 'Jest', href: '/AboutPage', icon: <SiJest color="#161616" />},
//   { id:20, text: 'Cypress', href: '/AboutPage', icon: <TbBrandCypress color="#161616" /> },
//   { id:21, text: 'Linux', href: '/AboutPage', icon: <FaLinux color="#161616"  />},
//   { id:22, text: 'REST API', href: '/AboutPage', icon: <TbApi color="#161616" /> },
//   { id:23, text: 'jQuery', href: '/AboutPage', icon: <BiLogoJquery color="#161616" /> },
//   { id:24, text: 'AdobeXD', href: '/AboutPage', icon: <TbBrandAdobe color="#161616" /> },
// ];

// const SkillsList = () => (
//   <div className="flex flex-wrap w-full mt-2 pb-4 gap-4 pr-10 z-30">
//     {buttonData.map((button, index) => (
//       <SkillButton key={button.id} href={button.href}>
//         <span className={`${styles.bntIcon} inline-block`}>{button.icon}</span> {' '}
//         <span className="btnText">{button.text}</span>
//       </SkillButton>
//     ))}
//   </div>
// );

// export default SkillsList;




import React, { useEffect } from 'react';
import { GrReactjs } from "react-icons/gr";
import { RiJavascriptLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi"
import { IoIosGitNetwork } from "react-icons/io"
import { VscTerminalBash } from "react-icons/vsc";
import { FaSass } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { LiaGitlab } from "react-icons/lia";
import { TbBrandMongodb } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { PiFigmaLogoLight } from "react-icons/pi";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiVuejsLine } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { FaLinux } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import { TbBrandAdobe } from "react-icons/tb";
import SkillButton from './SkillButton';
import { motion as m, useAnimation } from 'framer-motion';
import styles from './SkillButton.module.css';

const buttonData = [
  { id:1, text: 'React.js', href: '/AboutPage', icon: <GrReactjs color="#161616" /> },
  { id:2, text: 'JavaScript', href: '/AboutPage', icon: <RiJavascriptLine color="#161616" />},
  { id:3, text: 'Next.js', href: '/AboutPage', icon: <TbBrandNextjs color="#161616"/> },
  { id:4, text: 'CSS', href: '/AboutPage', icon: <TbBrandCss3 color="#161616"/> },
  { id:5, text: 'TailwindCss', href: '/AboutPage', icon: <BiLogoTailwindCss color="#161616"/> },
  { id:6, text: 'git', href: '/AboutPage', icon: <IoIosGitNetwork color="#161616" /> },
  { id:7, text: 'Bash', href: '/AboutPage', icon: <VscTerminalBash color="#161616"/> },
  { id:8, text: 'Sass', href: '/AboutPage', icon: <FaSass color="#161616" />},
  { id:9, text: 'GitHub', href: '/AboutPage', icon: <VscGithub color="#161616" /> },
  { id:10, text: 'GitLab', href: '/AboutPage', icon: <LiaGitlab color="#161616" /> },
  { id:11, text: 'MongoDB', href: '/AboutPage', icon: <TbBrandMongodb color="#161616"/> },
  { id:12, text: 'SQL', href: '/AboutPage', icon: <GrMysql color="#161616" /> },
  { id:13, text: 'Figma', href: '/AboutPage', icon: <PiFigmaLogoLight color="#161616" /> },
  { id:15, text: 'Node.js', href: '/AboutPage', icon: <FaNodeJs color="#161616" />},
  { id:16, text: 'Redux', href: '/AboutPage', icon: <SiRedux color="#161616" /> },
  { id:17, text: 'HTML', href: '/AboutPage', icon: <AiOutlineHtml5 color="#161616" /> },
  { id:18, text: 'Vue.js', href: '/AboutPage', icon: <RiVuejsLine color="#161616" /> },
  { id:19, text: 'Jest', href: '/AboutPage', icon: <SiJest color="#161616" />},
  { id:20, text: 'Cypress', href: '/AboutPage', icon: <TbBrandCypress color="#161616" /> },
  { id:21, text: 'Linux', href: '/AboutPage', icon: <FaLinux color="#161616"  />},
  { id:22, text: 'REST API', href: '/AboutPage', icon: <TbApi color="#161616" /> },
  { id:23, text: 'jQuery', href: '/AboutPage', icon: <BiLogoJquery color="#161616" /> },
  { id:24, text: 'AdobeXD', href: '/AboutPage', icon: <TbBrandAdobe color="#161616" /> },
];

const SkillsList = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }));
  }, [controls]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-wrap w-full mt-2 pb-4 gap-4 pr-10 z-30"
    >
      {buttonData.map((button, index) => (
        <m.div key={button.id} custom={index} animate={controls}>
          <SkillButton href={button.href}>
            <span className={`${styles.bntIcon} inline-block`}>{button.icon}</span> {' '}
            <span className="btnText">{button.text}</span>
          </SkillButton>
        </m.div>
      ))}
    </m.div>
  );
};

export default SkillsList;
