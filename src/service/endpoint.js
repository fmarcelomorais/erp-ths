const vercel_url = 'https://api-erp-thstreaming.vercel.app'
//const vercel_url = 'http://localhost:3333'
const swal = require("sweetalert")


export const login = async (route, data, set, navigate) => {
    
    const userLogin = {
        login: data.user,
        password: data.password,
        type: Number(data.type),
        key: data.keyAccess
    }
    const url = `${vercel_url}/user/${route}`

    const resp = await fetch(url, {
        method: 'POST',
        headers:{ 
            'Access-Control-Allow-Origin': '*',           
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(userLogin)
    })
    const json = await resp.json();
    if(json.token){
        window.localStorage.setItem('user', JSON.stringify(json));
        navigate('/home/dashboard')
    }else{
        swal("","Dados incorretos", "error")   
    }
}

//ROTAS GET
export const getter = async(base, route, set, id=null) =>{ 
    
    let url = null
    if(id){
        url = `${vercel_url}/${base}/${route}/${id}`         
    }else{
        url = `${vercel_url}/${base}/${route}` 
    }

    const request = await fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        },				
    })
    
    const response = await request.json()
    let data = []
    if( response.user ){ data = response.user[0]} 
    if( response.reseller ){ data = response.reseller[0]} 
    if( response.panel ){ data = response.panel[0]} 
    if( response.client ){ data = response.client[0] } 
    if( response.account ){ data = response.account[0]} 
    if( response.plan ){ data = response.plan[0]} 
    if( response.users ){ data = response.users} 
    if( response.resellers ){ data = response.resellers} 
    if( response.panels ){ data = response.panels} 
    if( response.clients ){ data = response.clients} 
    if( response.accounts ){  
               
        data = response.accounts
        const ativo = data.filter((account) => account.statusaccount === "01") || []
        const inativo = data.filter((account) => account.statusaccount === "02") || []
        const bloqueado = data.filter((account) => account.statusaccount === "03") || []  

        const dados = {
            ativos: ativo.length,
            inativos: inativo.length,
            bloqueados: bloqueado.length,
            contas: data
        }
        data = dados
        
    } 
    if(response.plans){ data = response.plans} 
    
    set(data)
}
// ROTAS POST
export const create = async (base, route, data, set) => {
    
    const url = `${vercel_url}/${base}/${route}` 
    const resp = await fetch(url, {
        method: 'POST',
	    headers: {
            'access-control-allow-origin': '*',
            'content-type': 'application/json; charset=utf-8',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token       
		},
        body: JSON.stringify(data)				    
    })
    const register = await resp.json()
    if(register.message)
        set("Cadastrado com sucesso")
    
}
// ROTAS PATCH
export const update = async (base, route, data, set) => {     
    const url = `${vercel_url}/${base}/${route}`
    
    const edite = await fetch(url, {
        method:'PATCH',
        headers: {
            'access-control-allow-origin': '*',
            'content-type': 'application/json; charset=utf-8 ',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token   
        },
        body: JSON.stringify(data)
    })
    
    const edited = await edite.json()
    set(edited.status)
}
// ROTAS DELETE
export const excluir = async (base, id, set) => {
    const url = `${vercel_url}/${base}/delete/${id}` 
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        },
            //body: JSON.stringify(data)				    
    })
    const delet = await resp.json()
    set(delet)
    
}


/* 
export const panel = async (route, set) =>{
    const url = `${vercel_url}/panel/${route}`

    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        }
    })
    const panels = await resp.json()
    set(panels.panels)    
}
export const reseller = async (route, set, id) =>{
    let url = null
	if(id){
		url = `${vercel_url}/reseller/${route}/${id}`   
	}else{
		url = `${vercel_url}/reseller/${route}`   

	}
    const resp = await fetch(url,{
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        }
    })
    const resellers = await resp.json()
    const data = resellers.resellers || resellers.reseller[0]
    set(data)
}
export const resellerDelete = async (set, id) => {
    const url = `${vercel_url}/reseller/delete/${id}` 
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
    },
        //body: JSON.stringify(data)				    
})
    const delet = await resp.json()
    set(delet.message)   
}
export const resellerEdite = async (route,  data, set) => {
    const url = `${vercel_url}/reseller/${route}`
    const edite = await fetch(url, {
        method:'PATCH',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
			'Authorization': JSON.parse(window.localStorage.getItem('user')).token
        },
        body: JSON.stringify(data)
    })
    const edited = await edite.json()
    set(edited.message)     
}
export const user = async(base, route, set, id) =>{    

    let url = null
    if(id){
        url = `${vercel_url}/${base}/${route}/${id}`   
    }else{
        url = `${vercel_url}/${base}/${route}` 
    }
   
    const resp = await fetch(url,{
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        },				
    })
    
    const user = await resp.json()
    let data = null
    if( user.user ){ data = user.user[0]} 
    if( user.reseller ){ data = user.reseller[0]} 
    if( user.panel ){ data = user.panel[0]} 
    if( user.users ){ data = user.users} 
    if( user.resellers ){ data = user.resellers} 
    if( user.panels ){ data = user.panels} 
    set(data)

}
export const userRegister = async (route, data, set) => {
    const url = `${vercel_url}/user/${route}` 
    const resp = await fetch(url, {
        method: 'POST',
			headers: {
                'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
			},
            body: JSON.stringify(data)				    
    })
    const register = await resp.json()
    if(register.message)
        set("Usuario criado com sucesso")
    
}
export const userDelete = async (id, set) => {
    const url = `${vercel_url}/user/delete/${id}` 
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        },
            //body: JSON.stringify(data)				    
    })
    const delet = await resp.json()
    set(delet.message)
    
}
export const userEdite = async (route, data, set) => { 
    const url = `${vercel_url}/user/${route}` 
    const edite = await fetch(url, {
        method:'PATCH',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
			'Authorization': JSON.parse(window.localStorage.getItem('user')).token
        },
        body: JSON.stringify(data)
    })
    const edited = await edite.json()
    console.log(edited)
    set(edited.message)
}
export const account = async(route, set) =>{
    const url = `${vercel_url}/account/${route}`
    const resp = await fetch(url,{
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(window.localStorage.getItem('user')).token    
        }
    })
    const account = await resp.json()
    const ativo = account.acounts.filter((account) => account.statusaccount === "01")
    const inativo = account.acounts.filter((account) => account.statusaccount === "02")
    const bloqueado = account.acounts.filter((account) => account.statusaccount === "03")
    
    const accounts = {
        accounts: account.acounts,
        ativos: ativo.length,
        inativos: inativo.length,
        bloqueados: bloqueado.length
    }
    set(accounts)
} */