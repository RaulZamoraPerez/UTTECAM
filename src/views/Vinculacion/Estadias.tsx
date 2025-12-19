import { useState, useEffect } from "react";
import { Search, FileText, Download, Library } from "lucide-react";
import { Spinner } from "@/components/Spinner";
import { formatearTitulo } from "@/util/Formatt";

interface EstadiaDocumento {
    ID: number;
    Nombre: string;
    Descripcion?: string;
    Ruta_Documento: string;
    Fecha_Subida: string;
    Tipo?: string;
}

interface Seccion {
    id: string;
    titulo: string;
    documentos: EstadiaDocumento[];
}

export default function Estadias() {
    const [documentos, setDocumentos] = useState<EstadiaDocumento[]>([]);
    const [secciones, setSecciones] = useState<Seccion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Estados para la UI
    const [searchTerm, setSearchTerm] = useState("");
    const [seccionActiva, setSeccionActiva] = useState<string | null>(null);

    const BACKEND_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3004';

    useEffect(() => {
        const fetchDocumentos = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/estadias`);
                if (!response.ok) {
                    throw new Error('Error al cargar los documentos');
                }
                const data: EstadiaDocumento[] = await response.json();
                
                // Filtrar documentos y tipos no deseados
                const filteredData = data.filter(doc => {
                    const nombre = doc.Nombre.toLowerCase().trim();
                    const tipo = doc.Tipo ? doc.Tipo.toLowerCase().trim() : 'general';
                    
                    // Tipos a excluir
                    const junkTypes = ['general', 'hola', 'platat', 'practicas'];
                    const isJunkType = junkTypes.some(j => tipo === j || tipo.includes(j));

                    // Nombres a excluir
                    const junkNames = ['javier-hernandez-reyes-port'];
                    const isJunkName = junkNames.some(j => nombre.includes(j));
                    
                    return !isJunkType && !isJunkName;
                });

                setDocumentos(filteredData);

                // Procesar secciones basadas en el Tipo
                const grupos: { [key: string]: EstadiaDocumento[] } = {};
                
                filteredData.forEach(doc => {
                    const tipo = doc.Tipo || "Otros";
                    if (!grupos[tipo]) {
                        grupos[tipo] = [];
                    }
                    grupos[tipo].push(doc);
                });

                const nuevasSecciones: Seccion[] = Object.keys(grupos).map((tipo, index) => ({
                    id: `seccion-${index}`,
                    titulo: tipo,
                    documentos: grupos[tipo]
                }));

                // Ordenar secciones si es necesario
                nuevasSecciones.sort((a, b) => a.titulo.localeCompare(b.titulo));

                setSecciones(nuevasSecciones);
                if (nuevasSecciones.length > 0) {
                    setSeccionActiva(nuevasSecciones[0].id);
                }

            } catch (err) {
                console.error(err);
                setError('No se pudo cargar la lista de documentos.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDocumentos();
    }, []);

    const descargarDocumento = (doc: EstadiaDocumento) => {
        const link = document.createElement('a');
        link.href = `${BACKEND_URL}${doc.Ruta_Documento}`;
        link.target = "_blank";
        link.download = doc.Nombre; // Intento de sugerir nombre
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Filtrado
    const filteredSecciones = secciones
        .map((seccion) => ({
            ...seccion,
            documentos: seccion.documentos.filter((doc) =>
                doc.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((seccion) => seccion.documentos.length > 0);

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4 text-[#D1672A]">
                        Documentos para la Gestión de Estadías
                    </h1>
                    <div className="h-1 w-32 mx-auto mb-4 bg-gradient-to-r from-[#D1672A] to-[#0A9782] rounded-full"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Descarga los formatos y documentos necesarios para tu proceso de estadía.
                    </p>
                </div>

                {isLoading && (
                    <div className="flex justify-center py-20">
                        <Spinner text="Cargando documentos..." />
                    </div>
                )}

                {error && !isLoading && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 mx-auto max-w-2xl text-center">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                )}

                {!isLoading && !error && (
                    <>
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
                        {secciones.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                {secciones.map((seccion) => (
                                    <button
                                        key={seccion.id}
                                        onClick={() => setSeccionActiva(seccion.id)}
                                        className={`rounded-full px-6 py-2 font-medium transition-all duration-200 hover:scale-105 ${
                                            seccionActiva === seccion.id
                                                ? "bg-[#D1672A] text-white shadow-lg"
                                                : "bg-[#0A9782] text-white hover:bg-[#0A9782]/90"
                                        }`}
                                    >
                                        {seccion.titulo}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Contenido */}
                        <div className="grid gap-6">
                            {filteredSecciones.map(
                                (seccion) =>
                                    seccionActiva === seccion.id && (
                                        <div
                                            key={seccion.id}
                                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg"
                                        >
                                            <div className="bg-[#0A9782] p-4">
                                                <div className="flex items-center gap-3 text-white">
                                                    <div className="bg-white/20 p-2 rounded-full">
                                                        <Library className="h-6 w-6" />
                                                    </div>
                                                    <span className="text-xl font-bold">
                                                        {seccion.titulo}
                                                    </span>
                                                    <span className="ml-2 px-3 text-sm rounded-full bg-[#d1672a] text-white">
                                                        {seccion.documentos.length} documentos
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-0">
                                                <ul>
                                                    {seccion.documentos.map((documento, index) => (
                                                        <li
                                                            key={documento.ID}
                                                            className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0A9782]/10 text-[#0A9782] font-medium">
                                                                    {index + 1}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-start justify-between gap-4">
                                                                        <div className="flex flex-col gap-1">
                                                                            <div className="flex items-start gap-2">
                                                                                <FileText className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#D1672A]" />
                                                                                <span className="font-medium text-gray-800">
                                                                                    {formatearTitulo(documento.Nombre)}
                                                                                </span>
                                                                            </div>
                                                                            {documento.Descripcion && (
                                                                                <p className="text-sm text-gray-500 ml-7">
                                                                                    {documento.Descripcion}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    
                                                                        <button
                                                                            onClick={() => descargarDocumento(documento)}
                                                                            className="flex-shrink-0 p-2 text-[#D1672A] hover:bg-[#D1672A]/10 rounded-lg transition-colors duration-150"
                                                                            title="Descargar archivo"
                                                                        >
                                                                            <Download className="h-4 w-4" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                            )}

                            {filteredSecciones.length === 0 && documentos.length > 0 && (
                                <div className="text-center p-10 bg-white rounded-lg border-2 border-dashed border-[#0A9782]">
                                    <div className="text-gray-600 mb-2">
                                        No se encontraron documentos que coincidan con tu búsqueda
                                    </div>
                                    <button
                                        onClick={() => setSearchTerm("")}
                                        className="text-[#D1672A] hover:text-[#D1672A]/80 hover:underline transition-colors duration-150"
                                    >
                                        Mostrar todos los documentos
                                    </button>
                                </div>
                            )}

                            {documentos.length === 0 && (
                                <div className="text-center p-10 bg-white rounded-lg border-2 border-dashed border-gray-300">
                                    <div className="text-gray-500">
                                        No hay documentos disponibles en este momento.
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
