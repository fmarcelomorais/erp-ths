import './Timer.css'
import React from 'react'
import { timer } from '../../../service/functions'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const Timer = () => {
  const [relogio, setRelogio] = React.useState({horas:0, minutos: 0, segundos:0})
  const [token, setToken] = React.useState(null)
  const navigate = useNavigate()
  
  React.useEffect(()=>{
    timer(setRelogio)  
  },[]);

  React.useEffect(()=>{
    logout();
  },[relogio, token, setToken]);

  const logout = () =>{
    if(relogio.minutos === 59){ 
      swal(" ", "Tempo Expirou", "warning")
      window.localStorage.setItem('user', JSON.stringify({token:""}))
      setToken(JSON.parse(window.localStorage.getItem('user')).token)
      navigate('/')  
    }
  }

  return (
    <div className='Timer'>
      {/* <p className='box'>{relogio.horas}</p>  */}
      <span>Timer : </span>
      <p className='box'>{relogio.horas < 10 ? `0${relogio.horas}`: relogio.horas }</p>
      <p className='box'>{relogio.minutos < 10 ? `0${relogio.minutos}`: relogio.minutos}</p>
      <p className='box'>{relogio.segundos < 10 ? `0${relogio.segundos}`: relogio.segundos}</p>
    </div>
  )
}

export default Timer
