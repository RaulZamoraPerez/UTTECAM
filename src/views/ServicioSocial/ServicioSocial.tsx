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

export default function ServicioSocial() {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const area = await fetchArea(8); // ID for Servicio Social area
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
      } catch (error) {
        console.error("Error loading documents:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDocuments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#D1672A]"></div>
      </div>
    );
  }

  return (
    <TablaDocumentosReutilizable
      secciones={secciones}
      titulo="Servicio Social"
      descripcion="Documentos, formatos y reglamentos relacionados con el Servicio Social."
    />
  );
}
