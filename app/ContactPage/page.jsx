"use client"
import React, {useRef} from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { AnimatedHeader } from "../components/AnimatedText/AnimatedHeader";
import { AnimatedP } from "../components/AnimatedText/AnimatedP";
import Link from 'next/link'
import styles from "./ContactPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className={`${styles.fadeIn} bg-black`}>
      <Header />
      <section className="min-h-screen bg-black dark:bg-black lg:flex relative overflow-hidden">
        <div className={`${styles.blob2} absolute bg-orange-500 
                                       w-[50rem] h-[100rem]
                                       bg-opacity-50
                                       rounded-full
                                       top-[50%]
                                       left-[25%]
                                       blur-3xl
                                       z-1`}
                                       ></div>
        <div className={`${styles.blob2} absolute bg-gray-400 
                                       w-[30rem] h-[60rem]
                                       bg-opacity-50
                                       rounded-full
                                       top-[50%]
                                       left-[-5%]
                                       blur-3xl
                                       z-1`}></div>
        <div className={`${styles.blob2} absolute 
        //md:bg-[#121212]
                                       w-[70rem] h-[55rem]
                                       bg-opacity-50
                                       rounded-full
                                       top-[-5%]
                                       right-[-20%]
                                       blur-3xl
                                       z-1`}></div>                                       
        <div className="blob2 absolute"></div>

        <div className="flex flex-col 
                        xl:ml-[10%] xl:w-1/2 
                        lg:dark:bg-black
                        border-l border-[#3e3e3e]
                       ">
          <AnimatedHeader text="Contact" className="title md:text-[7rem] text-[4rem] text-gray-400
                         border-b border-[#3e3e3e] w-full px-6"/>
          <AnimatedP text="Currently, I reside in the city of Łódź, in central Poland, and I am ready for relocation to any part of the world. I am also open to remote work. Please feel free to get in touch and let me know how I can assist you!<br/>
          Ask me everything and I would love to hear from you."
          className="mt-4 text-gray-500 dark:text-gray-400 z-10 
                         border-b  border-[#3e3e3e] xl:pb-6
                         px-6"
          />
            <h3 className="border-[#3e3e3e] my-4 font-medium text-gray-600 dark:text-gray-300 px-6">Call me or text me</h3>
          <div className="text-gray-400 flex mt-4 flex-col md:flex-row
                           border-b border-[#3e3e3e] xl:pb-6 px-8
          ">
            <Link href="#">
              <FaPhoneAlt className="inline-block 
                          text-xl mr-3 text-gray-400 
                          transition-colors duration-300
                          transform hover:text-gray-500" />
            +48 503 143 309
            </Link>
            <Link href="#" className="mt-3 md:mt-0">
            <BsEnvelopeAtFill className="inline-block text-xl
                                         md:ml-3 mr-3      
                                       text-gray-400 transition-colors duration-300 transform 
                                       hover:text-gray-500" 
                                       />
            slobinski.dev@gmail.com
            </Link>
          </div>
          <div className="mt-6 md:mt-8 border-b border-[#3e3e3e] xl:pb-6">
            <h3 className="font-medium text-gray-600 dark:text-gray-300 px-6">
              Follow me
            </h3>

            <div className="flex mt-4 -mx-1.5 px-8 gap-6">
             <Link
                className="text-2xl"
                href="https://www.linkedin.com/in/piotr-s%C5%82obi%C5%84ski-1b432428b/"
                target="_blank"
                title="LinkedIn"
              >
               <RiLinkedinLine color="#9ca3af" />
              </Link>
              <Link
                 className="text-2xl"
                href="https://github.com/Capoverde"
                target="_blank"
                title="github.com/Capoverde"
              >
               <VscGithubAlt color="#9ca3af" />
              </Link>
              <Link
                 className="text-2xl"
                href="https://www.facebook.com/profile.php?id=100092179127170"
                target="_blank"
                title="Facebook"
              >
               <RiFacebookLine color="#9ca3af" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full p-8 pt-0 lg:w-1/2 xl:w-1/2 lg:px-12 xl:px-24
                        flex flex-col justify-center grow 
                        border-l border-[#3e3e3e]
                      bg-black
                        ">
          <form className="z-30">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 
                                  dark:text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="block w-full px-5 py-3 mt-2 
                           text-gray-700 placeholder-gray-400 
                           bg-black border border-gray-200 rounded-md 
                           dark:placeholder-gray-600 dark:bg-black
                           dark:text-gray-300 dark:border-gray-700 
                           focus:border-gray-700 dark:focus:border-gary-700 
                           focus:ring-gray-700
                           focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm 
                                text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-3 mt-2
                   text-gray-700 placeholder-gray-400 
                   bg-white border border-gray-200 rounded-md 
                   dark:placeholder-gray-600 dark:bg-black
                   dark:text-gray-300 dark:border-gray-700 
                   focus:border-gray-700 dark:focus:border-gary-700 
                   focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm 
                              text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-3 mt-2 
                         text-gray-700 placeholder-gray-400 
                         bg-white border border-gray-200 rounded-md md:h-56 
                         dark:placeholder-gray-600 dark:bg-black
                         dark:text-gray-300 dark:border-gray-700 
                         focus:border-gray-700 dark:focus:border-gary-700 
                         focus:ring-gray-700 focus:outline-none focus:ring 
                         focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex w-full py-3">
              <input type="checkbox" />
              <p className="text inline-block ml-3 text-gray-600">By sending this message, you agree to the terms and conditions.</p>
            </div>
            <button className="w-full px-6 py-3 mt-4 
                               text-sm font-medium tracking-wide text-white capitalize 
                               transition-colors duration-300 transform 
                               border border-gray-700
                               bg-black rounded-md hover:bg-gray-600 hover:text-gray-700
                               focus:outline-none focus:ring focus:ring-gray-700">
              get in touch
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
