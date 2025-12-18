// import { useEffect, useState } from 'react';
// import { obtenerProcesoAdmision } from '../../services/procesoAdmision.service';
// import type { ProcesoAdmisionResponse } from '../../services/procesoAdmision.service';
// import { Spinner } from '../../components/Spinner';
import { Download, GraduationCap, Info } from 'lucide-react';

export default function ConvocatoriaAdmision() {
  /*
  const [datos, setDatos] = useState<ProcesoAdmisionResponse | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sinRegistro, setSinRegistro] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      setCargando(true);
      setError(null)
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
  */

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium mb-6">
            <GraduationCap size={14} className="text-amber-500" />
            <span>Proceso de Admisión Institucional</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Únete a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">UTTECAM</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Tu camino hacia la excelencia profesional comienza aquí.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
    
        {/* Sección: Resultados de Maestría */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </span>
                      <span className="text-amber-600 font-bold tracking-wider text-sm uppercase">Resultados Disponibles</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                      Lista de Aceptados <br/>
                      <span className="text-gray-400">Maestría en Gestión de Proyectos</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Se publican los resultados oficiales de los aspirantes aceptados para el programa de maestría.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="/convocatoriaAdmision/resultados aceptados maestria.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1"
                    >
                      <Download size={20} />
                      Descargar Resultados
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-400 pt-4 border-t border-gray-100">
                    <Info size={16} />
                    <span>Favor de presentarse en Servicios Escolares.</span>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-amber-200 blur-3xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src="/convocatoriaAdmision/motocle.png" 
                      alt="Aceptados Maestría" 
                      className="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Sección: Convocatoria de Maestría */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900">Convocatoria de Admisión a Maestría</h3>
            <p className="text-gray-500 mt-2">Consulta las bases y requisitos para tu ingreso.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white p-4 border border-gray-200">
              <img 
                src="/noticias/Maestria.png" 
                alt="Convocatoria Maestría" 
                className="w-full h-auto rounded-xl shadow-inner"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

