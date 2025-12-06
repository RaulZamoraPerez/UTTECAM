import { useState, useEffect } from "react";
import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import { 
  obtenerConvocatoriaTituloInfo, 
  obtenerDocumentosConvocatoria,
  type DocumentoConvocatoria
} from "@/services/convocatoriaTitulo.service";

const ConvocatoriaTitulo = () => {
  const [titulo, setTitulo] = useState("Convocatoria a trámite de título profesional");
  const [descripcion, setDescripcion] = useState("Selecciona la convocatoria que deseas consultar y visualiza el PDF.");
  const [nombreSeccion, setNombreSeccion] = useState("Convocatorias a trámite de título profesional");
  const [documentos, setDocumentos] = useState<DocumentoConvocatoria[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarInfo = async () => {
      try {
        // Cargar información principal
        const responseInfo = await obtenerConvocatoriaTituloInfo();
        
        if (responseInfo.success && responseInfo.data) {
          setTitulo(responseInfo.data.titulo);
          setDescripcion(responseInfo.data.subtitulo);
          setNombreSeccion(responseInfo.data.nombreSeccionDocumentos);
        }

        // Cargar documentos
        const responseDocs = await obtenerDocumentosConvocatoria();
        
        if (responseDocs.success && responseDocs.data) {
          setDocumentos(responseDocs.data.documentos);
        }
      } catch (err) {
        console.error('Error al cargar información de convocatoria:', err);
      } finally {
        setCargando(false);
      }
    };

    cargarInfo();
  }, []);

  // Actualizar las secciones con el nombre dinámico y documentos del backend
  const seccionesActualizadas = documentos.length > 0 
    ? [{
        id: "convocatoria-titulo",
        titulo: nombreSeccion,
        documentos: documentos.map(doc => ({
          id: doc.id,
          titulo: doc.titulo
        }))
      }]
    : [{
        id: "convocatoria-titulo",
        titulo: nombreSeccion,
        documentos: [] // Lista vacía para mostrar mensaje
      }];

  if (cargando) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 flex justify-center items-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Cargando...</div>
        </div>
      </div>
    );
  }

  return (
    <TablaDocumentosReutilizable
      nextUrl="-CONVOCATORIA-TITULO"
      secciones={seccionesActualizadas}
      titulo={titulo}
      descripcion={descripcion}
    />
  );
};

export default ConvocatoriaTitulo;
