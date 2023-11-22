"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import classNames from 'classnames'
import { useFeatureStore } from './store'


export const FeaturesTitle = ({ children, id }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)

   useEffect(()=>{
     if (isInView) setInViewFeature(id);
   }, [isInView, id, setInViewFeature])

  return (
    <p ref={ref} className={classNames("text-5xl font-extrabold py-16 transition-colors",
                                       isInView ? "text-black" : "text-gray-500" 
                            )}>
                {children}
    </p>
  )
}
