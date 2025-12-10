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

export const PIT = () => {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      const area = await fetchArea(7); // ID 7 para PIT
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
      nextUrl="-PIT"
      secciones={secciones}
      titulo="Programa Institucional de Tutorías (PIT)"
      descripcion="Explora las publicaciones del Programa Institucional de Tutorías (PIT) de la Universidad Tecnológica de Tecamachalco, organizadas por año y tipo de documento."
    />
  );
}



