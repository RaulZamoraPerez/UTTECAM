import { Outlet } from 'react-router-dom'
import Navbar from '../components/navBar'
import Pleca from '../components/pleca'

export const AppLayout = () => {
  return (
        <>
            <Navbar/>


            <Outlet/>

             <Pleca/>
  </>
    
  )
}
