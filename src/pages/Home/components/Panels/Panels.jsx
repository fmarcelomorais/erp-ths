import './Panels.css'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getter } from '../../../../service/endpoint'

const Panels = () => {

    const [panels, setPanels] = React.useState()

    React.useEffect(() => {
        getter('panel', 'panels', setPanels)
    }, [panels, setPanels])

    const handleClick = () =>{

    }


  return (
    <div className="Panels">
        <div className="top">
            <h1>Paineis</h1> <Link to={'registerpanel'} className='btn ver' style={{width: '100px', height: '40px'}}>Novo</Link>
        </div>
        <div className="content">
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "#1e1e2d" }}>
            <thead>
              <tr>
                <th scope="col">Painel</th>
                <th scope="col">Login</th>
                <th scope="col">Senha</th>
                <th scope="col">Créditos</th>
               {/*  <th scope="col">Link</th> */}
               {/*  <th scope="col">Data do Cadastro</th> */}
               {/*  <th scope="col">Data do Pagamento</th> */}
               {/* <th scope="col">Obs.</th> */}
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {panels &&
                panels.map((panel) => (
                  <tr className="" key={panel.id}>
                    <td>{panel.name}</td>
                    <td>{panel.login}</td>
                    <td>{panel.password}</td>
                    <td>{panel.credits}</td>
                    {/* <td><Link to={panel.url}>Painel</Link></td> */}
                    {/* <td>{panel.dateregister}</td> */}
                    {/* <td>{panel.datepaymentcredits}</td> */}
                    {/* <td>{panel.observation}</td> */}
                    <td className="acao">
                      <Link to={'panel/'+panel.id} className="btn ver">
                        Abrir Cadastro
                      </Link> | 
                      <Link to={'editepanel/'+panel.id} className="btn editar">
                        Editar
                      </Link> | 
                      <button onClick={handleClick} value={panel.id} className="btn excluir">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        </div>  
        <Outlet/>      
    </div>
  )
}

export default Panels