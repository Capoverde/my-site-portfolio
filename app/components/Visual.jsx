import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useFeatureStore } from './store';


export const Visual = ({ children, projectLink, id }) => {
    const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

  return (
    <div className={classNames("fixed inset-0 flex items-center justify-center transition-opacity duration-500",
                               fullScreenFeature === id ? "opacity-100" : "opacity-0 "
                               )}>
        <div className='flex justify-center items-center 
                        w-screen h-screen px-4 py-auto
                        bg-black
                        relative'
        >
          {children}
          <Link
           href={projectLink || '#'}
           target="_blank"
           className="absolute top-[10%] right-[10%] bg-transparent text-gray-700 border border-[#3e3e3e] shadow-lg
           rounded-full px-8 py-4 z-[100] cursor-pointer
           "
          >
            visit the project
          </Link>
        </div>
    </div>
  )
}

export const PortfolioVisual = ({id, projectLink}) => {
  return (
    <Visual id={id} projectLink={projectLink}>
      <Image 
       className='z-50'
       alt="todoBg.jpg"
       src="/todoBg.png"
       width={2000}
       height={1000}
      />
    </Visual>
  )
}

export const OtherVisual = ({id, projectLink}) => {
    return (
      <Visual id={id} projectLink={projectLink}>
        <Image 
         className='z-50'
         alt="todoBg.png"
         src="/Ja4.png"
         width={2000}
         height={1000}
        />
      </Visual>
    )
  }

  export const ThirdVisual = ({id, projectLink}) => {
    return (
      <Visual id={id} projectLink={projectLink}>
        <Image 
         className='z-50'
         alt="logoDiv.png"
         src="/logoDivBg.jpg"
         width={2000}
         height={1000}
        />
      </Visual>
    )
  }

  export const TodoVisual = ({id, projectLink}) => {
    return (
      <Visual id={id} projectLink={projectLink}>
        <Image 
         className='z-50'
         alt="todoBg.png"
         src="/todoBg.png"
         width={2000}
         height={1000}
        />
      </Visual>
    )
  }
