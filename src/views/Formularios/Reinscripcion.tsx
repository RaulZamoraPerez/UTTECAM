import { useState, useEffect } from "react";
import { obtenerConfiguracionFormulario } from '../../services/configuracionFormulario.service';
import type { ConfiguracionFormulario } from '../../services/configuracionFormulario.service';
import { Spinner } from '../../components/Spinner';
import { Clock, DollarSign, ClipboardList, FileText, ArrowRight, AlertCircle } from "lucide-react";

export default function Reinscripcion() {
  // Estado para la configuración del formulario (datos dinámicos)
  const [configuracion, setConfiguracion] = useState<ConfiguracionFormulario | null>(null);
  const [cargandoConfig, setCargandoConfig] = useState(true);
  const [errorConfig, setErrorConfig] = useState<string | null>(null);

  // Valores por defecto (fallback)
  const defaultTramiteInfo: {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    requisitos: string[];
    pasos: string[];
    documentos: string[];
    tiempo: string;
    costo: string;
  } = {
    titulo: "Reinscripción",
    subtitulo: "Departamento de Servicios Escolares - Universidad Tecnológica de Tecamachalco",
    descripcion: "La Reinscripción es un proceso administrativo mediante el cual el o la estudiante inscrito en un programa educativo de la Universidad es registrada(o) para continuar sus estudios en el siguiente cuatrimestre de acuerdo con el Plan y Programa de estudios.\n\nPara este proceso es importante conocer la siguiente información.",
    requisitos: [
      "Ser estudiante de la Universidad",
      "No contar con ningún adeudo con la Institución",
      "Pagar el costo del cuatrimestre",
      "Pagar el costo del seguro escolar (anual)",
      "Actualizar sus datos personales",
    ],
    pasos: [
      "Al inicio del cuatrimestre el Departamento de Servicios Escolares informará al Programa Educativo el Calendario de Reinscripción.",
      "El programa educativo notificará a los estudiantes.",
      "Descargar la orden de pago de la página pagos en línea Puebla",
      "Realizar el pago en cualquiera de las Instituciones bancarias autorizadas en la orden de pago.",
      "Acudir con la documentación completa a la ventanilla correspondiente, en el día y la hora indicada.",
    ],
    documentos: [
      "Credencial de estudiante",
      "Original y copia de la orden y comprobante de pago emitido por la institución bancaria donde se realizó",
      "En caso de haber solicitado beca, presentar Acuse de Registro",
    ],
    tiempo: "5 Minutos",
    costo: "Cuatrimestre: $1,465.00 | Seguro Escolar: $335.00",
  };

  // Datos del trámite (usa los de la API si existen, sino los default)
  const tramiteInfo = configuracion ? {
    titulo: configuracion.info.titulo || defaultTramiteInfo.titulo,
    subtitulo: configuracion.info.subtitulo || defaultTramiteInfo.subtitulo,
    descripcion: configuracion.info.descripcion || defaultTramiteInfo.descripcion,
    requisitos: configuracion.requisitos.length > 0 ? configuracion.requisitos : defaultTramiteInfo.requisitos,
    pasos: configuracion.pasos.length > 0 ? configuracion.pasos : defaultTramiteInfo.pasos,
    documentos: configuracion.documentos.length > 0 ? configuracion.documentos : defaultTramiteInfo.documentos,
    tiempo: configuracion.info.tiempoEntrega || defaultTramiteInfo.tiempo,
    costo: configuracion.info.costo || defaultTramiteInfo.costo,
  } : defaultTramiteInfo;

  // Cargar configuración al montar el componente
  useEffect(() => {
    const cargarConfiguracion = async () => {
      setCargandoConfig(true);
      setErrorConfig(null);

      const resultado = await obtenerConfiguracionFormulario('inscripcion');

      if (resultado.exito && resultado.datos) {
        setConfiguracion(resultado.datos);
      } else {
        console.warn('No se pudo cargar la configuración del formulario:', resultado.error);
        setErrorConfig(resultado.error || null);
      }

      setCargandoConfig(false);
    };

    cargarConfiguracion();
  }, []);

  // Mostrar spinner mientras carga la configuración
  if (cargandoConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <Spinner text="Cargando información del trámite..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            {tramiteInfo.titulo}
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-blue-700">
            {tramiteInfo.subtitulo}
          </p>
        </div>

        {/* Aviso si hubo error cargando configuración */}
        {errorConfig && (
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-blue-700">
              Se está mostrando información predeterminada. Algunos datos pueden no estar actualizados.
            </p>
          </div>
        )}

        {/* Descripción extensa */}
        {tramiteInfo.descripcion && (
          <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-10">
            {tramiteInfo.descripcion.split('\n').map((parrafo: string, index: number) => (
              <p key={index} className={`${index === 0 ? 'text-blue-800 font-semibold text-lg mb-4' : 'text-gray-700'}`}>
                {parrafo}
              </p>
            ))}
          </div>
        )}

        {/* Sección Informativa */}
        <div className="bg-white rounded-xl shadow-lg border border-sky-700 overflow-hidden">
          <div className="bg-sky-950 text-white py-4 px-6">
            <h2 className="text-xl font-bold flex items-center">
              <ClipboardList className="mr-2" size={24} />
              Información importante sobre este trámite
            </h2>
          </div>

          <div className="p-6">
            {/* Tiempo del trámite */}
            <div className="flex items-center justify-between mb-6 p-3 bg-sky-100 rounded-lg">
              <div className="flex items-center">
                <Clock className="text-sky-700 mr-2" size={20} />
                <span className="font-semibold text-sky-800">Tiempo del trámite</span>
              </div>
              <span className="bg-sky-200 text-sky-800 px-3 py-1 rounded-full font-bold">
                {tramiteInfo.tiempo}
              </span>
            </div>

            {/* Requisitos */}
            <div className="border-b border-sky-300 mb-6">
              <h3 className="font-bold text-sky-800 mb-3 flex items-center">
                <FileText className="mr-2 text-sky-600" size={20} />
                Requisitos
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                {tramiteInfo.requisitos.map((req: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-sky-600" size={16} />
                    {req}
                  </li>
                ))}
              </ol>
            </div>

            {/* Pasos a seguir */}
            <div className="border-b border-sky-300 mb-6">
              <h3 className="font-bold text-sky-800 mb-3 flex items-center">
                <ClipboardList className="mr-2 text-sky-600" size={20} />
                Pasos a seguir
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                {tramiteInfo.pasos.map((paso: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-sky-600" size={16} />
                    {paso}
                    {paso.toLowerCase().includes('pagos en línea puebla') && (
                      <a
                        href="https://rl.puebla.gob.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-sky-600 underline"
                      >
                        https://rl.puebla.gob.mx/
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Documentos a presentar */}
            <div className="border-b border-sky-300 mb-6">
              <h3 className="font-bold text-sky-800 mb-3 flex items-center">
                <FileText className="mr-2 text-sky-600" size={20} />
                Documentos a presentar
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-gray-700">
                {tramiteInfo.documentos.map((doc: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-sky-600" size={16} />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Costo */}
            <div className="flex items-center justify-between mb-6 p-3 bg-sky-100 rounded-lg">
              <div className="flex items-center">
                <DollarSign className="text-sky-700 mr-2" size={20} />
                <span className="font-semibold text-sky-800">Costo</span>
              </div>
              <span className="bg-sky-200 text-sky-800 px-3 py-1 rounded-full font-bold">
                {tramiteInfo.costo}
              </span>
            </div>

            {/* Nota */}
            <div className="bg-sky-100 border-l-4 border-sky-500 p-4 rounded-lg">
              <p className="text-sm text-sky-800">
                <span className="font-semibold">Nota:</span> Sin formulario, el trámite es presencial en ventanilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
