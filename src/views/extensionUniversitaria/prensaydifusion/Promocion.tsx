import TablaDocumentosReutilizable2 from '@/components/tablaDocumentosReutilizable2';
import { fetchArea } from '@/util/documentosApi';
import { getAssetUrl, API_URL } from '@/util/apiBase';
import { useEffect, useState } from 'react';

const Promocion = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const area = await fetchArea(10); // Area ID 10: Promoción Institucional
          const docs = area?.categorias || [];
          let documentosList = docs;
          if ((documentosList || []).length === 0) {
            try {
              const resp1 = await fetch(`${API_URL}/extension-universitaria/documents/promocion`);
              if (resp1.ok) {
                documentosList = await resp1.json();
              } else {
                const resp2 = await fetch(`${API_URL}/extension/documents/promocion`);
                if (resp2.ok) {
                  documentosList = await resp2.json();
                }
              }
            } catch (err) {
              console.warn('Fallback extension documents for promocion failed', err);
            }
          }
        setDocuments(documentosList);
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

  // Try to build sections from area categories if possible
  const documentsSections = (() => {
    if (Array.isArray(documents) && documents.length > 0 && documents[0].archivos) {
      const mapped = documents.map((cat: any) => ({
        id: String(cat.ID_Categorias || cat.id || cat.ID || Math.random()),
        titulo: cat.Nombre || 'Promoción',
        documentos: (cat.archivos || []).map((doc: any) => ({
          id: doc.ID || doc.id || 0,
          titulo: doc.Nombre || doc.title || 'Documento',
          archivo: getAssetUrl(doc.Ruta_Documento || doc.archivo || doc.file_url),
          media_type: doc.media_type || doc.MediaType || undefined,
          mime_type: doc.mime_type || doc.MimeType || undefined
        }))
      }));
      const parseYear = (s: string | number | null | undefined) => { if (!s) return 0; const m = String(s).match(/(\d{4})/); return m ? Number(m[1]) : 0 };
      mapped.sort((a: any, b: any) => parseYear(b.titulo) - parseYear(a.titulo));
      return mapped;
    }

    if (Array.isArray(documents) && documents.length > 0 && !documents[0].archivos) {
      const groups: Record<string, any[]> = {};
      documents.forEach((doc: any) => {
        const catName = doc.NombreCategoria || doc.categoria || doc.cat || (doc.Fecha_Subida ? new Date(doc.Fecha_Subida).getFullYear() : null) || 'Otros';
        const key = String(catName);
        if (!groups[key]) groups[key] = [];
        groups[key].push(doc);
      });
      return Object.keys(groups).map((k) => ({
        id: k,
        titulo: String(k),
        documentos: groups[k].map((doc: any) => ({ id: doc.ID || doc.id || 0, titulo: doc.Nombre || doc.title || 'Documento', archivo: getAssetUrl(doc.Ruta_Documento || doc.archivo || doc.file_url), media_type: doc.media_type || doc.MediaType, mime_type: doc.mime_type || doc.MimeType }))
      }));
    }

    return [
      {
        id: 'promocion',
        titulo: 'Promoción Institucional',
        documentos: (documents || []).map((doc: any) => ({ id: doc.ID || doc.id || 0, titulo: doc.Nombre || doc.title || 'Documento', archivo: getAssetUrl(doc.Ruta_Documento || doc.archivo || doc.file_url), media_type: doc.media_type || doc.MediaType, mime_type: doc.mime_type || doc.MimeType }))
      }
    ];
  })();

  return (
    <TablaDocumentosReutilizable2
      secciones={documentsSections}
      titulo="Promoción Institucional"
      descripcion="Material de Promoción Institucional"
    />
  );
};

export default Promocion;
