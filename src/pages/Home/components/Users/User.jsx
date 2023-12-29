import './User.css'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getter } from '../../../../service/endpoint'
import { maskphone } from '../../../../service/functions'

const User = () => {
  const {id} = useParams()
  const [usuario, setUsuario] = React.useState({})

  React.useEffect(() =>{
    setUsuario(null)
    getter('user','user', setUsuario, id)      
  },[id])
 
  return (
    <div className='User'>
      {usuario === null ? <h2>Aguarde..</h2>
       : (
        <>        
        <h2>Usuário - {usuario.name}</h2>
        <p>Login: {usuario && usuario.login}</p>
        <p>Senha: {usuario && usuario.password}</p>
        <p>Contato: {usuario && maskphone(usuario.phone)}</p>
        <p>Tipo: {usuario && usuario.type === 1 ? "Master" : usuario.type === 2 ? "Pro" : "Tester"}</p>
        <p>Key: {usuario && usuario.key}</p>
        </>
       )}
      
      <Outlet />
    </div>
  )
}

export default User
