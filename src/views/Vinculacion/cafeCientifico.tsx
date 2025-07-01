import { Spinner } from "@/components/Spinner";
import { useState } from "react";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";

export default function CafeCientifico() {
    const [isLoading, setIsLoading] = useState(true);

    const fakePDFUrl = "/CafeCientifico/PROGRAMA CAFÉ CIENTÍFICO CUATRIMESTRE MAYO AGOSTO 2025.pdf";

    const imagenes = [
        "/CafeCientifico/Café científico 12 de mayo de 2025.jpeg",
        "/CafeCientifico/Café científico 19 de mayo de 2025.jpeg",
        "/CafeCientifico/Café cientifico 26 de mayo de 2025.jpeg",
        "/CafeCientifico/Café cientíico 2 de junio de 2025.jpeg",
        "/CafeCientifico/Café científico 9 de junio de 2025.jpeg",
        "/CafeCientifico/Café científio 16 de junio de 2025.jpeg",
        "/CafeCientifico/Café cientifico 30 de junio de 2025.jpeg",
    ];

    return (
        <>
            {/* Encabezado y PDF */}
            <div className="h-screen w-screen flex flex-col">
                <div className="p-4 bg-white mt-10">
                    <h1 className="text-4xl font-bold text-orange-500 text-center">
                        Seminario café científico
                    </h1>
                </div>

                {/* Spinner mientras se carga el iframe */}
                {isLoading && <Spinner text="cargando documento... " />}

                {/* Contenedor del PDF */}

                <ContenedorPDF
                    fakePDFUrl={fakePDFUrl}
                    setIsLoading={setIsLoading}
                />
            </div>

            {/* Imágenes */}
            {imagenes.map((url, idx) => (
                <div key={idx} className="w-full flex flex-col items-center bg-white py-8 px-4">
                    <span className="mb-2 font-semibold text-[#0A9782] text-2xl text-center break-all">
                        {url.split("/").pop()?.replace(/\.[^/.]+$/, "")}
                    </span>
                    <img
                        src={url}
                        alt={`Café científico ${idx + 1}`}
                        className="w-[70%] h-auto rounded-lg shadow-lg"
                        loading="lazy"
                    />
                </div>
            ))}
        </>
    );
}
