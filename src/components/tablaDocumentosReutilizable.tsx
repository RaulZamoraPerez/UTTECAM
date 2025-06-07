

import { useState } from "react"
import { Search, FileText, Download, Library } from "lucide-react"
import { Link } from "react-router-dom"
import {  formatearTitulo } from "../util/Formatt"

interface Documento {
    id: string
    titulo: string
}

interface Seccion {
    id: string
    titulo: string
    documentos: Documento[]
}

interface RepositorioTablaProps {
    secciones: Seccion[]
    titulo: string
    descripcion?: string
}

export default function tablaDocumentosReutilizable({ secciones, titulo, descripcion }: RepositorioTablaProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [seccionActiva, setSeccionActiva] = useState<string | null>(secciones[0]?.id ?? null)

    const filteredSecciones = secciones
        .map((seccion) => ({
            ...seccion,
            documentos: seccion.documentos.filter((doc) =>
                doc.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((seccion) => seccion.documentos.length > 0)

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
                                        <ul>
                                            {seccion.documentos.map((documento, index) => (
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
                                                                    <Link to={ `/ver-documento/${formatearTitulo(documento.titulo)}`}    
                                                                        className="font-medium text-gray-800 hover:text-[#D1672A] hover:underline transition-colors duration-150 text-">
                                                                            {
                                                                             
                                                                                documento.titulo
                                                                            }
                                                                     
                                                                    </Link>
                                                                </div>
                                                                <button className="flex-shrink-0 p-2 text-[#D1672A] hover:bg-[#D1672A]/10 rounded-lg transition-colors duration-150">
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
        </div>
    )
}
