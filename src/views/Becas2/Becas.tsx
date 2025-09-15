import PdfBecasExcencion from '@/components/Pdf/PdfBecas';
import { Award, FileCheck } from 'lucide-react';
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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
        
      </div>
    </section>
  );
};

export default Becas;