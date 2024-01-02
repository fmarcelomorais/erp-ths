import React from 'react'
import Button from '../../../../components/forms/Form/Button/Button'
import { update } from '../../../../service/endpoint'
import swal from 'sweetalert'
import Input from '../../../../components/forms/Form/Input/Input'
import Select from '../../../../components/forms/Form/Select/Select'

const FormEditeAccount = ({accountEdite}) => {
   
    const [id, setId] = React.useState()
    const [option, setOption] = React.useState("00")
    const [status, setStatus] = React.useState("")


    const optionsStatusConta = [{"id":"01", "name":"Ativo"},{"id":"02", "name":"Inativo"},{"id":"03", "name":"Bloqueado"}]

    const handlesubmit = (event) => {
        event.preventDefault()
        const data ={ 
            id: accountEdite.id,
            idClient: accountEdite.fk_client,
            idPanel: accountEdite.fk_panel,
            idPlan: accountEdite.fk_plan,
            login: accountEdite.loginconta, 
            password: accountEdite.senhaconta, 
            statusPayment: accountEdite.statuspayment, 
            statusAccount: option, 
            dateMembership:accountEdite.datemembership, 
            dateRenovation: accountEdite.daterenovation, 
            dateExpiration: accountEdite.dateexpiration, 
        }
        update('account', 'update', data, setStatus)
       
        if(status === "ok"){
            swal("", "Editado", "success")
        }
        
    }



  return (
    <div className="Form">
        <form >
            <Input type="hidden" id="id" value={id} set={setId} />
            <Select label="Status da Conta" id="statusConta" options={optionsStatusConta} value={optionsStatusConta.id} set={setOption} />
            <Button value="Editar" set={handlesubmit} />
        </form>
    </div>
  )
}

export default FormEditeAccount
