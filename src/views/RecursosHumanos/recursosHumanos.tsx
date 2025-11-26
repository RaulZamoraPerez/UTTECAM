import { useEffect, useState } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { fetchArea } from "@/util/documentosApi";

interface Documento {
  id: string;
  titulo: string;
  ruta: string;
  archivo: string; // alias compatible with new components; ensure mapping sets this
}

interface Seccion {
  id: string;
  titulo: string;
  documentos: Documento[];
}

export default function RecursosHumanos() {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      const area = await fetchArea(2); // ID for Recursos Humanos area
      if (area) {
          const seccionesMapped: Seccion[] = area.categorias.map(categoria => ({
            id: categoria.ID_Categorias.toString(),
            titulo: categoria.Nombre,
            documentos: categoria.archivos.map(archivo => ({
              id: archivo.ID.toString(),
              titulo: archivo.Nombre,
              ruta: `${import.meta.env.VITE_BACKENDURL}${archivo.Ruta_Documento}`,
              archivo: `${import.meta.env.VITE_BACKENDURL}${archivo.Ruta_Documento}` // compatibilidad con nuevo componente
            })),
          }));
        setSecciones(seccionesMapped);
      }
      setLoading(false);
    };
    loadDocuments();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando documentos...</div>;
  }

  return (
    <TablaDocumentosReutilizable2
      secciones={secciones}
      titulo="Convocatorias para Profesor"
      descripcion="Explora las convocatorias y recursos disponibles para el desarrollo profesional del personal docente, organizados por año y tipo de documento."
    />
  );
}