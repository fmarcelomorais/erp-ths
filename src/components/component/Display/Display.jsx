import { Link } from 'react-router-dom'
import './Display.css'
import React from 'react'

const Display = ({title, icon, ativos, inativos = "", bloqueados = ""}) => {
 
  return (
    <div className='Display'>   
      <div className="headerInfo">
        <i className={icon}></i>
        <h3><Link to={'/home/'+title.toLowerCase()}>{title}</Link></h3>          
      </div>  
   
      <div className="info">      
        <p>{ativos} - Ativos(s)</p>
        <p style={{color: 'red'}}>{inativos} - Inativos(s)</p> 
        <p style={{color: 'orange'}}>{bloqueados} - Bloqueado(s)</p>
      </div>
    </div>
  )
}

export default Display
