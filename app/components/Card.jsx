import React from 'react'
import classNames from 'classnames'


export const Card = ({ gradient, children }) => {
  return (
    <div className={classNames('w-full h-full bg-gray-700 bg-gradient-to-br', gradient)}>
      { children }
    </div>
  )
}
