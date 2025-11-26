import { useState, useEffect } from "react";
import { ClipboardList, Clock, DollarSign, FileText, ArrowRight, AlertCircle } from "lucide-react";
import { obtenerConfiguracionFormulario, type ConfiguracionFormulario } from "../../services/configuracionFormulario.service";
import { Spinner } from "@/components/Spinner";

export default function ReposicionCredencial() {
  // Estado para la configuración dinámica del formulario
  const [configuracion, setConfiguracion] = useState<ConfiguracionFormulario | null>(null);
  const [cargandoConfig, setCargandoConfig] = useState(true);
  const [errorConfig, setErrorConfig] = useState(false);

  // Valores por defecto si la API falla
  const defaultTramiteInfo: {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    tiempo: string;
    costo: string;
    requisitos: string[];
    pasos: string[];
    documentos: string[];
  } = {
    titulo: "Solicitud de Reposición de Credencial de Estudiante",
    subtitulo: "Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco",
    descripcion: "",
    tiempo: "1 hora en días hábiles",
    costo: "$70.00",
    requisitos: [
      "Ser estudiante de la Universidad",
      "No contar con ningún adeudo con la Institución",
      "Credencial anterior, o en caso de extravío acudir al área del Abogado General, ubicado en el Edificio H Planta alta, para obtener la \"Constancia para la Reposición de Credencial\"",
      "Pagar el costo del servicio"
    ],
    pasos: [],
    documentos: [
      "Original y copia de la Constancia para la Reposición de Credencial",
      "Original y copia de la orden y comprobante de pago emitido por la institución bancaria donde se realizó"
    ]
  };

  // Cargar configuración al montar el componente
  useEffect(() => {
    const cargarConfiguracion = async () => {
      try {
        const config = await obtenerConfiguracionFormulario('credencial');
        setConfiguracion(config.datos ?? null);
      } catch (error) {
        console.error('Error al cargar configuración del formulario:', error);
        setErrorConfig(true);
      } finally {
        setCargandoConfig(false);
      }
    };
    cargarConfiguracion();
  }, []);

  // Combinar configuración de la API con valores por defecto
  const tramiteInfo = {
    titulo: configuracion?.info?.titulo || defaultTramiteInfo.titulo,
    subtitulo: configuracion?.info?.subtitulo || defaultTramiteInfo.subtitulo,
    descripcion: configuracion?.info?.descripcion || defaultTramiteInfo.descripcion,
    tiempo: configuracion?.info?.tiempoEntrega || defaultTramiteInfo.tiempo,
    costo: configuracion?.info?.costo || defaultTramiteInfo.costo,
    requisitos: configuracion?.requisitos?.length ? configuracion.requisitos : defaultTramiteInfo.requisitos,
    pasos: configuracion?.pasos?.length ? configuracion.pasos : defaultTramiteInfo.pasos,
    documentos: configuracion?.documentos?.length ? configuracion.documentos : defaultTramiteInfo.documentos,
  };

  // Mostrar spinner mientras carga la configuración
  if (cargandoConfig) {
    return <Spinner text="Cargando información del trámite..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            {tramiteInfo.titulo}
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-blue-700">
            {tramiteInfo.subtitulo}
          </p>
        </div>

        {/* Aviso si hubo error al cargar configuración */}
        {errorConfig && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg flex items-center">
            <AlertCircle className="text-yellow-600 mr-2" size={20} />
            <p className="text-yellow-700 text-sm">
              No se pudo cargar la configuración actualizada. Se muestran valores por defecto.
            </p>
          </div>
        )}

        {/* Descripción del trámite (si existe) */}
        {tramiteInfo.descripcion && (
          <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8">
            <p className="text-blue-800">{tramiteInfo.descripcion}</p>
          </div>
        )}

        {/* Sección Informativa */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6">
            <h2 className="text-xl font-bold flex items-center">
              <ClipboardList className="mr-2" size={24} />
              Información importante sobre este trámite
            </h2>
          </div>

          <div className="p-6">
            {/* Tiempo de entrega */}
            <div className="flex items-center justify-between mb-6 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <Clock className="text-green-700 mr-2" size={20} />
                <span className="font-semibold text-green-800">Tiempo de entrega</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                {tramiteInfo.tiempo}
              </span>
            </div>

            {/* Requisitos */}
            <div className="border-b border-blue-200 mb-6">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                <FileText className="mr-2 text-blue-600" size={20} />
                Requisitos
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                {tramiteInfo.requisitos.map((requisito: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    {requisito}
                  </li>
                ))}
              </ol>
            </div>

            {/* Costo */}
            <div className="flex items-center justify-between mb-6 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <DollarSign className="text-green-700 mr-2" size={20} />
                <span className="font-semibold text-green-800">Costo 2025</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                {tramiteInfo.costo}
              </span>
            </div>

            {/* Documentos a presentar */}
            <div className="border-b border-blue-200 mb-6">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                <FileText className="mr-2 text-blue-600" size={20} />
                Documentos a presentar
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                {tramiteInfo.documentos.map((documento: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    {documento}
                  </li>
                ))}
              </ol>
            </div>

            {/* Nota */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Nota:</span> Sin formulario, el trámite es presencial en ventanilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
