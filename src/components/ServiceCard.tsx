import type { ServicioCardProps } from "../types/servicesType";

export default function ServicioCard({ icon, title, description }: ServicioCardProps) {
  const isActive = title === "Reinscripción a cuatrimestre por iniciar";

  return (
    <div
      className={`
        group relative w-full h-full flex flex-col items-center text-center
        rounded-2xl p-5 transition-all duration-300 overflow-hidden
        ${isActive
          ? "bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 shadow-xl shadow-amber-300/40 cursor-pointer"
          : "bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-amber-200"
        }
      `}
    >
      {/* Borde superior decorativo — solo inactivas */}
      {!isActive && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-t-2xl" />
      )}

      {/* Brillo de fondo en hover — solo inactivas */}
      {!isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/50 group-hover:to-orange-50/30 transition-all duration-300 rounded-2xl" />
      )}

      {/* Orbs decorativos — card activa */}
      {isActive && (
        <>
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-300/20 rounded-full blur-lg pointer-events-none" />
        </>
      )}

      {/* Icono */}
      <div
        className={`
          relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center mb-3
          transition-all duration-300
          ${isActive
            ? "bg-white/20 text-white"
            : "bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 border border-amber-100 group-hover:from-amber-100 group-hover:to-orange-100 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-amber-100/70"
          }
        `}
      >
        <span className="w-7 h-7 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current">
          {icon}
        </span>
      </div>

      {/* Título */}
      <h3
        className={`
          relative z-10 text-sm font-bold leading-tight flex-shrink-0 mb-1
          ${isActive ? "text-white" : "text-gray-800 group-hover:text-amber-700"}
          transition-colors duration-200
        `}
      >
        {title}
      </h3>

      {/* Descripción */}
      {description ? (
        <p
          className={`
            relative z-10 text-xs leading-relaxed line-clamp-3 flex-grow
            ${isActive ? "text-white/80" : "text-gray-600"}
          `}
        >
          {description}
        </p>
      ) : isActive ? (
        <span className="relative z-10 inline-flex items-center gap-1.5 text-white/90 text-xs font-semibold mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse flex-shrink-0" />
          Disponible ahora
        </span>
      ) : null}
    </div>
  );
}