import { useState } from "react";
import { Secciones2 } from "@/components/Secciones2";
import { Search } from "lucide-react";
import { dataMayAgo2026, dataEnero2026, dataSepDic2025 } from "@/data/recursosHumanos.data";

export default function RecursosHumanos() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4 text-[#D1672A]">Convocatorias para Profesor</h1>
                    <div className="h-1 w-32 mx-auto mb-4 bg-gradient-to-r from-[#D1672A] to-[#0A9782] rounded-full"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Explora las convocatorias y recursos disponibles para el desarrollo profesional del personal docente.
                    </p>
                </div>

                {/* Buscador */}
                <div className="relative max-w-xl mx-auto mb-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[#0A9782]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar documentos o carpetas..."
                        className="w-full pl-10 py-2 rounded-full text-lg bg-white border-2 border-[#0A9782] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A9782] focus:border-transparent transition-all duration-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

           
                <div className="space-y-4">
                    <Secciones2
                        searchTerm={searchTerm}
                        folders={dataMayAgo2026}
                        title="Convocatorias para Profesor de Asignatura MAY-AGO-2026"
                    />
                </div>

                <div className="space-y-4 mt-12">
                    <Secciones2
                        searchTerm={searchTerm}
                        folders={dataEnero2026}
                        title="Convocatorias para Profesor de Asignatura ENE-ABR-2026"
                    />
                </div>

                
                <div className="space-y-4 mt-12">
                    <Secciones2 
                        searchTerm={searchTerm} 
                        folders={dataSepDic2025.subCarpetas} 
                        title="Convocatorias para Profesor de Asignatura SEP-DIC-2025"
                    />
                </div>
            </div>
        </div>
    )
}
