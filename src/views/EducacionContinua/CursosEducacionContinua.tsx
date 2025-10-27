import { BookOpen } from "lucide-react";


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

export default function CursosEducacionContinua() {
  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-8 text-center drop-shadow-lg flex items-center gap-3">
        <BookOpen className="inline-block h-8 w-8 text-[#0A9782]" />
        Cursos de Educación Continua
      </h1>
      <div className="w-full max-w-5xl flex flex-col gap-10 items-center justify-center">
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
