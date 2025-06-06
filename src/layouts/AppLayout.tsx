import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navBar'
import Pleca from '@/components/pleca'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/components/Footer';


export const AppLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

  
      <Pleca />

      {/* Contenedor global para los toasts */}
      <ToastContainer />
      <Footer />
    </>
  )
}
