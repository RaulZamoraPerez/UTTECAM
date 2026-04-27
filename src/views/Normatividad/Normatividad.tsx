"use client";

import { useState, useEffect } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { getNormatividad, getNormatividadFileUrl, type NormatividadCategoria } from "../../services/normatividad.service";

/**
 * Vista de Normatividad Institucional (Pública)
 * REUSANDO el diseño original de TablaDocumentosReutilizable2
 * pero consumiendo datos reales de la API.
 */
export default function Normatividad() {
    const [secciones, setSecciones] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const data = await getNormatividad();
                
                // Mapeo al formato esperado por TablaDocumentosReutilizable2
                const mapped = data.map((cat) => ({
                    id: String(cat.id),
                    titulo: cat.titulo,
                    documentos: (cat.documentos || []).map((doc) => ({
                        id: String(doc.id),
                        titulo: doc.titulo,
                        // Resolvemos la URL completa del archivo para el visor
                        archivo: getNormatividadFileUrl(doc.archivo)
                    }))
                }));

                setSecciones(mapped);
            } catch (error) {
                console.error("Error al cargar normatividad API:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-[#0A9782] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <TablaDocumentosReutilizable2
            secciones={secciones}
            titulo="Normatividad Institucional"
            descripcion="Consulta los documentos oficiales de la Universidad"
        />
    );
}
