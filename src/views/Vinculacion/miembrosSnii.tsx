import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

const datos = [
    {
        id: "1",
        titulo: "Docente miembros del Sistema Nacional de Investigadoras e Investigadores SNII",
        documentos: [
           
            { id: "doc2", titulo: "DR. JESUS JOEL RIVAS", archivo: "/MIEMBROSSNII/DR. JESUS JOEL RIVAS.pdf" },
            { id: "doc3", titulo: "DR. JOSE ARTURO OLGUÍN ROJAS", archivo: "/MIEMBROSSNII/DR. JOSE ARTURO OLGUÍN ROJAS.pdf" },
            { id: "doc4", titulo: "DR. MANUEL GONZALEZ PEREZ", archivo: "/MIEMBROSSNII/DR. MANUEL GONZALEZ PEREZ.pdf" },
            { id: "doc5", titulo: "DR. MIGUEL CRUZ VASQUEZ", archivo: "/MIEMBROSSNII/DR. MIGUEL CRUZ VASQUEZ.pdf" },
            
        ],
    },
];
export default function MiembrosSnii() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="Docente miembros del Sistema Nacional de Investigadoras e Investigadores SNII"
            descripcion="Explora los documentos relacionados con los docentes miembros del Sistema Nacional de Investigadoras e Investigadores (SNII)."
        />
    )
}
