"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import classNames from 'classnames'
import { useFeatureStore } from './store'

export const FeaturesTitle = ({ children, id }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
    const inViewFeature = useFeatureStore((state) => state.inViewfeature)

   useEffect(()=>{
     if (isInView) setInViewFeature(id);
     if (!isInView && inViewFeature === id) setInViewFeature(null)
   }, [isInView, id, setInViewFeature])

  return (
    <h3 ref={ref} className={classNames("feature-title text-5xl font-extrabold py-16 transition-colors",
                                       isInView ? "text-gray-200" : "text-gray-500" 
                            )}>
                {children}
    </h3>
  )
}
