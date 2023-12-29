import './Menubar.css'
import React from 'react'
import ListMenu from '../Menubar/ListMenu/ListMenu'
import Timer from '../../component/Timer/Timer'

const Menubar = () => {
  const listInfo =[
    {item:'Dashboard', icon:"fa-solid fa-chart-line" },
    {item:'Avisos', icon:"fa-solid fa-comment"},
    {item:'Perfil', icon:"fa-solid fa-user"},
  ]
  const cadastros =[
    {item:'Usuarios', icon:"fa-solid fa-users" },
    {item:'Revendedores', icon:"fa-solid fa-handshake"},
    {item:'Clientes', icon:"fa-solid fa-users-between-lines"},
    {item:'Contas', icon:"fa-solid fa-tv"},
    {item:'Planos', icon:"fa-solid fa-boxes"},
    {item:'Paineis', icon:"fa-solid fa-table"},
  ]
  const financeiro = [ 
    {item:'Pagamentos', icon:"fa-brands fa-pix"}
  ]
  
  return (
 
      <aside className='menubar'>
        <Timer />
        <div className="scrollbar">
            <ListMenu title="Informação" list={listInfo}/>
            <ListMenu title="Cadastros" list={cadastros}/>
            <ListMenu title="Financeiro" list={financeiro}/>
        </div>
      </aside>

  )
}

export default Menubar
