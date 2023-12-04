"use client"
import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import SkillList from '../components/SkillButton/SkillList'
import styles from './About.module.css'

export default function About () {
  return (
    <>
    <Header />
    <main className={`${styles.FadeIn} bg-transparent min-h-screen min-w-screen mx-[10%]
                            border-r border-l border-[#3e3e3e] relative
    `}>
     <h1 className="title w-full px-8 border-b border-[#3e3e3e] font-bold text-gray-300 text-[6rem]">About Me</h1>
     <div className="wrapper w-full h-full flex justify-between">
      <SkillList />
      <div className="w-full h-full border-l border-[#3e3e3e]"></div>
     </div>
    </main>
    <Footer />
    </>
  )
}
