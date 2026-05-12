import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import ServicioCard from '@/components/ServiceCard';
import { Spinner } from '@/components/Spinner';
import {
  UserPlus, RefreshCcw, FileText, GraduationCap,
  ClipboardCheck, HeartPulse, CreditCard, BookMarked,
  Users, X
} from 'lucide-react'
import type { ServicioCardProps } from '../../types/servicesType';
import { obtenerTramitesInfo } from '@/services/tramites.service';
import { obtenerOpcionesReinscripcionInfo, obtenerOpcionesReinscripcionCards, type OpcionReinscripcionCard } from '@/services/opcionesReinscripcion.service';

// Extendemos el tipo para incluir la propiedad active y href
interface ServicioExtendido extends ServicioCardProps {
  active: boolean;
  href?: string | null;
}

// Servicios estáticos
const serviciosEstaticos: ServicioExtendido[] = [
  {
    title: "Inscripción",
    description: "Proceso de registro para nuevo ingreso a la institución.",
    icon: <UserPlus />,
    active: false,
    href: "/reinscripcion",
  },
  {
    title: "Reinscripción a cuatrimestre por iniciar",
    description: "",
    icon: <RefreshCcw />,
    active: false,
  },
  {
    title: "Constancias y Kardex",
    description: "Emisión de documentos académicos oficiales.",
    icon: <ClipboardCheck />,
    active: false,
    href: "/constancia-kardex",
  },
  {
    title: "Certificado de Estudios",
    description: "Documento oficial del historial académico completo.",
    icon: <GraduationCap />,
    active: false,
    href: "/certificado-estudios",
  },
  {
    title: "Carta Pasante",
    description: "Documento que acredita el término de estudios.",
    icon: <FileText />,
    active: false,
    href: "/carta-pasante",
  },
  {
    title: "IMSS",
    description: "Alta o baja de servicios del seguro social estudiantil.",
    icon: <HeartPulse />,
    active: false,
    href: "/imss",
  },
  {
    title: "Credencialización",
    description: "Trámite y renovación de credencial estudiantil.",
    icon: <CreditCard />,
    active: false,
    href: "/reposicion-credencial",
  },
  {
    title: "Título Profesional Electrónico",
    description: "Trámite para la obtención del título profesional.",
    icon: <BookMarked />,
    active: false,
    href: "/tramite-titulo",
  },
];

