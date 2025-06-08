import { FileText } from "lucide-react";
import { useState } from "react";

type PDFViewerProps = {
  title: string;
  description: string;
  pdfSrc: string;
}

export default function PdfBecasNuevoIngreso({ title, description, pdfSrc }: PDFViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePDFClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div 
      className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm cursor-pointer mb-5"
    >
      <div 
      onClick={handlePDFClick}>
        <h4 className="font-medium text-gray-800">{description}</h4>
        <p className="text-sm text-gray-500">Haz clic para ver el documento completo</p>
      </div>
      <div className="text-amber-600">
        <FileText size={20} />
      </div>
      {/* Modal para mostrar el PDF */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden max-h-[95vh] max-w-[95vw] shadow-lg">
            <button 
              className="absolute top-2 right-2 bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={closeModal} // Verifica que esta función esté correctamente vinculada
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
}
