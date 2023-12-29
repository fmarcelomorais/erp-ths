import './Panels.css'
import React from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import { getter } from '../../../../service/endpoint'
import { setDate } from '../../../../service/functions'

const Panel = () => {
  const { id } = useParams()
  const [panel, setPanel] = React.useState()

  React.useEffect(()=> {
    getter('panel', 'panel', setPanel, id)
  }, [panel])


  return (
    <div className='Panel'>
      {panel === null ? <h2>Aguarde..</h2>
       : (
        <>        
        <h2>Painel - {panel && panel.name}</h2>
        <p>Login: {panel && panel.login}</p>
        <p>Senha: {panel && panel.password}</p>
        <p>Créditos: {panel && panel.credits}</p>
        <p>Link: <Link to={panel && panel.url}>Painel</Link></p>
        <p>Data do Cadastro: {panel && setDate(panel.dateregister)}</p>
        <p>Data do Pagamento: {panel && setDate(panel.datepaymentcredits)}</p>
        <p>Obs: {panel && panel.observation}</p>
        </>
       )}      
      <Outlet />
    </div>
  )
}

export default Panel
/*

*/