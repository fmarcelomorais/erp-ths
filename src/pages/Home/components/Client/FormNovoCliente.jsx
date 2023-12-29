import React from 'react'
import Input from '../../../../components/forms/Form/Input/Input'
import Textarea from '../../../../components/forms/Form/Textarea/Textarea'
import Button from '../../../../components/forms/Form/Button/Button'
import { create } from '../../../../service/endpoint'
import swal from 'sweetalert'

const FormNovoCliente = () => {
  const [name, setName] = React.useState("")
  const [contato, setContato] = React.useState("")
  const [texto, setTexto] = React.useState("")
  const [status, setStatus] = React.useState(null)


  const handlesubmit = (event) => {
    event.preventDefault()
    const data = {
      name: name,
      phone: contato,
      observation: texto
    }
    create('client', 'register', data, setStatus)
    if(status){
      swal("", status, "success")
    }

  }
  return (
    <div className='Form'>
      <form>
        <Input label="Nome" type="text" placeholder="Nome do Cliente" value={name} set={setName} />
        <Input label="Contato" type="text" placeholder="85989898989" value={contato} set={setContato} />        
        <Textarea label="Observação" set={setTexto}></Textarea>
        <Button value="Cadastrar" set={handlesubmit} />
      </form>
    </div>
  )
}

export default FormNovoCliente
