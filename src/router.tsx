import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const ConvocatoriaTitulo = lazy(() => import("@/views/Convocatoria/ConvocatoriaTitulo"));
const PdfConvocatoriaTitulo = lazy(() => import("@/views/Convocatoria/PdfConvocatoriaTitulo"));
import { AppLayout } from "@/layouts/AppLayout";
import { Page_404 } from "@/components/404";
import LoaderSuspense from "./components/Loader/LoaderSuspense";
import InformacionEstadistica from "./views/InformacionEstadistica/InformacionEstadistica";

// Lazy imports de vistas
const Home = lazy(() => import("@/views/Inicial/Home"));
const ProgramDetail = lazy(() => import("@/views/DetallesCarrera/ProgramDetail"));
const NormatividadSeccion = lazy(() => import("@/views/Normatividad/Normatividad"));
const PDF = lazy(() => import("@/views/Nosotros/PDF"));
const PdfPIT = lazy(() => import("@/components/Pdf/PdfPIT"));
const Finanzas = lazy(() => import("@/views/Finanzas/finazas"));
const RecursosHumanos = lazy(() => import("@/views/RecursosHumanos/recursosHumanos"));
const Sga = lazy(() => import("@/views/Sga/sga"));
const Sigc = lazy(() => import("@/views/Sigc/sigc"));
const Directorios = lazy(() => import("@/views/Nosotros/Directorios"));
const Vinculacion = lazy(() => import("@/views/Vinculacion/vinculacion"));
const Calendario = lazy(() => import("@/views/Nosotros/Calendario"));
const PIT = lazy(() => import("@/views/Sigc/PIT"));
const Gaceta = lazy(() => import("@/views/extensionUniversitaria/prensaydifusion/Gaceta"));
const PdfGaceta = lazy(() => import("@/components/Pdf/pdfGaceta"));
const MiembrosSnii = lazy(() => import("@/views/Vinculacion/miembrosSnii"));
const CafeCientifico = lazy(() => import("@/views/Vinculacion/cafeCientifico"));
const ServiciosTecnologicos = lazy(() => import("@/views/Vinculacion/ServiciosTecnologicos"));
const PromocioIntitucional = lazy(() => import("@/views/extensionUniversitaria/difusionDivulgacion/promocioIntitucional"));
const PdfPromocionInstitucional = lazy(() => import("@/components/Pdf/PdfPromocionInstitucional"));
const Coordinacion = lazy(() => import("@/views/COORDINACIÓN DE GÉNERO/CoordinacionGenero"));
const MiEscuela = lazy(() => import("@/views/MiEscuela/MiEscuela"));
const Nosotros = lazy(() => import("@/views/Nosotros/Nosotros"));
const ConvocatoriaAdmision = lazy(() => import("@/views/Convocatoria/ConvocatoriaAdmision"));
const Tramites = lazy(() => import("@/views/Tramites/Tramites"));
const Becas = lazy(() => import("@/views/Becas2/Becas"));
const Organigrama = lazy(() => import("@/views/Directorios/Organigrama"));

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
            <Route path="/directorios" element={<Directorios />} />
            <Route path="/vinculacion" element={<Vinculacion />} />
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
            <Route path="/Coordinacion" element={<Coordinacion />} />
            <Route path="/portal-estudiantes" element={<MiEscuela />} />
            <Route path="/becas-academicas" element={<Becas />} />
            <Route path="/Becas" element={<Calendario />} />
            <Route path="/InformacionEstadistica" element={<InformacionEstadistica />} />
            <Route path="/Organigrama" element={<Organigrama />} />
            <Route path="/promocion-institucional" element={<PromocioIntitucional />} />
            <Route path="/ver-documento-promocion/:title" element={<PdfPromocionInstitucional />} />
          </Route>
          <Route path="*" element={<Page_404 />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
