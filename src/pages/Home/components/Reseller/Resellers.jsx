import './Resellers.css'
import React from 'react'
import swal from 'sweetalert'
import {Outlet, Link} from 'react-router-dom'
import { getter, excluir } from '../../../../service/endpoint'
import { maskphone } from '../../../../service/functions'

const Resellers = () => {  
  const [resellers, setResellers] = React.useState([])
  const [delet, setDelet] = React.useState()

  React.useEffect(() => {
    getter('reseller','resellers', setResellers)
  },[resellers])

  const handleClick = (e) => { 
    e.preventDefault();
    excluir('reseller', e.target.value, setDelet )
    if(delet) swal("", "Deletado", "success")
  }

  return (
    <div className="Resellers">
    <div className="top">
      <h1>REVENDEDORES</h1> <Link to={'registerreseller'} className="btn ver" style={{width: '100px', height: '40px'}}>Novo</Link>
    </div>
      <div className="content">
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "#1e1e2d" }}>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Contato</th>
                <th scope="col">Email</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {resellers &&
                resellers.map((reseller) => (
                  <tr className="" key={reseller.id}>
                    <td>{reseller.name}</td>
                    <td>{maskphone(reseller.phone)}</td>
                    <td>{reseller.email}</td>
                    <td className="acao">
                      <Link to={'reseller/'+reseller.id} className="btn ver">
                        Abrir Cadastro
                      </Link> | 
                      <Link to={'editeReseller/'+reseller.id} className="btn editar">
                        Editar
                      </Link> | 
                      <button onClick={handleClick} value={reseller.id} className="btn excluir">
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

export default Resellers
