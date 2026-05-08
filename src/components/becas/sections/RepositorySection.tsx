import { useState, useEffect } from 'react';
import { envs } from '../../../config/envs';
import TablaDocumentosReutilizable2 from '../../tablaDocumentosReutilizable2';
import { Loader2, AlertCircle } from 'lucide-react';

interface RepositorySectionProps {
    section: {
        title: string;
        data: {
            areaId: number;
            areaName?: string;
        };
    };
}

const RepositorySection = ({ section }: RepositorySectionProps) => {
    const { areaId } = section.data;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [mappedSecciones, setMappedSecciones] = useState<any[]>([]);

    useEffect(() => {
        const fetchAreaData = async () => {
            if (!areaId) {
                setError('No se ha configurado un área para este repositorio.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${envs.API_BASE_URL}/api/documentos/areas/${areaId}`);
                if (!response.ok) throw new Error('Error al cargar los documentos');
                
                const data = await response.json();
                
                // Mapear la estructura del backend a la que espera tablaDocumentosReutilizable2
                const mapped = (data.categorias || []).map((cat: any) => ({
                    id: cat.ID_Categorias.toString(),
                    titulo: cat.Nombre,
                    documentos: (cat.archivos || []).map((file: any) => ({
                        id: file.ID_Archivos.toString(),
                        titulo: file.Nombre,
                        archivo: file.Ruta_Documento ? (file.Ruta_Documento.startsWith('http') ? file.Ruta_Documento : `${envs.API_BASE_URL}${file.Ruta_Documento}`) : undefined
                    }))
                }));

                setMappedSecciones(mapped);
            } catch (err) {
                console.error('Error fetching repository data:', err);
                setError('Hubo un problema al cargar los documentos. Por favor, intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchAreaData();
    }, [areaId]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border border-gray-100">
                <Loader2 className="h-10 w-10 text-[#0A9782] animate-spin mb-4" />
                <p className="text-gray-500 font-medium italic">Cargando repositorio de documentos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-red-50 rounded-xl border border-red-100 text-center px-4">
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-2">Error en el Repositorio</h3>
                <p className="text-red-600 max-w-md">{error}</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <TablaDocumentosReutilizable2 
                secciones={mappedSecciones} 
                titulo={section.title || "Repositorio de Documentos"}
                descripcion={section.data.areaName ? `Documentos oficiales de ${section.data.areaName}` : "Consulta y descarga la documentación oficial."}
            />
        </div>
    );
};

export default RepositorySection;