export default function Tramites() {
  const [servicios, setServicios] = useState<ServicioExtendido[]>(serviciosEstaticos);
  const [titulo, setTitulo] = useState("Servicios Escolares");
  const [subtitulo, setSubtitulo] = useState("El departamento de Servicios Escolares, brinda atención a los estudiantes y egresados de la Universidad Tecnológica de Tecamachalco, con respecto a los servicios que demanden durante su ingreso, permanencia y egreso.");
  const [cargando, setCargando] = useState(true);
  
  // Estado para el modal de opciones de reinscripción
  const [tituloModal, setTituloModal] = useState("Mayo-Agosto 2026");
  const [opcionesReinscripcion, setOpcionesReinscripcion] = useState<OpcionReinscripcionCard[]>([]);
  // Controla si la mascota ya terminó de cargar para el fade-in
  const [mascotaCargada, setMascotaCargada] = useState(false);

  // Cargar título y subtítulo del backend
  useEffect(() => {
    const cargarInfo = async () => {
      try {
        const response = await obtenerTramitesInfo();
        
        if (response.success && response.data) {
          setTitulo(response.data.titulo);
          setSubtitulo(response.data.subtitulo);
        }
      } catch (err) {
        console.error('Error al cargar información de trámites:', err);
      } finally {
        setCargando(false);
      }
    };

    cargarInfo();
  }, []);

  // Cargar título y subtítulo del modal de opciones de reinscripción
  useEffect(() => {
    const cargarInfoModal = async () => {
      try {
        const response = await obtenerOpcionesReinscripcionInfo();
        
        if (response.success && response.data) {
          setTituloModal(response.data.titulo);
        }
      } catch (err) {
        console.error('Error al cargar información del modal de reinscripción:', err);
      }
    };

    cargarInfoModal();
  }, []);

  // Cargar opciones de reinscripción (cards del modal)
  useEffect(() => {
    const cargarOpciones = async () => {
      try {
        const response = await obtenerOpcionesReinscripcionCards();
        
        if (response.success && response.data) {
          setOpcionesReinscripcion(response.data);
        }
      } catch (err) {
        console.error('Error al cargar opciones de reinscripción:', err);
      }
    };

    cargarOpciones();
  }, []);

  const [selectedPdf, setSelectedPdf] = useState<{title: string, description: string, pdfSrc: string} | null>(null);

  const handleServiceClick = (clickedTitle: string) => {
    setServicios(prevServicios => 
      prevServicios.map(servicio => {
        if (servicio.title === clickedTitle) {
          // Toggle el estado active del servicio clickeado
          return { ...servicio, active: !servicio.active };
        } else {
          // Desactivar todos los demás servicios
          return { ...servicio, active: false };
        }
      })
    );
  };

  const closeModal = () => {
    setServicios(prevServicios => 
      prevServicios.map(servicio => ({ ...servicio, active: false }))
    );
  };

  const handleSubcardClick = (archivoUrl: string) => {
    // Abrir el archivo en una nueva pestaña
    window.open(archivoUrl, '_blank');
    // Cerrar el modal de reinscripción
    closeModal();
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  // Encontrar el servicio activo
  const activeService = servicios.find(servicio => servicio.active);

  // Mostrar spinner mientras carga
  if (cargando) {
    return (
      <div className="mb-10">
        {/* Hero section - estado de carga */}
        <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #d97706 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          <h2 className="relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 mb-4 text-center tracking-tight">
            Servicios Escolares
          </h2>
          <div className="flex justify-center items-center py-20">
            <Spinner text="Cargando servicios..." />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mb-10">
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-white pt-16 pb-4 px-4 overflow-hidden">
        {/* Patrón de puntos decorativo */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #d97706 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        {/* Orb decorativo superior derecho */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-orange-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-amber-200">
            Departamento Escolar
          </span>
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 mb-5 tracking-tight leading-tight">
            {titulo}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            {subtitulo}
          </p>
        </div>

        {/* ── Grid de tarjetas ── */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {servicios.map((servicio, idx) => {
              // Solo la carta de Reinscripción mantiene su funcionalidad de abrir el modal
              if (servicio.title === "Reinscripción a cuatrimestre por iniciar") {
                return (
                  <div
                    key={idx}
                    onClick={() => handleServiceClick(servicio.title)}
                    className={`cursor-pointer transition-all duration-300 w-full max-w-[220px] h-[190px] ${
                      servicio.active
                        ? "scale-105 drop-shadow-xl ring-2 ring-amber-400 ring-offset-2 rounded-2xl"
                        : "hover:scale-105 hover:drop-shadow-xl"
                    }`}
                  >
                    <ServicioCard {...servicio} />
                  </div>
                );
              }

              // Se comentan los links de los demás trámites para deshabilitarlos temporalmente
              return (
                <div
                  key={idx}
                  className="w-full max-w-[220px] h-[190px] opacity-50 grayscale-[0.7] pointer-events-none"
                >
                  {/* 
                  <Link 
                    to={servicio.href || "#"}
                    className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg w-full"
                  >
                  */}
                  <ServicioCard {...servicio} />
                  {/* 
                  </Link>
                  */}
                </div>
              );
            })}
          </div>
        </div>

        {/* Nota de servicios disponibles */}
        <p className="relative text-center text-xs text-gray-400 mt-8 mb-2">
          Los servicios en gris estarán disponibles próximamente.
        </p>
      </section>

      {/* ── Modal de Reinscripción ── */}
      {activeService && activeService.title === "Reinscripción a cuatrimestre por iniciar" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 sm:pt-16"
          style={{ backgroundColor: "rgba(0,0,0,0.60)", backdropFilter: "blur(6px)" }}
          onClick={closeModal}
        >
          {/* Wrapper overflow-visible — stopPropagation para no cerrar al clicar adentro */}
          <div
            className="relative max-w-2xl w-full"
            style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.40))" }}
            onClick={e => e.stopPropagation()}
          >

            {/* Mascota flotando en el borde superior-derecho — se muestra solo al cargar */}
            <img
              src="/tramites/motocle.png"
              alt="Mascota reinscripción"
              loading="eager"
              onLoad={() => setMascotaCargada(true)}
              className={`absolute -top-10 -right-2 w-28 h-28 sm:-top-14 sm:-right-6 sm:w-48 sm:h-48 object-contain z-30 animate-float pointer-events-none transition-opacity duration-500 ${
                mascotaCargada ? 'opacity-100' : 'opacity-0'
              }`}
            />

            <div className="relative bg-white rounded-3xl w-full max-h-[88vh] overflow-y-auto">

              {/* Botón cerrar — en la izquierda para no chocar con la mascota */}
              <button
                onClick={closeModal}
                className="absolute top-4 left-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg border border-gray-100 text-gray-500 hover:text-red-500 transition-all hover:scale-110"
              >
                <X className="w-4 h-4" />
              </button>

              {/* ── Header con gradiente + ola SVG ── */}
              <div className="relative bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 px-5 sm:px-8 pt-6 sm:pt-8 pb-0 rounded-t-3xl text-white overflow-hidden">
                {/* Orbs decorativos */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-4 right-10 w-28 h-28 bg-orange-300/20 rounded-full blur-2xl" />

                {/* Texto — margen derecho para no tapar la mascota */}
                <div className="relative pr-24 sm:pr-32 text-center pb-4">
                  <span className="inline-flex items-center gap-2 bg-white/25 text-white text-xs font-bold tracking-widest uppercase px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4 border border-white/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Reinscripción
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight drop-shadow-md">
                    {tituloModal}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">Cuatrimestre en curso</p>
                </div>

                {/* Ola SVG — transición fluida al body blanco */}
                <svg
                  viewBox="0 0 800 56"
                  className="w-full -mb-px"
                  preserveAspectRatio="none"
                  style={{ display: "block", height: "56px" }}
                >
                  <path d="M0,28 C150,56 350,0 550,30 C680,48 750,20 800,28 L800,56 L0,56 Z" fill="white" />
                </svg>
              </div>

              {/* ── Body del modal ── */}
              <div className="bg-white px-4 sm:px-8 pb-6 sm:pb-8 pt-3 rounded-b-3xl">

                {/* Card de fechas con acento lateral */}
                <div className="flex items-stretch rounded-2xl overflow-hidden border border-amber-200 mb-5 shadow-sm bg-gradient-to-r from-amber-50/80 to-orange-50/50">
                  <div className="w-1.5 flex-shrink-0 bg-gradient-to-b from-amber-400 to-orange-500" />
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-amber-200/50">
                      <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1.5">Periodo de reinscripción</p>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        El proceso para el cuatrimestre{" "}
                        <strong className="text-amber-700">Mayo-Agosto 2026</strong> será del{" "}
                        <strong className="text-amber-700">01 al 11 de mayo de 2026</strong>{" "}
                        a través del sistema de control escolar{" "}
                        <strong className="text-gray-800">"Mi Escuela"</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botón de instructivo */}
                <div className="flex justify-center mb-5 sm:mb-6">
                  <a
                    href="/tramites/Instructivo Reinscripción Mayo-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-black text-sm sm:text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                    style={{ background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)", boxShadow: "0 10px 30px rgba(245,158,11,0.45)" }}
                  >
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-2xl" />
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:-rotate-6 transition-transform duration-300" />
                    <span className="relative z-10 tracking-wide">Ver Instructivo de Reinscripción</span>
                  </a>
                </div>

                {/* Subcards (opciones adicionales) */}
                {opcionesReinscripcion.length > 0 && (
                  <>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                      <span className="text-amber-600 font-bold text-xs uppercase tracking-widest whitespace-nowrap px-2">Otras opciones</span>
                      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 justify-items-center">
                      {opcionesReinscripcion.map((opcion) => (
                        <div
                          key={opcion.id}
                          onClick={() => handleSubcardClick(opcion.archivoUrl)}
                          className="transition-all duration-300 hover:scale-105 cursor-pointer w-full max-w-[280px] h-[180px]"
                        >
                          <ServicioCard
                            title={opcion.titulo}
                            description={opcion.subtitulo}
                            icon={<Users />}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ── Modal PDF ── */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl overflow-hidden max-h-[95vh] max-w-[95vw] shadow-2xl border border-gray-200">
            <button
              className="absolute top-3 right-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 z-10 shadow-md"
              onClick={closePdfModal}
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={selectedPdf.pdfSrc}
              title={selectedPdf.title}
              className="w-[80vw] h-[90vh]"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
}