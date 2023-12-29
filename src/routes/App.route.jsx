import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Home/components/Dashboard/Dashboard";
import Notice from "../pages/Home/components/Notice/Notice";
import Perfil from "../pages/Home/components/Perfil/Perfil";
import Users from "../pages/Home/components/Users/Users";
import User from "../pages/Home/components/Users/User";
import Novo from "../pages/Home/components/Users/Novo";
import Edite from "../pages/Home/components/Users/Edite";
import Resellers from "../pages/Home/components/Reseller/Resellers";
import Reseller from "../pages/Home/components/Reseller/Reseller";
import EditeReseller from "../pages/Home/components/Reseller/EditeReseller";
import NovoReseller from "../pages/Home/components/Reseller/NovoReseller";
import Clients from "../pages/Home/components/Client/Clients";
import Client from "../pages/Home/components/Client/Client";
import NovoCliente from "../pages/Home/components/Client/NovoCliente";
import EditeClient from "../pages/Home/components/Client/EditeClient";
import Accounts from "../pages/Home/components/Account/Accounts";
import Plans from "../pages/Home/components/Plan/Plans";
import Plan from "../pages/Home/components/Plan/Plan";
import NovoPlan from "../pages/Home/components/Plan/NovoPlan";
import EditePlan from "../pages/Home/components/Plan/EditePlan";
import Panel from "../pages/Home/components/Panels/Panel";
import Panels from "../pages/Home/components/Panels/Panels";
import NovoPanel from "../pages/Home/components/Panels/NovoPanel";
import Financeiro from "../pages/Home/components/Financeiro/Financeiro";
import NovoAccoutn from "../pages/Home/components/Account/NovoAccoutn";

export const RouteApp = () => ( 
   <BrowserRouter>   
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} >
            <Route path="dashboard" element={<Dashboard />} />             
            <Route path="avisos" element={<Notice />} />   
            <Route path="perfil" element={<Perfil />} />
            <Route path="usuarios" element={<Users />} >
                <Route path="user/:id" element={<User />} />      
                <Route path="registeruser" element={<Novo />} />      
                <Route path="editeuser/:id" element={<Edite />} />      
            </Route>  
            <Route path="revendedores" element={<Resellers />}>
                <Route path="reseller/:id" element={<Reseller />} />      
                <Route path="registerreseller" element={<NovoReseller />} />      
                <Route path="editereseller/:id" element={<EditeReseller />} /> 
            </Route>
            <Route path="clientes" element={<Clients />} >
                <Route path="client/:id" element={<Client />} /> 
                <Route path="registerclient" element={<NovoCliente />} /> 
                <Route path="editeclient/:id" element={<EditeClient />} /> 
            </Route>
            <Route path="contas" element={<Accounts />} >
                <Route path="account/:id"/>
                <Route path="registerAccount" element={<NovoAccoutn />}/>
            </Route>
            <Route path="planos" element={<Plans />} >
                <Route path="plan/:id" element={<Plan />} />
                <Route path="registerplan" element={<NovoPlan />} />
                <Route path="editeplan/:id" element={<EditePlan />} />
            </Route>
            <Route path="paineis" element={<Panels />} >
                <Route path="registerpanel" element={ <NovoPanel />}/>
                <Route path="panel/:id" element={ <Panel />}/>
            </Route>
            <Route path="pagamentos" element={<Financeiro />} />
        </Route> 
    </Routes>
   </BrowserRouter> 
)