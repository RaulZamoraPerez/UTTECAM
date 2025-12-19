import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKENDURL || "http://localhost:3004";

interface PracticasEstadiasBanner {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  activo: boolean;
}

export default function PracticasEstadias() {
  const [banner, setBanner] = useState<PracticasEstadiasBanner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/practicas-estadias-banner`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar banner");
        return res.json();
      })
      .then((data: PracticasEstadiasBanner[]) => {
        if (data && data.length > 0) {
          setBanner(data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const defaultImage = "/vinculacion/Practicas y estadias/Prácticas y estadías UTTECAM-01.jpg";
  const displayImage = banner ? `${BACKEND_URL}/uploads/${banner.imagen}` : defaultImage;
  const displayTitle = banner?.titulo || "Prácticas y Estadías";
  const displayDescription = banner?.descripcion || "Las prácticas y estadías son una oportunidad para aplicar tus conocimientos en el entorno profesional y fortalecer tu desarrollo académico.";

  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-8 text-center drop-shadow-lg flex items-center gap-3">
        <Briefcase className="inline-block h-8 w-8 text-[#0A9782]" />
        {displayTitle}
      </h1>
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A9782]/30 bg-white group">
          {loading ? (
            <div className="w-full h-96 bg-gray-200 animate-pulse"></div>
          ) : (
            <img
              src={displayImage}
              alt={displayTitle}
              className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-105"
              style={{ background: '#fff' }}
            />
          )}
        </div>
        <div className="mt-8 text-center text-gray-700 text-lg max-w-2xl">
          <span className="inline-block bg-[#0A9782]/10 text-[#0A9782] px-4 py-2 rounded-lg font-medium shadow-sm">
            {displayDescription}
          </span>
        </div>
      </div>
    </div>
  );
}
