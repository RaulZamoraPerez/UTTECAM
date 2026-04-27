import { BrowserRouter, Route, Routes } from "react-router-dom";

          
import PracticasEstadias from "./views/Vinculacion/PracticasEstadias";
           

import { Suspense, lazy } from "react";
const ConvocatoriaTitulo = lazy(() => import("@/views/Convocatoria/ConvocatoriaTitulo"));
const PdfConvocatoriaTitulo = lazy(() => import("@/views/Convocatoria/PdfConvocatoriaTitulo"));
import { AppLayout } from "@/layouts/AppLayout";
import { Page_404 } from "@/components/404";
import LoaderSuspense from "./components/Loader/LoaderSuspense";
import InformacionEstadistica from "./views/InformacionEstadistica/InformacionEstadistica";

import Home from "@/views/Inicial/Home";

import ServicioMedico from "./views/extensionUniversitaria/ServicioMedico/ServicioMedico";
import EducacionContinua from "./views/EducacionContinua/EducacionContinua";
import CursosEducacionContinua from "./views/EducacionContinua/CursosEducacionContinua";
// import Directorios from "./views/Nosotros/Directorios";

import Organigrama from "./views/Directorios/Organigrama";

// Lazy imports de otras vistas
const ProgramDetail = lazy(() => import("@/views/DetallesCarrera/ProgramDetail"));
const NormatividadSeccion = lazy(() => import("@/views/Normatividad/Normatividad"));
const PDF = lazy(() => import("@/views/Nosotros/PDF"));
const PdfPIT = lazy(() => import("@/components/Pdf/PdfPIT"));
const Finanzas = lazy(() => import("@/views/Finanzas/finazas"));
const RecursosHumanos = lazy(() => import("@/views/RecursosHumanos/recursosHumanos"));
const Sga = lazy(() => import("@/views/Sga/sga"));
const Sigc = lazy(() => import("@/views/Sigc/sigc"));

const Vinculacion = lazy(() => import("@/views/Vinculacion/vinculacion"));
const VinculacionBanner = lazy(() => import("@/views/Vinculacion/VinculacionBanner"));
const Calendario = lazy(() => import("@/views/Nosotros/Calendario"));
const PIT = lazy(() => import("@/views/Sigc/PIT"));
const Gaceta = lazy(() => import("@/views/extensionUniversitaria/prensaydifusion/Gaceta"));
const PdfGaceta = lazy(() => import("@/components/Pdf/pdfGaceta"));
const MiembrosSnii = lazy(() => import("@/views/Vinculacion/miembrosSnii"));
const CafeCientifico = lazy(() => import("@/views/Vinculacion/cafeCientifico"));
const ServiciosTecnologicos = lazy(() => import("@/views/Vinculacion/ServiciosTecnologicos"));
const EntidadCertificacion = lazy(() => import("@/views/Vinculacion/EntidadCertificacion"));
const Cepim = lazy(() => import("@/views/Vinculacion/Cepim"));
const PromocioIntitucional = lazy(() => import("@/views/extensionUniversitaria/difusionDivulgacion/promocioIntitucional"));
const PdfPromocionInstitucional = lazy(() => import("@/components/Pdf/PdfPromocionInstitucional"));
const Coordinacion = lazy(() => import("@/views/COORDINACIÓN DE GÉNERO/CoordinacionGenero"));
const MiEscuela = lazy(() => import("@/views/MiEscuela/MiEscuela"));
const Nosotros = lazy(() => import("@/views/Nosotros/Nosotros"));
const ConvocatoriaAdmision = lazy(() => import("@/views/Convocatoria/ConvocatoriaAdmision"));
const Tramites = lazy(() => import("@/views/Tramites/Tramites"));
const Becas = lazy(() => import("@/views/Becas/Becas"));

const TalleresCulturales = lazy(() => import("@/views/TalleresCulturales/TalleresCulturales"));
const TalleresDeportivos = lazy(() => import("@/views/TalleresDeportivos/TalleresDeportivos"));
const Enlaces = lazy(() => import("@/views/enlaces/Enlaces"));

