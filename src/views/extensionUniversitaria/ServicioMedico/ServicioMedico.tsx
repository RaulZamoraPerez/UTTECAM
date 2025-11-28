import { HeartPulse} from "lucide-react";
import { useExtensionSection } from '../../../hooks/useExtensionData';
import { getAssetUrl } from '../../../util/apiBase';
import PlaceholderPage from '../../../components/PlaceholderPage';

export default function ServicioMedico() {
  const { data, loading, error, showPlaceholder } = useExtensionSection('servicio-medico');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (error) {
    if (showPlaceholder) {
      return (
        <PlaceholderPage 
          title="Servicio Médico"
          gradientFrom="teal-50"
          gradientVia="cyan-50"
          gradientTo="blue-50"
          accentColor="teal-600"
        />
      );
    }
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  }
  
  // Check if section is disabled
  if (data && data.is_enabled === false) {
    return (
      <PlaceholderPage 
        title="Servicio Médico"
        gradientFrom="teal-50"
        gradientVia="cyan-50"
        gradientTo="blue-50"
        accentColor="teal-600"
      />
    );
  }
  
  if (!data) return null;

  return (
    <div className=" bg-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-4 text-center drop-shadow-lg flex items-center justify-center gap-3">
        <HeartPulse className="inline-block h-8 w-8 text-[#0A9782]" />
        {data.title}
      </h1>
      <div className=" mb-8">
            <div className="w-full max-w-5xl rounded-2xl shadow-2xl border-4 border-[#0A9782]/20 bg-white flex items-center justify-center" style={{ minHeight: '45vh' }}>
              <img
                src={getAssetUrl(data.banner_url)}
                alt={`${data.title} UTTECAM`}
                className="block mx-auto w-full  object-contain bg-white"
                onError={(e) => { (e.target as HTMLImageElement).src = '/hero1.jpg'; }}
              />
            </div>
      </div>
          {/* Sección de servicios ofrecidos */}
          <div className="w-full max-w-2xl mt-8 bg-white rounded-2xl shadow-lg border border-[#0A9782]/10 p-8 flex flex-col gap-6 items-center">
            <h3 className="text-lg font-bold text-[#0A9782] mb-2 flex items-center gap-2">
              <HeartPulse className="inline-block h-6 w-6 text-[#0A9782]" /> Servicios que ofrecemos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {data.items && data.items.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-3 bg-[#F5F9F8] rounded-lg px-4 py-3 shadow">
                    <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                    <span className="text-gray-700 font-medium">{item.title}</span>
                  </div>
              ))}
            </div>
          </div>
          {/* Recomendaciones */}
          <div className="w-full max-w-2xl mt-6 bg-[#F5F9F8] rounded-2xl shadow-lg border border-[#0A9782]/10 p-8 flex flex-col gap-4 items-center">
            <h4 className="text-md font-bold text-[#0A9782] mb-2 flex items-center gap-2">
              <HeartPulse className="inline-block h-6 w-6 text-[#0A9782]" /> Recomendaciones
            </h4>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Acude al servicio médico ante cualquier malestar o accidente.</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Respeta los horarios de atención.</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">En caso de emergencia, informa a tu profesor o personal administrativo.</span>
              </div>
            </div>
          </div>
          {/* Emergencia */}
          <div className="w-full max-w-2xl mt-6 bg-red-50 rounded-2xl shadow-lg border border-red-200 p-8 flex flex-row gap-6 items-center">
            <HeartPulse className="h-12 w-12 text-red-500 animate-pulse" />
            <div>
              <span className="font-bold text-red-700 text-lg">¿Emergencia?</span>
              <p className="text-gray-700 mt-2">Dirígete inmediatamente al Servicio Médico.</p>
            </div>
          </div>

    </div>
  );
}
