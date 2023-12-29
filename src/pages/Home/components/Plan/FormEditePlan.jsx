import React from 'react'
import { update } from '../../../../service/endpoint'
import Input from '../../../../components/forms/Form/Input/Input';
import Button from '../../../../components/forms/Form/Button/Button';
import swal from 'sweetalert';

const FormEditePlan = ({plano}) => {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState(0)
  const [status, setStatus] = React.useState("")

  React.useEffect(() =>{    
    setId(plano.id)
    setName(plano.name)
    setAmount(plano.amount)
  },[plano, status])

  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      id: id,
      name: name,
      amount: amount
    }
    update('plan', 'update', data, setStatus)
    if(status !== null) {
      swal("", "Alterado", 'success')
    }
  }

  return (
    <div>
      <form>
        <Input type="hidden" id="id" value={id} set={setId} />
        <Input labe="Plano" type="text" id="name" value={name} set={setName} />
        <Input labe="Valor" type="number" id="amount" value={amount} set={setAmount} />
        <Button value="Editar" set={handlesubmit} />
      </form>
    </div>
  )
}

export default FormEditePlan
