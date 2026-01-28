import { useEffect, useState } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { Spinner } from "@/components/Spinner";

const API_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

interface Documento {
    id: string;
    titulo: string;
    archivo: string;
    activo: boolean;
}

interface Comite {
    id: string;
    slug: string;
    titulo: string;
    descripcion: string;
    activo: boolean;
    documentos: Documento[];
}

interface Props {
    slug: string;
    titulo?: string; // Optional override
}

export default function ComiteDetail({ slug }: Props) {
    const [comite, setComite] = useState<Comite | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchComite = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/api/comites/${slug}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("Comité no encontrado o aún no disponible.");
                    } else {
                        throw new Error('Error fetching comite');
                    }
                    setComite(null);
                } else {
                    const rawData = await response.json();
                    const mappedData: Comite = {
                        ...rawData,
                        id: String(rawData.id),
                        documentos: (rawData.documentos || []).map((doc: any) => ({
                            ...doc,
                            id: String(doc.id)
                        }))
                    };
                    setComite(mappedData);
                    setError("");
                }
            } catch (err) {
                console.error(err);
                setError("No se pudo cargar la información del comité.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchComite();
        }
    }, [slug]);

    if (loading) return <div className="h-[50vh] flex items-center justify-center"><Spinner text="Cargando información..." /></div>;

    if (error) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center text-slate-500 gap-4">
                <p className="text-lg font-medium">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-slate-100 rounded hover:bg-slate-200 text-slate-700 font-medium text-sm"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    if (!comite) return null;

    // Wrap the single committee as a section for the reusable table
    const secciones = [
        {
            id: comite.id,
            titulo: "Documentos Disponibles", // Since the page title will already be the Comite Title, we can use a generic section title or just use empty if allowed
            documentos: comite.documentos || []
        }
    ];

    return (
        <TablaDocumentosReutilizable2
            secciones={secciones}
            titulo={comite.titulo}
            descripcion={comite.descripcion || "Documentos y recursos informativos"}
        />
    )
}
