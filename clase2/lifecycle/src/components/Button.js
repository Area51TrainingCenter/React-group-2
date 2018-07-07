import React from 'react'

const Button = ({ handleClick, text, children, newName }) => (
  <button 
    onClick={() => handleClick(newName)}>{text} {children}</button>
)

export default Button