import React from 'react'
import { getter } from '../../../../service/endpoint'
import { useParams } from 'react-router-dom'
import { maskphone } from '../../../../service/functions'

const Account = () => {
    const { id } = useParams()
    const [account, setAccount] = React.useState(null)

    React.useEffect(() => {
        getter('account', 'account', setAccount, id)     
    }, [id])

  return (
    <div>
    {account === null ? <h2>Aguarde...</h2> : 
    (
    <>
        <h2>CONTA</h2>
        <p>Login: {account.loginconta}</p>      
        <p>Senha: {account.senhaconta}</p>      
        <p>Painel: {account.nomepainel}</p>      
        <p>Plano: {account.nomeplano}</p>      
        <p>Contato: {maskphone(account.phone)}</p>      
    </>
    )}
    </div>
  )
}

export default Account