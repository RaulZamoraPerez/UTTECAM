import { useEffect, useState } from "react";
import { Users } from "lucide-react";

// Definir la URL del backend. Se intenta leer de variable de entorno o se usa localhost por defecto.
const BACKEND_URL = import.meta.env.VITE_BACKENDURL || "http://localhost:3004";

interface VinculacionBannerImg {
  id: number;
  titulo: string;
  imagen: string;
  orden: number;
  activo: boolean;
}

export default function VinculacionBanner() {
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/vinculacion-banner`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error al cargar banner: ${res.statusText}`);
        return res.json();
      })
      .then((data: VinculacionBannerImg[]) => {
        if (data && data.length > 0) {
          // Usar la primera imagen activa encontrada (ordenada por el backend)
          setBannerImage(`${BACKEND_URL}/uploads/${data[0].imagen}`);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  // Imagen por defecto si no hay dinámica
  const defaultImage = "/vinculacion/BANNER VINCULACIÓN 2025_1.jpg";
  const displayImage = bannerImage || defaultImage;

  return (
    <div className="min-h-[40vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center py-6 px-0">
      <div className="w-full flex flex-col items-center justify-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A9782] mb-4 text-center drop-shadow flex items-center gap-2">
          <Users className="inline-block h-7 w-7 text-[#0A9782]" />
          Vinculación UTTECAM
        </h1>
        <div className="w-full flex justify-center">
          {loading ? (
             <div className="w-7/8 h-64 bg-gray-200 animate-pulse rounded-xl"></div>
          ) : (
            <img
              src={displayImage}
              alt="Banner Vinculación UTTECAM"
              className="w-7/8 h-auto object-cover object-center rounded-xl shadow-lg border border-[#0A9782]/20"
              style={{ background: '#fff' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
