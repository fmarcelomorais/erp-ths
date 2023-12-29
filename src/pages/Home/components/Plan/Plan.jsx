import React from 'react'
import { useParams } from 'react-router-dom'
import { getter } from '../../../../service/endpoint'

const Plan = () => {
  const {id} = useParams()
  const [plano, setPlano] = React.useState({})

  React.useEffect(() =>{
    setPlano(null)
    getter('plan', 'plan', setPlano, id)  
  },[id])
  return (
    <div>
      {plano === null ? <h1>Aguarde...</h1> : (
        <>
        <h2>PLANO: {plano.name}</h2>
        <h2>VALOR: R$ {plano.amount},00</h2>        
        </>
      )}
    </div>
  )
}

export default Plan