// Nuevas vistas recuperadas
const ProgramasDesarrollo = lazy(() => import("@/views/Vinculacion/ProgramasDesarrollo"));
const ComiteView = lazy(() => import("@/views/Comites/ComiteView"));
const BolsaTrabajo = lazy(() => import("@/views/Vinculacion/BolsaTrabajo"));

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
      <Suspense fallback={<LoaderSuspense />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/programa/:id" element={<ProgramDetail />} />
            <Route path="/normatividad" element={<NormatividadSeccion />} />
            <Route path="/ver-documento/:title" element={<PDF />} />
            <Route path="/ver-documento-PIT/:title" element={<PdfPIT />} />
            <Route path="/finanzas" element={<Finanzas />} />
            <Route path="/recursosHumanos" element={<RecursosHumanos />} />
            <Route path="/sga" element={<Sga />} />
            <Route path="/sigc" element={<Sigc />} />
            {/* <Route path="/directorio" element={<Directorios />} /> */}
            <Route path="/repositorio-digital-investigacion" element={<Vinculacion />} />
             <Route path="/vinculacion-banner" element={<VinculacionBanner />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/programa-institucional-tutorias" element={<PIT />} />
            <Route path="/gacetas" element={<Gaceta />} />
            <Route path="/ver-documento-gaceta/:title" element={<PdfGaceta />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proceso-admision" element={<ConvocatoriaAdmision />} />
            <Route path="/tramites-escolares" element={<Tramites />} />
            <Route path="/convocatoria-titulo" element={<ConvocatoriaTitulo />} />
            <Route path="/ver-documento-CONVOCATORIA-TITULO/:title" element={<PdfConvocatoriaTitulo />} />
            <Route path="/MiembrosSnii" element={<MiembrosSnii />} />
            <Route path="/seminario-cafe-cientifico" element={<CafeCientifico />} />
            <Route path="/ServiciosTecnologicos" element={<ServiciosTecnologicos />} />
            <Route path="/entidad-certificacion-evaluacion" element={<EntidadCertificacion />} />
            <Route path="/cepim" element={<Cepim />} />
            <Route path="/Coordinacion" element={<Coordinacion />} />
            <Route path="/portal-estudiantes" element={<MiEscuela />} />
            <Route path="/becas-academicas" element={<Becas />} />
            <Route path="/biblioteca-digital" element={<Enlaces />} />
         
            <Route path="/InformacionEstadistica" element={<InformacionEstadistica />} />
            <Route path="/Organigrama" element={<Organigrama />} />
            <Route path="/talleres-culturales" element={<TalleresCulturales />} />
            <Route path="/talleres-deportivos" element={<TalleresDeportivos />} />
            <Route path="/promocion-institucional" element={<PromocioIntitucional />} />
            <Route path="/ver-documento-promocion/:title" element={<PdfPromocionInstitucional />} />
            <Route path="/servicio-medico" element={<ServicioMedico />} />
            <Route path="/educacion-continua" element={<EducacionContinua />} />
            <Route path="/educacion-continua/cursos" element={<CursosEducacionContinua />} />
            <Route path="/practicas-y-estadias" element={<PracticasEstadias />} />
            <Route path="/bolsaTrabajo" element={<BolsaTrabajo />} />

            {/* Comités y Programas */}
            <Route path="/programas-desarrollo" element={<ProgramasDesarrollo />} />
            <Route path="/comite-academico" element={<ComiteView slug="academico" titulo="Comité Académico" />} />
            <Route path="/comite-vinculacion" element={<ComiteView slug="vinculacion" titulo="Comité de Vinculación" />} />
            <Route path="/comite-calidad" element={<ComiteView slug="calidad" titulo="Comité de Calidad" />} />
            <Route path="/comite-investigacion" element={<ComiteView slug="investigacion" titulo="Comité de Investigación" />} />
              
            
            {/* Formularios */}
            <Route path="/constancia-kardex" element={<ConstanciasKardex />} />
            <Route path="/certificado-estudios" element={<CertificadoEstudios />} />
            <Route path="/tramite-titulo" element={<TramiteTitulo />} />
            <Route path="/carta-pasante" element={<CartaPasante />} />
            <Route path="/reposicion-credencial" element={<ReposicionCredencial />} />
            <Route path="/imss" element={<AltaBajaIMSS />} />
            <Route path="/reinscripcion" element={<Reinscripcion />} />
          </Route>
          <Route path="*" element={<Page_404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
