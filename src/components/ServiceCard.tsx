import type { ServicioCardProps } from "../types/servicesType";



export default function ServicioCard({icon, title, description}: ServicioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 transition-all hover:shadow-md w-full max-w-[280px] border border-gray-100">
      <div className="text-3xl mb-3 text-amber-600">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-1 text-gray-800 line-clamp-2">{title}</h3>
      <p className="text-xs text-gray-600 mb-3 line-clamp-3">{description}</p>
    </div>
  );
}