import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useFeatureStore } from './store';

export const Visual = ({ children, id }) => {
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
      </div>
  </div>
 );
};


export const PortfolioVisual = ({id }) => {
  return (
    <Visual id={id} >
       <Image 
        alt="todoBg.jpg"
        src="/todoBg.png"
        width={1000}
        height={1000}
      />
    </Visual>
  )
}

export const OtherVisual = ({id}) => {
    return (
      <Visual id={id}>
        <Image 
         alt="todoBg.png"
         src="/Ja4.png"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }

  export const ThirdVisual = ({id }) => {
    return (
      <Visual id={id}>
        <Image 
         alt="logoDiv.png"
         src="/logoDivBg.jpg"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }

  export const TodoVisual = ({id }) => {
    return (
      <Visual id={id}>
        <Image 
         className='z-50'
         alt="todoBg.png"
         src="/todoBg.png"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }

  export const NothingVisual = ({id }) => {
    return (
      <Visual id={id}>
        <Image 
         className='z-50'
         alt="todoBg.png"
         src="/todoBg.png"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }
