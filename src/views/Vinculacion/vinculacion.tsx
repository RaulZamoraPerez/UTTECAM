import { useEffect, useState } from "react";
import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import { fetchArea } from "@/util/documentosApi";
import { getAssetUrl } from '@/util/apiBase';

interface Documento {
  id: string;
  titulo: string;
  ruta: string;
  año?: string;
}

interface Seccion {
  id: string;
  titulo: string;
  documentos: Documento[];
}

export default function Vinculacion() {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const area = await fetchArea(7); // ID for Vinculación area
        if (area) {
          const seccionesMapped: Seccion[] = area.categorias.map(categoria => ({
            id: categoria.ID_Categorias.toString(),
            titulo: categoria.Nombre,
            documentos: categoria.archivos.map(archivo => ({
              id: archivo.ID.toString(),
              titulo: archivo.Nombre,
              ruta: getAssetUrl(archivo.Ruta_Documento),
              año: categoria.Nombre.match(/\d{4}/)?.[0] // Try to extract year from category name if present
            })),
          }));
          // Sort sections by name descending (assuming years)
          seccionesMapped.sort((a, b) => b.titulo.localeCompare(a.titulo));
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
      titulo="Repositorio Digital de Productos de Investigación"
      descripcion="Explora los productos de investigación generados por la comunidad académica de la institución, organizados por año y tipo de documento."
    />
  );
}
