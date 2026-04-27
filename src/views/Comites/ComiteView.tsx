"use client";

import { useState, useEffect } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { getComiteBySlug, getComiteFileUrl } from "../../services/comite.service";

interface Props {
    slug: string;
    titulo: string;
}

/**
 * Vista Dinámica de Comités (Académico, Vinculación, Calidad, Investigación)
 */
export default function ComiteView({ slug, titulo }: Props) {
    const [secciones, setSecciones] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                // Limpiar slug por si viene con prefijo
                const cleanSlug = slug.replace("comites-", "").replace("comite-", "");
                const data = await getComiteBySlug(cleanSlug);
                
                if (data && data.categorias) {
                    // Mapeo de la nueva estructura por categorías
                    const mapped = data.categorias.map((cat: any) => ({
                        id: String(cat.id),
                        titulo: cat.titulo,
                        documentos: (cat.documentos || []).map((doc: any) => ({
                            id: String(doc.id),
                            titulo: doc.titulo,
                            archivo: getComiteFileUrl(doc.archivo)
                        }))
                    }));
                    setSecciones(mapped);
                } else if (data && data.documentos) {
                    // Fallback para datos sin categorías (retrocompatibilidad)
                    setSecciones([{
                        id: String(data.id),
                        titulo: "Documentos Oficiales",
                        documentos: data.documentos.map((doc: any) => ({
                            id: String(doc.id),
                            titulo: doc.titulo,
                            archivo: getComiteFileUrl(doc.archivo)
                        }))
                    }]);
                }
            } catch (error) {
                console.error("Error al cargar comité:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [slug]);

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
            titulo={titulo}
            descripcion={`Repositorio oficial de documentos del ${titulo}`}
        />
    );
}

