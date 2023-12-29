import './Home.css'
import React from 'react'
import Header from '../../components/Layout/Header/Header'
import Menubar from '../../components/Layout/Menubar/Menubar'
import Main from '../../components/Layout/Main/Main'
import Footer from '../../components/Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
    <Header/>   
    <Menubar/>
    <Main>  
      <Outlet/>
      <Footer/>
    </Main>
    </div>
  )
}

export default Home
  