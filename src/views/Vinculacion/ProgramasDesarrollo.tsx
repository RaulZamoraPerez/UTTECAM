import { useState, useEffect } from "react";
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";
import { envs } from "@/config/envs";

interface Programa {
    id: number;
    titulo: string;
    descripcion: string;
    archivo: string;
    activo: boolean;
}

export default function ProgramasDesarrollo() {
    const [secciones, setSecciones] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProgramas = async () => {
            try {
                const response = await fetch(`${envs.API_BASE_URL}/api/programas-desarrollo`);
                if (!response.ok) throw new Error("Error al cargar programas");
                const data: Programa[] = await response.json();

              
                const formattedData = [
                    {
                        id: "programas",
                        titulo: "Programas de Desarrollo",
                        documentos: data
                            .filter(p => p.activo)
                            .map(p => ({
                                id: String(p.id),
                                titulo: p.titulo,
                                archivo: `${envs.API_BASE_URL}${p.archivo}`
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

        fetchProgramas();
    }, []);

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
            titulo="Programas de Desarrollo"
            descripcion="Consulta los programas de desarrollo académico e institucional de la Universidad Tecnológica de Tecamachalco."
        />
    );
}
