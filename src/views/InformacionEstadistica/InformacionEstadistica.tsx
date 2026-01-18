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
            { id: "doc21", titulo: "C.1.I.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C.1.I.pdf" },
            {id: "doc22", titulo: "C1.A.2.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C1.A.1.pdf" },
            {id: "doc22", titulo: "C1.A.2.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C1.A.2.pdf" },
            {id: "doc22", titulo: "C1.A.3.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C1.A.3.pdf" },
            {id: "doc22", titulo: "C.2.I.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C.2.I.pdf" },
            {id: "doc22", titulo: "C2.A.1.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C2.A.1.pdf" },
            {id: "doc22", titulo: "C2.A.2.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C2.A.2.pdf" },
            {id: "doc22", titulo: "C2.A.3.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C2.A.3.pdf" },
            {id: "doc22", titulo: "C.3.I.3.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C.3.I.3.pdf" },
            {id: "doc22", titulo: "C3.A.1.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C3.A.1.pdf" },
            {id: "doc22", titulo: "C3.A.2.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C3.A.2.pdf" },
            {id: "doc22", titulo: "C3.A.3.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C3.A.3.pdf" },
            {id: "doc22", titulo: "C.4.I.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C.4.I.pdf" },
            {id: "doc22", titulo: "C4.A.1.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C4.A.1.pdf" },
            {id: "doc22", titulo: "C4.A.2.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C4.A.2.pdf" },
            {id: "doc22", titulo: "C4.A.3.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C4.A.3.pdf" },
            {id: "doc22", titulo: "C.5.I.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C.5.I.pdf" },
            {id: "doc22", titulo: "C5.A.1.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C5.A.1.pdf" },
            {id: "doc22", titulo: "C5.A.2.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C5.A.2.pdf" },
            {id: "doc22", titulo: "C5.A.3.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/C5.A.3.pdf" },
            {id: "doc22", titulo: "046_UTP_2_TRIM_Final.pdf", archivo: "/Información y Estadistica/2025/Informes de Evaluación/046_UTP_2_TRIM_Final.pdf" },
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
        titulo: "PBR 2025",
        documentos: [
            { id: "doc1", titulo: "PBR Cuatrimestre Enero-Abril 2025", archivo: "/Información y Estadistica/2025/PBR/PBR CUATRIMESTRE ENERO-ABRIL 2025.pdf" },
            {id: "doc2", titulo: "PBR Cuatrimestre Mayo-Agosto 2025", archivo: "/Información y Estadistica/2025/PBR/PBR Cuatrimestre mayo-agosto 2025.pdf" },
        ],
    },
    {
        id: "4",
        titulo: "POA 2025",
        documentos: [
            { id: "doc1", titulo: "POA Enero-Abril 2025", archivo: "/Información y Estadistica/2025/POA/POA ENERO ABRIL 2025.pdf" },
            {id: "doc2", titulo: "POA Mayo-Agosto 2025", archivo: "/Información y Estadistica/2025/POA/POA Cuatrimestre mayo-agosto 2025.pdf" },
        ],
    },
    {
        id: "5",
        titulo: "Calendario",
        documentos: [
            { id: "doc1", titulo: "CALENDARIO-2025 PLANEACIÓN VF", archivo: "/Calendario/CALENDARIO-2025 PLANEACIÓN VF.pdf" },
        ],
    },
    {
        id: "6",
        titulo: "POA 2024",
        documentos: [
            { id: "doc1", titulo: "Cédulas Operativas 1er cuatrimestre", archivo: "/Información y Estadistica/2024/POA/Cédulas Operativas 1er cuatrimestre.pdf" },
            { id: "doc2", titulo: "Informe de Actividades 2024 Enero-Abril", archivo: "/Información y Estadistica/2024/POA/INFORME DE ACTIVIDADES 2024 CUATRIMESTRE ENE ABR.pdf" },
            { id: "doc3", titulo: "Informe de Actividades Mayo-Agosto 2024", archivo: "/Información y Estadistica/2024/POA/INFORME DE ACTIVIDADES CUATRIMESTRE MAYO-AGOSTO 2024.pdf" },
            { id: "doc4", titulo: "Informe de Actividades Septiembre-Diciembre 2024", archivo: "/Información y Estadistica/2024/POA/INFORME DE ACTIVIDADES CUATRIMESTRE SEPTIEMBRE DICIEMBRE 2024.1.pdf" },
            { id: "doc5", titulo: "Cédulas POA Septiembre-Diciembre 2024", archivo: "/Información y Estadistica/2024/POA/CÉDULAS POA CUATRIMESTRE SEP-DIC2024.pdf" },
            { id: "doc6", titulo: "Cédula Académico", archivo: "/Información y Estadistica/2024/POA/CÉDULA ACADÉMICO(2).pdf" },
            { id: "doc7", titulo: "Cédula Equidad + Grupos Vulnerables", archivo: "/Información y Estadistica/2024/POA/CÉDULA EQUIDAD + GRUPOS VULNERABLES.pdf" },
            { id: "doc8", titulo: "Cédula Gestión", archivo: "/Información y Estadistica/2024/POA/CÉDULA GESTIÓN.pdf" },
            { id: "doc9", titulo: "Cédula Vinculación", archivo: "/Información y Estadistica/2024/POA/CÉDULA VINCULACIÓN.pdf" },
            { id: "doc10", titulo: "Oficio DGUTyP 2024", archivo: "/Información y Estadistica/2024/POA/OF_DGUTyP_514_1_0515_120_2024.pdf" },
            { id: "doc11", titulo: "Lineamientos POA DGUTyP 2024", archivo: "/Información y Estadistica/2024/POA/lineamientos-poa-dgutyp-2024.pdf" },
        ],
    },
    {
        id: "7",
        titulo: "PBR 2024",
        documentos: [
            { id: "doc1", titulo: "PBR Cuatrimestre Enero-Abril 2024", archivo: "/Información y Estadistica/2024/PBR/ENERO ABRIL.pdf" },
            { id: "doc2", titulo: "PBR Cuatrimestre Mayo-Agosto 2024", archivo: "/Información y Estadistica/2024/PBR/MAYO-AGOSTO 2024.pdf" },
            { id: "doc3", titulo: "PBR Cuatrimestre Septiembre-Diciembre 2024", archivo: "/Información y Estadistica/2024/PBR/SEP-DIC 2024.pdf" },
            { id: "doc4", titulo: "PBR 1er y 2do Trimestre 2024", archivo: "/Información y Estadistica/2024/PBR/046_UTP_1_2_Trim_24_F.pdf" },
            { id: "doc5", titulo: "PBR 3er Trimestre 2024", archivo: "/Información y Estadistica/2024/PBR/046_UTP_3 Trim_24_F.pdf" },
            { id: "doc6", titulo: "PBR 4to Trimestre 2024", archivo: "/Información y Estadistica/2024/PBR/046_UTP_4T_2024_F.pdf" },
        ],
    }
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
