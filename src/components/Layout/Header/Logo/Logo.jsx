import { Link } from 'react-router-dom'
import './Logo.css'
import React from 'react'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to={'/home/dashboard'}><i className="fa-solid fa-arrows-spin fa-spin"></i>
        <span>THPlayer - ERP</span>
      </Link> 
    </div>
  )
}

export default Logo
