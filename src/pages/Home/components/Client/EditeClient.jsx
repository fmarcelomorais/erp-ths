import React from 'react'
import { getter } from '../../../../service/endpoint'
import { useParams } from 'react-router-dom'
import FormEditeClient from './FormEditeClient';

const EditeClient = () => {
  const { id } = useParams();
  const [client, setClient] = React.useState([])

  React.useEffect(() => {
    getter('client', 'client', setClient, id);
  },[id])
  
  return (
    <div>
      <h1>Cliente: {client && client.name}</h1>
      <FormEditeClient clientEdit={client} />      
    </div>
  )
}

export default EditeClient
