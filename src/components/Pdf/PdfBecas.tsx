import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FileText, X, ExternalLink } from 'lucide-react';

interface PDFViewerProps {
  title: string;
  description: string;
  pdfSrc: string;
}

const PdfBecasExcencion = ({ title, description, pdfSrc }: PDFViewerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handlePDFClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsModalOpen(false);
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" onClick={closeModal}>
      <div 
        className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 text-red-600 rounded-lg">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-gray-900 truncate max-w-md md:max-w-xl">
              {title || description}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={pdfSrc} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              title="Abrir en nueva pestaña"
            >
              <ExternalLink size={20} />
            </a>
            <button 
              onClick={closeModal}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
              title="Cerrar"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Contenido del PDF */}
        <div className="flex-1 bg-gray-100 relative">
          <iframe 
            src={pdfSrc} 
            title={title || description} 
            className="w-full h-full absolute inset-0" 
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handlePDFClick}
      >
        <span className="font-medium">{description}</span>
        <FileText size={16} />
      </div>

      {isModalOpen && mounted && createPortal(modalContent, document.body)}
    </>
  );
};

export default PdfBecasExcencion;