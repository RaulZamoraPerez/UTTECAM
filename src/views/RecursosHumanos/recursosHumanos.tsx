import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

    
const datos = [
   
    {
        id: "1",
        titulo: "Convocatorias para Profesor de Asignatura SEP-DIC-2025",
        documentos: [
            { id: "doc1", titulo: "IT Gestión de Quejas y Sugerencias.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Quejas y Sugerencias.pdf" },
            { id: "doc2", titulo: "IT Actividades Culturales y Deportivas.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades Culturales y Deportivas.pdf" },
            { id: "doc3", titulo: "IT Actividades de Extension Universitaria.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades de Extension Universitaria.pdf" },
            { id: "doc4", titulo: "IT Actividades de Investigación, Innovación y Desarrollo Tecnologico.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades de Investigación, Innovación y Desarrollo Tecnologico.pdf" },
            { id: "doc5", titulo: "IT Acto Protocolario.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Acto Protocolario.pdf" },
            { id: "doc6", titulo: "IT Administración del Proceso Enseñanza Apredizaje.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Administración del Proceso Enseñanza Apredizaje.pdf" },
            { id: "doc7", titulo: "IT Adquisición de Materiales.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Adquisición de Materiales.pdf" },
            { id: "doc8", titulo: "IT Apoyo Psicopedagógico.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Apoyo Psicopedagógico.pdf" },
            { id: "doc9", titulo: "IT Asignación Presupuestal.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignación Presupuestal.pdf" },
            { id: "doc10", titulo: "IT Asignación y Comprobación de Viaticos.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignación y Comprobación de Viaticos.pdf" },
            { id: "doc11", titulo: "IT Asignación y seguimiento de estadias.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignación y seguimiento de estadias.pdf" },
            { id: "doc12", titulo: "IT Atención y Preservación de la Salud.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Atención y Preservación de la Salud.pdf" },
            { id: "doc13", titulo: "It Bolsa de Trabajo.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/It Bolsa de Trabajo.pdf" },
            { id: "doc14", titulo: "IT Capacitación .pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Capacitación .pdf" },
            { id: "doc15", titulo: "IT Captación de Aspirantes.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Captación de Aspirantes.pdf" },
            { id: "doc16", titulo: "IT Coordinación del Programa Institucional de Tutorias.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Coordinación del Programa Institucional de Tutorias.pdf" },
            { id: "doc17", titulo: "IT DESEMPEÑO DE EGRESADOS.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT DESEMPEÑO DE EGRESADOS.pdf" },
            { id: "doc18", titulo: "IT Difusión y Divulgación .pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Difusión y Divulgación .pdf" },
            { id: "doc19", titulo: "IT Educcion Continua.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Educcion Continua.pdf" },
            { id: "doc20", titulo: "IT Evaluación de los Servicios Académicos y de Apoyo a los Estudiantes.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Evaluación de los Servicios Académicos y de Apoyo a los Estudiantes.pdf" },
            { id: "doc21", titulo: "IT Gestión de Estadias.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Estadias.pdf" },
            { id: "doc22", titulo: "IT Gestión de Visitas Industriales.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Visitas Industriales.pdf" },
            { id: "doc23", titulo: "IT Inscripción de Estudiantes.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Inscripción de Estudiantes.pdf" },
            { id: "doc24", titulo: "IT Mantenimiento a Instalaciones e Infraestructura.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Mantenimiento a Instalaciones e Infraestructura.pdf" },
            { id: "doc25", titulo: "IT Medios de Expresión .pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Medios de Expresión .pdf" },
            { id: "doc26", titulo: "IT Prestamo de Auditorios para la realización de eventos institucionales .pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Prestamo de Auditorios para la realización de eventos institucionales .pdf" },
            { id: "doc27", titulo: "IT Prestamo y control de unidades del parque vehicular.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Prestamo y control de unidades del parque vehicular.pdf" },
            { id: "doc28", titulo: "IT PROGRAMACIÓN CUATRIMESTRAL.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT PROGRAMACIÓN CUATRIMESTRAL.pdf" },
            { id: "doc29", titulo: "IT Reclutamiento, Selección y Contratación de Personal.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Reclutamiento, Selección y Contratación de Personal.pdf" },
            { id: "doc30", titulo: "IT Requisitos Legales.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Requisitos Legales.pdf" },
            { id: "doc31", titulo: "IT Seguimiento a Convocatorias de Becas Internas y Externas para Estudiaantes.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Seguimiento a Convocatorias de Becas Internas y Externas para Estudiaantes.pdf" },
            { id: "doc32", titulo: "IT Servicio Social.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicio Social.pdf" },
            { id: "doc33", titulo: "IT Servicios Bibliotecarios.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios Bibliotecarios.pdf" },
            { id: "doc34", titulo: "IT Servicios Tecnologicos.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios Tecnologicos.pdf" },
            { id: "doc35", titulo: "IT Servicios TIC.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios TIC.pdf" },
            { id: "doc36", titulo: "IT Sistema de Gestión Ambiental Institucional.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Sistema de Gestión Ambiental Institucional.pdf" },
            { id: "doc37", titulo: "IT Solicitud y Expedición de Cheques y-o Transferencia.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Solicitud y Expedición de Cheques y-o Transferencia.pdf" },
            { id: "doc38", titulo: "IT Tramite de Titulo Profesional Electronico.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Tramite de Titulo Profesional Electronico.pdf" },
            { id: "doc39", titulo: "IT DEL USO DE LABORATORIOS, TALLERES E INVERNADEROS 2023.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT DEL USO DE LABORATORIOS, TALLERES E INVERNADEROS 2023.pdf" },
            { id: "doc40", titulo: "Procedimiento para el funcionamiento del Comité de Control y Desempeño Institucional.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/Procedimiento para el funcionamiento del Comité de Control y Desempeño Institucional.pdf" },
            { id: "doc41", titulo: "Protocolo de Acción Situaciones Potenciales de Emergencia.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/Protocolo de Acción Situaciones Potenciales de Emergencia.pdf" },
            { id: "doc42", titulo: "REGLAMENTO USO DE LABORATORIO TI.docx", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/REGLAMENTO USO DE LABORATORIO TI.docx" },
            { id: "doc43", titulo: "protocolo de actuacion en caso de emergencias.pdf", archivo: "/SIG/INSTRUCCIONES DE TRABAJO/protocolo de actuacion en caso de emergencias.pdf" },
            
        ],
    },
] 
export default function RecursosHumanos() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="Convocatorias para Profesor"
            descripcion="Explora las convocatorias y recursos disponibles para el desarrollo profesional del personal docente, organizados por año y tipo de documento."
        />
    )
}
