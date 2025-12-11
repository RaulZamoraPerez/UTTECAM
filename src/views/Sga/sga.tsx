import { useEffect, useState } from "react";
import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import { fetchArea } from "@/util/documentosApi";
import { getAssetUrl } from '@/util/apiBase';

interface Documento {
  id: string;
  titulo: string;
  ruta: string;
}

interface Seccion {
  id: string;
  titulo: string;
  documentos: Documento[];
}

export default function Sga() {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      const area = await fetchArea(3); // ID for Gestión Ambiental area
      if (area) {
        const seccionesMapped: Seccion[] = area.categorias.map(categoria => ({
          id: categoria.ID_Categorias.toString(),
          titulo: categoria.Nombre,
          documentos: categoria.archivos.map(archivo => ({
            id: archivo.ID.toString(),
            titulo: archivo.Nombre,
            ruta: getAssetUrl(archivo.Ruta_Documento),
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
    <TablaDocumentosReutilizable
      secciones={secciones}
      titulo="Sistema de Gestión Ambiental"
      descripcion="Documentos relacionados con el sistema de gestión ambiental de la institución."
    />
  );
}