import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import { useExtensionDocuments } from '../../../hooks/useExtensionData';

const PromocioIntitucional = () => {
  const { documents, loading, error } = useExtensionDocuments('promocion');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

  // Transform API data to component format
  const secciones = [
    {
      id: "promocion",
      titulo: "Promoción Institucional",
      documentos: documents.map((doc: any) => ({
        id: doc.id,
        titulo: doc.title,
        archivo: doc.file_url
      }))
    }
  ];

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
