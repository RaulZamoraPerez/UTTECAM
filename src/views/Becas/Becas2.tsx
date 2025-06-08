import { Spinner } from "@/components/Spinner";
import { useState } from "react";
import { Download } from "lucide-react";
import { toast } from "react-toastify";
import { ContenedorPDF } from '@/components/Pdf/ContenedorPDF';


export default function Becas2() {
  const [isLoading, setIsLoading] = useState(true);
  const fakePDFUrl = "/becas.pdf ";

  return (
    <>
      <div className="h-screen w-screen flex flex-col">
        <div className="p-4 bg-white mt-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            Becas 
          </h1>
        </div>

        {/* Spinner mientras se carga el iframe */}
        {isLoading && <Spinner text="cargando documento... " />}



        {/* Contenedor del PDF */}

        <ContenedorPDF  fakePDFUrl={fakePDFUrl} isLoading={isLoading} setIsLoading={setIsLoading}  />
      </div>

      <div className="mx-0   mb-10 px-4 sm:px-2 max-w-screen-md">
        <button
          style={{
            width: "160px",
            height: "39px",
            backgroundColor: "#0A9782",
            color: "white",
            border: "none",
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            fontWeight: 500,
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          className=" text-white px-6 py-2  hover:bg-teal-700 cursor-pointer  sm:w-auto block mx-auto "
          onClick={() => toast.success("¡Calendario descargado con éxito!", {})}
        >
          Descargar
          <Download className="inline-block ml-2" />
        </button>
      </div>
    </>
  );
}
