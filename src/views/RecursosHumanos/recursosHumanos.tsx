import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

const datos = [
    {
        id: "1",
        titulo: "Profesor Asociado “A”",
        documentos: [
            { id: "doc1", titulo: "Programa Educativo de Mecatrónica", archivo: "/ProfesorAsociadoA/Profesor Asociado A_ P.E. de Mecatrónica.pdf" },
            { id: "doc2", titulo: "Programa Educativo de Alimentos", archivo: "/ProfesorAsociadoA/Profesor Asociado A_ P.E. de Alimentos.pdf" },
            { id: "doc3", titulo: "Ingeniería Electromecánica", archivo: "/ProfesorAsociadoA/Ingeniería Electromecánica.pdf" },
            { id: "doc4", titulo: "Maestría en Ciencias de la Electrónica", archivo: "/ProfesorAsociadoA/Maestría en Ciencias de la Electrónica.pdf" },
        ],
    },
    {
        id: "2",
        titulo: "Profesor de Asignatura",
        documentos: [
            { id: "doc4", titulo: "Programa Educativo de contaduría", archivo: "/ProfesorDeAsignatura/Contaduría.pdf" },
            { id: "doc5", titulo: "Programa Educativo Negocios y Mercadotecnia", archivo: "/ProfesorDeAsignatura/Negocios y Mercadotecnia.pdf" },
            { id: "doc6", titulo: "Programa Educativo Tecnologías de la Información", archivo: "/ProfesorDeAsignatura/Tecnologías de la Información.pdf" },
            { id: "doc7", titulo: "Programa Educativo Ingeniería Industrial", archivo: "/ProfesorDeAsignatura/Ingeniería Industrial.pdf" },
            { id: "doc8", titulo: "Programa Educativo Mecatrónica", archivo: "/ProfesorDeAsignatura/Mecatrónica.pdf" },
        ],
    },
    {
        id: "3",
        titulo: "Convocatorias para Profesor de Asignatura B",
        documentos: [
            { id: "doc9", titulo: "Programa Educativo de Agricultura Sustentable y Protegida", archivo: "/ConvocatoriasParaProfesordeAsignaturaB/Agricultura.pdf" },
            { id: "doc10", titulo: "Convocatorias para Profesor de Asignatura B", archivo: "/ConvocatoriasParaProfesordeAsignaturaB/Convocatorias para Profesor de Asignatura B.pdf" },
        ],
    },
];
export default function RecursosHumanos() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="Convocatorias para Profesor"
            descripcion="Explora las convocatorias y recursos disponibles para el desarrollo profesional del personal docente, organizados por año y tipo de documento."
        />
    )
}
