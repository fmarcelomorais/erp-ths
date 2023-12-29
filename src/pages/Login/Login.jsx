import './Login.css'
import React from 'react'
import Form from '../../components/forms/Form'


const Login = () => {

  React.useEffect(() => {
    a()
  },[])

  function a(){
    window.localStorage.setItem('user', JSON.stringify({token:"123123"}));
  }

  return (
    <div className='Login'>
      <div className="area">
        <h2>Entrar | <i className="fa-solid fa-arrows-spin fa-spin"></i> TH Player |</h2>
        <Form /> 
      </div>
    </div>
  )
}

export default Login
