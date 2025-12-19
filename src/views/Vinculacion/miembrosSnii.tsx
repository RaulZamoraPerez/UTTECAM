import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { useState, useEffect } from "react";
import { Spinner } from "@/components/Spinner";

interface MiembroSNII {
    id: number;
    titulo: string;
    pdf: string;
    orden: number;
    activo: boolean;
    tipo?: string;
}

interface MiembroSniiTipo {
    ID: number;
    Nombre: string;
}

export default function MiembrosSnii() {
    const [secciones, setSecciones] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const BACKEND_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3004';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [miembrosRes, tiposRes] = await Promise.all([
                    fetch(`${BACKEND_URL}/api/miembros-snii`, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } }),
                    fetch(`${BACKEND_URL}/api/miembros-snii-tipos`, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } })
                ]);

                if (!miembrosRes.ok || !tiposRes.ok) throw new Error("Error fetching data");
                
                const miembros: MiembroSNII[] = await miembrosRes.json();
                const tipos: MiembroSniiTipo[] = await tiposRes.json();
                
                const activeMembers = miembros.filter(m => m.activo);

                // Map types to sections
                const nuevasSecciones = tipos.map((tipo) => ({
                    id: `seccion-${tipo.ID}`,
                    titulo: tipo.Nombre,
                    documentos: activeMembers
                        .filter(m => (m.tipo || 'General') === tipo.Nombre)
                        .map(m => ({
                            id: m.id.toString(),
                            titulo: m.titulo,
                            archivo: `${BACKEND_URL}/uploads/${m.pdf}`
                        }))
                }));

                // Filter out empty sections to avoid empty tabs
                const seccionesConContenido = nuevasSecciones.filter(s => s.documentos.length > 0);
                
                setSecciones(seccionesConContenido);

            } catch (error) {
                console.error("Error loading SNII members:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center"><Spinner text="Cargando miembros SNII..." /></div>;
    }

    if (secciones.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-10">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h1 className="text-4xl font-bold mb-4 text-[#D1672A]">Docente miembros del Sistema Nacional de Investigadoras e Investigadores SNII</h1>
                    <div className="h-1 w-32 mx-auto mb-10 bg-gradient-to-r from-[#D1672A] to-[#0A9782] rounded-full"></div>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                        <p className="text-gray-600 text-lg">No hay documentos disponibles en este momento.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <TablaDocumentosReutilizable2
            secciones={secciones}
            titulo="Docente miembros del Sistema Nacional de Investigadoras e Investigadores SNII"
            descripcion="Explora los documentos relacionados con los docentes miembros del Sistema Nacional de Investigadoras e Investigadores (SNII)."
        />
    )
}
