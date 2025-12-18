import { useEffect, useState } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { Spinner } from "@/components/Spinner";

// Use API_URL from env or default empty (proxy)
const API_URL = import.meta.env.VITE_API_URL || '';

interface Documento {
    id: number;
    titulo: string;
    archivo: string;
    activo: boolean;
}

interface Comite {
    id: number;
    titulo: string;
    descripcion: string;
    activo: boolean;
    documentos?: Documento[];
}

export default function Comites() {
    // We map Comite to the structure expected by TablaDocumentosReutilizable2
    // It likely expects: { titulo: string, documentos: { titulo: string, archivo: string }[] }
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchComites = async () => {
            try {
                const response = await fetch(`${API_URL}/api/comites`); // Only active ones by default
                if (!response.ok) throw new Error('Error fetching');
                const comites: Comite[] = await response.json();

                // Transform to reusable component format
                const formattedData = comites.map(comite => ({
                    id: comite.id,
                    titulo: comite.titulo,
                    descripcion: comite.descripcion, // Maybe unused by component but good to have
                    documentos: comite.documentos?.map(d => ({
                        id: d.id,
                        titulo: d.titulo,
                        archivo: d.archivo // Ensure this is the correct prop name for the component
                    })) || []
                }));

                setData(formattedData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Error cargando comités.");
                setLoading(false);
            }
        };

        fetchComites();
    }, []);

    if (loading) return <div className="h-[50vh] flex items-center justify-center"><Spinner text="Cargando comités..." /></div>;

    if (error) {
        return (
             <div className="h-[50vh] flex flex-col items-center justify-center text-red-500 gap-4">
                <p>{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-slate-100 rounded hover:bg-slate-200 text-slate-700 font-medium"
                >
                    Reintentar
                </button>
             </div>
        );
    }

    return (
        <TablaDocumentosReutilizable2
            secciones={data}
            titulo="Comités Institucionales"
            descripcion="Información y documentos de los comités de la UTTECAM"
        />
    )
}
