import '../../../../components/forms/Form.css'
import React from 'react'
import swal from 'sweetalert';

import { update } from '../../../../service/endpoint';
import Input from '../../../../components/forms/Form/Input/Input';
import Button from '../../../../components/forms/Form/Button/Button';
import Textarea from '../../../../components/forms/Form/Textarea/Textarea'

const FormEditeReseller = ({editeRevenda}) => {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState('2');
  const [observacao, setObservacao] = React.useState('');
  const [idPainel, setIdPainel] = React.useState("")
  const [status, setStatus] = React.useState("")
 
  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      id: id,
      name: name,
      phone: phone,
      email: email,
      observation: observacao,
      fk_panel: idPainel
    }
    update('reseller','update', data, setStatus)
    if(status !== null){
      swal("", "Alterado com Sucesso", "success")
    }
  };

  React.useEffect(() => {    
    setId(editeRevenda.id)
    setName(editeRevenda.name)
    setPhone(editeRevenda.phone)
    setEmail(editeRevenda.email)
    setObservacao(editeRevenda.observation)
    setIdPainel(editeRevenda.fk_panel)

  },[editeRevenda])
  
  return (
    <div className="Form">
      {status && <h1>{status}</h1>}
      <form >
        <Input type="hidden" id="id" value={id} set={setId} />
        <Input label="Nome" type="text" id="name" placeholder="Nome do Usuário" value={name} set={setName}/>
        <Input label="Telefone" type="text" id="phone" placeholder="85988889999" value={phone} set={setPhone}/>
        <Input label="Email" type="email" id="email" placeholder="seuemail@email.com" value={email} set={setEmail}/>
        <Textarea label="Observação" set={setObservacao}>
          {observacao}
        </Textarea>
        {editeRevenda.fk_panel && 
          <Input label="Painel" type="text" id="painel" placeholder="Painel" value={idPainel} set={setIdPainel}/> }   
        <Button value="Editar" set={handlesubmit}/>
      </form>
      
    </div>
  )
}

export default FormEditeReseller
