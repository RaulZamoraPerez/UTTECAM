import {  useParams} from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@/components/Spinner";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";




const PDF = () => {

  const [isLoading, setIsLoading] = useState(true);
const { title } = useParams(); 

// const fakePDFUrl2 = `/ProductosInvestigacion/ProductosInves_2018/Modelo de control interno admnistrativo como estrategia para miempresas.pdf`;
const fakePDFUrl2 = `/ProductosInvestigacion/ProductosInves_2018/${title?.trim()}`;

;

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-white mt-10">
        <h1 className="text-2xl font-light text-gray-700 text-center">
          {/* {title} */}
        </h1>
      </div>

      {/* Loader mientras se carga el iframe */}
      {isLoading && <Spinner text=" cargando documento... " />}

      <ContenedorPDF
        fakePDFUrl={fakePDFUrl2}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default PDF;
