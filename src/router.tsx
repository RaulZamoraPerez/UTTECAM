import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import NormatividadSeccion from "@/views/Normatividad/Normatividad";
import PDF from "@/views/Nosotros/PDF";
import { Page_404 } from "@/components/404";
import { Directorios } from "@/views/Nosotros/Directorios";
import { Home } from "@/views/Inicial/Home";
import Calendario from "@/views/Nosotros/Calendario";




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>


          <Route path="/" element={<Home />} index />
          <Route path="/normatividad" element={<NormatividadSeccion />}  />
          <Route path="/ver-documento/:title" element={<PDF />} />

          <Route path="/directorios" element={<Directorios />} />
          <Route path="/calendario" element={<Calendario/>} />
        </Route>
        <Route path="/404" element={<Page_404 />} />
      </Routes>
    </BrowserRouter>
  );
}
