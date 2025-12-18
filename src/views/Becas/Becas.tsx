
import PdfBecasExcencion from '@/components/Pdf/PdfBecas';
import { Award, FileCheck, ExternalLink, Calendar, Download, Info, ChevronRight, FileText, Sparkles, Globe, BookOpenCheck, Radio, AlertCircle, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const Becas = () => {
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

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      
     
      <div className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium mb-6">
            <Sparkles size={14} className="text-amber-500" />
            <span>Portal de Becas Institucionales</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Becas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Apoyos</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Impulsando el talento universitario con oportunidades reales para tu desarrollo académico.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
    
        {/* Sección: Resultados Beca de Estadía Profesional */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Resultados Publicados</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                      Resultados de Beca de Estadía Profesional <br/>
                      <span className="text-gray-400">Enero - Abril 2026</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Se publican los resultados de las becas para el cuatrimestre enero - abril 2026 para estudiantes en periodo de estadía.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1">
                      <PdfBecasExcencion
                        title="Resultados Beca de Estadía Profesional 11vo Cuatrimestre Enero - Abril 2026"
                        description="Descargar Resultados"
                        pdfSrc="/becas/RESULTADOS DE LA BECA DE ESTADIA PROFESIONAL 11VO CUATRIMESTRE ENERO - ABRIL 2026.pdf"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 flex justify-center">
                  <div 
                    className="relative group cursor-pointer" 
                    onClick={() => handleImageClick('/becas/becas_motocle.png')}
                  >
                    <div className="absolute inset-0 bg-green-200 blur-3xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src="/becas/becas_motocle.png" 
                      alt="Resultados Beca Estadía" 
                      className="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Convocatoria Abierta</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                      Beca de Exención de Pago <br/>
                      <span className="text-gray-400">Enero - Abril 2026</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Por este medio se hace pública la convocatoria oficial. Invitamos a la comunidad estudiantil a participar en el proceso de selección para el próximo cuatrimestre.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="becas/CONVOCATORIA DE BECA DE EXENCIÓN DE PAGO_nuevo.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1"
                    >
                      <Download size={20} />
                      Descargar PDF
                    </a>
                    <button 
                      onClick={() => handleImageClick('/becas/imagen_01.jpeg')}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all hover:border-gray-300"
                    >
                      <ExternalLink size={20} />
                      Ver Cartel
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-400 pt-4 border-t border-gray-100">
                    <Info size={16} />
                    <span>Lectura obligatoria para todos los solicitantes.</span>
                  </div>
                </div>

                <div className="w-full lg:w-5/12">
                  <div 
                    className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl shadow-gray-200"
                    onClick={() => handleImageClick('/becas/imagen_01.jpeg')}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur text-gray-900 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                        Ampliar Imagen
                      </span>
                    </div>
                    <img 
                      src="/becas/imagen_01.jpeg" 
                      alt="Convocatoria 2026" 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Sección: Convocatoria Anterior (Sep-Dic 2025) */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar size={12} />
                <span>Periodo Anterior</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Convocatoria Sep-Dic 2025</h3>
              <p className="text-gray-500 mt-2">Consulta la convocatoria, requisitos y resultados del periodo pasado.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         
            <div className="lg:col-span-8 space-y-6">
              
            
              <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">Documento de Convocatoria</h4>
                  <p className="text-sm text-gray-500">Bases y lineamientos del periodo Sep-Dic 2025</p>
                </div>
                <PdfBecasExcencion
                  title=""
                  description="Ver Convocatoria"
                  pdfSrc="/becas/CONVOCATORIA SEPTIEMBRE-DICIEMBRE 2025.pdf"
                />
              </div>

              {/* Grid de Resultados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/becas/RESULTADOS BECA EXENCION DE PAGO CUATRIMESTRAL SEP-DIC2025 (2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-amber-700">Resultados Generales</h4>
                    <p className="text-xs text-gray-500">Lista de beneficiados</p>
                  </div>
                </a>

                <a
                  href="/becas/RESULTADOS CASOS ESPECIALES SEP-DIC2025 (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-amber-700">Casos Especiales</h4>
                    <p className="text-xs text-gray-500">Resoluciones particulares</p>
                  </div>
                </a>

                <a
                  href="/becas/STIT01-R04 CARTA COMPROMISO (EXENCION 50_) (1).pdf"
                  download
                  className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-3 md:col-span-2"
                >
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                    <Download size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-amber-700">Carta Compromiso (Solo 50%)</h4>
                    <p className="text-xs text-gray-500">Formato obligatorio para beneficiarios parciales</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-amber-500" />
                </a>
              </div>
            </div>

            {/* Columna Derecha: Imagen de Requisitos */}
            <div className="lg:col-span-4">
              <div 
                className="h-full bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                onClick={() => handleImageClick('/becas/becaExcencion.jpeg')}
              >
                <div className="relative h-48 lg:h-full min-h-[200px] rounded-xl overflow-hidden">
                  <img 
                    src="/becas/becaExcencion.jpeg" 
                    alt="Requisitos para becas" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Ver Requisitos
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-gray-700">Requisitos Generales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Jóvenes Escribiendo el Futuro (Rediseño Solicitado) */}
        <div className="py-12">
          
          {/* Header con Diseño Personalizado */}
          <div className="text-center mb-16 relative">
            {/* Top Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-50 rounded-full mb-8 shadow-sm animate-in fade-in zoom-in duration-500">
              <Award className="text-green-600" size={48} strokeWidth={1.5} />
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-700 mb-10 tracking-tight uppercase leading-tight max-w-5xl mx-auto drop-shadow-sm">
              Programa S283 <br className="hidden md:block" />
              Jóvenes Escribiendo el Futuro
            </h2>

            {/* Divider with Icon */}
            <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
              <div className="h-1.5 flex-1 bg-gradient-to-r from-transparent via-green-200 to-green-300 rounded-full"></div>
              <a 
                href="https://www.gob.mx/becasbenitojuarez/articulos/beca-jovenes-escribiendo-el-futuro-de-educacion-superior" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200 text-white transform hover:scale-110 hover:bg-green-600 transition-all duration-300 cursor-pointer"
                title="Sitio Oficial"
              >
                <ExternalLink size={24} />
              </a>
              <div className="h-1.5 flex-1 bg-gradient-to-l from-transparent via-green-200 to-green-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Card: Aviso Importante */}
            <div className="bg-gradient-to-r from-red-50/80 to-white rounded-2xl p-8 md:p-10 shadow-sm border border-red-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                <AlertCircle size={200} className="text-red-500" />
              </div>
              <div className="flex-shrink-0 bg-white p-5 rounded-full text-red-600 shadow-sm ring-4 ring-red-50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <AlertCircle size={36} />
              </div>
              <div className="flex-1 text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Prioritario
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Aviso Importante</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-2xl">
                  Información crítica sobre tu proceso de beca. Es <span className="font-semibold text-red-600">fundamental</span> que revises este documento para evitar contratiempos.
                </p>
                <div className="inline-block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <PdfBecasExcencion
                    title=""
                    description="Leer Aviso Completo"
                    pdfSrc="/becas/01_AVISO IMPORTANTE – BECAS BENITO JUÁREZ.pdf"
                  />
                </div>
              </div>
            </div>

            {/* Card: Resultados */}
            <div className="bg-gradient-to-r from-indigo-50/80 to-white rounded-2xl p-8 md:p-10 shadow-sm border border-indigo-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                <GraduationCap size={200} className="text-indigo-500" />
              </div>
              <div className="flex-shrink-0 bg-white p-5 rounded-full text-indigo-600 shadow-sm ring-4 ring-indigo-50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <GraduationCap size={36} />
              </div>
              <div className="flex-1 text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles size={12} />
                  Resultados Publicados
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Resultados Sep - Dic 2025</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-2xl">
                  Ya puedes consultar la lista oficial de beneficiarios aceptados. ¡Revisa si fuiste seleccionado!
                </p>
                <div className="inline-block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <PdfBecasExcencion
                    title="Resultados Sep - Dic 2025"
                    description="Consultar Lista de Resultados"
                    pdfSrc="/becas/RESULTADOS DE BECAS BENITO JUAREZ SEP - DIC 2025.pdf"
                  />
                </div>
              </div>
            </div>

            {/* Sección Destacada: Avisos y Calendarios */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
              
              {/* Card: Aviso Importante Visual */}
              <div 
                className="group relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                onClick={() => handleImageClick('/becas/BECAS_AVISO.jpeg')}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                      <AlertCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Aviso Importante</h3>
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-gray-100">
                    <img 
                      src="/becas/BECAS_AVISO.jpeg" 
                      alt="Aviso Importante Becas" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                        Ver Aviso Completo
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card: Calendario de Pagos */}
              <div 
                className="group relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                onClick={() => handleImageClick('/becas/CALENDARIO DE PAGOS BECA BENITO JUAREZ NOV-DIC 2025.jpeg')}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Calendar size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Calendario de Pagos</h3>
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-gray-100">
                    <img 
                      src="/becas/CALENDARIO DE PAGOS BECA BENITO JUAREZ NOV-DIC 2025.jpeg" 
                      alt="Calendario de Pagos Nov-Dic 2025" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                        Ver Calendario
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Grid de Recursos Adicionales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              
              {/* Card: SUBES (Blue Theme) */}
              <div className="bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-1/4 -translate-y-1/4">
                  <Globe size={120} className="text-blue-600" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm ring-1 ring-blue-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Globe size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Plataforma SUBES</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed relative z-10">Acceso directo al Sistema Único de Beneficiarios de Educación Superior.</p>
                <a href="https://subes.becasbenitojuarez.gob.mx/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors relative z-10 group-hover:gap-3">
                  Ir a la plataforma <ExternalLink size={16} />
                </a>
              </div>

            
              <div className="bg-gradient-to-br from-emerald-50/50 to-white p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-1/4 -translate-y-1/4">
                  <BookOpenCheck size={120} className="text-emerald-600" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm ring-1 ring-emerald-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <BookOpenCheck size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Guía de Registro</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed relative z-10">Manual detallado paso a paso para realizar tu registro exitosamente.</p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors relative z-10">
                  <PdfBecasExcencion
                    title=""
                    description="Ver Guía PDF"
                    pdfSrc="/becas/PROGRAMA S283 JOVENES ESCRIBIENDO EL FUTURO JEF ALUMNOS.pdf"
                  />
                </div>
              </div>

              {/* Card: Comunicado (Amber Theme) */}
              <div className="bg-gradient-to-br from-amber-50/50 to-white p-8 rounded-2xl border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-1/4 -translate-y-1/4">
                  <Radio size={120} className="text-amber-600" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-amber-600 shadow-sm ring-1 ring-amber-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Radio size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Comunicado Oficial</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed relative z-10">Información relevante, fechas importantes y avisos de última hora.</p>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors relative z-10">
                  <PdfBecasExcencion
                    title=""
                    description="Leer Comunicado"
                    pdfSrc="/becas/Anexo 2. Comunicado de Inicio 2025-2_Estudiantes_S283.pdf"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Minimalista */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Tienes dudas?</h3>
          <p className="text-gray-500 mb-8">Estamos aquí para ayudarte en tu proceso</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:serviciosestudiantiles@uttecam.edu.mx" className="px-6 py-3 bg-white rounded-full text-gray-600 font-medium shadow-sm hover:shadow-md transition-all border border-gray-100">
              serviciosestudiantiles@uttecam.edu.mx
            </a>
            <span className="px-6 py-3 bg-white rounded-full text-gray-600 font-medium shadow-sm border border-gray-100">
              249 422 3300 Ext. 161
            </span>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
            <a href="https://forms.gle/YQq8xCZbiAyQfeb28" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Preregistro 7º y 10º</a>
            <a href="https://forms.gle/PFqMS1fCf2KWTYaYA" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Preregistro 4º</a>
            <a href="https://drive.google.com/drive/folders/1PtCZLvoD3z4jw6a6rSqVnHR_4zJPZNJZ?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Drive de Archivos</a>
          </div>
        </div>

      </div>

      {/* Modal de Imagen */}
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