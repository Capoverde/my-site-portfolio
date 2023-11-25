import React from 'react'
import classNames from 'classnames'
import { useFeatureStore } from './store'

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature)

  return (
    <div className={classNames('absolute inset-0 w-full h-full bg-gray-700 bg-gradient-to-br transition-opacity',
                    gradient, 
                    inViewFeature === id ? "opacity-100" : "opacity-0"
                    )}>
      { children }
    </div>
  )
}

export const CardProductCatalog = ({ id }) => {
  return (
  <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
    <span/>
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
