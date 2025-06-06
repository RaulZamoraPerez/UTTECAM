import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import NormatividadSeccion from "@/views/Normatividad/Normatividad";
import PDF from "@/views/Nosotros/PDF";
import { Page_404 } from "@/components/404";
import { Directorios } from "@/views/Nosotros/Directorios";
import Home from "@/views/Inicial/Home";
import Calendario from "@/views/Nosotros/Calendario";
import Finanzas from "@/views/Finanzas/finazas";
import Vinculacion from "@/views/Vinculacion/vinculacion";
import RecursosHumanos from "@/views/RecursosHumanos/recursosHumanos";
import Sga from "@/views/Sga/sga";
import Sigc from "@/views/Sigc/sigc";
import ProgramDetail from "./views/DetallesCarrera/ProgramDetail";
import Becas from "@/views/Becas/Becas";
import { Organigrama } from "@/views/Directorios/Organigrama";




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/programa/:id" element={<ProgramDetail />} />
          <Route path="/normatividad" element={<NormatividadSeccion />} />
          <Route path="/ver-documento/:title" element={<PDF />} />
          <Route path ="/finanzas" element ={<Finanzas/>}/>
          <Route path ="/recursosHumanos" element ={<RecursosHumanos/>}/>
          <Route path ="/sga" element ={<Sga/>}/>
          <Route path ="/sigc" element ={<Sigc/>}/>
          <Route path="/directorios" element={<Directorios />} />
          <Route path="/vinculacion" element={<Vinculacion />} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/becas-academicas" element={<Becas/>} />
          <Route path="/Becas" element={<Calendario/>} />
          <Route path="/Organigrama" element={<Organigrama/>} />
        </Route>
        <Route path="*" element={<Page_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

//TODO  imagenes de semblanza , directorios