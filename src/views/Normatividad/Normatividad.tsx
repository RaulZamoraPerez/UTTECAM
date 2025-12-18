import { useEffect, useState } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { getAllNormatividad, type NormatividadCategoria } from "@/services/normatividadService";
import { Spinner } from "@/components/Spinner";

export default function Normatividad() {
    const [data, setData] = useState<NormatividadCategoria[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Implement SWR (Stale-While-Revalidate) strategy with LocalStorage
        const CACHE_KEY = 'normatividad_cache';
        let isMounted = true;

        const loadData = async () => {
            // 1. Try to load from cache first for instant render
            const cachedRaw = localStorage.getItem(CACHE_KEY);
            if (cachedRaw) {
                try {
                    const { data: cachedData } = JSON.parse(cachedRaw);
                    if (cachedData && Array.isArray(cachedData)) {
                        if (isMounted) {
                            setData(cachedData);
                            setLoading(false);
                        }
                    }
                } catch (e) {
                    console.error("Cache parse error", e);
                }
            }

            // 2. Fetch fresh data from API
            try {
                const freshData = await getAllNormatividad();

                if (!isMounted) return;

                // Save to cache
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: freshData,
                    timestamp: Date.now()
                }));

                // Compare to see if we need to update state
                // (Only update if different to avoid re-render flicker, though React handles ref equality checks)
                if (cachedRaw) {
                    const cachedData = JSON.parse(cachedRaw).data;
                    if (JSON.stringify(freshData) === JSON.stringify(cachedData)) {
                        // Data is strictly the same
                        if (isMounted) setLoading(false);
                        return;
                    }
                }

                setData(freshData);
                setLoading(false);

            } catch (err) {
                console.error(err);
                if (isMounted) {
                    // Only show error if we have no data at all (neither cache nor fresh)
                    // If we have cache, we might stay silent or show a small toast
                    if (data.length === 0) {
                         setError("Error cargando la normatividad.");
                    }
                    setLoading(false);
                }
            }
        };

        loadData();

        return () => { isMounted = false; };
    }, []);

    if (loading && data.length === 0) {
        return <div className="h-[50vh] flex items-center justify-center"><Spinner text="Cargando documentos..." /></div>;
    }

    if (error && data.length === 0) {
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
            titulo="Normatividad Institucional"
            descripcion="Explora los documentos y regulaciones vigentes"
        />
    )
}
