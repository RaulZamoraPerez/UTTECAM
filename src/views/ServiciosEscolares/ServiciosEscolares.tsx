import ServicioCard from '@/components/ServiceCard';
import {BookOpen, FileCheck, FileText, GraduationCap, Hospital, IdCard, RefreshCcw, Scroll} from 'lucide-react'
import type { ServicioCardProps } from '../../types/servicesType';


export default function ServiciosEscolares() {


  const servicios: ServicioCardProps[] = [
    {
      title: "Inscripción",
      description: "Proceso de registro para nuevo ingreso a la institución.",
      icon: <FileText />,
    },
    {
      title: "Reinscripción",
      description: "Actualización de datos y continuidad de estudios.",
      icon: <RefreshCcw />,
    },
    {
      title: "Constancias y Kardex",
      description: "Emisión de documentos académicos oficiales.",
      icon: <FileCheck />,
    },
    {
      title: "Certificado de Estudios",
      description: "Documento oficial del historial académico completo.",
      icon: <GraduationCap />,
    },
    {
      title: "Carta Pasante",
      description: "Documento que acredita el término de estudios.",
      icon: <Scroll />,
    },
    {
      title: "IMSS",
      description: "Alta o baja de servicios del seguro social estudiantil.",
      icon: <Hospital />,
    },
    {
      title: "Credencialización",
      description: "Trámite y renovación de credencial estudiantil.",
      icon: <IdCard />,
    },
    {
      title: "Título Profesional Electrónico",
      description: "Trámite para la obtención del título profesional.",
      icon: <BookOpen />,
    },
  ];

  return (
    <div className="mb-10">
      <section className="bg-white py-12 px-4 p-auto">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Servicios Escolares</h2>
        <p className="text-gray-700 leading-relaxed text-center ">El departamento de Servicios Escolares, brinda atención a los estudiantes y egresados de la Universidad Tecnológica de Tecamachalco, con respecto a los servicios que demanden durante su ingreso, permanencia y egreso.</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-items-center lg:mx-30 mt-10">
          {servicios.map((servicio, idx) => (
            <ServicioCard key={idx} {...servicio} />
          ))}
        </div>
      </section>
    </div>
  )
}