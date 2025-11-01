import { useState, useEffect } from "react";
import { Download, FileText, Image } from "lucide-react";
import { toast } from "react-toastify";
import { fetchCalendarios, getCalendarioFileUrl } from "@/util/calendarioApi";
import type { CalendarioItem } from "@/util/calendarioApi";

export default function Calendario() {
  const [calendarios, setCalendarios] = useState<CalendarioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCalendarios = async () => {
      try {
        setLoading(true);
        const data = await fetchCalendarios();
        setCalendarios(data);
      } catch (err) {
        setError('Error al cargar los calendarios');
        console.error('Error loading calendarios:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCalendarios();
  }, []);

  const handleDownload = (calendario: CalendarioItem) => {
    const fileUrl = getCalendarioFileUrl(calendario.archivo);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = calendario.archivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`¡${calendario.titulo} descargado con éxito!`);
  };

  const handlePreview = (calendario: CalendarioItem) => {
    const fileUrl = getCalendarioFileUrl(calendario.archivo);
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const renderFileIcon = (filename: string) => {
    const isPDF = filename.toLowerCase().endsWith('.pdf');
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(filename);

    if (isPDF) {
      return <FileText className="w-8 h-8 text-red-500" />;
    } else if (isImage) {
      return <Image className="w-8 h-8 text-blue-500" />;
    }
    return <FileText className="w-8 h-8 text-gray-500" />;
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col mb-32">
        <div className="p-4 bg-white mt-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            Calendario Académico
          </h1>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex flex-col mb-32">
        <div className="p-4 bg-white mt-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            Calendario Académico
          </h1>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="bg-red-50 border border-red-200 rounded-md p-4 max-w-md mx-auto">
            <p className="text-red-800 text-center">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen flex flex-col mb-32">
      <div className="p-4 bg-white mt-10">
        <h1 className="text-4xl font-bold text-orange-500 text-center">
          Calendario Académico
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Descarga los calendarios académicos de la institución
        </p>
      </div>

      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        {calendarios.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No hay calendarios disponibles</h3>
            <p className="mt-1 text-sm text-gray-500">Los calendarios estarán disponibles próximamente.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto">
            {calendarios.map((calendario) => (
              <div
                key={calendario.id}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow w-full max-w-sm"
              >
                <div className="flex items-center mb-4">
                  {renderFileIcon(calendario.archivo)}
                  <div className="ml-3 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {calendario.titulo}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(calendario.fechaSubida).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                </div>

                {calendario.descripcion && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {calendario.descripcion}
                  </p>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => handlePreview(calendario)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => handleDownload(calendario)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
