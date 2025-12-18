import { useEffect, useState } from 'react';
import { obtenerProcesoAdmision } from '../../services/procesoAdmision.service';
import type { ProcesoAdmisionResponse } from '../../services/procesoAdmision.service';
import { Spinner } from '../../components/Spinner';

export default function ConvocatoriaAdmision() {
  const [datos, setDatos] = useState<ProcesoAdmisionResponse | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sinRegistro, setSinRegistro] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      setCargando(true);
      setError(null);
      setSinRegistro(false);

      const resultado = await obtenerProcesoAdmision();

      if (resultado.exito && resultado.datos) {
        setDatos(resultado.datos);
      } else if (resultado.sinRegistro) {
        setSinRegistro(true);
      } else {
        setError(resultado.error || 'Error desconocido');
      }

      setCargando(false);
    };

    cargarDatos();
  }, []);

  // Estado de carga
  if (cargando) {
    return (
      <section className="my-10 flex flex-col items-center justify-center min-h-[400px]">
        <Spinner text="Cargando información..." />
      </section>
    );
  }

  // Estado sin convocatoria disponible
  if (sinRegistro) {
    return (
      <section className="my-10">
        <h2 className='text-5xl font-bold text-amber-700 mb-6 text-center'>Convocatoria de Admisión</h2>
        <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
          <svg className="w-16 h-16 text-amber-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-amber-800 mb-2">No hay convocatoria disponible</h3>
          <p className="text-amber-700">
            Por el momento no hay una convocatoria de admisión publicada. 
            Por favor, revisa más tarde o consulta con Servicios Escolares para más información.
          </p>
          <p className="text-gray-600 mt-4 text-sm">
            El periodo de registro e inscripción generalmente se publica de febrero a agosto.
          </p>
        </div>
      </section>
    );
  }

  // Estado de error
  if (error) {
    return (
      <section className="my-10">
        <h2 className='text-5xl font-bold text-amber-700 mb-6 text-center'>Convocatoria de Admisión</h2>
        <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-700 font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </section>
    );
  }

  // Estado exitoso con datos
  if (datos) {
    const imagenSrc = `data:${datos.archivo.mimeType};base64,${datos.archivo.base64}`;

    return (
      <section className="my-10">
        <h2 className='text-5xl font-bold text-amber-700 mb-6 text-center'>{datos.titulo}</h2>
        <p className='text-gray-700 leading-relaxed text-center text-lg mb-4'>{datos.subtitulo}</p>
        <img 
          src={imagenSrc} 
          alt={datos.archivo.nombre || 'Convocatoria de admisión'} 
          className='w-full max-w-4xl mx-auto mt-6 rounded-lg shadow-md'
        />
      </section>
    );
  }

  // Fallback (no debería llegar aquí)
  return null;
}
