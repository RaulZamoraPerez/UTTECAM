import { Award, CheckCircle2, Sparkles, Download, Info, Search, Calendar } from 'lucide-react';
import { useState } from 'react';

const images = [
  { id: 1, src: "/vinculacion/Entidad de certificacion y evaluacion/1 CONOCER.jpeg", title: "Certificación CONOCER - Estándar 01" },
  { id: 2, src: "/vinculacion/Entidad de certificacion y evaluacion/2 CONOCER.jpeg", title: "Evaluación de Competencias" },
  { id: 3, src: "/vinculacion/Entidad de certificacion y evaluacion/3 CONOCER.jpeg", title: "Proceso de Certificación" },
  { id: 4, src: "/vinculacion/Entidad de certificacion y evaluacion/4 CONOCER.jpeg", title: "Acreditación Institucional" },
  { id: 5, src: "/vinculacion/Entidad de certificacion y evaluacion/5 CONOCER.jpeg", title: "Desarrollo Profesional" },
  { id: 6, src: "/vinculacion/Entidad de certificacion y evaluacion/6 CONOCER.jpeg", title: "Excelencia UTTECAM" },
];

export default function EntidadCertificacion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const handleDownload = (e: React.MouseEvent, src: string) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop() || 'certificacion.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* Hero Section - Estilo Becas */}
      <div className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#0A9782]/10 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium mb-6">
            <Sparkles size={14} className="text-[#0A9782]" />
            <span>Entidad de Certificación y Evaluación UTTECAM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            Certifica tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9782] to-emerald-600">Competencias</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Impulsamos tu crecimiento profesional mediante la evaluación y certificación de estándares de competencia laboral.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
        
        {/* Sección Principal con Estilo Card Becas */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A9782]"></span>
                      </span>
                      <span className="text-[#0A9782] font-bold tracking-wider text-sm uppercase">CONOCER Acreditado</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                      ¿Qué es la Entidad de Certificación?
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      Somos una unidad técnica acreditada para evaluar y certificar las competencias laborales de las personas, con base en Estándares de Competencia inscritos en el Registro Nacional de Estándares de Competencia.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="p-2 bg-white rounded-lg text-[#0A9782] shadow-sm">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-700">Validez Oficial</h4>
                        <p className="text-sm text-slate-500">Certificados con reconocimiento nacional por la SEP.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="p-2 bg-white rounded-lg text-[#0A9782] shadow-sm">
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-700">Excelencia Laboral</h4>
                        <p className="text-sm text-slate-500">Eleva tu competitividad en el mercado actual.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#0A9782]/20 blur-3xl opacity-20 rounded-full"></div>
                    <img 
                      src="/vinculacion/Entidad de certificacion y evaluacion/motocle.png" 
                      alt="Logo UTTECAM" 
                      className="relative w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Galería de Estándares/Materiales */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Materiales y Estándares</h3>
            <p className="text-slate-500">Explora nuestros materiales de difusión y estándares disponibles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img) => (
              <div 
                key={img.id}
                className="group relative bg-white rounded-3xl shadow-lg shadow-slate-100/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div 
                  className="aspect-[4/5] overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg flex items-center gap-2">
                       <Search size={16} /> Ampliar
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-slate-700 line-clamp-1">{img.title}</h4>
                    <button 
                      onClick={(e) => handleDownload(e, img.src)}
                      className="p-2 text-slate-400 hover:text-[#0A9782] hover:bg-green-50 rounded-xl transition-all"
                      title="Descargar"
                    >
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info Estilo Becas */}
        <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Info size={12} />
                <span>Información Importante</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">¿Quieres certificarte?</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Nuestra Entidad de Certificación y Evaluación cuenta con diversos estándares para impulsar tu perfil profesional. <br className="hidden md:block" />
                Para más información, acude directamente a nuestras oficinas.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl text-slate-600 font-medium shadow-sm border border-slate-200">
                  <div className="p-2 bg-green-50 text-[#0A9782] rounded-lg">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase text-left">Ubicación</p>
                    <p className="text-slate-700">Edificio de Vinculación, Planta Alta</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl text-slate-600 font-medium shadow-sm border border-slate-200">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase text-left">Horario de Atención</p>
                    <p className="text-slate-700">Lunes a Viernes 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>

      {/* Modal de Imagen - Exactamente igual a Becas */}
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
}
