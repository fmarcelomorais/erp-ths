import './Input.css'
import React from 'react'

const Input = ({label, type, disabled, id, placeholder, value, set}) => {
  return (
    <div className="Input">
        <label htmlFor={id}>{label}</label>
        <input 
            type={type}
            disabled={disabled}
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={({target})=> set(target.value)}
        />
    </div>
  )
}

export default Input
