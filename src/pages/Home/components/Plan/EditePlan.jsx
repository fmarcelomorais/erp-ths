import React from 'react'
import { getter } from '../../../../service/endpoint'
import { useParams } from 'react-router-dom'
import FormEditePlan from './FormEditePlan'

const EditePlan = () => {
  const { id } = useParams()  
  const [plano, setPlano] = React.useState({})

  React.useEffect(() => {
    getter('plan', 'plan', setPlano, id)
  },[id])

  return (
    <div>
      <h1>EDITAR PLANO</h1>
      <FormEditePlan plano={plano} />
    </div>
  )
}

export default EditePlan
