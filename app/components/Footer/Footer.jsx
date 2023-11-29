import React from 'react'
import Link from 'next/link';

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='w-screen py-3 flex flex-end
                     bg-black text-gray-600'>
      <div className="w-1/2  ml-auto flex justify-between pr-6">
        <span className='inline-block'>Copy Right &copy; {year} </span>
        <Link 
         className='inline-block'
         href='/'
         >Slobinski.dev</Link>
      </div>                
    </footer>
  )
}

