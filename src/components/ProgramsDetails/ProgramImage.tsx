import { useEffect, useState } from "react"

interface ProgramImageProps {
  details: {
    profileImage?: string;
    // add other properties of details if needed
  };
  program: {
    title: string;
    // add other properties of program if needed
  };
}

const ProgramImage = ({ details, program }: ProgramImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false)

  // Bloquear scroll al abrir el modal y permitir Escape
  useEffect(() => {
    interface KeyDownEvent extends KeyboardEvent {
      key: string;
    }

    const handleKeyDown = (e: KeyDownEvent) => {
      if (e.key === "Escape") setIsZoomed(false)
    }

    if (isZoomed) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isZoomed])

  return (
    <div className="mb-12">
      {details.profileImage ? (
        <>
          {/* Imagen miniatura */}
          <div
            className="relative group cursor-zoom-in"
            onClick={() => setIsZoomed(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-3xl blur-sm opacity-60 pointer-events-none"></div>
            <img
              className="relative rounded-3xl w-full max-w-6xl mx-auto shadow-2xl border border-white/20"
              src={details.profileImage}
              alt={`Imagen de perfil del programa ${program.title}`}
              loading="lazy"
            />
            <div className="flex justify-end mt-6">
              <a
                href={details.profileImage}
                download="perfil.png"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A9782] to-[#087968] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#087968] hover:to-[#065a4d] transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar Documento
              </a>
            </div>
          </div>

          {/* Modal pantalla completa */}
          {isZoomed && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/40 rounded-full px-3 py-1 hover:bg-black/60 transition"
                aria-label="Cerrar"
              >
                ✕
              </button>

              <img
                src={details.profileImage}
                alt={`Imagen ampliada del programa ${program.title}`}
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                onClick={(e) => e.stopPropagation()} // evita cerrar al hacer clic en la imagen
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-gray-500 italic text-center py-12">
          No hay imagen disponible
        </div>
      )}
    </div>
  )
}

export default ProgramImage
