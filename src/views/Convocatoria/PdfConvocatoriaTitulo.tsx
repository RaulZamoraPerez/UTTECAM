import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";
import { formatearTitulo } from "../../util/Formatt";

const PdfConvocatoriaTitulo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { title } = useParams();
  const navigate = useNavigate();
  const Url = `/Convocatoria%20a%20tr%C3%A1mite%20de%20t%C3%ADtulo%20profesional/${title?.trim()}`;

  useEffect(() => {
    if (!title) {
      navigate("/404", { replace: true });
    }
  }, [title, navigate]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-white mt-10">
        <h1 className="text-2xl font-light text-gray-700 text-center">
          {formatearTitulo(title!)}
        </h1>
      </div>
      {isLoading && <Spinner text=" cargando documento... " />}
      <ContenedorPDF fakePDFUrl={Url} setIsLoading={setIsLoading} />
    </div>
  );
};

export default PdfConvocatoriaTitulo;
