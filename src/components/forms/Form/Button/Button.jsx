import './Button.css'
import React from 'react'

const Button = ({id, value, set}) => {
  return (
    <div className='Button'>
     <button id={id} onClick={set}>{value}</button> 
    </div>
  )
}

export default Button
