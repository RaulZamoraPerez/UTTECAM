import TablaDocumentosReutilizable2 from '@/components/tablaDocumentosReutilizable2';
import { useExtensionDocuments } from '../../../hooks/useExtensionData';

 const Gaceta = () => {
  const { documents, loading, error } = useExtensionDocuments('gaceta');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

  // Transform API data to component format
  const secciones = [
    {
      id: "gaceta",
      titulo: "Gacetas Publicadas",
      documentos: documents.map((doc: any) => ({
        id: doc.id,
        titulo: doc.title,
        archivo: doc.file_url
      }))
    }
  ];

  return (
    <TablaDocumentosReutilizable2
      secciones={secciones}
      titulo="Gaceta"
      descripcion="Explora las gacetas de la Universidad Tecnológica de Tecamachalco"
    />
  );
};

export default Gaceta;
