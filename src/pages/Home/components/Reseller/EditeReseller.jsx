import React from 'react'
import { getter } from '../../../../service/endpoint'
import { useParams } from 'react-router-dom'
import FormEditeReseller from './FormEditeReseller'

const EditeReseller = () => {
  const { id } = useParams();

  const [editeReseller, setEditeReseller] = React.useState({});
  
  React.useEffect(() => {
    getter('reseller','reseller', setEditeReseller, id);
  },[id]);
  
  return (
    <div>      
      {editeReseller && <h2>Editar Revendedor: {editeReseller.name}</h2>}
      <FormEditeReseller editeRevenda={editeReseller} />
    </div>
  )
}

export default EditeReseller
