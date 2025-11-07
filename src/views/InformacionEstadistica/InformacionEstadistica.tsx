import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

const datos = [
    {
        id: "1",
        titulo: "Informes de Evaluación",
        documentos: [
            { id: "doc1", titulo: "Informe 3.2", archivo: "/Información y Estadistica/2025/Informes de Evaluación/3.2.pdf" },
            { id: "doc2", titulo: "Informe 4.1", archivo: "/Información y Estadistica/2025/Informes de Evaluación/4.1.pdf" },
            { id: "doc3", titulo: "Informe 4.2", archivo: "/Información y Estadistica/2025/Informes de Evaluación/4.2.pdf" },
            { id: "doc4", titulo: "Informe 4.3", archivo: "/Información y Estadistica/2025/Informes de Evaluación/4.3.pdf" },
            { id: "doc5", titulo: "Actividad 5.3", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac 5.3.pdf" },
            { id: "doc6", titulo: "Actividad 1.1", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_1.1_.pdf" },
            { id: "doc7", titulo: "Actividad 1.2", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_1.2_.pdf" },
            { id: "doc8", titulo: "Actividad 1.3", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_1.3.pdf" },
            { id: "doc9", titulo: "Actividad 2.2", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_2.2_.pdf" },
            { id: "doc10", titulo: "Actividad 2.3", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_2.3.pdf" },
            { id: "doc11", titulo: "Actividad 3.1", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_3.1.pdf" },
            { id: "doc12", titulo: "Actividad 3.3", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_3.3.pdf" },
            { id: "doc13", titulo: "Actividad 5.1", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_5.1.pdf" },
            { id: "doc14", titulo: "Actividad 5.2", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Ac_5.2.pdf" },
            { id: "doc15", titulo: "Componente C1", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C1.pdf" },
            { id: "doc16", titulo: "Componente C2", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C2_.pdf" },
            { id: "doc17", titulo: "Componente C4", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C4_.pdf" },
            { id: "doc18", titulo: "Componente C5", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C5.pdf" },
            { id: "doc19", titulo: "Informe de Evaluación y Seguimiento 2025 1er Trimestre", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Informe de Evaluación y Seguimiento 2025 1 Trimestre.pdf" },
            { id: "doc20", titulo: "Oficio SAyBG Primer Trimestre", archivo: "/Información y Estadistica/2025/Informes de Evaluación/Oficio SAyBG Primer trimestre_10-06-2025.pdf" },
        ],
    },
    {
        id: "2",
        titulo: "MIR",
        documentos: [
            { id: "doc1", titulo: "MIR 2025", archivo: "/Información y Estadistica/2025/MIR/MIR 2025.pdf" },
        ],
    },
    {
        id: "3",
        titulo: "PBR",
        documentos: [
            { id: "doc1", titulo: "PBR Cuatrimestre Enero-Abril 2025", archivo: "/Información y Estadistica/2025/PBR/PBR CUATRIMESTRE ENERO-ABRIL 2025.pdf" },
        ],
    },
    {
        id: "4",
        titulo: "POA",
        documentos: [
            { id: "doc1", titulo: "POA Enero-Abril 2025", archivo: "/Información y Estadistica/2025/POA/POA ENERO ABRIL 2025.pdf" },
        ],
    },
    {
        id: "5",
        titulo: "Calendario",
        documentos: [
            { id: "doc1", titulo: "CALENDARIO-2025 PLANEACIÓN VF", archivo: "/Calendario/CALENDARIO-2025 PLANEACIÓN VF.pdf" },
        ],
    },
];
export default function InformacionEstadistica() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="Información y Estadística"
            descripcion="Explora los documentos relacionados con la información y estadística."
        />
    )
}
