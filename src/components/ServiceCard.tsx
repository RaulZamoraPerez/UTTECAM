import type { ServicioCardProps } from "../types/servicesType";

export default function ServicioCard({icon, title, description}: ServicioCardProps) {
  const isActive = title === "Reinscripción a Ingeniería/Licenciatura (7º cuatrimestre)";
  return (
    <div className={`rounded-xl shadow-sm p-4 transition-all hover:shadow-md w-full h-full border border-gray-100 flex flex-col ${isActive ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-white' }`}>
      <div className={`text-3xl mb-3 flex-shrink-0 ${isActive ? 'text-white' : 'text-amber-600'}`}>
        {icon}
      </div>
      <h3 className={`text-base font-semibold mb-1 leading-tight flex-shrink-0 text-center ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <p className={`text-xs mb-3 line-clamp-3 flex-grow ${isActive ? 'text-amber-50' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
}