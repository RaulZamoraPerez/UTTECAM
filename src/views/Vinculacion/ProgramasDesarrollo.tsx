"use client";

import { useState, useEffect } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { getProgramas, getProgramaFileUrl } from "../../services/programasDesarrollo.service";

/**
 * Vista de Programas de Desarrollo (Pública)
 * REUSANDO el mismo diseño corporativo de Normatividad
 */
export default function ProgramasDesarrollo() {
    const [secciones, setSecciones] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const data = await getProgramas();
                
                // Mapeo al formato esperado por TablaDocumentosReutilizable2
                // Si la API devuelve categorías (con .programas)
                if (data.length > 0 && (data[0] as any).programas) {
                    const mapped = data.map((cat: any) => ({
                        id: String(cat.id),
                        titulo: cat.titulo,
                        documentos: (cat.programas || []).map((doc: any) => ({
                            id: String(doc.id),
                            titulo: doc.titulo,
                            archivo: getProgramaFileUrl(doc.archivo)
                        }))
                    }));
                    setSecciones(mapped);
                } else if (data.length > 0) {
                    // Si devuelve una lista plana (fallback)
                    const mapped = [{
                        id: "general",
                        titulo: "Programas de Desarrollo",
                        documentos: data.map((doc: any) => ({
                            id: String(doc.id),
                            titulo: doc.titulo,
                            archivo: getProgramaFileUrl(doc.archivo)
                        }))
                    }];
                    setSecciones(mapped);
                }
            } catch (error) {
                console.error("Error al cargar programas API:", error);
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
            titulo="Programas de Desarrollo"
            descripcion="Explora los programas institucionales de crecimiento y mejora continua"
        />
    );
}
