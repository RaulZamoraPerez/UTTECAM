import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Briefcase,
  Users
} from 'lucide-react';
import { useExtensionSection } from '../../../hooks/useExtensionData';
import { getAssetUrl } from '../../../util/apiBase';
import PlaceholderPage from '../../../components/PlaceholderPage';

export default function FeriasProfesiograficas() {
  const { data, loading, showPlaceholder } = useExtensionSection('ferias-profesiograficas');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  
  if (showPlaceholder || !data || data.is_enabled === false) {
    return (
      <PlaceholderPage 
        title="Ferias Profesiográficas"
        gradientFrom="indigo-50"
        gradientVia="purple-50"
        gradientTo="pink-50"
        accentColor="indigo-600"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <section className="pt-6 pb-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-1 md:mb-2 leading-tight"
            >
              {data.title}
            </motion.h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
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
              Información del Evento
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-indigo-50 rounded-xl">
                  <div className="bg-indigo-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Fecha / Horario</h4>
                    <p className="text-gray-600 text-sm md:text-base">{data.schedule || 'Por definir'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Ubicación</h4>
                    <p className="text-gray-600 text-sm md:text-base">{data.location || 'Campus UTTECAM'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-pink-50 rounded-xl">
                  <div className="bg-pink-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-pink-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Contacto</h4>
                    <p className="text-gray-600 text-sm md:text-base">{data.contact_info || 'Vinculación'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-indigo-50 rounded-xl">
                  <div className="bg-indigo-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">Información</h4>
                    <p className="text-gray-600 text-sm md:text-base">Consultar convocatorias vigentes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Requisitos / Participación */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-xl border border-indigo-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                    <h4 className="font-bold text-gray-800 text-lg">Participación</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {(data.requirements ? data.requirements.split('\n') : [
                      'Registro previo',
                      'Curriculum Vitae actualizado',
                      'Identificación oficial',
                      'Vestimenta formal'
                    ]).map((req: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Información Adicional */}
                {data.registration_info && (
                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-pink-600" />
                      <h4 className="font-bold text-gray-800 text-lg">Detalles de Registro</h4>
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
