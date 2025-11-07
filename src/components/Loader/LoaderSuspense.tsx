export default function LoaderSuspense() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 sm:px-6 text-center">
      {/* Logo centrado con sombra sutil */}
      <img
        src="/logo.png"
        alt="UTTECAM Logo"
        className="w-24 sm:w-28 h-auto mb-8 sm:mb-10 drop-shadow-md"
      />

      {/* Título de carga */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#00724E] mb-4 sm:mb-6">
        Cargando plataforma institucional
      </h1>

      {/* Animación de puntos */}
      <div className="flex items-center justify-center space-x-2">
        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F15A22] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#00724E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F15A22] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>

      {/* Texto secundario */}
      <p className="mt-10 sm:mt-12 text-gray-500 text-xs sm:text-sm uppercase tracking-wider font-medium">
        Universidad Tecnológica de Tecamachalco
      </p>
    </div>
  );
}
