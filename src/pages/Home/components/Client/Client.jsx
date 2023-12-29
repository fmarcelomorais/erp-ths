import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { getter } from '../../../../service/endpoint'
import { maskphone } from '../../../../service/functions'

const Client = () => {
  const { id } = useParams()
  const [client, setClient] = React.useState(null)

  React.useEffect(() => {
    getter('client', 'client', setClient, id)
  },[id])
  

  return (
    <div>
      {client === null ? <h2>Aguarde..</h2>
       : (
        <>        
        <h2>Cliente - {client && client.name}</h2>
        <p>Contato: {client && maskphone(client.phone)}</p>
        <p>Observação: {client && client.observation}</p>
        </>
       )}
      
      <Outlet />
    </div>
  )
}

export default Client
