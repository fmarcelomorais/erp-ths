import '../../../../components/forms/Form.css'
import swal from 'sweetalert';
import React from 'react'

import { create } from '../../../../service/endpoint';
import Input from '../../../../components/forms/Form/Input/Input';
import Button from '../../../../components/forms/Form/Button/Button';
import Textarea from '../../../../components/forms/Form/Textarea/Textarea';
import Select from '../../../../components/forms/Form/Select/Select';
import { getter } from '../../../../service/endpoint';

const FormNovoReseller = () => {
 
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [observacao, setObservacao] = React.useState('');
  const [panels, setPanels] = React.useState()
  const [idPanel, setIdPanel] = React.useState('')
  const [status, setStatus] = React.useState(null)  
  
  React.useEffect(() => {
    getter('panel','panels', setPanels)
  }, []);

  React.useEffect(() => {
    getter('panel','panel', setIdPanel, idPanel)    
  }, []);
  
  const handlesubmit = (event) => {
    event.preventDefault();
    
    const data = {
      name: name,
      phone: phone,
      email: email,
      observation: observacao,
      id_Panel: idPanel
    }
   
    create('reseller', 'register', data, setStatus)
    
    if(status) swal("", status, "success");
  };

 
  return (
    <div className="Form">
      <form >
        <Input label="Nome" type="text" id="name" placeholder="Nome do Usuário" set={setName}/>
        <Input label="Telefone" type="text" id="phone" placeholder="85988889999" set={setPhone}/>
        <Input label="Email" type="email" id="email" placeholder="email@email.com" set={setEmail}/>   
        <Select label="Painel" id="panel" options={panels} value={idPanel} set={setIdPanel} /> 
        <Textarea label="Obseravação" value={observacao} set={setObservacao}></Textarea>   
        <Button value="Cadastrar" set={handlesubmit}/>
      </form>
      
    </div>
  )
}

export default FormNovoReseller
