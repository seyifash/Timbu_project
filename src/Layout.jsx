import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import './App.css'

const Layout = () => {
  return (
    <div>
        <NavBar />
        <div className="div"> 
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout