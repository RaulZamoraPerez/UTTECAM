import { motion } from 'framer-motion';

import { 
 
  Clock, 
  MapPin, 
  Users, 
  Phone, 
  Mail,
  
  
} from 'lucide-react';

const TalleresDeportivos = () => {
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Header Section */}
      <section className="pt-6 pb-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 mb-1 md:mb-2 leading-tight"
            >
              Talleres Deportivos
            </motion.h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 mb-0"
            >
              Fortalece tu cuerpo y mente a través del deporte y la actividad física
            </motion.p>
          </div>
        </div>
      </section>

      {/* Banner Principal Destacado */}
    
      <section className="py-6 md:py-12 px-0 md:px-0 flex flex-col items-center w-full">
        <div className="w-full flex justify-center">
          <div className="w-7/10 overflow-hidden rounded-md">
            <img
              src="/Actividades Culturales y Deportivas/Deportivas/BANNER DEPORTIVOS_UTTECAM 1-01.jpg"
              alt="Banner Talleres deportivos UTTECAM"
              className="w-full block bg-white transition-transform duration-500"
            
            />
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
              Información e Inscripciones Deportivas
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Datos de contacto */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Horario de Atención</h4>
                    <p className="text-gray-600 text-sm md:text-base">Lunes a Viernes: 7:00 - 19:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Ubicación</h4>
                    <p className="text-gray-600 text-sm md:text-base">Instalaciones Deportivas UTTECAM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-yellow-50 rounded-xl">
                  <div className="bg-yellow-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Contacto</h4>
                    <p className="text-gray-600 text-sm md:text-base">Coordinación Deportiva</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Información</h4>
                    <p className="text-gray-600 text-sm md:text-base">Consultar directamente en oficinas</p>
                  </div>
                </div>
              </div>

              {/* Requisitos generales */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 p-4 md:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    Requisitos Generales
                  </h4>
                  <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                    <li>• Ser estudiante activo de UTTECAM</li>
                    <li>• Certificado médico vigente</li>
                    <li>• Seguro de gastos médicos</li>
                    <li>• Equipo deportivo básico</li>
                    <li>• Compromiso de entrenamiento</li>
                  </ul>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TalleresDeportivos;