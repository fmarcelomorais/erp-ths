import React from 'react'
import { getter } from '../../../../service/endpoint'
import { Outlet, useParams } from 'react-router-dom'
import { maskphone } from '../../../../service/functions'
import Button from '../../../../components/forms/Form/Button/Button'

const Reseller = () => {
  const { id } = useParams()
  const [reseller, setReseler] = React.useState(null)
  let [panel, setPanels] = React.useState(null)

  React.useEffect(() => {
    getter('reseller', 'reseller', setReseler, id);  
    setPanels(null)   
  },[id])

  const handleClick = React.useCallback(() => {    
    getter('panel', 'panel', setPanels, reseller.id_panel)
  },[reseller])
 
  
  return (
    <div className='Reseller'>
      {reseller === null ? <h2>Aguarde..</h2>
     : (
        <>
        <h2>Revendedor - {reseller && reseller.name}</h2>
        <p>Contato: {reseller && maskphone(reseller.phone)}</p>
        <p>Email: {reseller && reseller.email}</p>
        <p>Obs: {reseller && reseller.observation}</p>
        
        {panel === null ? <h3>PAINEL...</h3> : 
        (
          <>
          <h3>Painel: {panel && panel.name}</h3>
          <p>Creditos: <strong>{panel && panel.credits}</strong></p>
          <p>Login: {panel && panel.login}</p>
          <p>Password: {panel && panel.password}</p>
          <p>URL: {panel && panel.url}</p>
          <p>Data do Pagamento: {panel && new Date(panel.datepaymentcredits).toLocaleDateString()}</p>
          <p>Data do Cadastro: {panel && new Date(panel.dateregister).toLocaleDateString()}</p>
          <Outlet />
          </>
        )}
       { <Button value="Ver Painel" set={handleClick}/> }
        </>     
     )}      
    
    <Outlet />
  </div>
  )
}

export default Reseller
