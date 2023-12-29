import '../../../../components/forms/Form.css'
import React from 'react'

import { update } from '../../../../service/endpoint';
import Input from '../../../../components/forms/Form/Input/Input';
import Button from '../../../../components/forms/Form/Button/Button';
import Select from '../../../../components/forms/Form/Select/Select';

const FormEdite = ({userEdition}) => {

  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [select, setSelect] = React.useState('2');
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState("");
  const [key, setKey] = React.useState("");
  const [status, setStatus] = React.useState("")

  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      id: id,
      name: name,
      phone: phone,
      type: select,
      login: login,
      password: password,
      key: key
    }
    update('user','update', data, setStatus)
    if(status) alert('Status: ' + status)
  };

  React.useEffect(() => {
    setId(userEdition.id)
    setName(userEdition.name)
    setPhone(userEdition.phone)
    setSelect(userEdition.type)
    setLogin(userEdition.login)
    setPassword(userEdition.password)
    setKey(userEdition.key)
  },[userEdition])
  

  return (
    <div className="Form">
      <form >
        <Input type="hidden" id="id" value={id} set={setId}/>
        <Input label="Nome" type="text" id="name" placeholder="Nome do Usuário" value={name} set={setName}/>
        <Input label="Telefone" type="text" id="phone" placeholder="85988889999" value={phone} set={setPhone}/>
        <Select 
          label="Tipo de Usuário" 
          id="userType"
          options={[{name:'Master', option: 1}, {name:'Usuario do sistema', option: 2}, {name:'Testar', option: 3}]}
          value={select}
          set={setSelect}
          />
        <Input label="Login" type="text" id="login" placeholder="Login" value={login} set={setLogin}/>  
        <Input label="Password" type="text" id="password" placeholder="Senha" value={password} set={setPassword}/>     
        <Input label="Chave de Acesso" type="password" id="key" placeholder="123456" value={key} set={setKey}/>     
        <Button value="Editar" set={handlesubmit}/>
      </form>
      
    </div>
  )
}

export default FormEdite
