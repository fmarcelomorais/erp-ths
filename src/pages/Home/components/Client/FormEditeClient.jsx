import React from 'react'
import Input from '../../../../components/forms/Form/Input/Input'
import Textarea from '../../../../components/forms/Form/Textarea/Textarea'
import Button from '../../../../components/forms/Form/Button/Button'
import { update } from '../../../../service/endpoint'
import swal from 'sweetalert'

const FormEditeClient = ({clientEdit}) => {
  
  const [id, setId] = React.useState("")
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [observation, setObservation] = React.useState("")
  const [status, setStatus] = React.useState("")

  React.useEffect(() => {
    setId(clientEdit.id)
    setName(clientEdit.name)
    setPhone(clientEdit.phone)
    setObservation(clientEdit.observation)
  },[clientEdit])

  const handlesubmit = (event) => {
    
    event.preventDefault();
    const data = {
      id: id,
      name: name,
      phone: phone,
      observation: observation
    }
    update('client','update', data, setStatus)
    if(status) swal("", "Alterado", "success")
  }

  return (
    <div className='Form'>
      <form>
      <Input type="hidden" id="id" value={id} set={setId} />
      <Input label="Nome"  id="name" type="text" placeholder="Nome" value={name} set={setName} />
      <Input label="Telefone" id="phone" type="text" placeholder="Telefone" value={phone} set={setPhone} />
      <Textarea label="Observações" value={observation} set={setObservation}>{observation}</Textarea>
      <Button value="Editar" set={handlesubmit} />
      </form>
    </div>
  )
}

export default FormEditeClient
