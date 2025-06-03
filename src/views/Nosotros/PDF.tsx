import { useParams } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@/components/Spinner";

const PDF = () => {
  const { title } = useParams();
  const [isLoading, setIsLoading] = useState(true);

 
  const fakePDFUrl = "/becas.pdf";

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-white mt-10">
        <h1 className="text-2xl font-light text-gray-700 text-center">{title}</h1>
      </div>

      {/* Loader mientras se carga el iframe */}
      {isLoading && (
         <Spinner  text=" cargando documento... " />
      )}

      <iframe
        src={fakePDFUrl}
        className={`w-full  md:w-3/4 h-full mx-auto transition-opacity duration-500 shadow-2xl p-10 ${isLoading ? "opacity-0" : "opacity-100"}`}
        title={`Documento ${title}`}
        style={{ border: "none" }}
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default PDF;
