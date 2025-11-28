import TablaDocumentosReutilizable2 from '@/components/tablaDocumentosReutilizable2';
import { fetchArea } from '@/util/documentosApi';
import { getAssetUrl, API_URL } from '@/util/apiBase';
import { useEffect, useState } from 'react';

const Gaceta = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const area = await fetchArea(9); // Area ID 9: Gacetas
        // Prefer to keep categories (each with archivos) so the UI can render separate sections (years)
        let docs = area?.categorias || [];
        // Fallback: if no docs found, try legacy extension endpoint
        if (docs.length === 0) {
          // Try extension-universitaria endpoint first, then legacy extension endpoint
          try {
            const resp1 = await fetch(`${API_URL}/extension-universitaria/documents/gaceta`);
            if (resp1.ok) {
              docs = await resp1.json();
            } else {
              const resp2 = await fetch(`${API_URL}/extension/documents/gaceta`);
              if (resp2.ok) {
                docs = await resp2.json();
              }
            }
          } catch (e) {
            console.warn('Fallback extension documents failed:', e);
          }
        }
        setDocuments(docs);
      } catch (err: any) {
        setError(err.message || 'Error al cargar documentos');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

  // Transform API data to component format: attempt to keep categories as sections (2025, 2024, ...)
  const documentsSections = (() => {
    // If `documents` comes grouped (e.g., array of categories with archivos), normalize it
    if (Array.isArray(documents) && documents.length > 0 && documents[0].archivos) {
      const mapped = documents.map((cat: any) => ({
        id: String(cat.ID_Categorias || cat.id || cat.ID || cat.ID_Categoria || Math.random()),
        titulo: cat.Nombre || cat.title || String(cat.ID_Categorias || cat.id || 'Categoría'),
        documentos: (cat.archivos || []).map((doc: any) => ({
          id: doc.ID || doc.id || doc.ID_Archivo || 0,
          titulo: doc.Nombre || doc.title || doc.name || 'Documento',
          archivo: getAssetUrl(doc.Ruta_Documento || doc.file_url || doc.archivo || doc.url),
          media_type: doc.media_type || doc.MediaType || undefined,
          mime_type: doc.mime_type || doc.MimeType || undefined
        }))
      }));

      // Try to sort sections by year found in title descending (e.g., 2025, 2024)
      const parseYear = (s: string | number | undefined | null) => {
        if (!s) return 0;
        const m = String(s).match(/(\d{4})/);
        return m ? Number(m[1]) : 0;
      };
      mapped.sort((a: any, b: any) => parseYear(b.titulo) - parseYear(a.titulo));
      return mapped;
    }

    // If `documents` is a flat array of files, attempt to group by category name or year
    if (Array.isArray(documents) && documents.length > 0 && !documents[0].archivos) {
      // Try to infer category from fields like Categoria, ID_Categorias, categoriaNombre, año, Fecha_Subida
      const groups: Record<string, any[]> = {};
      documents.forEach((doc: any) => {
        const catName = doc.NombreCategoria || doc.categoria || doc.categoriaNombre || doc.cat || doc.ID_Categorias || (doc.Fecha_Subida ? new Date(doc.Fecha_Subida).getFullYear() : null) || 'Otros';
        const key = String(catName);
        if (!groups[key]) groups[key] = [];
        groups[key].push(doc);
      });
      return Object.keys(groups).map((k) => ({
        id: k,
        titulo: String(k),
        documentos: groups[k].map((doc: any) => ({
          id: doc.ID || doc.id || 0,
          titulo: doc.Nombre || doc.title || doc.name || 'Documento',
          archivo: getAssetUrl(doc.Ruta_Documento || doc.file_url || doc.archivo || doc.url),
          media_type: doc.media_type || doc.MediaType || undefined,
          mime_type: doc.mime_type || doc.MimeType || undefined
        }))
      }));
    }

    // Default: return a single section with all documents
    return [
      {
        id: 'gaceta',
        titulo: 'Gacetas publicadas',
        documentos: (documents || []).map((doc: any) => ({ id: doc.ID || doc.id || 0, titulo: doc.Nombre || doc.title || 'Documento', archivo: getAssetUrl(doc.Ruta_Documento || doc.file_url || doc.archivo || doc.url), media_type: doc.media_type || doc.MediaType || undefined, mime_type: doc.mime_type || doc.MimeType || undefined }))
      }
    ];
  })();

  return (
    <TablaDocumentosReutilizable2
      secciones={documentsSections}
      titulo="Gaceta"
      descripcion="Explora las gacetas de la Universidad Tecnológica de Tecamachalco"
    />
  );
};

export default Gaceta;
