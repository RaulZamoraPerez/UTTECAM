import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navBar'
import Pleca from '@/components/pleca'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/components/Footer';
import { AccessibilityButton } from '@/components/AccesibilityButton';


export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Pleca />
      <ToastContainer />
      <AccessibilityButton />
      <Footer />
    </>
  )
}
