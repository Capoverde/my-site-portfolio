// NavLinks.js
import Link from 'next/link';
import { GoArrowDownRight } from 'react-icons/go';
import { motion as m } from 'framer-motion';
import { useRouter } from 'next/router';


  const downloadPdf = () => {
    const router = useRouter();
    const pdfUrl = `${router.basePath}/assets/resume.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    link.click();
  };

export const NavLinks = ({ href, number, title, className, onClick }) => (


  <m.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 1 }}
  >
    <Link href={href}>
      <div className={`flex justify-between border-t 
                    text-gray-400 text-xl
                    border-r border-[#3e3e3e] px-3 py-1
                    z-[50]
                    ${className || ''}`
        }>
        <span className="inline-block mr-auto italic ">#{number}</span>
        <span className="pr-8 font-bold">{title}</span> <GoArrowDownRight className='text-2xl' />
      </div>
    </Link>
  </m.div>
);
