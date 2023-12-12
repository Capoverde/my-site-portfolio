import Image from 'next/image';
import classNames from 'classnames';
import { useFeatureStore } from './store';


export const Visual = ({ children, id }) => {
    const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

  return (
    <div className={classNames("fixed inset-0 flex items-center justify-center pointer-events-none opacity-0",
                                `visual-${id}`
                              //  fullScreenFeature === id ? "opacity-100" : "opacity-0 pointer-events-none"
                               )}>
        <div className='min-w-screen min-h-screen px-4'>
          {children}
        </div>
    </div>
  )
}

export const PortfolioVisual = ({id}) => {
  return (
    <Visual id={id}>
      <Image 
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
         alt="logoDivbg.jpg"
         src="/logoDivBg.jpg"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }


