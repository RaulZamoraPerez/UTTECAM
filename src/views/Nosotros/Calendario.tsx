import { Spinner } from "@/components/Spinner";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { toast } from "react-toastify";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";
import { getCalendario, type Calendario as CalendarioType } from "@/services/calendario.service";
import { envs } from "@/config/envs";

export default function Calendario() {
  const [isLoading, setIsLoading] = useState(true);
  const [calendario, setCalendario] = useState<CalendarioType | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>("calendario/CALENDARIOUTTECAM2024-2025.pdf"); // Fallback

  useEffect(() => {
    const fetchCalendario = async () => {
      const data = await getCalendario();
      if (data && data.archivoUrl) {
        setCalendario(data);
        setPdfUrl(`${envs.API_BASE_URL}/uploads/calendarios/${data.archivoUrl}`);
      }
      // If no data, keep fallback
    };
    fetchCalendario();
  }, []);

  return (
    <>
      <div className="h-screen w-screen flex flex-col mb-32">
        <div className="p-4 bg-white mt-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            Calendario {calendario?.cicloEscolar ? `- ${calendario.cicloEscolar}` : ''}
          </h1>
        </div>

        {/* Spinner */}
        {isLoading && <Spinner text="Cargando documento..." />}

        {/* Mostrar PDF SIEMPRE, pero controlar visibilidad con opacidad */}
        <div  className="">
          <ContenedorPDF fakePDFUrl={pdfUrl} setIsLoading={setIsLoading}  />

        {/* */}
        {!isLoading && (
          <div className="mx-0 mb-10 px-4 sm:px-2 max-w-screen-md">
            <a
              href={pdfUrl}
              download={calendario ? `Calendario_${calendario.cicloEscolar}.pdf` : "CALENDARIOUTTECAM2024-2025.pdf"}
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
        )}
        </div>
      </div>
    </>
  );
}
