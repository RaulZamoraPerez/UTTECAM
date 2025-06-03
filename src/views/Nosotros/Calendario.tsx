import { Spinner } from "@/components/Spinner";
import { useState } from "react";
import { Download } from "lucide-react";
import { toast } from "react-toastify";

export default function Calendario() {
  const [isLoading, setIsLoading] = useState(true);
  const fakePDFUrl = "/becas.pdf";

  return (
    <>
      <div className="h-screen w-screen flex flex-col">
        <div className="p-4 bg-white mt-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            Calendario
          </h1>
        </div>

        {/* Spinner mientras se carga el iframe */}
        {isLoading && <Spinner text="cargando documento... " />}

        <iframe
          src={fakePDFUrl}
          className={`w-full md:w-3/4 h-full mx-auto transition-opacity duration-500 p-3 mb-5 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          title="calendario"
          style={{ border: "none" }}
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>

      <div className="mx-auto mb-10 px-4 sm:px-2 max-w-screen-md">
        <button
          onClick={() => toast.success("¡Calendario descargado con éxito!", {
             
          })}
          className="bg-teal-600 text-white px-6 py-2 font-semibold rounded-full hover:bg-teal-700 cursor-pointer transition-colors duration-300 w-full sm:w-auto block mx-auto "
        >
          Descargar calendario
          <Download className="inline-block ml-2" />
        </button>
      </div>
    </>
  );
}
