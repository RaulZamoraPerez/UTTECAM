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

const TalleresCulturales = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  // Datos de las fotos de talleres culturales
  const fotosIndividuales = [
    {
      src: "/Actividades Culturales y Deportivas/Culturales/AJEDREZ_5.jpg",
      titulo: "Taller de Ajedrez",
      descripcion: "Desarrollo del pensamiento estratégico y lógico"
    },
    {
      src: "/Actividades Culturales y Deportivas/Culturales/CANTO_1.jpg",
      titulo: "Taller de Canto",
      descripcion: "Técnicas vocales y expresión musical"
    },
    {
      src: "/Actividades Culturales y Deportivas/Culturales/DANZA FOLCLÓRICA_2_2.jpg",
      titulo: "Danza Folclórica",
      descripcion: "Tradiciones mexicanas en movimiento"
    },
    {
      src: "/Actividades Culturales y Deportivas/Culturales/DANZA URBANA_1_1.jpg",
      titulo: "Danza Urbana",
      descripcion: "Expresión contemporánea y urbana"
    },
    {
      src: "/Actividades Culturales y Deportivas/Culturales/ENSAMBLE MUSICAL_2.jpg",
      titulo: "Ensamble Musical",
      descripcion: "Música en conjunto y armonía"
    },
    {
      src: "/Actividades Culturales y Deportivas/Culturales/ORATORIA_3_3.jpg",
      titulo: "Taller de Oratoria",
      descripcion: "Arte de hablar en público con confianza"
    },
    {
      src: "/Actividades Culturales y Deportivas/Culturales/TEATRO_4.jpg",
      titulo: "Taller de Teatro",
      descripcion: "Expresión teatral y dramática"
    }
  ];

  // Banner destacado
    // ...existing code...

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header Section */}
      <section className="pt-6 pb-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-1 md:mb-2 leading-tight"
            >
              Talleres Culturales
            </motion.h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 mb-0"
            >
              Desarrolla tu creatividad y talento artístico en nuestros talleres especializados
            </motion.p>
          </div>
        </div>
      </section>

      {/* Banner Principal Destacado - solo link */}
      <section className="py-6 md:py-12 px-4 md:px-6 flex flex-col items-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-2">
        </div>
      </section>

      {/* Galería de Talleres */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
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
                  className="block w-full h-auto rounded-none md:rounded-xl md:shadow-md md:border-2 md:border-purple-200 md:bg-white md:hover:shadow-2xl md:hover:border-purple-500 transition-all duration-300 md:h-80 md:object-contain"
                  onClick={() => setImagenSeleccionada(foto.src)}
                  style={{ display: 'block' }}
                />
                <button
                  onClick={() => setImagenSeleccionada(foto.src)}
                  className="hidden md:block absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full shadow hover:bg-purple-700 transition-colors text-xs opacity-0 group-hover:opacity-100"
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
              Información e Inscripciones
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Datos de contacto */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Horario de Atención</h4>
                    <p className="text-gray-600 text-sm md:text-base">Lunes a Viernes: 9:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-pink-50 rounded-xl">
                  <div className="bg-pink-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-pink-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Ubicación</h4>
                    <p className="text-gray-600 text-sm md:text-base">Edificio de Extensión Universitaria</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-orange-50 rounded-xl">
                  <div className="bg-orange-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Contacto</h4>
                    <p className="text-gray-600 text-sm md:text-base">Extensión Universitaria</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Información</h4>
                    <p className="text-gray-600 text-sm md:text-base">Consultar directamente en oficinas</p>
                  </div>
                </div>
              </div>

              {/* Requisitos generales */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 md:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                    Requisitos Generales
                  </h4>
                  <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                    <li>• Ser estudiante activo de UTTECAM</li>
                    <li>• Credencial vigente</li>
                    <li>• Llenar formato de inscripción</li>
                    <li>• Compromiso de asistencia regular</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 md:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5 text-orange-600" />
                    Periodo de Inscripciones
                  </h4>
                  <p className="text-gray-700 mb-2 text-sm md:text-base">
                    <strong>Inicio:</strong> Primera semana de cada cuatrimestre
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    <strong>Duración:</strong> Todo el periodo cuatrimestral
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para ampliar imágenes */}
      {imagenSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setImagenSeleccionada(null)}
              className="absolute top-4 right-4 z-20 bg-white text-gray-800 w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img
              src={imagenSeleccionada}
              alt="Imagen ampliada"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TalleresCulturales;