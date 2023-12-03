// NavLinks.js
import Link from 'next/link';
import { GoArrowDownRight } from 'react-icons/go';

export const NavLinks = ({ href, number, title }) => (
  <Link href={href} className="flex justify-between border-t 
                    text-gray-400 text-xl
                    border-r border-[#3e3e3e] px-3 py-1
                    z-[50]
                    ">
    <span className="inline-block mr-auto italic ">#{number}</span>
    <span className="pr-8 font-bold">{title}</span> <GoArrowDownRight className='text-2xl'/>
  </Link>
);
