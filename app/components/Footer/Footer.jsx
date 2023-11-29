import React from 'react'
import Link from 'next/link';

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='w-screen py-3 flex flex-end
                     bg-black text-gray-600'>
      <div className="md:w-1/2 md:flex-row  md:ml-auto md:justify-between md:pr-6
                      w-full flex flex-col items-center">
        <span className='inline-block'>Copy Right &copy; {year} </span>
        <Link 
         className='inline-block'
         href='/'
         >Slobinski.dev</Link>
      </div>                
    </footer>
  )
}

