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

export default function CoordinacionGenero() {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      const area = await fetchArea(6); // ID for Coordinación de Género area
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
      titulo="Coordinación de Género"
      descripcion="Documentos relacionados con la coordinación de género en la institución."
    />
  );
}