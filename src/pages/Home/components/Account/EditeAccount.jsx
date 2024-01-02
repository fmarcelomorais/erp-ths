import React from 'react'
import { useParams } from 'react-router-dom';
import { getter } from '../../../../service/endpoint';
import FormEditeAccount from './FormEditeAccount';

const EditeAccount = () => {
    const {id} = useParams(); 
    const [account, setAccount] = React.useState()

    React.useEffect(()=>{
        getter('account', 'account', setAccount, id)
    }, [id])

  return (
    <div>
        <h2>Conta: {account && account.name}</h2>
        <FormEditeAccount accountEdite={account}/>
    </div>
  )
}

export default EditeAccount