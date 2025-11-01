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
import InformacionEstadia from "@/views/InformacionEstadia/informacionEstadia";
import CoordinacionGenero from "@/views/CoordinacionGenero/coordinacionGenero";
import ProgramDetail from "./views/DetallesCarrera/ProgramDetail";
import ConvocatoriaAdmision from "@/views/Convocatoria/ConvocatoriaAdmision";
import MiEscuela from "@/views/MiEscuela/MiEscuela";
import Nosotros from "@/views/Nosotros/Nosotros";
import Becas from "@/views/Becas2/Becas";
import { Organigrama } from "@/views/Directorios/Organigrama";
import ServiciosEscolares from "./views/ServiciosEscolares/ServiciosEscolares";
import {PIT} from '@/views/Sigc/PIT';
import { PdfPIT } from "./components/Pdf/PdfPIT";
import ConstanciasKardex from "./views/Formularios/ConstanciasKardex";
import CertificadoEstudios from "./views/Formularios/CertificadoEstudios";
import CartaPasante from "./views/Formularios/CartaPasante";
import ReposicionCredencial from "./views/Formularios/ReposicionCredencial";
import AltaBajaIMSS from "./views/Formularios/AltaBajaIMSS";
import TramiteTitulo from "./views/Formularios/TramiteTitulo";
import Reinscripcion from "./views/Formularios/Reinscripcion";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/programa/:id" element={<ProgramDetail />} />
          <Route path="/normatividad" element={<NormatividadSeccion />} />
          <Route path="/ver-documento/:title" element={<PDF />} />
          <Route path="/ver-documento-PIT/:title" element={<PdfPIT />} />
          <Route path ="/finanzas" element ={<Finanzas/>}/>
          <Route path ="/recursosHumanos" element ={<RecursosHumanos/>}/>
          <Route path ="/sga" element ={<Sga/>}/>
          <Route path ="/sigc" element ={<Sigc/>}/>
          <Route path ="/informacion-estadia" element ={<InformacionEstadia/>}/>
          <Route path ="/coordinacion-genero" element ={<CoordinacionGenero/>}/>
          <Route path="/directorios" element={<Directorios />} />
          <Route path="/vinculacion" element={<Vinculacion />} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/programa-institucional-tutorias" element={<PIT/>} />
          {
            //*Rutas de nosotros
          }
          <Route path="/nosotros" element={<Nosotros />} />
          {
            //*Rutas de admision
          }
          <Route path="/proceso-admision" element={<ConvocatoriaAdmision />} />
          <Route path="/serviciosEscolares" element={<ServiciosEscolares />} />
          <Route path="/requisitos/constancias-kardex" element={<ConstanciasKardex />} />
          <Route path="/requisitos/certificado-estudios" element={<CertificadoEstudios/>} />
          <Route path="/requisitos/carta-pasante" element={<CartaPasante/>} />
          <Route path="/requisitos/reposicion-credencial" element={<ReposicionCredencial/>} />
          <Route path="/requisitos/alta-baja-IMSS" element={<AltaBajaIMSS/>} />
          <Route path="/requisitos/tramite-titulo" element={<TramiteTitulo/>} />
          <Route path="/requisitos/reinscripcion" element={<Reinscripcion/>} />


          
          {
            //*Rutas de accesos
          }
          <Route path="/portal-estudiantes" element={<MiEscuela/>} />
          
          {/* Rutas de becas */}
          <Route path="/becas-academicas" element={<Becas/>} />
          <Route path="/Becas" element={<Calendario/>} />
          {/* Soportar ambas variantes de URL para evitar 404 por diferencia de mayúsculas */}
          <Route path="/Organigrama" element={<Organigrama/>} />
          <Route path="/organigrama" element={<Organigrama/>} />
        </Route>
        <Route path="*" element={<Page_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

//TODO  imagenes de semblanza , directorios