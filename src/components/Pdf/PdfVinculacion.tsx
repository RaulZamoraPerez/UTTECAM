
import {   useLocation, useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";
import {  formatearTitulo } from "../../util/Formatt"


export const PdfVinculacion = () => {
  
  const [isLoading, setIsLoading] = useState(true);
const { title } = useParams(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const año = queryParams.get('año');

 const navigate = useNavigate();

 const Url = `/ProductosInvestigacion/ProductosInves_${año || ''}/${title?.trim()}`;


; // Verificar si el title no viene
  useEffect(() => {
    if (!title) {
      navigate("/404", { replace: true }); // redirige a página 404
    }
  }, [title, navigate]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-white mt-10">
        <h1 className="text-2xl font-light text-gray-700 text-center">
           { formatearTitulo(title!)} 
        </h1>
      </div>

      {/* Loader mientras se carga el iframe */}
      {isLoading && <Spinner text=" cargando documento... " />}

      <ContenedorPDF
        fakePDFUrl={Url}
        setIsLoading={setIsLoading}
      />
    </div>
    );
}
