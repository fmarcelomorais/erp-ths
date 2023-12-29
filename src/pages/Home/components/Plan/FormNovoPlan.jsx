import React from 'react'
import { create } from '../../../../service/endpoint'
import swal from 'sweetalert'
import Input from '../../../../components/forms/Form/Input/Input'
import Button from '../../../../components/forms/Form/Button/Button'

const FormNovoPlan = () => {
  const [name, setName] = React.useState("")
  const [valor, setValor] = React.useState(0)
  const [status, setStatus] = React.useState()

  const handlesubmit = (event) => {
    event.preventDefault()
    const data = {
      name: name,
      amount: valor,
    }
    setStatus(null)
    create('plan','register', data, setStatus)
    if(status !== null) {
      swal("Ok", "Cadastrado", "success")    
    }else{
      swal("Error", "Não Cadastrado", "error")
    }
  }

  return (
    <div className='Form'>
      <form>
        <Input label="Plano" type="text" placeholder="Plano Mensal" value={name} set={setName} />
        <Input label="Valor" type="number" placeholder="30" value={valor} set={setValor} />
        <Button value="Cadastrar" set={handlesubmit} />
      </form>
    </div>
  )
}

export default FormNovoPlan
