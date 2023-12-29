import './Dashboard.css'
import React from 'react'
import Display from '../../../../components/component/Display/Display'
import { getter } from '../../../../service/endpoint'

const Dashboard = () => {
  const [clients, setClients] = React.useState([])
  const [panels, setPanels] = React.useState([])
  const [resellers, setResellers] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [accounts, setAccounts] = React.useState([])
  const [plans, setPlans] = React.useState([])

  React.useEffect(() =>{
    getter('client','clients', setClients);
    getter('reseller', 'resellers', setResellers)
    getter('user','users', setUsers)
    getter('panel','panels', setPanels)
    getter('account','accounts', setAccounts)
    getter('plan','plans', setPlans)       
  },[]); 
 
  return (
    <section className='Dashboard'>
      <h2>DASHBOARD</h2>
      <div className="content">
        <Display title="Clientes" icon="fa-solid fa-table"         
          ativos={clients.length}
        />  
        <Display title="Contas" icon="fa-solid fa-tv" 
          ativos={accounts.ativos} 
          inativos={accounts.inativos} 
          bloqueados={accounts.bloqueados} 
        /> 
        <Display title="Planos" icon="fa-solid fa-table" 
          ativos={plans.length}
        />  
        <Display title="Paineis" icon="fa-solid fa-table" 
          ativos={panels.length}
        />  
        <Display title="Revendedores" icon="fa-solid fa-handshake" 
          ativos={resellers.length}
        /> 
        <Display title="Usuarios" icon="fa-solid fa-users" 
          ativos={users.length}
        />
      </div>
    </section>
  )
}

export default Dashboard
