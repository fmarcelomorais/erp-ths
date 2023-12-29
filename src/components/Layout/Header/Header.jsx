import './Header.css'
import React from 'react'
import Logo from '../Header/Logo/Logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Logo/>
      <Link to={'/'}>
        <i className="fa-solid fa-xmark"></i>
      </Link>
    </header>
  )
}

export default Header
