import React from 'react'

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='w-screen py-3 flex justify-center
                     bg-black text-gray-600'>
      <span>Copy Right &copy; slobinski.dev {year} </span>
    </footer>
  )
}

