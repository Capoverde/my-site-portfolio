"use client"
import React from 'react'
import {
    CardProductCatalog,
    WbsitteNext,
    EventHorizon,
    TheMet,
    Interdom
} from '../components/Card'
import { Header } from '../components/Header/Header'
import { FeaturesTitle } from '../components/FeaturesTitle'
import { FeatureCard } from '../components/Card'

const features = [ 
    {
        title: "FullStack ToDo Applicaton",
        id: "to-do-app",
        card: CardProductCatalog,
    },
    {
        title: "FullStack product catalog store",
        id: "product-catalog",
        card: WbsitteNext,
    },
    {
        title: "Website in Next.js",
        id: "lawyers-ebsite",
        card: EventHorizon,
    },
    {
        title: "The Event Horizon",
        id: "website and gallery",
        card: TheMet,
    },
    {
        title: "The Met",
        id: "museum-website",
        card: Interdom
    },
]

const Portfolio = () => {
  return (
    <>
      <Header />
      <header className="Portfolio__header bg-gray-200">
        <h1 className="title font-bold text-[6rem] pt-[3rem] px-[10%]">
          Portfolio
        </h1>
      </header>
      <main className="min-w-screen min-h-screen bg-gray-200 px-[10%]">
        <div className="flex w-full h-full gap-20 items-start">
            <div className='w-full py-[50vh]'>
                <ul>
                   {features.map((feature) => (
                    <li key={feature.id}>
                       <FeaturesTitle id={feature.id}>{feature.title}</FeaturesTitle>
                    </li>
                   ))} 
                </ul>
            </div>
            <div className='w-full sticky top-0 flex h-screen items-center'>
                <div className="relative w-full aspect-square bg-gray-100 rounded-[25px]">
                    {features.map(feature => 
                     <feature.card 
                     id={feature.id}
                     key={feature.id} />    
                    )}
                </div>
            </div>
          </div>
        <div className="h-screen"></div>
      </main>
    </>
  );
};

export default Portfolio;
