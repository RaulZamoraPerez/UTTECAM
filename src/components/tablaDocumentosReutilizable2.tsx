import { useState } from "react"
import { Search, FileText, Download, Library } from "lucide-react"
import { Secciones } from "./Secciones"
import { Secciones2 } from "./Secciones2"
import {  data, dataFormatos } from "@/data/CapetaStructura.data"

interface Documento {
    id: string
    titulo: string
    archivo?: string // Nuevo campo opcional para ruta del PDF
    facebookLink?: string // Link de Facebook opcional
}

interface Seccion {
    id: string;
    titulo: string;

    documentos: Documento[];
}

interface RepositorioTablaProps {
    secciones: Seccion[];
    titulo: string;
    descripcion?: string;
    nextUrl?: string;
}

export default function tablaDocumentosReutilizable2({ secciones, titulo, descripcion, nextUrl }: RepositorioTablaProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [seccionActiva, setSeccionActiva] = useState<string | null>(secciones[0]?.id ?? null)
    const [pdfSeleccionado, setPdfSeleccionado] = useState<string | null>(null) // Estado para visor PDF
    const [documentoSeleccionado, setDocumentoSeleccionado] = useState<Documento | null>(null) // Estado para documento completo

    const filteredSecciones = secciones
        .map((seccion) => ({
            ...seccion,
            documentos: seccion.documentos.filter((doc) =>
                doc.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((seccion) => seccion.documentos.length > 0);

    const getResueltoArchivo = (doc: Documento) => {
        if (doc.archivo) return doc.archivo;
        const carpeta = nextUrl ? nextUrl.replace('-', '') : 'PIT';
        return `/${carpeta}/${doc.titulo}`;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4 text-[#D1672A]">{titulo}</h1>
                    <div className="h-1 w-32 mx-auto mb-4 bg-gradient-to-r from-[#D1672A] to-[#0A9782] rounded-full"></div>
                    {descripcion && <p className="text-gray-700 max-w-2xl mx-auto">{descripcion}</p>}
                </div>

                {/* Buscador */}
                <div className="relative max-w-xl mx-auto mb-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[#0A9782]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar documentos..."
                        className="w-full pl-10 py-2 rounded-full text-lg bg-white border-2 border-[#0A9782] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A9782] focus:border-transparent transition-all duration-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {secciones.map((seccion) => (
                        <button
                            key={seccion.id}
                            onClick={() => setSeccionActiva(seccion.id)}
                            className={`rounded-full px-6 py-2 font-medium transition-all duration-200 hover:scale-105 ${seccionActiva === seccion.id
                                ? "bg-[#D1672A] text-white shadow-lg"
                                : "bg-[#0A9782] text-white hover:bg-[#0A9782]/90"
                                }`}
                        >
                            {seccion.titulo}
                        </button>
                    ))}
                </div>

                {/* Contenido */}
                <div className="grid gap-6">
                    {filteredSecciones.map(
                        (seccion) =>
                            seccionActiva === seccion.id && (
                                <div key={seccion.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                                    <div className="bg-[#0A9782] p-4">
                                        <div className="flex items-center gap-3 text-white">
                                            <div className="bg-white/20 p-2 rounded-full">
                                                <Library className="h-6 w-6" />
                                            </div>
                                            <span className="text-xl font-bold">{seccion.titulo}</span>
                                            <span className="ml-2 px-3 text-sm rounded-full bg-[#d1672a] text-white">
                                                {seccion.documentos.length} documentos
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-0">
                                        {/* Si es "Instrucciones de trabajo", renderiza el componente especial */}
                                        {seccion.titulo === "Instrucciones de trabajo" ? (
                                            <Secciones data={data} searchTerm={searchTerm} />
                                        ) : seccion.titulo === "Formatos" ? (
                                            <Secciones data={dataFormatos} searchTerm={searchTerm} />
                                        ) : seccion.titulo === "Convocatorias para Profesor de Asignatura SEP-DIC-2025" ? (
                                            <Secciones2 searchTerm={searchTerm} />
                                        ) : (
                                            /* Render normal para las demás secciones */
                                            <ul>
                                                {seccion.documentos.map((documento, index) => {
                                                    const archivoResuelto = getResueltoArchivo(documento);
                                                    return (
                                                        <li
                                                            key={documento.id}
                                                            className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0A9782]/10 text-[#0A9782] font-medium">
                                                                    {index + 1}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-start justify-between gap-4">
                                                                        <div className="flex items-start gap-2">
                                                                            <FileText className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#D1672A]" />
                                                                            <a
                                                                                href="#"
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    setPdfSeleccionado(encodeURI(archivoResuelto));
                                                                                    setDocumentoSeleccionado(documento);
                                                                                }}
                                                                                className="font-medium text-gray-800 hover:text-[#D1672A] hover:underline transition-colors duration-150"
                                                                            >
                                                                                {documento.titulo}
                                                                            </a>
                                                                        </div>
                                                                        <div className="flex gap-2">
                                                                            <a
                                                                                href={encodeURI(archivoResuelto)}
                                                                                download
                                                                                className="flex-shrink-0 p-2 text-[#D1672A] hover:bg-[#D1672A]/10 rounded-lg transition-colors duration-150"
                                                                            >
                                                                                <Download className="h-4 w-4" />
                                                                            </a>
                                                                            {documento.facebookLink && (
                                                                                <a
                                                                                    href={documento.facebookLink}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="flex-shrink-0 p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-150"
                                                                                    title="Ver en Facebook"
                                                                                >
                                                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                                                    </svg>
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )
                    )}


                    {filteredSecciones.length === 0 && (
                        <div className="text-center p-10 bg-white rounded-lg border-2 border-dashed border-[#0A9782]">
                            <div className="text-gray-600 mb-2">No se encontraron documentos que coincidan con tu búsqueda</div>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-[#D1672A] hover:text-[#D1672A]/80 hover:underline transition-colors duration-150"
                            >
                                Mostrar todos los documentos
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal PDF - Sin fondo oscuro */}
            {/* Modal PDF/Imagen */}
            {pdfSeleccionado && (
                <>
                    {/* Backdrop con desenfoque */}
                    <div 
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => {
                            setPdfSeleccionado(null);
                            setDocumentoSeleccionado(null);
                        }}
                    ></div>

                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col pointer-events-auto transform transition-all duration-300 scale-100">
                            {/* Header del Modal */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-[#0A9782]/10 rounded-lg">
                                        <FileText className="h-5 w-5 text-[#0A9782]" />
                                    </div>
                                    <h3 className="font-bold text-gray-800 truncate max-w-[200px] sm:max-w-md">
                                        {documentoSeleccionado?.titulo}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => {
                                        setPdfSeleccionado(null);
                                        setDocumentoSeleccionado(null);
                                    }}
                                    className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-all duration-200"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            {/* Contenido principal (Visor) */}
                            <div className="flex-1 overflow-auto bg-gray-100/30 p-2 sm:p-4 flex items-center justify-center min-h-[50vh]">
                                <div className="w-full h-full max-w-5xl bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                                    {(pdfSeleccionado.match(/\.(jpg|jpeg|png|webp|gif)$/i) ? (
                                        <img
                                            src={pdfSeleccionado}
                                            alt={documentoSeleccionado?.titulo || "Imagen"}
                                            className="w-full h-auto max-h-[75vh] object-contain mx-auto block transition-all duration-300"
                                        />
                                    ) : (
                                        <iframe
                                            src={pdfSeleccionado}
                                            className="w-full h-[70vh] sm:h-[75vh] block"
                                            title="documento"
                                        ></iframe>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Footer / Botón de Redes Sociales */}
                            {documentoSeleccionado?.facebookLink && (
                                <div className="px-6 py-6 bg-white border-t border-gray-100">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto w-full">
                                        <div className="text-center sm:text-left">
                                            <h4 className="font-bold text-gray-900 leading-tight">¿Te gusta este contenido?</h4>
                                            <p className="text-sm text-gray-500 mt-1">Mira la publicación completa y deja tu reacción en Facebook</p>
                                        </div>
                                        <a
                                            href={documentoSeleccionado.facebookLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 px-6 py-3 bg-[#1877F2] text-white rounded-xl hover:bg-[#166fe5] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg font-bold text-base w-full sm:w-auto justify-center"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            <span>Ver en Facebook</span>
                                            <svg 
                                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
