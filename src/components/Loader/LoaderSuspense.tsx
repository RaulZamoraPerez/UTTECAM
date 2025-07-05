export default function LoaderSuspense() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-6">
      {/* Logo centrado con sombra sutil */}
      <img
        src="/logo.png"
        alt="UTTECAM Logo"
        className="w-28 h-auto mb-10 drop-shadow-md"
      />

      {/* Texto */}
      <h1 className="text-3xl font-semibold text-[#00724E] mb-6">
        Cargando plataforma institucional
      </h1>

      {/* Animación de puntos */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#F15A22] rounded-full animate-bounce delay-150"></span>
        <span className="w-4 h-4 bg-[#00724E] rounded-full animate-bounce delay-300"></span>
        <span className="w-4 h-4 bg-[#F15A22] rounded-full animate-bounce delay-450"></span>
      </div>

      {/* Texto secundario */}
      <p className="mt-12 text-gray-500 uppercase tracking-widest font-medium">
        Universidad Tecnológica de Tecamachalco
      </p>
    </div>
  );
}
