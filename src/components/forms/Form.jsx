import './Form.css'
import { useNavigate } from "react-router-dom"
import React from 'react'

import { login } from '../../service/endpoint';
import Input from './Form/Input/Input';
import Button from './Form/Button/Button';
import Select from './Form/Select/Select';

const Form = () => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [select, setSelect] = React.useState('2');
  const [keyAccess, setKey] = React.useState('');
  const [status, setStatus] = React.useState({})

  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      user: user,
      password: password,
      type: select,
      keyAccess: keyAccess
    }
    login('login', data, setStatus, navigate) 
    
  };

  return (
    <div className="Form">
      {status.error && <h1>Erro</h1>}
      {status.loged && <h1>Logado</h1>}
      <form >
        <Input label="User Name" type="text" id="userLogin" placeholder="Nome do Usuário" set={setUser}/>
        <Input label="Password" type="password" id="password" placeholder="Senha" set={setPassword}/>     
        <Select 
          label="Tipo de Usuário" 
          id="userType"
          options={[{name:'Master', id: 1}, {name:'Usuario do sistema', id: 2}, {name:'Tester', id: 3}]}
          value={select}
          set={setSelect}
          />
        <Input label="Chave de Acesso" type="password" id="key" placeholder="Chave de acesso" set={setKey} />  
        <Button value="Entrar" set={handlesubmit}/>
      </form>
      
    </div>
  )
}

export default Form
