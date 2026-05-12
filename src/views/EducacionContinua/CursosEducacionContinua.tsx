// Íconos eliminados por solicitud de diseño


const cursos = [
  {
    src: "/vinculacion/eduacion continua/cursos/Imagen A.jpg",
    alt: "Curso Imagen A"
  },
  {
    src: "/vinculacion/eduacion continua/cursos/Imagen C.jpg",
    alt: "Curso Imagen C"
  }
];

const videos = [
  {
    youtubeId: "S33CWUBwzd8",
    title: "Curso Gratuito: Preparación de Currículum Vitae",
    description: "Aprende a estructurar y destacar tu experiencia profesional con nuestro curso de Preparación de Currículum Vitae, impartido por el Mtro. Conde del área de Vinculación de la UTTECAM."
  },
  {
    youtubeId: "YlbztfIoaNg",
    title: "Preparación de Currículum Vitae - Parte 2",
    description: "Continúa aprendiendo los mejores consejos y estrategias para que tu currículum destaque ante los reclutadores y aumentes tus oportunidades laborales."
  }
];

export default function CursosEducacionContinua() {
  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
        Cursos de <span className="text-[#0A9782]">Educación Continua</span>
      </h1>
      
      {/* Sección de Videos */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center mb-16">
        <div className="w-full max-w-5xl mx-auto mb-2 border-b-2 border-gray-100 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Videos Informativos
          </h2>
        </div>
        <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto mt-6">
          {videos.map((video, idx) => (
            <div key={idx} className="w-full flex flex-col md:flex-row items-start gap-4 md:gap-6 bg-transparent transition-all duration-300">
              
              {/* Contenedor del Video (Estilo YouTube) */}
              <div className="w-full md:w-[55%] lg:w-[60%] relative rounded-xl overflow-hidden shadow-sm bg-black group aspect-video flex items-center justify-center flex-shrink-0 hover:shadow-md transition-shadow">
                {/* Cargador estético de fondo mientras carga el iframe */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <div className="w-10 h-10 border-4 border-gray-600 border-t-[#0A9782] rounded-full animate-spin"></div>
                </div>
                {video.youtubeId !== "PENDIENTE" ? (
                  <iframe
                    className="w-full h-full absolute inset-0 z-10"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 z-10">
                    <span className="text-gray-500 font-semibold">Video Próximamente...</span>
                  </div>
                )}
              </div>

              {/* Contenedor de la Descripción (Estilo YouTube) */}
              <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-start text-left px-1 mt-2 md:mt-0">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight mb-2 hover:text-[#0A9782] transition-colors cursor-pointer">
                  {video.title}
                </h3>
                
                {/* Subtítulo estilo canal de YouTube */}
                <div className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                  <span className="bg-[#0A9782]/10 text-[#0A9782] px-2 py-0.5 rounded text-xs font-semibold">Educación Continua</span>
                  UTTECAM Vinculación
                </div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                  {video.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Sección de Cursos / Imágenes */}
      <div className="w-full max-w-5xl flex flex-col gap-10 items-center justify-center mb-10">
        {cursos.map((curso, idx) => (
          <div key={idx} className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A9782]/30 bg-white group">
              <img
                src={curso.src}
                alt={curso.alt}
                className="w-full max-h-[80vh] object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                style={{ background: '#fff' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0A9782]/80 text-white text-lg font-semibold py-2 px-4 text-center backdrop-blur-sm">
                {curso.alt}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-gray-600 text-md max-w-2xl">
        <span className="inline-block bg-[#0A9782]/10 text-[#0A9782] px-4 py-2 rounded-lg font-medium shadow-sm">¡Descubre nuestros cursos y potencia tu desarrollo profesional!</span>
      </div>
    </div>
  );
}
