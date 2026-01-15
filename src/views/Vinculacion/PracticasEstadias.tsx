import { Briefcase } from "lucide-react";

export default function PracticasEstadias() {
  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-8 text-center drop-shadow-lg flex items-center gap-3">
        <Briefcase className="inline-block h-8 w-8 text-[#0A9782]" />
        Prácticas y Estadías
      </h1>
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A9782]/30 bg-white group">
          <img
            src="/vinculacion/Practicas y estadias/Prácticas y estadías UTTECAM-01.jpg"
            alt="Prácticas y Estadías UTTECAM"
            className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-105"
            style={{ background: '#fff' }}
          />
        </div>
        <div className="mt-8 text-center text-gray-700 text-lg max-w-2xl">
          <span className="inline-block bg-[#0A9782]/10 text-[#0A9782] px-4 py-2 rounded-lg font-medium shadow-sm">
            Las prácticas y estadías son una oportunidad para aplicar tus conocimientos en el entorno profesional y fortalecer tu desarrollo académico.
          </span>
        </div>
      </div>
    </div>
  );
}
