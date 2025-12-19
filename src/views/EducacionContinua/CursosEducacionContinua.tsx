import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKENDURL || "http://localhost:3004";

interface EducacionContinuaInfo {
  titulo_principal: string;
  descripcion_final: string;
}

interface EducacionContinuaCurso {
  id: number;
  titulo: string;
  imagen: string;
  orden: number;
}

export default function CursosEducacionContinua() {
  const [info, setInfo] = useState<EducacionContinuaInfo | null>(null);
  const [cursos, setCursos] = useState<EducacionContinuaCurso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoRes, cursosRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/educacion-continua/info`),
          fetch(`${BACKEND_URL}/api/educacion-continua/public/cursos`)
        ]);

        if (infoRes.ok) {
          const infoData = await infoRes.json();
          setInfo(infoData);
        }

        if (cursosRes.ok) {
          const cursosData = await cursosRes.json();
          setCursos(cursosData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayTitle = info?.titulo_principal || "Cursos de Educación Continua";
  const displayDescription = info?.descripcion_final || "¡Descubre nuestros cursos y potencia tu desarrollo profesional!";

  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-8 text-center drop-shadow-lg flex items-center gap-3">
        <BookOpen className="inline-block h-8 w-8 text-[#0A9782]" />
        {displayTitle}
      </h1>
      
      <div className="w-full max-w-5xl flex flex-col gap-10 items-center justify-center">
        {loading ? (
          <div className="w-full h-96 bg-gray-200 animate-pulse rounded-2xl"></div>
        ) : cursos.length > 0 ? (
          cursos.map((curso) => (
            <div key={curso.id} className="w-full flex flex-col items-center">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A9782]/30 bg-white group">
                <img
                  src={`${BACKEND_URL}/uploads/${curso.imagen}`}
                  alt={curso.titulo}
                  className="w-full max-h-[80vh] object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                  style={{ background: '#fff' }}
                />
                {curso.titulo && curso.titulo !== "Sin título" && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0A9782]/80 text-white text-lg font-semibold py-2 px-4 text-center backdrop-blur-sm">
                    {curso.titulo}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-10">
            No hay cursos disponibles en este momento.
          </div>
        )}
      </div>

      <div className="mt-10 text-center text-gray-600 text-md max-w-2xl">
        <span className="inline-block bg-[#0A9782]/10 text-[#0A9782] px-4 py-2 rounded-lg font-medium shadow-sm">
          {displayDescription}
        </span>
      </div>
    </div>
  );
}
