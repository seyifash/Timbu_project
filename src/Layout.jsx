import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
        <NavBar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout