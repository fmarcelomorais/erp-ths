import './ListMenu.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ListMenu = ({title, list}) => {
  return (
        <nav className='list'>
            <span>{title}</span>
            <ul>
                {list.map((item,index) => (
                    <li key={index}>
                        <i className={item.icon}></i>
                        <NavLink to={item.item.toLowerCase()}>
                            {item.item}
                        </NavLink>
                    </li>  
                ))}
            </ul>
        </nav>
  )
}

export default ListMenu
