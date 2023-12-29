import "./Users.css";
import swal from "sweetalert";
import React from "react";

import { getter, excluir } from "../../../../service/endpoint";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [delet, setDelet] = React.useState([]);

  React.useEffect(() => {
    getter('user','users', setUsers);
  },[users, setUsers]);

  const handleClick = (e) => {
    e.preventDefault();
    excluir('user', e.target.value, setDelet)
    if(delet) swal("Deletado")
  }

  return (
  <div className="Users">
    <div className="top">
      <h1>USUARIOS</h1> <Link to={'registeruser'} className="btn ver" style={{width: '100px', height: '40px'}}>Novo</Link>
    </div>
      <div className="content">
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "#1e1e2d" }}>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Tipo</th>
                <th scope="col">Login</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr className="" key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.type}</td>
                    <td>{user.login}</td>
                    <td className="acao">
                      <Link to={user.type === 1 ? '/home/usuarios' : 'user/'+user.id} className="btn ver">
                        Abrir Cadastro
                      </Link> | 
                      <Link to={user.type === 1 ? '/home/usuarios' : 'editeuser/'+user.id} className="btn editar">
                        Editar
                      </Link> | 
                      <button onClick={handleClick} value={user.id} className="btn excluir" disabled={user.type === 1 ? true : false }>
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
  );
};

export default Users;
