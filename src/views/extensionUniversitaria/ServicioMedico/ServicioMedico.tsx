
import { HeartPulse} from "lucide-react";

export default function ServicioMedico() {
  return (
    <div className=" bg-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-4 text-center drop-shadow-lg flex items-center justify-center gap-3">
        <HeartPulse className="inline-block h-8 w-8 text-[#0A9782]" />
        Servicio Médico
      </h1>
      <div className=" mb-8">
            <div className="w-full max-w-5xl rounded-2xl shadow-2xl border-4 border-[#0A9782]/20 bg-white flex items-center justify-center" style={{ minHeight: '45vh' }}>
              <img
                src="/ExtensionUniversitaria/ServicioMedico/SERVICIO MÉDICO.jpg"
                alt="Servicio Médico UTTECAM"
                className="block mx-auto w-full  object-contain bg-white"
                
              />
            </div>
      </div>
          {/* Sección de servicios ofrecidos */}
          <div className="w-full max-w-2xl mt-8 bg-white rounded-2xl shadow-lg border border-[#0A9782]/10 p-8 flex flex-col gap-6 items-center">
            <h3 className="text-lg font-bold text-[#0A9782] mb-2 flex items-center gap-2">
              <HeartPulse className="inline-block h-6 w-6 text-[#0A9782]" /> Servicios que ofrecemos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 bg-[#F5F9F8] rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Atención de primeros auxilios</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F9F8] rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Orientación médica básica</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F9F8] rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Control de signos vitales</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F9F8] rounded-lg px-4 py-3 shadow">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Apoyo en situaciones de emergencia</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F9F8] rounded-lg px-4 py-3 shadow md:col-span-2">
                <HeartPulse className="h-5 w-5 text-[#0A9782]" />
                <span className="text-gray-700 font-medium">Promoción de la salud y prevención</span>
              </div>
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
