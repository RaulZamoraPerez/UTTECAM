import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

const datos = [
    {
        id: "1",
        titulo: "Avisos de Privacidad Integrales",
        documentos: [
            { id: "doc1", titulo: "1. Aviso integral Datos Personales de la Plantilla de Personal Administrativo.pdf", archivo: "/Avisos-Privacidad/1. Aviso integral Datos Personales de la Plantilla de Personal Administrativo.pdf" },
            { id: "doc3", titulo: "3. Aviso integral  Datos de Alumnos que se Encuentran Realizando Su Estada .pdf", archivo: "/Avisos-Privacidad/3. Aviso integral  Datos de Alumnos que se Encuentran Realizando Su Estada .pdf" },
            { id: "doc5", titulo: "5. Aviso integral datos de la Aplicacin de pruebas Psicomtricas a los aspirantes y aprendientes.pdf", archivo: "/Avisos-Privacidad/5. Aviso integral datos de la Aplicacin de pruebas Psicomtricas a los aspirantes y aprendientes.pdf" },
            { id: "doc7", titulo: "7. Aviso integral Datos Personales de la Base de Datos de Alumnos Inscritos .pdf", archivo: "/Avisos-Privacidad/7. Aviso integral Datos Personales de la Base de Datos de Alumnos Inscritos .pdf" },
            { id: "doc9", titulo: "9. Aviso integral Datos Personales de los usuarios del buzn de quejas y sugerencias.pdf", archivo: "/Avisos-Privacidad/9. Aviso integral Datos Personales de los usuarios del buzn de quejas y sugerencias.pdf" },
            { id: "doc11", titulo: "11. Aviso integral Datos Personales Plantilla de Personal Docente .pdf", archivo: "/Avisos-Privacidad/11. Aviso integral Datos Personales Plantilla de Personal Docente .pdf" },
            { id: "doc13", titulo: "13. Aviso integral Datos sobre la Capacitacin Anual .pdf", archivo: "/Avisos-Privacidad/13. Aviso integral Datos sobre la Capacitacin Anual .pdf" },
        ],
    },
    {
        id: "2",
        titulo: "Avisos de Privacidad Simplificados",
        documentos: [
            { id: "doc2", titulo: "2. AvisoSimplificado_Plantilla de Personal Administrativo.pdf", archivo: "/Avisos-Privacidad/2. AvisoSimplificado_Plantilla de Personal Administrativo.pdf" },
            { id: "doc4", titulo: "4. AvisoSimplificado_Alumnos que se Encuentran Realizando Su Estada .pdf", archivo: "/Avisos-Privacidad/4. AvisoSimplificado_Alumnos que se Encuentran Realizando Su Estada .pdf" },
            { id: "doc6", titulo: "6. AvisoSimplificado_Aplicacin de pruebas Psicomtricas a los aspirantes y aprendientes .pdf", archivo: "/Avisos-Privacidad/6. AvisoSimplificado_Aplicacin de pruebas Psicomtricas a los aspirantes y aprendientes .pdf" },
            { id: "doc8", titulo: "8. AvisoSimplificado_Alumnos Inscritos .pdf", archivo: "/Avisos-Privacidad/8. AvisoSimplificado_Alumnos Inscritos .pdf" },
            { id: "doc10", titulo: "10. AvisoSimplificado_usuarios del buzn de quejas y sugerencias .pdf", archivo: "/Avisos-Privacidad/10. AvisoSimplificado_usuarios del buzn de quejas y sugerencias .pdf" },
            { id: "doc12", titulo: "12. AvisoSimplificado_Datos Personales Plantilla de Personal Docente .pdf", archivo: "/Avisos-Privacidad/12. AvisoSimplificado_Datos Personales Plantilla de Personal Docente .pdf" },
            { id: "doc14", titulo: "14. AvisoSimplificado_Datos sobre la Capacitacin Anual .pdf", archivo: "/Avisos-Privacidad/14. AvisoSimplificado_Datos sobre la Capacitacin Anual .pdf" },
        ]
    }
];

export default function AvisosPrivacidad() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="Avisos de Privacidad"
            descripcion="Consulta los Avisos de Privacidad Integrales y Simplificados de la Universidad Tecnológica de Tecamachalco."
        />
    );
}
