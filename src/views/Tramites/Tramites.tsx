import { useState } from 'react';
import ServicioCard from '@/components/ServiceCard';
import {BookOpen, FileCheck, FileText, GraduationCap, Hospital, IdCard, RefreshCcw, Scroll, Users, UserCheck, X} from 'lucide-react'
import type { ServicioCardProps } from '../../types/servicesType';

// Extendemos el tipo para incluir la propiedad active
interface ServicioExtendido extends ServicioCardProps {
  active: boolean;
}

export default function ServiciosEscolares() {
  const [servicios, setServicios] = useState<ServicioExtendido[]>([
    {
      title: "Inscripción",
      description: "Proceso de registro para nuevo ingreso a la institución.",
      icon: <FileText />,
      active: false,
    },
    {
      title: "Reinscripción",
      description: "Actualización de datos y continuidad de estudios.",
      icon: <RefreshCcw />,
      active: false,
    },
    {
      title: "Constancias y Kardex",
      description: "Emisión de documentos académicos oficiales.",
      icon: <FileCheck />,
      active: false,
    },
    {
      title: "Certificado de Estudios",
      description: "Documento oficial del historial académico completo.",
      icon: <GraduationCap />,
      active: false,
    },
    {
      title: "Carta Pasante",
      description: "Documento que acredita el término de estudios.",
      icon: <Scroll />,
      active: false,
    },
    {
      title: "IMSS",
      description: "Alta o baja de servicios del seguro social estudiantil.",
      icon: <Hospital />,
      active: false,
    },
    {
      title: "Credencialización",
      description: "Trámite y renovación de credencial estudiantil.",
      icon: <IdCard />,
      active: false,
    },
    {
      title: "Título Profesional Electrónico",
      description: "Trámite para la obtención del título profesional.",
      icon: <BookOpen />,
      active: false,
    },
  ]);

  const [selectedPdf, setSelectedPdf] = useState<{title: string, description: string, pdfSrc: string} | null>(null);

  const reinscripcionSubcards: ServicioCardProps[] = [
    {
      title: "Alumnos de la UTTecam",
      description: "Reinscripción para estudiantes actuales de la Universidad Tecnológica de Tecamachalco.",
      icon: <UserCheck />,
    },
    {
      title: "Alumnos provenientes de generaciones anteriores y de otras Universidades Tecnológicas",
      description: "Proceso especial para estudiantes de generaciones pasadas o transferencias.",
      icon: <Users />,
    },
  ];

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

  const handleSubcardClick = (title: string) => {
    let pdfData = null;
    
    if (title === "Alumnos de la UTTecam") {
      pdfData = {
        title: "Reinscripción - Alumnos UTTecam",
        description: "Proceso de reinscripción para estudiantes actuales",
        pdfSrc: "tramites/Alumnos de la UTTecamv2.pdf"
      };
    } else if (title === "Alumnos provenientes de generaciones anteriores y de otras Universidades Tecnológicas") {
      pdfData = {
        title: "Reinscripción - Alumnos de otras instituciones",
        description: "Proceso especial para estudiantes de generaciones pasadas o transferencias",
        pdfSrc: "tramites/Alumnos provenientes de generaciones anteriores y de otras Universidades Tecnologicas.pdf"
      };
    }
    
    if (pdfData) {
      setSelectedPdf(pdfData);
      // Cerrar el modal de reinscripción
      closeModal();
    }
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  // Encontrar el servicio activo
  const activeService = servicios.find(servicio => servicio.active);

  return (
    <div className="mb-10">
      <section className="bg-white py-12 px-4">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Servicios Escolares</h2>
        <p className="text-gray-700 leading-relaxed text-center mb-10">
          El departamento de Servicios Escolares, brinda atención a los estudiantes y egresados de la Universidad Tecnológica de Tecamachalco, con respecto a los servicios que demanden durante su ingreso, permanencia y egreso.
        </p>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:mx-30">
          {servicios.map((servicio, idx) => (
            <div 
              key={idx} 
              onClick={() => handleServiceClick(servicio.title)} 
              className={`cursor-pointer transition-all duration-200 ${
                servicio.active ? 'scale-105 shadow-lg' : 'hover:opacity-80'
              }`}
            >
              <ServicioCard {...servicio} />
            </div>
          ))}
        </div>

        {/* Modal flotante para las subcards de Reinscripción */}
        {activeService && activeService.title === "Reinscripción" && (
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
                  Opciones de Reinscripción
                </h3>
                <p className="text-amber-800 text-center mb-8">
                  Selecciona el tipo de reinscripción que corresponda a tu situación
                </p>
                
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 justify-items-center items-stretch">
                  {reinscripcionSubcards.map((subcard, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleSubcardClick(subcard.title)}
                      className="transform transition-all duration-300 hover:scale-105 cursor-pointer w-full max-w-[350px] h-[200px]"
                    >
                      <ServicioCard {...subcard} />
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