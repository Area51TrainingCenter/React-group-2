import React from 'react'

const Button = ({handleClick, children}) => (
  <button 
    onClick={() => handleClick(children)}>{children}</button>
)

export default Button