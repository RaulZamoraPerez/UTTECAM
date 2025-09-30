import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Phone, 
  Mail,
  Download,
  Info,
  Target
} from 'lucide-react';

const TalleresDeportivos = () => {
  const handleDownloadPDF = () => {
    // Crear un enlace temporal para descargar la imagen como PDF
    const link = document.createElement('a');
    link.href = '/Actividades_Culturales_Deport/deportivas.JPG';
    link.download = 'Catalogo_Talleres_Deportivos_UTTECAM.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Header Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 mb-4 md:mb-6 leading-tight"
            >
              Talleres Deportivos
            </motion.h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Fortalece tu cuerpo y mente a través del deporte y la actividad física
            </motion.p>
          </div>
        </div>
      </section>

      {/* Imagen Principal del Catálogo */}
      <section className="py-6 md:py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden"
          >
            {/* Encabezado de la imagen */}
            <div className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 px-4 md:px-8 py-4 md:py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-white/20 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Trophy className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-2xl font-bold text-white truncate">Catálogo de Talleres Deportivos</h2>
                    <p className="text-sm md:text-base text-white/90 leading-tight">Información completa de deportes, horarios y entrenamientos</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadPDF}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
                >
                  <Download className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">Descargar</span> Catálogo
                </motion.button>
              </div>
            </div>

            {/* Imagen del catálogo */}
            <div className="p-4 md:p-8">
              <div className="relative group">
                <img 
                  src="/Actividades_Culturales_Deport/deportivas.JPG" 
                  alt="Catálogo de Talleres Deportivos - Información completa"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-md md:shadow-lg group-hover:shadow-xl md:group-hover:shadow-2xl transition-shadow duration-500"
                />
                {/* Overlay informativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4">
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <Info className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="font-semibold text-sm md:text-base">Información detallada</span>
                      </div>
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                        Esta imagen contiene toda la información oficial sobre horarios de entrenamiento, 
                        instructores, ubicaciones y requisitos para cada disciplina deportiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas Deportivas */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Trophy className="h-6 w-6 md:h-8 md:w-8" />, number: "15+", label: "Disciplinas Deportivas", color: "blue" },
              { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, number: "200+", label: "Estudiantes Activos", color: "green" },
              { icon: <Target className="h-6 w-6 md:h-8 md:w-8" />, number: "8", label: "Torneos Anuales", color: "yellow" },
              { icon: <Calendar className="h-6 w-6 md:h-8 md:w-8" />, number: "100%", label: "Salud y Bienestar", color: "blue" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`flex justify-center mb-3 md:mb-4 text-${stat.color}-600`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-xs md:text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}
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

                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 md:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5 text-yellow-600" />
                    Temporadas Deportivas
                  </h4>
                  <div className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                    <p><strong>Temporada 1:</strong> Septiembre - Diciembre</p>
                    <p><strong>Temporada 2:</strong> Enero - Abril</p>
                    <p><strong>Temporada 3:</strong> Mayo - Agosto</p>
                  </div>
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