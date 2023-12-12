import Image from 'next/image';
import classNames from 'classnames';
import { useFeatureStore } from './store';


export const Visual = ({ gradient, children, id }) => {
    const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

  return (
    <div className={classNames("fixed inset-0 flex items-center justify-center transition-opacity duration-500",
                               fullScreenFeature === id ? "opacity-100" : "opacity-0 pointer-events-none"
                               )}>
        <div className='flex justify-center items-center 
                        w-screen h-screen px-4 py-auto
                        bg-black
                        relative'
        >
          {children}
        </div>
    </div>
  )
}

export const PortfolioVisual = ({id}) => {
  return (
    <Visual id={id}>
      <Image 
       className='z-50'
       alt="logoDivbg.jpg"
       src="/logoDivBg.jpg"
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
         className='z-50'
         alt="logoDivbg.jpg"
         src="/logoDivBg.jpg"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }


