import '../../../../components/forms/Form.css'
import swal from 'sweetalert';
import React from 'react'

import { create } from '../../../../service/endpoint';
import Input from '../../../../components/forms/Form/Input/Input';
import Button from '../../../../components/forms/Form/Button/Button';
import Select from '../../../../components/forms/Form/Select/Select';

const FormNovo = () => {

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [select, setSelect] = React.useState('2');
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState(null)

  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      phone: phone,
      type: select,
      login: login,
      password: password,
    }
    create('user', 'register', data, setStatus)
    if(status) swal("", status, "success");
  };
  

  return (
    <div className="Form">

      <form >
        <Input label="Nome" type="text" id="name" placeholder="Nome do Usuário" set={setName}/>
        <Input label="Telefone" type="text" id="phone" placeholder="85988889999" set={setPhone}/>
        <Select 
          label="Tipo de Usuário" 
          id="userType"
          options={[{name:'Master', id: 1}, {name:'Usuario do sistema', id: 2}, {name:'Testar', id: 3}]}
          value={select}
          set={setSelect}
          />
        <Input label="Login" type="text" id="login" placeholder="Login" set={setLogin}/>  
        <Input label="Password" type="text" id="password" placeholder="Senha" set={setPassword}/>     
        <Button value="Cadastrar" set={handlesubmit}/>
      </form>
      
    </div>
  )
}

export default FormNovo
