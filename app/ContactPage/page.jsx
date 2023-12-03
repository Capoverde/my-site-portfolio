import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Link from 'next/link'
import styles from "./ContactPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={`${styles.fadeIn}`}>
      <Header />
      <section className="min-h-screen bg-gray-200 dark:bg-gray-200 lg:flex relative overflow-hidden">
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
                        xl:pl-[10%] xl:w-1/2 
                       lg:dark:bg-black
                        border-l border-[#3e3e3e]
                       ">
          <h1 className="title md:text-[7rem] text-[4rem] text-gray-400
                         border-b border-l border-[#3e3e3e] w-full 
          ">Contact</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 z-10 
                         border-b border-l  border-[#3e3e3e] xl:pb-6
          ">
          Currently, I reside in the city of Łódź, in central Poland, and I am ready for relocation to any part of the world. I am also open to remote work. Please feel free to get in touch and let me know how I can assist you!<br/>
          Ask me everything and I would love to hear from you.
          </p>
            <h3 className="border-l border-[#3e3e3e] my-4 font-medium text-gray-600 dark:text-gray-300">Call me or text me</h3>
          <div className="text-gray-400 flex mt-4 -mx-1.5 flex-col md:flex-row
                           border-b border-l border-[#3e3e3e] xl:pb-6
          ">
            <Link href="#">
            <FaPhoneAlt className="inline-block text-xl mr-3 text-gray-400 transition-colors duration-300 transform hover:text-gray-500" />
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
            <h3 className="font-medium text-gray-600 dark:text-gray-300 ">
              Follow me
            </h3>

            <div className="flex mt-4 -mx-1.5 ">
              <Link 
                className="mx-1.5 dark:hover:text-gray-400 text-gray-400 
                           transition-colors duration-300 transform hover:text-gray-500"
                href="#"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>

              <Link
                className="mx-1.5 dark:hover:text-gray-400 text-gray-400 
                           transition-colors duration-300 transform hover:text-gray-500"
                href="#"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>

              <Link
                className="mx-1.5 dark:hover:text-gray-400 text-gray-400 
                          transition-colors duration-300 transform hover:text-gray-500"
                href="#"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                    fill="currentColor"
                  />
                </svg>
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
                   focus:border-gray-400 dark:focus:border-gray-400 
                   focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                         focus:border-gray-400 dark:focus:border-gray-400 
                         focus:ring-gray-400 focus:outline-none focus:ring 
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
                               bg-black rounded-md hover:bg-white hover:text-black 
                               focus:outline-none focus:ring focus:ring-gray-300">
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
