import { useState, useEffect } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { envs } from "@/config/envs";

interface Props {
    slug: string;
    titulo: string;
}

interface ComiteDoc {
    id: number;
    titulo: string;
    archivo: string;
    activo: boolean;
}

export default function ComiteView({ slug, titulo }: Props) {
    const [secciones, setSecciones] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComite = async () => {
            try {
                // El backend espera el slug sin prefijo "comite-"
                const cleanSlug = slug.replace("comite-", "");
                const response = await fetch(`${envs.API_BASE_URL}/api/comites/${cleanSlug}`);
                if (!response.ok) throw new Error("Error al cargar comité");
                const data = await response.json();

                const formattedData = [
                    {
                        id: String(data.id),
                        titulo: "Documentos Oficiales",
                        documentos: (data.documentos || [])
                            .filter((doc: ComiteDoc) => doc.activo)
                            .map((doc: ComiteDoc) => ({
                                id: String(doc.id),
                                titulo: doc.titulo,
                                archivo: `${envs.API_BASE_URL}${doc.archivo}`
                            }))
                    }
                ];
                setSecciones(formattedData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchComite();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A9782]"></div>
            </div>
        );
    }

    return (
        <TablaDocumentosReutilizable2
            secciones={secciones}
            titulo={titulo}
            descripcion={`Repositorio oficial de documentos del ${titulo} de la Universidad Tecnológica de Tecamachalco.`}
        />
    );
}
