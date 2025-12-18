import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@/components/Spinner';
import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

interface Programa {
  id: number;
  titulo: string;
  descripcion: string;
  archivo: string;
  imagen?: string;
  activo: boolean;
  orden: number;
  fecha_publicacion: string;
}

const API_URL = import.meta.env.VITE_API_URL || '';

export default function ProgramasDesarrollo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [secciones, setSecciones] = useState<any[]>([]);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/programas-desarrollo`);
        const programas: Programa[] = response.data;

        // Transformar data para el componente reutilizable
        const documentosTransformados = programas.map(prog => ({
           id: prog.id.toString(),
           titulo: prog.titulo,
           archivo: `${API_URL}${prog.archivo}`,
           facebookLink: undefined 
        }));

        setSecciones([{
           id: 'programas-main',
           titulo: 'Detalle de Programas',
           documentos: documentosTransformados
        }]);

      } catch (err: any) {
        console.error(err);
        setError(`Error al cargar los programas de desarrollo: ${err.message || 'Error desconocido'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramas();
  }, []);

  if (loading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Spinner text="Cargando contenido..." />
      </div>
    );
  }

  if (error) {
     return (
        <div className="h-[50vh] flex flex-col items-center justify-center text-red-500 gap-4">
           <p className="text-xl font-medium">{error}</p>
        </div>
     );
  }

  return (
    <TablaDocumentosReutilizable2
      secciones={secciones}
      titulo="Programas de Desarrollo"
      descripcion="Documentos y recursos sobre los programas de desarrollo de la universidad."
    />
  );
}
