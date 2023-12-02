
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
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import SkillButton from './SkillButton';
import { motion as m, useAnimation } from 'framer-motion';
import styles from './SkillButton.module.css';

const iconColor = '#9ca3af';

const buttonData = [
  { id:1, text: 'React.js', href: '/AboutPage', icon: <GrReactjs color={iconColor} /> },
  { id:2, text: 'JavaScript', href: '/AboutPage', icon: <RiJavascriptLine color={iconColor} />},
  { id:3, text: 'Next.js', href: '/AboutPage', icon: <TbBrandNextjs color={iconColor}/> },
  { id:4, text: 'CSS', href: '/AboutPage', icon: <TbBrandCss3 color={iconColor}/> },
  { id:5, text: 'TailwindCss', href: '/AboutPage', icon: <BiLogoTailwindCss color={iconColor}/> },
  { id:6, text: 'git', href: '/AboutPage', icon: <IoIosGitNetwork color={iconColor} /> },
  { id:7, text: 'Bash', href: '/AboutPage', icon: <VscTerminalBash color={iconColor}/> },
  { id:8, text: 'Sass', href: '/AboutPage', icon: <FaSass color={iconColor} />},
  { id:9, text: 'GitHub', href: '/AboutPage', icon: <VscGithub color={iconColor} /> },
  { id:10, text: 'GitLab', href: '/AboutPage', icon: <LiaGitlab color={iconColor} /> },
  { id:11, text: 'MongoDB', href: '/AboutPage', icon: <TbBrandMongodb color={iconColor}/> },
  { id:12, text: 'SQL', href: '/AboutPage', icon: <GrMysql color={iconColor} /> },
  { id:13, text: 'Figma', href: '/AboutPage', icon: <PiFigmaLogoLight color={iconColor} /> },
  { id:15, text: 'Node.js', href: '/AboutPage', icon: <FaNodeJs color={iconColor} />},
  { id:16, text: 'Redux', href: '/AboutPage', icon: <SiRedux color={iconColor} /> },
  { id:17, text: 'HTML', href: '/AboutPage', icon: <AiOutlineHtml5 color={iconColor} /> },
  { id:18, text: 'Vue.js', href: '/AboutPage', icon: <RiVuejsLine color={iconColor} /> },
  { id:19, text: 'Jest', href: '/AboutPage', icon: <SiJest color={iconColor} />},
  { id:20, text: 'Cypress', href: '/AboutPage', icon: <TbBrandCypress color={iconColor} /> },
  { id:21, text: 'Linux', href: '/AboutPage', icon: <FaLinux color={iconColor}  />},
  { id:22, text: 'REST API', href: '/AboutPage', icon: <TbApi color={iconColor} /> },
  { id:23, text: 'jQuery', href: '/AboutPage', icon: <BiLogoJquery color={iconColor} /> },
  { id:24, text: 'AdobeXD', href: '/AboutPage', icon: <TbBrandAdobe color={iconColor} /> },
  { id:25, text: 'Bootstrap', href: '/AboutPage', icon: <RiBootstrapLine color={iconColor} /> },
  { id:26, text: 'TypeScript', href: '/AboutPage', icon: <TbBrandTypescript color={iconColor} /> },
];

const SkillsList = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="flex flex-wrap w-full mt-2 pb-4 pt-6 pl-3 gap-4 pr-10 z-50 
                    border-t border-r border-[#3e3e3e]
    ">
      {buttonData.map((button, index) => (
        <m.div
          key={button.id}
          custom={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <SkillButton href={button.href}>
            <span className={`${styles.bntIcon} inline-block`}>{button.icon}</span> {' '}
            <span className="btnText">{button.text}</span>
          </SkillButton>
        </m.div>
      ))}
    </div>
  );
};

export default SkillsList;
