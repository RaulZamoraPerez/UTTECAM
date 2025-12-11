import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import { fetchArea } from '@/util/documentosApi';
import { getAssetUrl } from '@/util/apiBase';
import { useEffect, useState } from 'react';

const PromocioIntitucional = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const area = await fetchArea(10); // Area ID 10: Promoción Institucional
        const docs = area?.categorias || [];
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

  // Transform API data to component format (preserve categories if present)
  const secciones = (Array.isArray(documents) && documents.length > 0 && documents[0].archivos)
    ? documents.map((cat: any) => ({
        id: String(cat.ID_Categorias || cat.id || cat.ID || Math.random()),
        titulo: cat.Nombre || 'Promoción',
        documentos: (cat.archivos || []).map((archivo: any) => ({ id: archivo.ID, titulo: archivo.Nombre || archivo.title, ruta: getAssetUrl(archivo.Ruta_Documento || archivo.file_url || archivo.archivo) }))
      }))
    : [
      {
        id: 'promocion',
        titulo: 'Promoción Institucional',
        documentos: (documents || []).map((doc: any) => ({ id: doc.ID || doc.id, titulo: doc.Nombre || doc.title, ruta: getAssetUrl(doc.Ruta_Documento || doc.file_url || doc.archivo) }))
      }
    ];

  // Sort sections by year if the title contains the year
  const parseYear = (s: string | number | undefined | null) => { if (!s) return 0; const m = String(s).match(/(\d{4})/); return m ? Number(m[1]) : 0 };
  secciones.sort((a: any, b: any) => parseYear(b.titulo) - parseYear(a.titulo));

  return (
    <TablaDocumentosReutilizable
      nextUrl="-PROMOCION"
      secciones={secciones}
      titulo="Promoción Institucional"
      descripcion="Explora la Promoción Institucional de la Universidad Tecnológica de Tecamachalco"
    />
  );
};

export default PromocioIntitucional;
