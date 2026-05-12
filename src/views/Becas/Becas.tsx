import { useEffect, useState } from 'react';
import PdfBecasExcencion from '@/components/Pdf/PdfBecas';
import { Award, FileCheck, ExternalLink, Calendar, Download, Info, ChevronRight, FileText, Sparkles, Globe, BookOpenCheck, Radio, AlertCircle, GraduationCap } from 'lucide-react';
import BecaSectionsRenderer from '@/components/becas/BecaSectionsRenderer';
import { getSectionsByModule, BecaSection } from '@/services/becas.service';

const Becas = () => {
  const [sections, setSections] = useState<BecaSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const loadSections = async () => {
      setLoading(true);
      try {
        const data = await getSectionsByModule('becas');
        setSections(data.filter(s => s.active));
      } catch (error) {
        console.error("Error loading sections in view:", error);
      } finally {
        setLoading(false);
      }
    };
    loadSections();
  }, []);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const supportedTypes = ['header', 'banner', 'convocatoria', 'results', 'avisos', 'footer', 'repository', 'infographics'];
  const supportedSections = sections.filter(s => supportedTypes.includes(s.type));
  const hasHeader = supportedSections.some(s => s.type === 'header');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // Si no hay secciones soportadas, mostramos próximamente
  if (supportedSections.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <div className="p-4 bg-gray-50 rounded-full mb-4">
          <BookOpenCheck size={48} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-400 mb-2">Próximamente</h2>
        <p className="text-gray-500 max-w-md">
          Estamos preparando nuevas convocatorias y apoyos para ti. Vuelve pronto para consultar la información.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* Las secciones dinámicas ahora controlan el encabezado a través del Dashboard */}


      {/* Secciones Dinámicas */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-8">
        <BecaSectionsRenderer module="becas" initialSections={sections} />
      </div>

      {/* Modal de Imagen (Legacy - keeping for safety but dynamic sections handle their own) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center animate-in fade-in zoom-in duration-200">
            <button 
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
              onClick={closeModal}
            >
              <span className="sr-only">Cerrar</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Vista previa" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Becas;