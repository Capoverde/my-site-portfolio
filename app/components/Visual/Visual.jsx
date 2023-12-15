import Image from 'next/image';
import classNames from 'classnames';
import { useFeatureStore } from '../store';
import styles from './Visual.module.css';

export const Visual = ({ children, id }) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

return (
  <div className={classNames("fixed inset-0 flex items-center justify-center transition-opacity duration-500",
                             fullScreenFeature === id ? "opacity-100" : "opacity-0 "
                             )}>
      <div className={`${styles.Visual} flex justify-center items-center 
                      w-screen h-screen px-4 py-auto
                      relative`}
      >
        {children}
      </div>
  </div>
 );
};


export const PortfolioVisual = ({id}) => {
  return (
    <Visual id={id} >
       <Image 
        alt="todoViewsBG.png"
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
         src="/EventHorizon.png"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }

  export const ThirdVisual = ({id}) => {
    return (
      <Visual id={id}>
        <Image 
         alt="logoDiv.png"
         src="/todoViewsBG.png"
         width={1000}
         height={1000}
        />
      </Visual>
    )
  }

  export const TodoVisual = ({id}) => {
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

  export const NothingVisual = ({id}) => {
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
