import './Clients.css'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getter, excluir } from '../../../../service/endpoint'
import { maskphone } from '../../../../service/functions'
import swal from 'sweetalert'


const Clients = () => {
  const [clientes, setClientes] = React.useState([]);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    getter('client','clients', setClientes);
  },[clientes])

  const handleClick = (event) => {
    event.preventDefault();
    excluir('client', event.target.value, setStatus)

    if(status === 'Não Deletado'){
      swal("", "Erro! "+status.status, "erro")
    }else{
      swal("", status.status, "success")
    }
  }
  return (
    <div className="Users">
    <div className="top">
      <h1>CLIENTES</h1> <Link to={'registerclient'} className="btn ver" style={{width: '100px', height: '40px'}}>Novo</Link>
    </div>
      <div className="content">
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "#1e1e2d" }}>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Contato</th>
                <th scope="col">Observação</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {clientes &&
                clientes.map((client) => (
                  <tr className="" key={client.id}>
                    <td>{client.name}</td>
                    <td>{maskphone(client.phone)}</td>
                    <td>{client.observation}</td>
                    <td className="acao">
                      <Link to={'client/'+client.id} className="btn ver">
                        Abrir Cadastro
                      </Link> | 
                      <Link to={'editeclient/'+client.id} className="btn editar">
                        Editar
                      </Link> | 
                      <button onClick={handleClick} value={client.id} className="btn excluir">
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

export default Clients
