"use client"
import React from 'react'
import { Header } from '../components/Header/Header'

const features = [ 
    {
        title: "FullStack ToDo Applicaton",
        id: "to-do-app"
    },
    {
        title: "FullStack product catalog store",
        id: "product-catalog"
    },
    {
        title: "Website in Next.js",
        id: "lawyers-ebsite"
    },
    {
        title: "The Event Horizon",
        id: "website and gallery"
    },
    {
        title: "The Met",
        id: "museum-website"
    },
    {
        title: "Interdom",
        id: "real-estate-website"
    }
]

const Portfolio = () => {
  return (
    <>
      <Header />
      <header className='Portfolio__header bg-gray-200'>
        <h1 className="title font-bold text-[6rem] pt-[3rem] px-[10%]">Portfolio</h1>  
      </header>
      <main className='min-w-screen min-h-screen bg-gray-200 px-[10%]'>
        <div className="flex w-full h-full gap-20">
            <div className='w-full h-full'>
                <ul>
                   {features.map((feature) => (
                    <li key={feature.id}>
                       <p className="text-5xl text-gray-500 font-extrabold py-16 ">{feature.title}</p>
                    </li>
                   ))} 
                </ul>
            </div>
            <div className='w-full'>
                <div className="sticky top-0 w-full aspect-square bg-gray-100">col</div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Portfolio
