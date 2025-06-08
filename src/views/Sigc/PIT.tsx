import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable"
import datos from '@/data/pit.data';

export const PIT = () => {
  return (
  <TablaDocumentosReutilizable
            nextUrl="-PIT"
            secciones={datos}
            titulo="Programa Institucional de Tutorías (PIT)"
            descripcion="Explora las publicaciones del Programa Institucional de Tutorías (PIT) de la Universidad Tecnológica de Tecamachalco, organizadas por año y tipo de documento."
        />
  )
}



