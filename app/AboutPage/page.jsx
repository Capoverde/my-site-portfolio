"use client"
import React, { useState, useRef } from 'react'
import { motion as m} from 'framer-motion';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { AnimatedHeader } from '../components/AnimatedText/AnimatedHeader';
import { AnimatedP } from '../components/AnimatedText/AnimatedP';
import SkillList  from '../components/SkillButton/SkillList'
import Image from 'next/image'
import Link from 'next/link'
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import styles from './About.module.css'

export default function About () {
  return (
    <>
    <Header />
    <main className={`${styles.FadeIn} bg-transparent min-h-screen min-w-screen mx-[10%]
                                       border-r border-l border-[#3e3e3e] relative pb-8
    `}>
     <AnimatedHeader text="About Me" className="title w-full px-8 border-b border-[#3e3e3e] font-bold text-gray-300 text-[6rem]"/>
     <div className="wrapper w-full h-1/2 flex justify-between relative">
      <div className="flex-col pb-14 overflow-hidden w-1/2">
        <AnimatedP text="A diligent full stack developer with expertise in HTML, CSS, JavaScript/TypeScript, and React, I create intuitive and secure interfaces by combining my creative and analytical skills with robust security measures. My diverse background in programming, property management, and pilot training allows me to adapt to challenges, work closely with teams, and deliver high-quality web applications."
        className="text-gray-400 px-6 py-6 h-full"
        /> 
         <div className="items-baseline flex justify-between absolute bottom-0 left-0 w-1/2">
         <div className="px-6 pt-3 flex w-1/2 gap-[1rem]">
           <Link 
                 href='https://www.linkedin.com/in/piotr-s%C5%82obi%C5%84ski-1b432428b/'
                 target='_blank'
                 title='LinkeIn'
           >
             <RiLinkedinLine className={`${styles.socialIcons}`} color="#3e3e3e" />
           </Link>
           <Link 
                 href='https://github.com/Capoverde'
                 target='_blank'
                 title='GitHub'
           >
             <VscGithubAlt className={`${styles.socialIcons}`} color="#3e3e3e"/>
           </Link>
           <Link 
                 href='https://www.facebook.com/profile.php?id=100092179127170'
                 target='_blank'
                 title='Facebook'
           >
             <RiFacebookLine className={`${styles.socialIcons}`} color="#3e3e3e"/>
           </Link>
           </div>
          <Link className=' inline-block text-gray-100 mx-6 mb-6  border border-[#3e3e3e] px-8 py-2 rounded-3xl '
                href='/PortfolioPage'
          >
           <span>Portfolio</span>
          </Link>  
          </div>
      </div>
      <div className="h-full border-l border-[#3e3e3e]
                      flex items-center justify-center
                      overflow-hidden relative w-1/2
      ">
        <div className={`${styles.imageBox} z-[10] w-[120px] h-[120px] 
                       top-[50%] left-[50%]
                       absolute rounded-full`}>
        </div>
        <Image
          className='z-[30]'
          src='/Ja5.webp'
          width={300}
          height={300}
         />
      </div>
     </div>
     <div className="w-full h-full border-t border-[#3e3e3e] flex-col">
      <h2 className="text-2xl text-gray-400 px-6 pt-6">
        <AnimatedHeader text="Click the button to learn more about technology I am familiar with."
        
        />
      </h2>
       <SkillList />
       <AnimatedP text="         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo laudantium modi esse, distinctio delectus! Sapiente amet pariatur ab exercitationem repudiandae suscipit molestias? Voluptatum, facere? Esse distinctio optio necessitatibus pariatur animi odio temporibus recusandae facere nisi architecto ut repellendus hic accusamus officia commodi exercitationem cum nesciunt asperiores, mollitia debitis veritatis." 
       className="text-gray-500 px-6 mt-auto columns-2" /> 
     </div>
    </main>
    <Footer />
    </>
  )
}
