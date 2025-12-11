import { motion } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  ClipboardList
} from 'lucide-react';
import { useExtensionSection } from '../../hooks/useExtensionData';
import { getAssetUrl } from '../../util/apiBase';
import PlaceholderPage from '../../components/PlaceholderPage';

const TalleresCulturales = () => {
  const { data, loading, error, showPlaceholder } = useExtensionSection('talleres-culturales');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (error) {
    // If the backend indicates we should show a placeholder, render it
    if (showPlaceholder) {
      return (
        <PlaceholderPage
          title="Talleres Culturales"
          gradientFrom="purple-50"
          gradientVia="pink-50"
          gradientTo="orange-50"
          accentColor="purple-600"
        />
      );
    }
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  }
  
  // Check if section is disabled
  if (data && data.is_enabled === false) {
    return (
      <PlaceholderPage 
        title="Talleres Culturales"
        gradientFrom="purple-50"
        gradientVia="pink-50"
        gradientTo="orange-50"
        accentColor="purple-600"
      />
    );
  }

  const fallback = {
    title: 'Talleres Culturales',
    description: 'Desarrolla tu creatividad y talento artístico en nuestros talleres especializados',
    banner_url: '/hero1.jpg',
    items: []
  };

  const renderData = data || fallback;
  const isMissing = !data && !loading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {isMissing && (
        <div className="max-w-7xl mx-auto p-4">
          <div className="text-center text-red-600 font-semibold">Sección no encontrada — mostrando contenido de respaldo</div>
        </div>
      )}
      <section className="pt-6 pb-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-1 md:mb-2 leading-tight"
            >
              {renderData.title}
            </motion.h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 mb-0"
            >
              {renderData.description}
            </motion.p>
          </div>
        </div>
      </section>


      <section className="py-6 md:py-12 px-0 md:px-0 flex flex-col items-center w-full">
        <div className="w-full flex justify-center">
          <div className="w-7/10 overflow-hidden rounded-md">
            <img
              src={getAssetUrl(renderData.banner_url)}
              onError={(e) => { (e.target as HTMLImageElement).src = '/hero1.jpg'; }}
              alt={`Banner ${renderData.title}`}
              className="w-full block bg-white transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
              Información e Inscripciones
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column: Contact Info */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Horario de Atención</h4>
                    <p className="text-gray-600 text-sm md:text-base">{renderData.schedule || 'Lunes a Viernes: 9:00 - 17:00'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-pink-50 rounded-xl">
                  <div className="bg-pink-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-pink-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Ubicación</h4>
                    <p className="text-gray-600 text-sm md:text-base">{renderData.location || 'Edificio de Extensión Universitaria'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-orange-50 rounded-xl">
                  <div className="bg-orange-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Contacto</h4>
                    <p className="text-gray-600 text-sm md:text-base">{renderData.contact_info || 'Extensión Universitaria'}</p>
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

              {/* Right Column: Requirements & Period */}
              <div className="space-y-6">
                {/* Requisitos Generales */}
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="h-6 w-6 text-purple-600" />
                    <h4 className="font-bold text-gray-800 text-lg">Requisitos Generales</h4>
                  </div>
                  <ul className="space-y-3">
                    {(renderData.requirements ? renderData.requirements.split('\n') : [
                      'Ser estudiante activo de UTTECAM',
                      'Credencial vigente',
                      'Llenar formato de inscripción',
                      'Compromiso de asistencia regular'
                    ]).map((req: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Periodo de Inscripciones */}
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    <h4 className="font-bold text-gray-800 text-lg">Periodo de Inscripciones</h4>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    {renderData.registration_info ? (
                      renderData.registration_info.split('\n').map((line: string, i: number) => (
                        <p key={i}>{line}</p>
                      ))
                    ) : (
                      <>
                        <p><span className="font-semibold text-gray-900">Inicio:</span> Primera semana de cada cuatrimestre</p>
                        <p><span className="font-semibold text-gray-900">Duración:</span> Todo el periodo cuatrimestral</p>
                      </>
                    )}
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

export default TalleresCulturales;
