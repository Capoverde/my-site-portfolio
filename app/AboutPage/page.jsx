import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

import styles from './About.module.css'

export default function About () {
  return (
    <>
    <Header />
    <main className={`${styles.FadeIn} bg-gray-200 min-h-screen min-w-screen px-[10%]`}>
     <h1 className="title font-bold text-[6rem]">About Me</h1>
    </main>
    <Footer />
    </>
  )
}
