import React from 'react'

import { useParams } from 'react-router-dom'
import { getter } from '../../../../service/endpoint'
import FormEdite from './FormEdite'

const Edite = () => {
  const { id } = useParams();

  const [userEdite, setUserEdite] = React.useState({});

  React.useEffect(() => {
    getter('user','user', setUserEdite, id); 
  },[id])
  
  return (
    <div>     
      {userEdite && <h2>Editar Usuario: {userEdite.name}</h2>}
      <FormEdite userEdition={userEdite} />
    </div>
  )
}

export default Edite
