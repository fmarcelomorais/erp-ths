import React from 'react'
import Input from '../../../../components/forms/Form/Input/Input'
import Select from '../../../../components/forms/Form/Select/Select'
import { create, getter } from '../../../../service/endpoint'
import Button from '../../../../components/forms/Form/Button/Button'
import swal from 'sweetalert'

const FormNovoAccount = () => {
  // idClient , idPanel, idPlan, login, password, statusPayment, statusAccount, dateMembership, 
  // dateRenovation, dateExpiration
  const [clientes, setClientes] = React.useState('')
  const [idCliente, setIdCliente] = React.useState('')
  const [paineis, setPaineis] = React.useState('')
  const [idPainel, setIdPainel] = React.useState('')
  const [planos, setPlanos] = React.useState('')
  const [idPlano, setIdPlano] = React.useState('')
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [statusPagamento, setStatusPagamento] = React.useState('')
  const [statusAccount, setStatusAccount] = React.useState('')
  const [dataAdesao, setDataAdesao] = React.useState('')
  const [dataRenovacao, setDataRenovacao] = React.useState('')
  const [dataVencimento, setDataVencimento] = React.useState('')
  const [status, setStatus] = React.useState(null)

  const opcoesPagamento = [{id:1, name:'Pago'},{id:2, name:'Pendente'},{id:3, name:'Cancelado'}]
  const opcoesConta = [{id:"01", name:'Ativo'},{id:"02", name:'Inativo'},{id:"03", name:'Bloqueado'}]
    
  React.useEffect(() => {
    getter('client','clients', setClientes)
    getter('panel','panels', setPaineis)
    getter('plan','plans', setPlanos)    
  },[])

  React.useEffect(() => {
    getter('client', 'client', setIdCliente, idCliente)
    getter('panel', 'panel', setIdPainel, idPainel)
    getter('plan', 'plan', setIdPlano, idPlano)
  },[])

  const handleClick = (event) => {
    event.preventDefault()
    const data = {
      idClient: idCliente, 
      idPanel: idPainel, 
      idPlan: idPlano, 
      login: login, 
      password: password, 
      statusPayment: statusPagamento, 
      statusAccount: statusAccount, 
      dateMembership: dataAdesao, 
      dateRenovation: dataRenovacao, 
      dateExpiration: dataVencimento
    }

    console.log(data, status)

    create('account', 'register', data, setStatus)
    if(status){
      swal("", "Cadastrado", "success")
    }
  }

  return (
    <>
    <div className="Form">
    <form>
        <Select label="Cliente" id="cliente" options={clientes} value={idCliente} set={setIdCliente}/>
        <Select label="Painel" id="painel" options={paineis} value={idPainel} set={setIdPainel}/>
        <Select label="Planos" id="planos" options={planos} value={idPlano} set={setIdPlano}/>
        <Input label="Login" type="text" id="login" placeholder="login" value={login} set={setLogin}/>
        <Input label="Password" type="text" id="password" placeholder="Senha" value={password} set={setPassword}/>
        <Select label="Status do Pagamento" id="statusPay" options={opcoesPagamento} value={statusPagamento} set={setStatusPagamento}/>  
        <Select label="Status da Conta" id="statusPay" options={opcoesConta} value={statusAccount} set={setStatusAccount}/>  
        <Input label="Data da Adesão" type="date" id="dataAdesao" value={dataAdesao} set={setDataAdesao}/>
        <Input label="Data da Renovação" type="date" id="dataRenovacao" value={dataRenovacao} set={setDataRenovacao}/>
        <Input label="Data do Vencimento" type="date" id="dataVencimento" value={dataVencimento} set={setDataVencimento}/>
        <Button value="Cadastrar" set={handleClick} />
    </form>
    </div>
    </>
  )
}

export default FormNovoAccount