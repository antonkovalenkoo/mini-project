import { Outlet } from 'react-router'
import { Header } from '../'
import './style.scss'

const Layout = () => {
  return (
    <>
      <div className="layout__header">
        <Header />
      </div>

      <div className="layout__outlet">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
