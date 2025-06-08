import { useState } from 'react';
import { FileText } from 'lucide-react';

interface PDFViewerProps {
  title: string;
  description: string;
  pdfSrc: string;
}

const PdfBecasExcencion = ({ title, description, pdfSrc }: PDFViewerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePDFClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <div className="flex items-center mb-4">
        <FileText className="text-amber-600 mr-2" size={20} />
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <div 
        className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm cursor-pointer"
        onClick={handlePDFClick}
      >
        <div>
          <h4 className="font-medium text-gray-800">{description}</h4>
          <p className="text-sm text-gray-500">Haz clic para ver el documento completo</p>
        </div>
        <div className="text-amber-600">
          <FileText size={20} />
        </div>
      </div>

      {/* Modal para mostrar el PDF */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden max-h-[95vh] max-w-[95vw] shadow-lg">
            <button 
              className="absolute top-2 right-2 bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={closeModal}
            >
              ✕
            </button>
            <iframe 
              src={pdfSrc} 
              title={title} 
              className="w-[80vw] h-[100vh]" 
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfBecasExcencion;