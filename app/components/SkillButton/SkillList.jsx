import React from 'react';
import SkillButton from './SkillButton';

const buttonData = [
  { id:1, text: 'React.js', href: '/AboutPage' },
  { id:2, text: 'JavaScript', href: '/AboutPage' },
  { id:3, text: 'Next.js', href: '/AboutPage' },
  { id:4, text: 'CSS', href: '/AboutPage' },
  { id:5, text: 'TailwindCss', href: '/AboutPage' },
  { id:6, text: 'git', href: '/AboutPage' },
  { id:7, text: 'Bash', href: '/AboutPage' },
  { id:8, text: 'Sass', href: '/AboutPage' },
  { id:9, text: 'GitHub', href: '/AboutPage' },
  { id:10, text: 'GitLab', href: '/AboutPage' },
  { id:11, text: 'MongoDB', href: '/AboutPage' },
  { id:12, text: 'SQL', href: '/AboutPage' },
  { id:13, text: 'Figma', href: '/AboutPage' },
  { id:14, text: 'Less', href: '/AboutPage' },
  { id:15, text: 'Node.js', href: '/AboutPage' },
  { id:16, text: 'Redux', href: '/AboutPage' },
  { id:17, text: 'HTML', href: '/AboutPage' },
  { id:18, text: 'Vue.js', href: '/AboutPage' },
  { id:19, text: 'Jest', href: '/AboutPage' },
  { id:20, text: 'Cypress', href: '/AboutPage' },
  { id:21, text: 'Linux', href: '/AboutPage' },
  { id:22, text: 'REST API', href: '/AboutPage' },
  { id:23, text: 'jQuery', href: '/AboutPage' },
];

const SkillsList = () => (
  <div className="flex flex-wrap w-full mt-2 pb-4 gap-4 pr-10 z-30">
    {buttonData.map((button, index) => (
      <SkillButton key={button.id} href={button.href}>
        {button.text}
      </SkillButton>
    ))}
  </div>
);

export default SkillsList;
