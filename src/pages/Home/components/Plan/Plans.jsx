import './Plans.css'
import React from 'react'
import swal from 'sweetalert'
import { Link, Outlet } from 'react-router-dom'
import { getter, excluir } from '../../../../service/endpoint'

const Plans = () => {
  const [planos, setPlanos] = React.useState([])
  const [status, setStatus] = React.useState(null)

  const handleClick = (event) => {
    event.preventDefault();
    excluir('plan', event.target.value, setStatus)
    if(status !== null) {
      swal('', "Deletado", "success")
    }
  }

  React.useEffect(() => {
    getter('plan', 'plans', setPlanos)
  },[planos])
  
  return (
    <div className="Plans">
    <div className="top">
      <h1>PLANOS</h1> <Link to={'registerplan'} className="btn ver" style={{width: '100px', height: '40px'}}>Novo</Link>
    </div>
      <div className="content">
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "#1e1e2d" }}>
            <thead>
              <tr>
                <th scope="col">PLANO</th>
                <th scope="col">VALOR</th>
                <th scope="col">AÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {planos &&
                planos.map((plano) => (
                  <tr className="" key={plano.id}>
                    <td>{plano.name}</td>
                    <td>R$ {plano.amount}</td>
                    <td className="acao">
                      <Link to={'plan/'+plano.id} className="btn ver">
                        Abrir Cadastro
                      </Link> | 
                      <Link to={'editeplan/'+plano.id} className="btn editar">
                        Editar
                      </Link> | 
                      <button onClick={handleClick} value={plano.id} className="btn excluir">
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

export default Plans
