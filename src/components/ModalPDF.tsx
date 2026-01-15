import { X, Download, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface ModalPDFProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  urlArchivo: string;
}

export default function ModalPDF({ isOpen, onClose, titulo, urlArchivo }: ModalPDFProps) {
  const [zoom, setZoom] = useState(100);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = urlArchivo;
    link.download = titulo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] w-full mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 truncate flex-1 mr-4">
            {titulo}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              className="p-2 text-gray-600 hover:text-[#D1672A] disabled:opacity-50 disabled:cursor-not-allowed"
              title="Alejar"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-600 min-w-[50px] text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 200}
              className="p-2 text-gray-600 hover:text-[#D1672A] disabled:opacity-50 disabled:cursor-not-allowed"
              title="Acercar"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 text-gray-600 hover:text-[#D1672A]"
              title="Descargar"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-red-600"
              title="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto p-4">
          <div className="flex justify-center">
            <iframe
              src={`${urlArchivo}#zoom=${zoom}`}
              className="w-full h-[70vh] border border-gray-300 rounded"
              title={titulo}
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}