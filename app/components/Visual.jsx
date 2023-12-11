import Image from 'next/image';

export const Visual = ({ children }) => {
  return (
    <div className='w-full h-full'>
      {children}
    </div>
  )
}

export const portfolioVisual = () => {
  return (
    <Visual>
      <Image 
       alt="logoDivbg.jpg"
       src="/logoDivBg.jpg"
       width={1000}
       height={1000}
      />
    </Visual>
  )
}


