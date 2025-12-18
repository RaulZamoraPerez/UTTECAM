import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicioCard from '@/components/ServiceCard';
import { Spinner } from '@/components/Spinner';
import { BookOpen, FileCheck, FileText, GraduationCap, Hospital, IdCard, RefreshCcw, Scroll, Users, X } from 'lucide-react'
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
    icon: <FileText />,
    active: false,
    href: "/reinscripcion",
  },
  {
    title: "Reinscripción a Ingeniería/Licenciatura (7º cuatrimestre)",
    description: "Actualización de datos y continuidad de estudios.",
    icon: <RefreshCcw />,
    active: false,
  },
  {
    title: "Constancias y Kardex",
    description: "Emisión de documentos académicos oficiales.",
    icon: <FileCheck />,
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
    icon: <Scroll />,
    active: false,
    href: "/carta-pasante",
  },
  {
    title: "IMSS",
    description: "Alta o baja de servicios del seguro social estudiantil.",
    icon: <Hospital />,
    active: false,
    href: "/imss",
  },
  {
    title: "Credencialización",
    description: "Trámite y renovación de credencial estudiantil.",
    icon: <IdCard />,
    active: false,
    href: "/reposicion-credencial",
  },
  {
    title: "Título Profesional Electrónico",
    description: "Trámite para la obtención del título profesional.",
    icon: <BookOpen />,
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
  const [tituloModal, setTituloModal] = useState("Opciones de Reinscripción");
  const [subtituloModal, setSubtituloModal] = useState("Selecciona el tipo de reinscripción que corresponda a tu situación");
  const [opcionesReinscripcion, setOpcionesReinscripcion] = useState<OpcionReinscripcionCard[]>([]);

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
          if (response.data.subtitulo) {
            setSubtituloModal(response.data.subtitulo);
          }
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
        <section className="bg-white py-12 px-4">
          <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Servicios Escolares</h2>
          <div className="flex justify-center items-center py-20">
            <Spinner text="Cargando servicios..." />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <section className="bg-white py-12 px-4">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">{titulo}</h2>
        <p className="text-gray-700 leading-relaxed text-center mb-10">
          {subtitulo}
        </p>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:mx-30">
          {servicios.map((servicio, idx) => {
            // Si tiene href y NO es reinscripción, usa Link
            if (servicio.href && servicio.title !== "Reinscripción a Ingeniería/Licenciatura (7º cuatrimestre)") {
              return (
                <Link 
                  key={idx}
                  to={servicio.href}
                  className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg w-full max-w-[350px]"
                >
                  <ServicioCard {...servicio} />
                </Link>
              );
            }
            
            // Si es reinscripción, mantiene el onClick para el modal
            return (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(servicio.title)} 
                className={`cursor-pointer transition-all duration-200 w-full max-w-[350px] ${
                  servicio.active ? 'scale-105 shadow-lg' : 'hover:opacity-80'
                }`}
              >
                <ServicioCard {...servicio} />
              </div>
            );
          })}
        </div>

        {/* Modal flotante para las subcards de Reinscripción */}
        {activeService && activeService.title === "Reinscripción a Ingeniería/Licenciatura (7º cuatrimestre)" && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-200 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-amber-100 rounded-full transition-colors z-10 border border-amber-300"
              >
                <X className="w-6 h-6 text-amber-700" />
              </button>

              {/* Contenido del modal */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-amber-700 mb-2 text-center">
                  {tituloModal}
                </h3>
                <p className="text-amber-800 text-center mb-8">
                  {subtituloModal}
                </p>
                
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 justify-items-center items-stretch">
                  {opcionesReinscripcion.map((opcion) => (
                    <div 
                      key={opcion.id} 
                      onClick={() => handleSubcardClick(opcion.archivoUrl)}
                      className="transform transition-all duration-300 hover:scale-105 cursor-pointer w-full max-w-[350px] h-[200px]"
                    >
                      <ServicioCard 
                        title={opcion.titulo}
                        description={opcion.subtitulo}
                        icon={<Users />}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Modal para mostrar el PDF - Adaptado del componente PdfBecasExcencion */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden max-h-[95vh] max-w-[95vw] shadow-lg">
            <button 
              className="absolute top-2 right-2 bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
              onClick={closePdfModal}
            >
              ✕
            </button>
            <iframe 
              src={selectedPdf.pdfSrc} 
              title={selectedPdf.title} 
              className="w-[80vw] h-[100vh]" 
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  )
}