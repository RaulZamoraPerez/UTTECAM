import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2"
import datos from '@/data/pit.data';

const PIT = () => {
  return (
    <TablaDocumentosReutilizable2
      nextUrl="-PIT"
      secciones={datos}
      titulo="Programa Institucional de Tutorías (PIT)"
      descripcion="Explora las publicaciones del Programa Institucional de Tutorías (PIT) de la Universidad Tecnológica de Tecamachalco, organizadas por año y tipo de documento."
    />
  )
}

export default PIT;
