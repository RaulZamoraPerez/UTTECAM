import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";

;

const datos = [
    {
        id: "1",
        titulo: "Profesor Asociado “A”",
        documentos: [
            { id: "doc1", titulo: "Programa Educativo de Mecatrónica" },
            { id: "doc2", titulo: "Ingeniería Electromecánica" },
            { id: "doc3", titulo: "Maestría en Ciencias de la Electrónica" },
        ],
    },
    {
        id: "2",
        titulo: "Profesor de Asignatura",
        documentos: [
            { id: "doc4", titulo: "Programa Educativo de contaduría" },
            { id: "doc5", titulo: "Programa Educativo Negocios y Mercadotecnia" },
            { id: "doc6", titulo: "Programa Educativo Tecnologías de la Información" },
            { id: "doc7", titulo: "Programa Educativo Ingeniería Industrial" },
            { id: "doc8", titulo: "Programa Educativo Mecatrónica" },
        ],
    },
    {
        id: "3",
        titulo: "Convocatorias para Profesor de Asignatura B",
        documentos: [
            { id: "doc9", titulo: "Programa Educativo de Agricultura Sustentable y Protegida" },
        ],
    },
];
export default function RecursosHumanos() {
    return (
        <TablaDocumentosReutilizable
            secciones={datos}
            titulo="Convocatorias para Profesor"
            descripcion="Explora las convocatorias y recursos disponibles para el desarrollo profesional del personal docente, organizados por año y tipo de documento."
        />
    )
}
