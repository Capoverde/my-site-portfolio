"use client";
import React from "react";
import { Header } from "../components/Header/Header";
import { FeaturesTitle } from "../components/FeaturesTitle";
import { Card } from "../components/Card";

const features = [
  {
    title: "FullStack ToDo Applicaton",
    id: "to-do-app",
  },
  {
    title: "FullStack product catalog store",
    id: "product-catalog",
  },
  {
    title: "Website in Next.js",
    id: "lawyers-ebsite",
  },
  {
    title: "The Event Horizon",
    id: "website and gallery",
  },
  {
    title: "The Met",
    id: "museum-website",
  },
  {
    title: "Interdom",
    id: "real-estate-website",
  },
];

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
          <div className="w-full py-[50vh]">
            {/* <p> */}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, */}
              {/* natus quasi. Mollitia reiciendis inventore assumenda cum placeat */}
              {/* in quibusdam delectus. */}
            {/* </p> */}
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeaturesTitle>{feature.title}</FeaturesTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sticky top-0 flex h-screen items-center">
            <div className="w-full aspect-square bg-gray-100">
              <Card gradient="from-[#f7f0ff] to-[#a78afe]">I am a Card</Card>
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
      </main>
    </>
  );
};

export default Portfolio;
