import React from 'react'
import Input from '../../../../components/forms/Form/Input/Input'
import Textarea from '../../../../components/forms/Form/Textarea/Textarea';
import Button from '../../../../components/forms/Form/Button/Button';
import { create } from '../../../../service/endpoint';
import swal from 'sweetalert';

const FormNewPanel = () => {
  const [panel, setPanel] = React.useState();
  const [login, setLogin] = React.useState();
  const [password, setPassword] = React.useState();
  const [url, setUrl] = React.useState();
  const [creditos, setCreditos] = React.useState();
  const [observacao, setObservacao] = React.useState();
  const [status, setStatus] = React.useState();

  const handlesubmit = (event) => {
    event.preventDefault()
    //name, login, password, url, credits, observation, datePaymentCredits, dateRegister
    const data = {
      name: panel,
      login: login,
      password: password,
      url: url,
      credits: creditos,
      observation: observacao,
      datePaymentCredits: Date.now(),
      dateRegister: Date.now()
    }

    create('panel', 'register', data, setStatus);

    if(status) swal("", status, "success");
  }

  return (
    <form>
      <Input label="Painel" type="text" id="panel" placeholder="Nome do Painel" set={setPanel}/>
      <Input label="Login" type="text" id="login" placeholder="login" set={setLogin}/>
      <Input label="Password" type="password" id="password" set={setPassword}/>
      <Input label="URL" type="link" id="url" placeholder="http://painel.xyz" set={setUrl}/>
      <Input label="Creditos" type="number" id="creditos" placeholder="100" set={setCreditos}/>
      <Textarea label="Observação" set={setObservacao}></Textarea>
      <Button value="Cadastrar" set={handlesubmit}/>
    </form>
  )
}

export default FormNewPanel