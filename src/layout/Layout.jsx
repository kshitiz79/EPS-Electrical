
import Navbar from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
  <>
<Navbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default Layout