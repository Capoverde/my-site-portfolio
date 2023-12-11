import React from 'react'
import classNames from 'classnames'
import Image from 'next/image';
import { useFeatureStore } from './store'
import styles from './portfolio.module.css'

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature)

  return (
    <div className={classNames('absolute inset-0 w-full h-full bg-gray-700 bg-gradient-to-br transition-opacity',
                    gradient, 
                    inViewFeature === id ? "opacity-100" : "opacity-0"
                    )}>
      { children }
      <button className='bg-black text-gray-200 rounded-2xl absolute bottom-6 right-6 px-8 py-2 border border-gray-700 shadow-lg'>
        Show me
      </button>
    </div>
  )
}

export const CardProductCatalog = ({ id }) => {
  return (
  <FeatureCard className="relative" id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
    <Image
      className="absolute top-[10%] left-[10%] w-[20%] z-[30]"
      src="/iphoneTranspBg.png"
      alt="iphone mockup"
      width={200}
      height={200}
    />
    <Image
      className="absolute top-[20%] left-[70%] w-[25%] z-[30]"
      src="/iphoneTranspBg.png"
      alt="iphone mockup"
      width={200}
      height={200}
    />
    <Image
      className="absolute top-[60%] left-[20%] w-[30%] z-[30]"
      src="/iphoneTranspBg.png"
      alt="iphone mockup"
      width={200}
      height={200}
    />
    <div className={`${styles.cardDiv} absolute inset-0`}>

    </div>
  </FeatureCard>
  )
}

export const WbsitteNext = ({ id  }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addef]">
    <span/>
  </FeatureCard>
  )
}

export const EventHorizon = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
    <span/>
  </FeatureCard>
  )
}

export const TheMet = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
    <span/>
  </FeatureCard>
  )
}

export const Interdom = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
    <span/>
  </FeatureCard>
  )
}
