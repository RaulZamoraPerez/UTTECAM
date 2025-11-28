import { Construction, Sparkles } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  accentColor?: string;
}

export default function PlaceholderPage({
  title,
  gradientFrom = 'purple-50',
  gradientVia = 'pink-50',
  gradientTo = 'orange-50',
  accentColor = 'purple-600'
}: PlaceholderPageProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-${gradientFrom} via-${gradientVia} to-${gradientTo} flex flex-col items-center justify-center py-16 px-4`}>
      <div className="max-w-3xl mx-auto text-center">
        {/* Icono Principal */}
        <div className="mb-8 flex justify-center">
          <div className={`bg-white p-8 rounded-full shadow-2xl border-4 border-${accentColor}/20`}>
            <Construction className={`h-24 w-24 text-${accentColor} animate-pulse`} />
          </div>
        </div>

        {/* Título */}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${accentColor} via-${accentColor} to-pink-600 mb-4`}>
          {title}
        </h1>

        {/* Línea decorativa */}
        <div className={`h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-${accentColor} to-pink-600 rounded-full`}></div>

        {/* Mensaje principal */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-${accentColor}/10`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className={`h-8 w-8 text-${accentColor} animate-pulse`} />
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">
              Página no creada aún
            </p>
            <Sparkles className={`h-8 w-8 text-${accentColor} animate-pulse`} />
          </div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Estamos trabajando en traerte la mejor información sobre <span className={`font-semibold text-${accentColor}`}>{title}</span>.
          </p>
          <p className="text-base text-gray-500">
            Pronto podrás acceder a todo el contenido que tenemos preparado para ti.
          </p>
        </div>

        {/* Información de contacto */}
        <div className={`bg-gradient-to-r from-${accentColor}/10 to-pink-100 rounded-xl p-6 shadow-lg`}>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Mantente Informado
          </h3>
          <div className="space-y-3 text-gray-700">
            <p className="text-sm">
              Para más información, visita <span className="font-semibold text-[#0A9782]">Extensión Universitaria</span>
            </p>
            <p className="text-sm text-gray-600">
              Te notificaremos cuando esta página esté lista.
            </p>
          </div>
        </div>

        {/* Nota adicional */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>¿Tienes dudas? Contacta a <span className={`font-semibold text-${accentColor}`}>Extensión Universitaria</span></p>
        </div>
      </div>
    </div>
  );
}
