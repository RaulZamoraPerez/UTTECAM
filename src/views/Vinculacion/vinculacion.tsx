import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable"
import datos from '@/data/data_vinculacion';



export default function Vinculacion() {
    return (
        <TablaDocumentosReutilizable
           
            secciones={datos}
            titulo="Repositorio Digital de Productos de Investigación"
            descripcion="Explora los productos de investigación generados por la comunidad académica de la institución, organizados por año y tipo de documento."
        />
    )
}
