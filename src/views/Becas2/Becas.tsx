import PdfBecasExcencion from '@/components/Pdf/PdfBecas';
import { Award, FileCheck, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Becas = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-700 mb-4">Convocatoria del cuatrimestre Sep-Dic 2025</h1>
          <div className="w-32 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            La Universidad Tecnológica de Tecamachalco ofrece diversas opciones de apoyo económico 
            para nuestros estudiantes. Explora las oportunidades disponibles y los requisitos para acceder a ellas.
          </p>
        </div>

        {/* NUEVA SECCIÓN: RESULTADOS DE BECA EXENCIÓN DE PAGO CUATRIMESTRAL SEP-DIC 2025 */}
        <div className="mb-12 bg-[#0A9782] rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-3">
                  <Award className="text-[#0A9782]" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Resultados Publicados
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base">
                    Beca Exención Sep-Dic 2025
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg px-4 py-2">
                <p className="text-[#0A9782] font-bold">📅 Nov 2025</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6">
            <p className="text-gray-700 mb-4 text-sm">
              Resultados de la Beca de Exención de Pago Cuatrimestral para el periodo <strong>septiembre-diciembre 2025</strong>:
            </p>

            {/* Documentos en layout horizontal compacto */}
            <div className="space-y-3 mb-4">
              {/* Documento 1: Resultados Generales */}
              <a
                href="becas/RESULTADOS BECA EXENCION DE PAGO CUATRIMESTRAL SEP-DIC2025 (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-[#D1672A] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-[#D1672A] rounded-lg p-2 flex-shrink-0">
                    <FileCheck className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#D1672A] transition-colors">Resultados Generales</h4>
                    <p className="text-xs text-gray-600 truncate">Lista de beneficiados Sep-Dic 2025</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#D1672A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Documento 2: Casos Especiales */}
              <a
                href="becas/RESULTADOS CASOS ESPECIALES SEP-DIC2025 (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-[#0A9782] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-[#0A9782] rounded-lg p-2 flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#0A9782] transition-colors">Casos Especiales</h4>
                    <p className="text-xs text-gray-600 truncate">Situaciones evaluadas individualmente</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0A9782] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Documento 3: Carta Compromiso */}
              <a
                href="becas/STIT01-R04 CARTA COMPROMISO (EXENCION 50_) (1).pdf"
                download
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-[#D1672A] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-[#D1672A] rounded-lg p-2 flex-shrink-0">
                    <FileCheck className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#D1672A] transition-colors">Carta Compromiso (Solo 50%)</h4>
                    <p className="text-xs text-gray-600 truncate">Formato para beneficiarios de Exención 50%</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#D1672A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </a>

              {/* Documento 4: Excel */}
              <a
                href="becas/formato de solicitud de prensa Publicacion-Resultados septiembre diciembre 2025.xlsx"
                download
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-green-600 rounded-lg p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-green-600 transition-colors">Formato Solicitud (Excel)</h4>
                    <p className="text-xs text-gray-600 truncate">Publicación Resultados Sep-Dic 2025</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </a>

              {/* Documento 5: Word */}
              <a
                href="becas/POST Resultados de la Beca de Exención de Pago Cuatrimestral Septiembre.docx"
                download
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">POST Resultados (Word)</h4>
                    <p className="text-xs text-gray-600 truncate">Texto oficial de publicación</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </a>
            </div>

            {/* Nota importante compacta */}
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500 mb-4">
              <p className="text-sm text-gray-700">
                <strong className="text-red-700">⚠️ Importante:</strong> La Carta Compromiso es <strong>solo para beneficiarios de Exención 50%</strong>. 
                Si tienes beca del 100% o no apareces en resultados, no necesitas este formato.
              </p>
            </div>

            {/* Información de contacto compacta */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Dudas:</strong> Departamento de Servicios Estudiantiles
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                <a href="mailto:serviciosestudiantiles@uttecam.edu.mx" className="text-[#0A9782] hover:underline font-medium">
                  📧 serviciosestudiantiles@uttecam.edu.mx
                </a>
                <span>📞 249 422 3300 Ext. 161</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de secciones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sección 1: Requisitos para obtener una beca */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
            <div className="bg-amber-600 p-4">
              <div className="flex items-center">
                <Award className="text-white mr-2" size={24} />
                <h2 className="text-xl font-bold text-white">Requisitos para obtener una beca</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center"
              onClick={handleImageClick}>
                <img 
                  src="becas/becaExcencion.jpeg" 
                  alt="Requisitos para becas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-gray-600 text-sm">
                <p>Esta imagen muestra los requisitos generales para solicitar cualquier tipo de beca en nuestra institución.</p>
              </div>
            </div>
          </div>

          {/* Modal para mostrar la imagen en grande con scroll */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="relative bg-white rounded-lg overflow-auto max-h-[90vh] max-w-[90vw] shadow-lg">
                <button 
                  className="absolute top-2 right-2 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <img 
                  src="becas/becaExcencion.jpeg" 
                  alt="Requisitos para becas" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
          
          {/* Sección 2: Beca de exención de pago */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 lg:col-span-2">
            <div className="bg-amber-700 p-4">
              <div className="flex items-center">
                <FileCheck className="text-white mr-2" size={24} />
                <h2 className="text-xl font-bold text-white">Beca de exención de pago</h2>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Banner */}
              <PdfBecasExcencion
                title="Documento de Beca de Exención"
                description="Convocatoria de Beca de Exención"
                pdfSrc="becas/becasExcencionDocumento.pdf"
              />

              {/* Listado de enlaces */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                  <FileCheck className="text-amber-600 mr-2" size={20} />
                  Enlaces importantes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:bg-amber-50 transition-colors">
                    <div className="text-amber-600 mr-3">
                      <Award size={20} />
                    </div>
                    <a
                      href="https://forms.gle/YQq8xCZbiAyQfeb28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-amber-600 transition-colors"
                    >
                      Preregistro para alumnos que pasan a 7º y 10º cuatrimestre
                    </a>
                  </li>
                  <li className="flex items-center bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:bg-amber-50 transition-colors">
                    <div className="text-amber-600 mr-3">
                      <Award size={20} />
                    </div>
                    <a
                      href="https://forms.gle/PFqMS1fCf2KWTYaYA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-amber-600 transition-colors"
                    >
                      Preregistro para alumnos que pasan a 4º cuatrimestre
                    </a>
                  </li>
                  <li className="flex items-center bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:bg-amber-50 transition-colors">
                    <div className="text-amber-600 mr-3">
                      <FileCheck size={20} />
                    </div>
                    <a
                      href="https://drive.google.com/drive/folders/1PtCZLvoD3z4jw6a6rSqVnHR_4zJPZNJZ?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-amber-600 transition-colors"
                    >
                      Archivos descargables
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sección 3: Convocatoria de beca de nuevo ingreso 
          
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 lg:col-span-3">
              <div className="bg-amber-800 p-4">
                <div className="flex items-center">
                  <Award className="text-white mr-2" size={24} />
                  <h2 className="text-xl font-bold text-white">Convocatoria de beca de nuevo ingreso: Desafía el reto de crear el futuro</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-6">
                      <FileText className="text-amber-600 mr-3" size={24} />
                      <div>
                        <h3 className="font-bold text-xl text-gray-800">Convocatoria para Nuevo Ingreso</h3>
                        <p className="text-gray-600">Programa de becas para estudiantes de nuevo ingreso</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Tipos de becas disponibles:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                            <span>Beca de excelencia académica (50% y 100%)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                            <span>Beca por mérito científico, cultural o deportivo</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                            <span>Beca para estudiantes de bajos recursos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                            <span>Becas por convenio</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border-l border-gray-200 pl-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Documento completo:</h4>
                        <PdfBecasNuevoIngreso
                          title='Convocatoria de Beca de Nuevo Ingreso'
                          description='Convocatoria de Beca de Nuevo Ingreso: Desafía el reto de crear el futuro'
                          pdfSrc='becas/Convocatoria-NuevoIngreso.pdf'
                        />
                        
                        <p className="text-sm text-gray-600">
                          Este documento contiene todos los detalles sobre las becas disponibles para estudiantes 
                          de nuevo ingreso, incluyendo requisitos específicos, fechas importantes y el proceso de solicitud.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          */}
        </div>

        {/* Nueva sección: PROGRAMA S283 JÓVENES ESCRIBIENDO EL FUTURO */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
              <Award className="text-green-600" size={48} />
            </div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              PROGRAMA S283 JÓVENES ESCRIBIENDO EL FUTURO
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <ExternalLink className="text-white" size={20} />
              </div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-green-500 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <span className="font-bold text-green-700">Programa S283 - Jóvenes Escribiendo el Futuro</span> del Gobierno de México para estudiantes de educación superior. 
              Un apoyo económico directo que busca <span className="font-semibold">garantizar el derecho a la educación</span> y promover la 
              <span className="font-semibold text-green-700">igualdad de oportunidades</span> para todos los jóvenes mexicanos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Acceso al sistema */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-green-600 p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Acceso a la Plataforma</h3>
                    <p className="text-green-100 text-sm">Sistema SUBES - Gobierno de México</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {/* Registro */}
                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-600 rounded-full p-3 mr-4">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-800">Nuevo Registro</h4>
                        <p className="text-green-700 text-sm font-medium">Primera vez en el sistema</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      🎓 <strong>Crea tu cuenta oficial</strong> en la plataforma SUBES.
                    </p>
                    <a
                      href="https://subes.becasbenitojuarez.gob.mx/registro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800 text-lg group-hover:text-green-700 transition-colors">Crear Cuenta Nueva</h5>
                            <p className="text-gray-600 text-sm">Registro en la plataforma oficial</p>
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  
                  {/* Seguimiento */}
                  <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
                        <FileCheck className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-800">Seguimiento</h4>
                        <p className="text-blue-700 text-sm font-medium">Ya tienes cuenta registrada</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      📋 <strong>Consulta el estatus</strong> de tu beca y trámites.
                    </p>
                    <a
                      href="https://subes.becasbenitojuarez.gob.mx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">Acceder al Panel</h5>
                            <p className="text-gray-600 text-sm">Consulta tu estado y trámites</p>
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentos informativos */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-green-700 p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Recursos del Programa</h3>
                    <p className="text-green-100 text-sm">Documentos oficiales y guías informativas</p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-8">
                {/* Guía de registro */}
                <div className="border-2 border-blue-200 rounded-2xl p-6 bg-blue-50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Guía Paso a Paso para Registro</h4>
                  </div>
                  <PdfBecasExcencion
                    title="Manual de Registro JEF"
                    description="PROGRAMA S283 JÓVENES ESCRIBIENDO EL FUTURO - Guía completa para alumnos"
                    pdfSrc="becas/1-PROGRAMA S283 JÓVENES ESCRIBIENDO EL FUTURO JEF ALUMNOS.pdf"
                  />
                  <div className="mt-4 bg-white rounded-xl p-4 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed">
                      📚 <strong>Guía detallada</strong> con instrucciones paso a paso para realizar tu registro en el programa 
                      Jóvenes Escribiendo el Futuro. Incluye capturas de pantalla y explicaciones claras del proceso.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-blue-700 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ¡Recomendado revisar antes de iniciar tu registro!
                    </div>
                  </div>
                </div>

                {/* Comunicado oficial */}
                <div className="border-2 border-green-200 rounded-2xl p-6 bg-green-50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Comunicado Oficial 2025-2</h4>
                  </div>
                  <PdfBecasExcencion
                    title="Documento Gubernamental"
                    description="Anexo 2. Comunicado de Inicio 2025-2_Estudiantes_S283"
                    pdfSrc="becas/Anexo 2. Comunicado de Inicio 2025-2_Estudiantes_S283.pdf"
                  />
                  <div className="mt-4 bg-white rounded-xl p-4 border border-green-200">
                    <p className="text-gray-700 leading-relaxed">
                      📜 <strong>Información oficial</strong> del programa S283 Jóvenes Escribiendo el Futuro para el periodo 2025-2. 
                      Incluye fechas importantes, requisitos actualizados y procedimientos.
                    </p>
                  </div>
                </div>

                {/* Imagen informativa */}
                <div className="border-2 border-indigo-200 rounded-2xl p-6 bg-indigo-50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-600 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Material Visual Complementario</h4>
                  </div>
                  <div className="aspect-video bg-white rounded-xl flex items-center justify-center mb-4 border-2 border-indigo-200 overflow-hidden">
                    <img 
                      src="becas/Imagen de WhatsApp 2025-10-01 a las 14.10.05_c9e65ec9.jpg" 
                      alt="Información Programa S283 Jóvenes Escribiendo el Futuro" 
                      className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                      onClick={() => window.open("becas/Imagen de WhatsApp 2025-10-01 a las 14.10.05_c9e65ec9.jpg", "_blank")}
                    />
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-indigo-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          🖼️ <strong>Infografía informativa</strong> con detalles visuales sobre el proceso del programa.
                        </p>
                        <p className="text-sm text-gray-600">Haz clic en la imagen para verla en tamaño completo</p>
                      </div>
                      <a
                        href="becas/Imagen de WhatsApp 2025-10-01 a las 14.10.05_c9e65ec9.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Descargar imagen
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador visual elegante */}
        <div className="mt-24 mb-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-8 py-4 rounded-full border-2 border-amber-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700 font-semibold">UTTECAM</span>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección: Documentos adicionales de becas universitarias */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <FileCheck className="text-amber-600" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-amber-700 mb-4">Recursos Adicionales UTTECAM</h2>
            <div className="w-28 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Documentos complementarios y recursos informativos sobre las becas internas de nuestra universidad
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-amber-600 rounded-full p-3 mr-3">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Información Institucional</h3>
            </div>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              🏦 Los documentos y enlaces mostrados en esta sección contienen <strong>información oficial y actualizada</strong> 
              sobre las becas y apoyos económicos que ofrece la Universidad Tecnológica de Tecamachalco. 
              Para dudas adicionales, contáctanos directamente.
            </p>
            <div className="mt-6 inline-flex items-center text-amber-700 font-medium">
              <span className="mr-2">📞</span>
              <span>Departamento de Becas - UTTECAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Becas;