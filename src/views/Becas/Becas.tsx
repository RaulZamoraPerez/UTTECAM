
import PdfBecasExcencion from '@/components/Pdf/PdfBecas';
import { Award, FileCheck, ExternalLink, Calendar, Download, Info, ChevronRight, FileText, Sparkles, Globe, BookOpenCheck, Radio, AlertCircle, GraduationCap, BellRing, CheckCircle2, Pin, BadgePercent } from 'lucide-react';
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
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
            Becas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Apoyos</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Impulsando el talento universitario con oportunidades reales para tu desarrollo académico.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
    
        {/* NUEVA SECCIÓN: Resultados Beca Estadía Mayo-Agosto 2026 */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-green-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 tracking-tight">
              <BellRing className="text-green-500 w-6 h-6" />
              RESULTADOS BECA DE ESTADÍA MAYO–AGOSTO 2026
            </h2>
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-500">
            <div className="p-8 md:p-12 relative z-10">
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-4xl">
                Se informa a la comunidad estudiantil que ya se encuentran disponibles los resultados de la Beca de Estadía correspondiente al periodo mayo–agosto 2026.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100/80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">Beneficiados</h3>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm leading-relaxed">Las y los estudiantes beneficiados recibirán un correo electrónico con las indicaciones a seguir.</p>
                  <div className="flex items-center gap-2 text-green-700 bg-green-50/80 w-fit px-4 py-2 rounded-full text-sm font-medium">
                    <BadgePercent className="w-4 h-4" />
                    Esta beca cubre el 100% del pago cuatrimestral.
                  </div>
                </div>

                <PdfBecasExcencion
                  title="Resultados Beca de Estadía Profesional Mayo - Agosto 2026"
                  pdfSrc="/becas/0_1.-BECA DE ESTADIA- BASE PARA SERVIVIOS ESCOLARES MAYO-AGOSTO 2026.pdf"
                  className="h-full"
                >
                  <div className="flex flex-col justify-center items-center p-8 bg-white rounded-[2rem] border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-green-400 transition-all group w-full h-full relative overflow-hidden text-center gap-6">
                    <div className="absolute inset-0 bg-green-50/0 group-hover:bg-green-50/80 transition-colors duration-500"></div>
                    
                    <div className="relative flex items-center justify-center w-20 h-20 bg-red-50 text-red-500 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <FileText className="w-10 h-10" />
                      <span className="absolute -bottom-3 right-[-10px] text-[11px] font-black bg-red-600 text-white px-2 py-1 rounded-md shadow-md">PDF</span>
                    </div>

                    <div className="relative z-10 w-full flex flex-col items-center">
                      <div className="text-gray-800 font-bold text-base mb-2 group-hover:text-green-800 transition-colors">
                        Resultados_Estadia_2026.pdf
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-6">
                        <span>Documento Oficial</span>
                      </div>

                      <div className="flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-md group-hover:bg-green-700 group-hover:shadow-xl group-hover:-translate-y-1 transition-all gap-3 w-full max-w-[200px]">
                        <Download className="w-5 h-5" />
                        Descargar
                      </div>
                    </div>
                  </div>
                </PdfBecasExcencion>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Pin className="text-amber-500 w-5 h-5" /> Indicaciones para beneficiados:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Descargar el correo de notificación en formato PDF</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Nombrar el archivo con su matrícula seguida de la palabra "BECA"</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Subirlo a la plataforma Mi Escuela el día de su reinscripción</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Contestar la encuesta de satisfacción del servicio (link enviado por correo)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Acudir a firmar resultados a partir del 22 de abril en el Departamento de Servicios Estudiantiles (Becas)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Presentar captura de pantalla como evidencia de haber contestado la encuesta</span>
                    </li>
                  </ul>
                  <div className="bg-red-50/50 text-red-600 p-4 rounded-2xl flex items-start gap-3 mt-6 border border-red-100/50">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-medium leading-relaxed">⚠ El cumplimiento de estos requisitos es indispensable para la validación de la beca.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Pin className="text-gray-400 w-5 h-5" /> Indicaciones para no beneficiados:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Deberán acudir al Departamento de Servicios Estudiantiles para solicitar información sobre los motivos por los cuales no fueron seleccionados.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Deberán realizar el pago de su cuatrimestre en la fecha indicada por su programa educativo.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <h5 className="font-bold text-gray-800 mb-2 text-sm">Para mayores informes</h5>
                    <p className="text-gray-500 text-xs">Favor de acudir al Departamento de Servicios Estudiantiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 1: Beca de Estadía Profesional 2026 */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-10 w-1 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">Estadía Profesional: Mayo - Agosto 2026</h2>
          </div>

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
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Convocatoria Beca</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">Convocatoria Beca de Estadía Profesional</h3>
                      <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
                        Documentación y requisitos oficiales para la beca de los alumnos que inician su periodo de estadía en el cuatrimestre Mayo - Agosto 2026.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 max-w-sm">
                      <a 
                        href="/becas/01_CONVOCATORIA Beca de Estadía Profesional UTTECAM.pdf" 
                        target="_blank" 
                        className="group flex items-center p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-green-200 hover:bg-green-50/50 transition-all shadow-sm"
                      >
                        <div className="p-3 bg-white text-green-600 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                          <FileText size={28} />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-gray-800 text-sm">Descargar Convocatoria</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Documento PDF</p>
                        </div>
                        <ChevronRight size={20} className="ml-auto text-gray-300 group-hover:text-green-500" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 flex justify-center">
                    <div 
                      className="relative group cursor-pointer aspect-[3/4] w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-[1.02]"
                      onClick={() => handleImageClick('/becas/01_POST CONVOCATORIA BECA MAYO-AGOSTO UTTECAM_2026.jpg.jpeg')}
                    >
                      <img 
                        src="/becas/01_POST CONVOCATORIA BECA MAYO-AGOSTO UTTECAM_2026.jpg.jpeg" 
                        alt="Poster Beca Estadía" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* Sección: Nueva Convocatoria Beca de Exención de Pago Mayo-Agosto 2026 */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-10 w-1 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-700 uppercase tracking-tight">Beca Académica: <span className="text-xl md:text-2xl font-semibold text-gray-900">Mayo - Agosto 2026</span></h2>
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
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">Convocatoria Beca de Exención de Pago <br/><span className="text-xl md:text-2xl font-semibold text-gray-900">Mayo - Agosto 2026</span></h3>
                      <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
                        Por este medio se hace pública la convocatoria oficial. Invitamos a la comunidad estudiantil a participar en el proceso de selección para el próximo cuatrimestre.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 max-w-sm">
                      <a
                        href="/becas/nuevo_CONVOCATORIA DE BECA DE EXENCIÓN DE PAGO CUATRIMESTRAL MAYO - AGOSTO 2026 .pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-green-200 hover:bg-green-50/50 transition-all shadow-sm"
                      >
                        <div className="p-3 bg-white text-green-600 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                          <FileText size={28} />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-gray-700 text-sm">Descargar Convocatoria</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Documento PDF</p>
                        </div>
                        <ChevronRight size={20} className="ml-auto text-gray-300 group-hover:text-green-500" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 flex justify-center">
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-green-200 blur-3xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                      <img
                        src="/becas/Beca_motocle.png"
                        alt="Mascota Becas"
                        className="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Resultados y Avisos Beca de Exención de Pago Enero-Abril 2026 */}
        <div className="space-y-16">
          {/* Main Hero Card (Mismo estilo que Beca Estadía) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-3 w-3 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Resultados Publicados</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                        Resultados de Beca de Exención de Pago <br/>
                        <span className="text-xl md:text-2xl font-semibold text-gray-900">Enero - Abril 2026</span>
                      </h2>
                      <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
                        Se publican los resultados oficiales de las becas de exención de pago para el cuatrimestre enero - abril 2026. Consulta el documento y los avisos adjuntos.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1">
                        <PdfBecasExcencion
                          title="Resultados de Becas de Exención de Pago Enero - Abril 2026"
                          description="Descargar Resultados"
                          pdfSrc="/becas/01_RESULTADOS ENERO-ABRIL 2026 PARA REPORTAR.pdf"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 flex justify-center">
                    <div 
                      className="relative group cursor-pointer" 
                      onClick={() => handleImageClick('/becas/aviso 4.jpeg')}
                    >
                      <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                      <img 
                        src="/becas/aviso 4.jpeg" 
                        alt="Resultados Exención" 
                        className="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl rounded-xl"
                      />
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                         <img src="/becas/becas_motocle.png" alt="Mascota" className="w-10 h-10 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Avisos (Para mantener los otros archivos bien acomodados) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aviso 1: 50% */}
            <div 
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-2 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => handleImageClick('/becas/aviso 1.jpeg')}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img src="/becas/aviso 1.jpeg" alt="Aviso Beca 50%" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    <ExternalLink size={16} /> Ampliar información
                  </span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h4 className="font-bold text-gray-800">Aviso Beca 50%</h4>
                <p className="text-sm text-gray-500">Instrucciones específicas</p>
              </div>
            </div>

            {/* Aviso 2: General */}
            <div 
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-2 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => handleImageClick('/becas/aviso 2.jpeg')}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img src="/becas/aviso 2.jpeg" alt="Aviso General" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    <ExternalLink size={16} /> Ampliar información
                  </span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h4 className="font-bold text-gray-800">Aviso 50% y 100%</h4>
                <p className="text-sm text-gray-500">Información institucional</p>
              </div>
            </div>

            {/* Aviso 3: Calendario */}
            <div 
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-2 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => handleImageClick('/becas/aviso 3.jpeg')}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img src="/becas/aviso 3.jpeg" alt="Fechas Clave" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    <ExternalLink size={16} /> Ver calendario
                  </span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h4 className="font-bold text-gray-800">Fechas Clave</h4>
                <p className="text-sm text-gray-500">Calendario del proceso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Resultados Beca de Estadía Profesional Enero - Abril 2026 */}
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
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Resultados Publicados</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                      Resultados de Beca de Estadía Profesional <br/>
                      <span className="text-xl md:text-2xl font-semibold text-gray-900">Enero - Abril 2026</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                      Beca de Exención de Pago <br/>
                      <span className="text-xl md:text-2xl font-semibold text-gray-900">Enero - Abril 2026</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
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
                      <span className="bg-white/90 backdrop-blur text-gray-800 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
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

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar size={12} />
                <span>Periodo Anterior</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Convocatoria Sep-Dic 2025</h3>
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
                  <h4 className="font-bold text-gray-800 text-lg">Documento de Convocatoria</h4>
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
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-amber-700">Resultados Generales</h4>
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
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-amber-700">Casos Especiales</h4>
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
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-amber-700">Carta Compromiso (Solo 50%)</h4>
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
              </div>
          </div>
        </div>
      </div>

      {/* Sección: Jóvenes Escribiendo el Futuro (Rediseño Consistente) */}
        <div className="py-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-3xl mb-8 shadow-sm">
              <Award className="text-green-600" size={40} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-tight">
              Programa S283 <br className="hidden md:block" />
              <span className="text-green-600">Jóvenes Escribiendo el Futuro</span>
            </h2>

            <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
              <div className="h-px flex-1 bg-gray-200"></div>
              <a 
                href="https://www.gob.mx/becasbenitojuarez/articulos/beca-jovenes-escribiendo-el-futuro-de-educacion-superior" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
                title="Sitio Oficial"
              >
                <ExternalLink size={20} />
              </a>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Cards Grid: Aviso y Resultados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card: Aviso Importante */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 bg-amber-50 p-4 rounded-2xl text-amber-600 group-hover:scale-110 transition-transform">
                    <AlertCircle size={32} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider mb-3">
                      Prioritario
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Aviso Importante</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      Información crítica sobre tu proceso. Revisa este documento para evitar contratiempos.
                    </p>
                    <PdfBecasExcencion
                      title=""
                      description="Abrir Aviso"
                      pdfSrc="/becas/01_AVISO IMPORTANTE – BECAS BENITO JUÁREZ.pdf"
                    />
                  </div>
                </div>
              </div>

              {/* Card: Resultados */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 bg-green-50 p-4 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider mb-3">
                      Publicado
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Resultados 2025</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      Consulta la lista oficial de beneficiarios aceptados del periodo Sep - Dic 2025.
                    </p>
                    <PdfBecasExcencion
                      title=""
                      description="Ver Listado"
                      pdfSrc="/becas/RESULTADOS DE BECAS BENITO JUAREZ SEP - DIC 2025.pdf"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sección Visual: Avisos y Calendarios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              {/* Aviso Visual */}
              <div 
                className="relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gray-50"
                onClick={() => handleImageClick('/becas/BECAS_AVISO.jpeg')}
              >
                <img 
                  src="/becas/BECAS_AVISO.jpeg" 
                  alt="Aviso" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur px-6 py-3 rounded-full text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-xl flex items-center gap-2">
                    <ExternalLink size={18} /> Ampliar Aviso
                  </span>
                </div>
              </div>

              {/* Calendario Visual */}
              <div 
                className="relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gray-50"
                onClick={() => handleImageClick('/becas/CALENDARIO DE PAGOS BECA BENITO JUAREZ NOV-DIC 2025.jpeg')}
              >
                <img 
                  src="/becas/CALENDARIO DE PAGOS BECA BENITO JUAREZ NOV-DIC 2025.jpeg" 
                  alt="Calendario" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur px-6 py-3 rounded-full text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-xl flex items-center gap-2">
                    <ExternalLink size={18} /> Ampliar Calendario
                  </span>
                </div>
              </div>
            </div>

            {/* Grid de Recursos Minimalista */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* SUBES */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <Globe size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Plataforma SUBES</h4>
                <p className="text-gray-500 text-xs mb-6">Acceso oficial al Sistema Único de Beneficiarios.</p>
                <a href="https://subes.becasbenitojuarez.gob.mx/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-xs flex items-center gap-2">
                  Visitar sitio <ExternalLink size={14} />
                </a>
              </div>

              {/* Registro */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-50 transition-colors">
                  <BookOpenCheck size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Guía de Registro</h4>
                <p className="text-gray-500 text-xs mb-6">Manual paso a paso para tu registro exitoso.</p>
                <PdfBecasExcencion
                    title=""
                    description="Ver Guía PDF"
                    pdfSrc="/becas/PROGRAMA S283 JOVENES ESCRIBIENDO EL FUTURO JEF ALUMNOS.pdf"
                />
              </div>

              {/* Comunicado */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-50 transition-colors">
                  <Radio size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Comunicado Oficial</h4>
                <p className="text-gray-500 text-xs mb-6">Información relevante y avisos de última hora.</p>
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
          <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Tienes dudas?</h3>
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