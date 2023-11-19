import React from 'react'
import { Header } from '../components/Header/Header'

const Contact = () => {
  return (
    <>
      <Header />
      <main className='ContactPage__main min-h-screen min-w-screen bg-gray-200 px-[10%]'>
        <h1 className="title pt-10 font-bold text-[6rem]">
            Contact Me
        </h1>
      </main>
    </>
  )
}

export default Contact
