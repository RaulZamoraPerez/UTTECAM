import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  ClipboardList,
  Users
} from 'lucide-react';
import { useExtensionSection } from '../../../hooks/useExtensionData';
import { getAssetUrl } from '../../../util/apiBase';
import PlaceholderPage from '../../../components/PlaceholderPage';

export default function VisitasGuiadas() {
  const { data, loading, showPlaceholder } = useExtensionSection('visitas-guiadas');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  
  if (showPlaceholder || !data || data.is_enabled === false) {
    return (
      <PlaceholderPage 
        title="Visitas Guiadas"
        gradientFrom="teal-50"
        gradientVia="cyan-50"
        gradientTo="blue-50"
        accentColor="teal-600"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <section className="pt-6 pb-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-1 md:mb-2 leading-tight"
            >
              {data.title}
            </motion.h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 mb-0"
            >
              {data.description}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12 px-0 md:px-0 flex flex-col items-center w-full">
        <div className="w-full flex justify-center">
          <div className="w-7/10 overflow-hidden rounded-md">
            <img
              src={getAssetUrl(data.banner_url)}
              onError={(e) => { (e.target as HTMLImageElement).src = '/hero1.jpg'; }}
              alt={`Banner ${data.title}`}
              className="w-full block bg-white transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
              Información de Visitas
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-teal-50 rounded-xl">
                  <div className="bg-teal-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-teal-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Horario</h4>
                    <p className="text-gray-600 text-sm md:text-base">{data.schedule || 'Previa cita'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-cyan-50 rounded-xl">
                  <div className="bg-cyan-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-cyan-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Ubicación</h4>
                    <p className="text-gray-600 text-sm md:text-base">{data.location || 'Campus UTTECAM'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Contacto</h4>
                    <p className="text-gray-600 text-sm md:text-base">{data.contact_info || 'Difusión Universitaria'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-teal-50 rounded-xl">
                  <div className="bg-teal-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-teal-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Información</h4>
                    <p className="text-gray-600 text-sm md:text-base">Solicitar informes vía correo</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Requisitos */}
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-6 rounded-xl border border-teal-100">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="h-6 w-6 text-teal-600" />
                    <h4 className="font-bold text-gray-800 text-lg">Requisitos</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {(data.requirements ? data.requirements.split('\n') : [
                      'Solicitud por oficio',
                      'Lista de asistentes',
                      'Responsable del grupo',
                      'Seguro facultativo vigente'
                    ]).map((req: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Información Adicional */}
                {data.registration_info && (
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                      <h4 className="font-bold text-gray-800 text-lg">Proceso de Solicitud</h4>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      {data.registration_info.split('\n').map((line: string, i: number) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
