import './Select.css'
import React from 'react'

const Select = ({label, id, options, value, set}) => {  
  return (
    
    <div className='Select'>
        <label htmlFor={id} >{label}</label>
        <select name={id} id={id} onChange={({target}) => set(target.value)} value={value}>
        <option value={0}>Escolha uma opção</option>
          {options && options.map((option, i)=>(
            <option key={i} value={option.id}>{option.name}</option>
          ))}
        </select>
    </div>
  )
}

export default Select
