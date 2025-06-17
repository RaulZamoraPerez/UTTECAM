import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";
import { formatearTitulo } from "../../util/Formatt";

export const PdfPIT = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { title } = useParams();
  const navigate = useNavigate();

  // Redirige si no hay título
  useEffect(() => {
    if (!title) {
      navigate("/404", { replace: true });
    }
  }, [title, navigate]);

  const fileExtension = title?.split(".").pop()?.toLowerCase();
  const isPDF = fileExtension === "pdf";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const Url = `/PIT/${title?.trim()}`;

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-white mt-10">
        <h1 className="text-2xl font-light text-gray-700 text-center">
          {formatearTitulo(title!)}
        </h1>
      </div>

      {/* Si es PDF */}
      {isPDF ? (
        isMobile ? (
          // En móviles: mostrar mensaje de descarga
          <div className="flex-1 flex flex-col items-center justify-center  p-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Visor no compatible en moviles</h2>
              <p className="text-gray-500 mb-6">
                Este visor no funciona en móviles. Puedes descargar el PDF y verlo con una app o verlo desde un ordenador.
              </p>
              <a
                href={Url}
                download
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition duration-200"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        ) : (
          // En escritorio: mostrar visor PDF
          <>
            {isLoading && <Spinner text="Cargando documento..." />}
            <ContenedorPDF fakePDFUrl={Url} setIsLoading={setIsLoading} />
          </>
        )
      ) : (
        // Archivos que no son PDF (.xlsx, .docx, etc.)
        <div className="flex-1 flex flex-col items-center justify-start   p-6">
          <div className="bg-white rounded-2xl shadow-2xl p-20 max-w-lg w-full text-center mt-10">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Archivo no compatible</h2>
            <p className="text-gray-500 mb-6">
              Este archivo no se puede visualizar directamente. Puedes descargarlo para abrirlo.
            </p>
            <a
              href={Url}
              download
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-200"
            >
              Descargar archivo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Spinner } from "@/components/Spinner";
// import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";
// import { formatearTitulo } from "../../util/Formatt";

// export const PdfPIT = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { title } = useParams(); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!title) {
//       navigate("/404", { replace: true });
//     }
//   }, [title, navigate]);

//   const fileExtension = title?.split(".").pop()?.toLowerCase(); // <- detectar extensión
//   const isPDF = fileExtension === "pdf";
//   const Url = `/PIT/${title?.trim()}`;

//   return (
//     <div className="h-screen w-screen flex flex-col">
//       <div className="p-4 bg-white mt-10">
//         <h1 className="text-2xl font-light text-gray-700 text-center">
//           {formatearTitulo(title!)}
//         </h1>
//       </div>

//       {isPDF ? (
//         <>
//           {isLoading && <Spinner text="Cargando documento..." />}
//           <ContenedorPDF fakePDFUrl={Url} setIsLoading={setIsLoading} />
//         </>
//       ) : (
//         <div className="flex-1 flex flex-col items-center mt-10 p-2">
//   <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full h-2/4 text-center">
//     <div className="flex justify-center mb-2">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-16 w-16 text-blue-400"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M12 4v16m8-8H4"
//         />
//       </svg>
//     </div>
//     <h2 className="text-xl font-semibold text-gray-700 mb-2">Archivo no compatible</h2>
//     <p className="text-gray-500 mb-6">
//       Este archivo no se puede visualizar directamente. Puedes descargarlo para abrirlo en tu dispositivo.
//     </p>
//     <a
//       href={Url}
//       download
//       className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-200"
//     >
//       Descargar archivo
//     </a>
//   </div>
// </div>

//       )}
//     </div>
//   );
// };
