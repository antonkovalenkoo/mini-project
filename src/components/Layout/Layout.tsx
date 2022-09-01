import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../'

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
