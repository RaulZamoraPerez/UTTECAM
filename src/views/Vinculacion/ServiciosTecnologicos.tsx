import { Spinner } from "@/components/Spinner";
import { useState, useEffect } from "react";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";

interface ServicioTecnologico {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string | null;
    pdf: string | null;
    orden: number;
    activo: boolean;
}

// Default content (Fallback)
const DEFAULT_PDF = "/SERVICIOSTECNOLÓGICOS/CATÁLOGO DE SERVICIOS TECNOLÓGICOS UTTECAM 2025.pdf";
const DEFAULT_IMAGES = [
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

export default function ServiciosTecnologicos() {
    const [isLoading, setIsLoading] = useState(true);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [imagenes, setImagenes] = useState<{ id: number | string, titulo: string, fullUrl: string }[]>([]);

    const BACKEND_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3004';

    useEffect(() => {
        const fetchResources = async () => {
            try {
                // Fetch Servicios Tecnológicos (Catálogo e Imágenes)
                const response = await fetch(`${BACKEND_URL}/api/servicios-tecnologicos`);
                if (!response.ok) {
                    throw new Error('Error al cargar recursos');
                }
                const data: ServicioTecnologico[] = await response.json();

                // Process PDF (Find the first one with a PDF file)
                const pdfResource = data.find(r => r.pdf);
                if (pdfResource && pdfResource.pdf) {
                    setPdfUrl(`${BACKEND_URL}/uploads/${pdfResource.pdf}`);
                } else {
                    setPdfUrl(DEFAULT_PDF);
                }

                // Process Images
                const imgs = data.filter(r => r.imagen);
                if (imgs.length > 0) {
                    setImagenes(imgs.map(img => ({
                        id: img.id,
                        titulo: img.titulo,
                        fullUrl: `${BACKEND_URL}/uploads/${img.imagen}`
                    })));
                } else {
                    // Fallback if no images in DB
                    setImagenes(DEFAULT_IMAGES.map((url, idx) => ({
                        id: `default-${idx}`,
                        titulo: url.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Imagen",
                        fullUrl: url
                    })));
                }

            } catch (err) {
                console.error("API Error, using defaults:", err);
                // Fallback on API error
                setPdfUrl(DEFAULT_PDF);
                setImagenes(DEFAULT_IMAGES.map((url, idx) => ({
                    id: `default-${idx}`,
                    titulo: url.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Imagen",
                    fullUrl: url
                })));
            }
            // Note: We rely on ContenedorPDF to call setIsLoading(false) when the PDF is loaded.
        };

        fetchResources();
    }, []);

    return (
        <>
            {/* Encabezado y PDF */}
            <div className="min-h-screen w-full flex flex-col">
                <div className="p-4 bg-white mt-10">
                    <h1 className="text-4xl font-bold text-orange-500 text-center">
                        Catálogo de Servicios Tecnológicos
                    </h1>
                </div>

                {/* Spinner mientras se carga el iframe */}
                {isLoading && <Spinner text="cargando documento... " />}

                {/* Contenedor del PDF */}
                {pdfUrl && (
                    <ContenedorPDF
                        fakePDFUrl={pdfUrl}
                        setIsLoading={setIsLoading}
                    />
                )}
            </div>

            {/* Imágenes */}
            {!isLoading && imagenes.length > 0 && (
                <div className="w-full bg-gray-50 py-10">
                    <h2 className="text-3xl font-bold text-center text-[#0A9782] mb-8">Galería de Servicios</h2>
                    <div className="flex flex-col gap-10">
                        {imagenes.map((img) => (
                            <div key={img.id} className="w-full flex flex-col items-center py-8 px-4">
                                <span className="mb-4 font-semibold text-[#0A9782] text-2xl text-center break-all px-4">
                                    {img.titulo}
                                </span>
                                <img
                                    src={img.fullUrl}
                                    alt={img.titulo}
                                    className="w-[90%] md:w-[70%] h-auto rounded-lg transition-transform hover:scale-[1.01]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

