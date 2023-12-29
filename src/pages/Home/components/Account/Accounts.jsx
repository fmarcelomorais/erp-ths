import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { setDate, statusConta } from '../../../../service/functions'
import { excluir, getter } from '../../../../service/endpoint'
import swal from 'sweetalert'

const Accounts = () => {

  const [accounts, setAccounts] = React.useState(null)
  const [status, setStatus] = React.useState(null)

  React.useEffect(()=> {
    getter('account', 'accounts', setAccounts)
  },[accounts])

  const handleClick = (event) => {
    event.preventDefault()
    excluir('account', event.target.value, setStatus )
    if(status){
      swal("", "Deletado", "success")
    }
  }
  
  return (
    <div className='Users'>
      <div className="top">
      <h1>CONTAS</h1> <Link to={'registerAccount'} className="btn ver" style={{width: '100px', height: '40px'}}>Novo</Link>
    </div>
    <div className="content">
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "#1e1e2d" }}>
            <thead>
              <tr>
                <th scope="col">Login</th>
                <th scope="col">Renovação</th>
                <th scope="col">Status da Conta</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {accounts &&
                accounts.contas.map((account) => (
                  <tr className="" key={account.id}>
                    <td>{account.login}</td>
                    <td>{setDate(account.daterenovation)}</td>
                    <td>{statusConta(account.statusaccount)}</td>
                    <td className="acao">
                      <Link to={'account/'+account.id} className="btn ver">
                        Abrir Cadastro
                      </Link> | 
                      <Link to={'editeaccount/'+account.id} className="btn editar">
                        Editar
                      </Link> | 
                      <button onClick={handleClick} value={account.id} className="btn excluir">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Accounts
