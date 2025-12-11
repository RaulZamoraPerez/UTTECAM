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

export default function InformacionEstadia() {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      const area = await fetchArea(4); // ID for Información de Estadía area
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
      titulo="Información y Estadística"
      descripcion="Documentos relacionados con la información y estadística de la institución."
    />
  );
}