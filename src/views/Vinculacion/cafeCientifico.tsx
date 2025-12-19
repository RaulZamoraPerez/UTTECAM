import { Spinner } from "@/components/Spinner";
import { useState, useEffect } from "react";
import { ContenedorPDF } from "@/components/Pdf/ContenedorPDF";

interface SeminarioResource {
    id: number;
    titulo: string;
    url: string;
    tipo: 'pdf' | 'image';
    fecha_subida: string;
}

// Default content (Fallback)
const DEFAULT_PDF = "/CafeCientifico/PROGRAMA CAFÉ CIENTÍFICO CUATRIMESTRE MAYO AGOSTO 2025.pdf";
const DEFAULT_IMAGES = [
    "/CafeCientifico/Café científico 12 de mayo de 2025.jpeg",
    "/CafeCientifico/Café científico 19 de mayo de 2025.jpeg",
    "/CafeCientifico/Café cientifico  26 de mayo de 2025.jpeg",
    "/CafeCientifico/Café cientíico 2 de junio de 2025.jpeg",
    "/CafeCientifico/Café científico 9 de junio de 2025.jpeg",
    "/CafeCientifico/Café científio 16 de junio de 2025.jpeg",
    "/CafeCientifico/Café cientifico 30 de junio de 2025.jpeg",
];

export default function CafeCientifico() {
    const [isLoading, setIsLoading] = useState(true);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    // We will store objects with { id, titulo, fullUrl } for images
    const [imagenes, setImagenes] = useState<{ id: number | string, titulo: string, fullUrl: string }[]>([]);

    const BACKEND_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3004';

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/seminarios-cafe`);
                if (!response.ok) {
                    throw new Error('Error al cargar recursos');
                }
                const data: SeminarioResource[] = await response.json();

                // Process PDF (latest)
                const pdfs = data.filter(r => r.tipo === 'pdf');
                if (pdfs.length > 0) {
                    setPdfUrl(`${BACKEND_URL}${pdfs[0].url}`);
                } else {
                    // Fallback if no PDF in DB
                    setPdfUrl(DEFAULT_PDF);
                }

                // Process Images
                const imgs = data.filter(r => r.tipo === 'image');
                if (imgs.length > 0) {
                    setImagenes(imgs.map(img => ({
                        id: img.id,
                        titulo: img.titulo,
                        fullUrl: `${BACKEND_URL}${img.url}`
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
            // Note: We do NOT set isLoading(false) here.
            // We rely on ContenedorPDF to call setIsLoading(false) when the PDF is loaded.
            // Since we always provide a PDF (either from DB or Default), this flow is safe.
        };

        fetchResources();
    }, []);

    return (
        <>
            {/* Encabezado y PDF */}
            <div className="min-h-screen w-full flex flex-col">
                <div className="p-4 bg-white mt-10">
                    <h1 className="text-4xl font-bold text-orange-500 text-center">
                        Seminario café científico
                    </h1>
                </div>

                {/* Spinner mientras se carga */}
                {isLoading && <Spinner text="cargando documento... " />}

                {/* Contenedor del PDF */}
                {pdfUrl && (
                    <ContenedorPDF
                        fakePDFUrl={pdfUrl}
                        setIsLoading={setIsLoading}
                    />
                )}
                
                {!isLoading && !pdfUrl && (
                    <div className="text-center text-gray-500 p-10">
                        No hay documento PDF disponible actualmente.
                    </div>
                )}
            </div>

            {/* Imágenes */}
            {!isLoading && imagenes.length > 0 && (
                <div className="w-full bg-gray-50 py-10">
                    <h2 className="text-3xl font-bold text-center text-[#0A9782] mb-8"></h2>
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
