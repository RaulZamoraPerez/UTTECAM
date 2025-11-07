import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react";

const data = {
  id: "seccion2",
  titulo: "Sistema de gestion de calidad",
  subTitulo: " instrucciones de trabajo",

  subCarpetas: [
    {
      title: "IT Direccion de Extensión Universitaria",
      subcarpetas: [
        {
          title: "Prensa y Difusión",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Medios de Expresion.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Medios de Expresión.pdf",
            },
          ],
        },
        {
          title: "Dirección de Extensión Universitaria",
          documentos: [
            {
              id: "doc2",
              titulo: "IT Actividades de Extension Universitaria.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades de Extension Universitaria con la Comunidad.pdf",
            },
          ],
        },
        {
          title: "Servicio Médico",
          documentos: [
            {
              id: "doc3",
              titulo: "IT Atención y Preservacion de la Salud.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Atención y Preservación de la Salud.pdf",
            },
          ],
        },
        {
          title: "Actividades Culturales y Deportivas",
          documentos: [
            {
              id: "doc4",
              titulo: "IT Actividades Culturales y Deportivas.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades Culturales y Deportivas.pdf",
            },
          ],
        },
        {
          title: "Subdirección de Difusión y Divulgación Universitaria",
          documentos: [
            {
              id: "doc5",
              titulo: "IT Difusión y Divulgación.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Difusion y Divulgacion.pdf",
            },
            {
              id: "doc6",
              titulo: "Matriz de Comunicación.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Matriz de Comunicación.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Subdirección de Servicios Escolares",
      subcarpetas: [
        {
          title: "Servicios Bibliotecarios",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Servicios Bibliotecarios.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios Bibliotecarios.pdf",
            },
          ],
        },

        {
          title: "Servicios Estudiantiles",
          documentos: [
            {
              id: "doc2",
              titulo:
                "IT Seguimiento a Convocatorias de Becas Internas y Externas para Estudiantes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Seguimiento a Convocatorias de Becas Internas y Externas para Estudiaantes.pdf",
            },
          ],
        },
        {
          title: "Servicios Escolares",
          documentos: [
            {
              id: "doc3",
              titulo: "IT Tramite de Titulo Profesional Electronico.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Tramite de Titulo Electronico.pdf",
            },
            {
              id: "doc4",
              titulo: "IT Inscripción de Estudiantes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Inscripcion de Estudiantes.pdf",
            },
            {
              id: "doc5",
              titulo: "IT Acto Protocolario.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Acto Protocolario.pdf",
            },
          ],
        },
        {
          title: "Subdireccion de Servicios Escolares ",
          documentos: [
            {
              id: "doc6",
              titulo:
                "IT Evaluación de los Servicios Académicos y de Apoyo a los Estudiantes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Evaluación de los Servicios Académicos y de Apoyo a los Estudiantes.pdf",
            },
          ],
        },
      ],
    },

    {
      title: "IT Direccion de Administración y Finanzas",
      subcarpetas: [
        {
          title: "Recursos Financieros y Contabilidad",
          documentos: [
            {
              id: "doc1",
              titulo: "IT CONCILIACIÓN BANCARIA.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT CONCILIACION BANCARIA.pdf",
            },
            {
              id: "doc2",
              titulo:
                "IT Solicitud y Expedición de Cheques y/o Transferencia.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Solicitud y Expedición de Cheques y_o Transferencias Eléctronica Bancaria.pdf",
            },
          ],
        },
        {
          title: "Mantenimiento e Instalaciones",
          documentos: [
            {
              id: "doc3",
              titulo: "IT Mantenimiento a Instalaciones e Infraestructura.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Mantenimiento a Instalaciones e Infraestructura.pdf",
            },
            {
              id: "doc4",
              titulo: "IT Sistema de Gestión Ambiental Institucional.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Sistema de Gestion Ambiental Institucional.pdf",
            },
            {
              id: "doc5",
              titulo:
                "Control Operacional para el Uso Eficiente de la Energia.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control Operacional para el Uso Eficiente de la Energía Eléctrica.pdf",
            },
            {
              id: "doc6",
              titulo: "Control Operacional para el Uso Eficiente del Agua.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control Operacional para el Uso Eficiente del Agua.pdf",
            },
            {
              id: "doc7",
              titulo: "Control Operacional para la Recolección de Residuos.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control Operacional para la Recoleccion de Residuos.pdf",
            },
          ],
        },
        {
          title: "Recursos Humanos",
          documentos: [
            {
              id: "doc8",
              titulo: "IT Capacitacion.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Capacitacion.pdf",
            },
            {
              id: "doc9",
              titulo:
                "IT Reclutamiento, Selección y Contratación de Personal.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Reclutamiento, Seleccion y Contratacion de Personal.pdf",
            },
          ],
        },
        {
          title: "Programación y Presupuesto",
          documentos: [
            {
              id: "doc10",
              titulo: "IT Asignación y Comprobación de Viaticos.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignacion y Comprobacion de Viaticos.pdf",
            },
            {
              id: "doc11",
              titulo: "IT Asignación Presupuestal.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignación Presupuestal.pdf",
            },
          ],
        },
        {
          title: "Recursos Materiales y Servicios Generales",
          documentos: [
            {
              id: "doc12",
              titulo: "IT Adquisición de Materiales.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Adquisición de Materiales.pdf",
            },
          ],
        },
        {
          title: "Subdirección de  Servicios Administrativos",
          documentos: [
            {
              id: "doc13",
              titulo:
                "IT Prestamo de Auditorios para la realización de eventos institucionales.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Prestamo de Auditorios para la realizacion de eventos institucionales.pdf",
            },
            {
              id: "doc14",
              titulo:
                "IT Prestamo y control de unidades del parque vehicular.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Prestamo y control de unidades del parque vehicular.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Abogado General",
      documentos: [
        {
          id: "doc1",
          titulo: "IT Requisitos Legales.pdf",
          archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Requisitos Legales.pdf",
        },
        {
          id: "doc2",
          titulo: "IT Matriz de requisitos legales ambientales.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/Matriz de requisitos legales ambientales.pdf",
        },
        {
          id: "doc3",
          titulo: "IT Matriz Institucional de requisitos legales.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/Matriz Institucional de requisitos legales.pdf",
        },
      ],
    },

    {
      title: "IT Secretaria Academica",
      subcarpetas: [
        {
          title: "Apoyo Psicopedagógico",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Apoyo Psicopedagógico.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicio de Apoyo Psicopedagógico.pdf",
            },
          ],
        },
        {
          title: "PIT",
          documentos: [
            {
              id: "doc3",
              titulo:
                "IT Coordinación del Programa Institucional de Tutorias_PIT.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Coordinación del Programa Institucional de Tutorias (PIT).pdf",
            },
          ],
        },
        {
          title: "Secretaria Académica",
          documentos: [
            {
              id: "doc4",
              titulo: "IT Administración del Proceso Enseñanza Apredizaje.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Administración del Proceso Enseñanza Apredizaje.pdf",
            },
            {
              id: "doc5",
              titulo: "IT Asignación y seguimiento de estadias.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Asignación y Seguimiento de Estadias.pdf",
            },
            {
              id: "doc6",
              titulo: "IT PROGRAMACIÓN CUATRIMESTRAL.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT PROGRAMACIÓN CUATRIMESTRAL.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Secretaria de Vinculación",
      subcarpetas: [
        {
          title: "Practicas y Estadías",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Gestión de Visitas Industriales.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Visitas Industriales.pdf",
            },
            {
              id: "doc2",
              titulo: "IT Gestión de Estadias.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Estadías.pdf",
            },
            {
              id: "doc3",
              titulo:
                "Protocolo de Acción Situaciones Potenciales de Emergencia.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Situaciones Potenciales de Emergencia en Estadias y SS.PDF",
            },
            {
              id: "doc4",
              titulo: "IT Servicio Social.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicio Social.pdf",
            },
          ],
        },
        {
          title: "Investigación y Desarrollo",
          documentos: [
            {
              id: "doc5",
              titulo:
                "IT Actividades de Investigación, Innovación y Desarrollo Tecnologico.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Actividades de Investigación, Innovación y Desarrollo Tecnológico.pdf",
            },
            {
              id: "doc6",
              titulo: "IT Servicios Tecnologicos.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Servicios Tecnológicos.pdf",
            },
          ],
        },
        {
          title: "Educación Continua",
          documentos: [
            {
              id: "doc7",
              titulo: "IT Educcion Continua.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Educacion Continua.pdf",
            },
          ],
        },
        {
          title: "Desempeño de Egresados",
          documentos: [
            {
              id: "doc8",
              titulo: "IT Bolsa de Trabajo.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Bolsa de Trabajo.pdf",
            },
            {
              id: "doc9",
              titulo: "IT DESEMPEÑO DE EGRESADOS.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT DESEMPEÑO DE EGRESADOS.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Subdirección de Planificación y Evaluación",
      subcarpetas: [
        {
          title: "Servicios TIC",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Servicios TIC.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios TIC.pdf",
            },
          ],
        },
        {
          title: "Sistema Integral de Gestión",
          documentos: [
            {
              id: "doc2",
              titulo: "Manual Sistema Integral de Gestión.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Manual Sistema Integral de Gestión.pdf",
            },
            {
              id: "doc3",
              titulo: "Información Documentada.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/INFORMACIÓN DOCUMENTADA.pdf",
            },
            {
              id: "doc4",
              titulo: "Auditorías Internas.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/AUDITORÍAS INTERNAS.pdf",
            },
            {
              id: "doc5",
              titulo: "Recursos de seguimiento y medición.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/RECURSOS DE SEGUIMIENTO Y MEDICIÓN.pdf",
            },
            {
              id: "doc6",
              titulo: "Control de las Salidas No Conformes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control de las Salidas No Conformes.pdf",
            },
            {
              id: "doc7",
              titulo:
                "Procedimiento Mandatorio No Conformidad y Acción Correctiva.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Procedimiento Mandatorio No Conformidad y Acción Correctiva.pdf",
            },
            {
              id: "doc8",
              titulo: "Matriz de Roles y Responsabilidades.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Matriz de Roles y Responsabilidades.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Contraloria Interna",
      documentos: [
        {
          id: "doc1",
          titulo: "IT Gestión de Quejas y Sugerencias.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Quejas y Sugerencias.pdf",
        },
        {
          id: "doc2",
          titulo:
            "Procedimiento para el funcionamiento del Comité de Control y Desempeño Institucional.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/IT Procedimiento para el funcionamiento del Comité de Control y Desempeño Institucional.pdf",
        },
      ],
    },
  ],
};
export const Secciones = () => {
  return (
    <div className="w-full max-w-6xl mx-auto pt-3 px-4 sm:px-6">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-10">
        <div className="space-y-4">
          {data.subCarpetas.map((nivel1, index) => (
            <Carpeta key={index} carpeta={nivel1} nivel={1} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Carpeta = ({ carpeta, nivel }: any) => {
  const [abierto, setAbierto] = useState(false);
  const tieneSub = carpeta.subcarpetas?.length > 0;
  const tieneDocs = carpeta.documentos?.length > 0;

  const paddingClasses : any= {
    1: "pl-4",
    2: "pl-6",
    3: "pl-8",
    4: "pl-10",
    5: "pl-12",
  };

  return (
    <div className={`transition-all ${paddingClasses[nivel] || "pl-12"}`}>
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex flex-wrap items-center w-full text-left bg-white hover:bg-slate-100 border border-slate-300 rounded-xl px-4 py-3 shadow-sm transition-all"
      >
        {abierto ? (
          <ChevronDown size={18} className="text-slate-600 mr-2" />
        ) : (
          <ChevronRight size={18} className="text-slate-600 mr-2" />
        )}
        <Folder size={20} className="text-yellow-500 mr-3" />
        <span className="text-slate-800 font-medium break-words">{carpeta.title}</span>
      </button>

      {abierto && (
        <div className="mt-3 ml-2 sm:ml-6 pl-3 sm:pl-4 border-l-2 border-dashed border-slate-300 space-y-3">
          {tieneDocs &&
            carpeta.documentos.map((doc: any) => (
              <a
                key={doc.id}
                href={encodeURI(doc.archivo)}
                download
                rel="noopener noreferrer"
                className="flex items-center text-blue-800 hover:text-blue-900 transition-colors group"
              >
                <FileText
                  size={18}
                  className="mr-2 text-blue-500 group-hover:text-blue-700"
                />
                <span className="underline underline-offset-2 decoration-blue-300 group-hover:decoration-blue-500 break-words">
                  {doc.titulo}
                </span>
              </a>
            ))}

          {tieneSub &&
            carpeta.subcarpetas.map((sub: any, idx: any) => (
              <Carpeta key={idx} carpeta={sub} nivel={nivel + 1} />
            ))}
        </div>
      )}
    </div>
  );
};