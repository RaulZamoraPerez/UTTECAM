import { Spinner } from "@/components/Spinner";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { toast } from "react-toastify";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";
import { getLatestCalendario, getFileUrl } from "@/services/calendarioService";
import type { Calendario as CalendarioType } from "@/types/calendario";

export default function Calendario() {
  const [isLoading, setIsLoading] = useState(true);
  const [calendario, setCalendario] = useState<CalendarioType | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fallback PDF if nothing found in API, though ideally we use API
  // const fakePDFUrl = "calendario/CALENDARIOUTTECAM2024-2025.pdf"; 

  useEffect(() => {
    const CACHE_KEY = 'calendario_cache';
    let isMounted = true;

    const loadData = async () => {
       // 1. Try Cache
       const cachedRaw = localStorage.getItem(CACHE_KEY);
       if (cachedRaw) {
          try {
             const { data: cachedData } = JSON.parse(cachedRaw);
             if (cachedData && isMounted) {
                setCalendario(cachedData);
                setIsLoading(false);
             }
          } catch(e) {
             console.error("Cache parse error", e);
          }
       }

       // 2. Fetch Network
       try {
          const latest = await getLatestCalendario();
          
          if (!isMounted) return;

          localStorage.setItem(CACHE_KEY, JSON.stringify({
             data: latest,
             timestamp: Date.now()
          }));

          if (cachedRaw) {
             const cachedData = JSON.parse(cachedRaw).data;
             if (JSON.stringify(latest) === JSON.stringify(cachedData)) {
                 if (isMounted) setIsLoading(false);
                 return;
             }
          }

          setCalendario(latest);
       } catch (err) {
          console.error("Error fetching calendario:", err);
          if (isMounted) {
             // Only show error text if absolutely no data
             if (!calendario) {
                setError("No se pudo cargar el calendario.");
             }
          }
       } finally {
          if (isMounted) setIsLoading(false);
       }
    };

    loadData();
    return () => { isMounted = false; };
  }, []);

  const pdfUrl = calendario ? getFileUrl(calendario.archivo_path || calendario.archivo) : "";

  return (
    <>
      <div className="h-screen w-screen flex flex-col mb-32">
        <div className="p-4 bg-white mt-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            {calendario ? calendario.titulo : "Calendario"}
          </h1>
          {calendario?.descripcion && (
            <p className="text-center text-gray-500 mt-2">{calendario.descripcion}</p>
          )}
        </div>

        {/* Spinner */}
        {isLoading && <Spinner text="Cargando documento..." />}

        {error && !isLoading && !calendario && (
            <div className="text-center py-10">
                <p className="text-red-500 text-xl font-semibold mb-2">Error</p>
                <p className="text-gray-600">{error}</p>
            </div>
        )}

        {/* Mostrar PDF SIEMPRE, pero controlar visibilidad con opacidad */}
        {!isLoading && calendario && pdfUrl && (
          <div  className="">
            <ContenedorPDF fakePDFUrl={pdfUrl} setIsLoading={setIsLoading}  />

            <div className="mx-0 mb-10 px-4 sm:px-2 max-w-screen-md">
              <a
                href={pdfUrl}
                download={calendario.archivo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toast.success("¡Calendario descargado con éxito!")}
                style={{
                  width: "160px",
                  height: "50px",
                  backgroundColor: "#0A9782",
                  color: "white",
                  border: "none",
                  borderTopLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                  lineHeight: "39px",
                }}
                className="text-white px-6  mb-10 py-2 hover:bg-teal-700 cursor-pointer sm:w-auto block mx-auto"
              >
                Descargar
                <Download className="inline-block ml-2" />
              </a>
            </div>
          </div>
        )}
        
        {!isLoading && !calendario && !error && (
             <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No hay calendario disponible.</p>
             </div>
        )}
      </div>
    </>
  );
}
