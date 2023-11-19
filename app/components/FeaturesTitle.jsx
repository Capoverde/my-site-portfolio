"use client"
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import classNames from 'classnames'

export const FeaturesTitle = ({ children }) => {
    const ref = useRef(null)
    const isInVue = useInView(ref, { margin: "-50% 0px -50% 0px" })
  return (
    <p ref={ref} className={classNames("text-5xl text-gray-500 font-extrabold py-16 transition-colors",
                                       isInVue ? "text-black" : "text-gray-500" 
                            )}>
                {children}
    </p>
  )
}
