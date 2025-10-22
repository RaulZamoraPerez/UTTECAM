import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Phone, 
  Mail,
  
  X
} from 'lucide-react';

const TalleresDeportivos = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  // Datos de las fotos de talleres deportivos
  const fotosIndividuales = [
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/ACONDICIONAMIENTO_4.jpg",
      titulo: "Acondicionamiento Físico",
      descripcion: "Fortalecimiento y resistencia física",
      esBanner: false
    },
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/BALONCESTO_3_3.jpg",
      titulo: "Baloncesto",
      descripcion: "Deporte de equipo y estrategia",
      esBanner: false
    },
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/BÉISBOL_2.jpg",
      titulo: "Béisbol",
      descripcion: "El rey de los deportes americanos",
      esBanner: false
    },
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/FÚTBOL 7_1.jpg",
      titulo: "Fútbol 7",
      descripcion: "Fútbol adaptado con equipos reducidos",
      esBanner: false
    },
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/FÚTBOL SOCCER_2.jpg",
      titulo: "Fútbol Soccer",
      descripcion: "El deporte más popular del mundo",
      esBanner: false
    },
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/TAEKWONDO_3_3.jpg",
      titulo: "Taekwondo",
      descripcion: "Arte marcial coreano de patadas",
      esBanner: false
    },
    {
      src: "/Actividades Culturales y Deportivas/Deportivas/VOLEIBOL_1.jpg",
      titulo: "Voleibol",
      descripcion: "Deporte de equipo dinámico y técnico",
      esBanner: false
    }
  ];

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

      {/* Galería de Deportes - cards modernas y deportivas */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fotosIndividuales.map((foto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="relative group"
                style={{ maxWidth: '600px', margin: '0 auto' }}
              >
                <img 
                  src={foto.src}
                  alt={foto.titulo}
                  className="block w-full h-auto rounded-none md:rounded-xl md:shadow-md md:border-2 md:border-blue-200 md:bg-white md:hover:shadow-2xl md:hover:border-blue-500 transition-all duration-300 md:h-80 md:object-contain"
                  onClick={() => setImagenSeleccionada(foto.src)}
                  style={{ display: 'block' }}
                />
                <button
                  onClick={() => setImagenSeleccionada(foto.src)}
                  className="hidden md:block absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full shadow hover:bg-blue-700 transition-colors text-xs opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.2s' }}
                >
                  Ver completa
                </button>
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

      {/* Modal para ampliar imagen */}
      {imagenSeleccionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl shadow-2xl border-2 border-blue-200 flex items-center justify-center">
            <button
              onClick={() => setImagenSeleccionada(null)}
              className="absolute top-4 right-4 z-20 bg-blue-600 text-white w-10 h-10 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={imagenSeleccionada}
              alt="Imagen ampliada"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TalleresDeportivos;