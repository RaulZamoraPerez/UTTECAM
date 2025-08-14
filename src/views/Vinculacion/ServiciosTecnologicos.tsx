import { Spinner } from "@/components/Spinner";
import { useState } from "react";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";

export default function ServiciosTecnologicos() {
    const [isLoading, setIsLoading] = useState(true);

    const fakePDFUrl = "/SERVICIOSTECNOLÓGICOS/CATÁLOGO DE SERVICIOS TECNOLÓGICOS UTTECAM 2025.pdf";

    const imagenes = [
        "/SERVICIOSTECNOLÓGICOS/Cómo solicitar un servicio tecnológico.jpeg",
        "/SERVICIOSTECNOLÓGICOS/La UTTECAM apoya al sector empresarial.jpg",
        "/SERVICIOSTECNOLÓGICOS/Qué son los servicios tecnológicos.jpeg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Administración.jpg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Agricultura Sustentable y P.jpg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Contaduría.jpg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el Pe de Ing. Industrial.jpg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Mecatrónica.png",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Negocios y Mercadotecnia.jpg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Procesos Alimentarios.jpg",
        "/SERVICIOSTECNOLÓGICOS/Servicios tecnológicos que ofrece el PE de Tecnologías de la Información.jpg",
        "/SERVICIOSTECNOLÓGICOS/Sevicios tecnológicos del PE de Mantenimiento Industrial.jpeg",
    ];

    return (
        <>
            {/* Encabezado y PDF */}
            <div className="h-screen w-screen flex flex-col">
                <div className="p-4 bg-white mt-10">
                    <h1 className="text-4xl font-bold text-orange-500 text-center">
                        Catálogo de Servicios Tecnológicos
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
