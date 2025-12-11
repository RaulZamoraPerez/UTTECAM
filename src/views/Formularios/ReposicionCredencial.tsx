import { ClipboardList, Clock, DollarSign, FileText, ArrowRight } from "lucide-react";

export default function ReposicionCredencial() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Solicitud de Reposición de Credencial de Estudiante
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-blue-700">
            Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
          </p>
        </div>

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
                1 hora en días hábiles
              </span>
            </div>

            {/* Requisitos */}
            <div className="border-b border-blue-200 mb-6">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                <FileText className="mr-2 text-blue-600" size={20} />
                Requisitos
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                  Ser estudiante de la Universidad
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                  No contar con ningún adeudo con la Institución
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                  Credencial anterior, o en caso de extravío acudir al área del Abogado General, ubicado en el Edificio H Planta alta, para obtener la “Constancia para la Reposición de Credencial”
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                  Pagar el costo del servicio
                </li>
              </ol>
            </div>

            {/* Costo */}
            <div className="flex items-center justify-between mb-6 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <DollarSign className="text-green-700 mr-2" size={20} />
                <span className="font-semibold text-green-800">Costo 2025</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                $70.00
              </span>
            </div>

            {/* Documentos a presentar */}
            <div className="border-b border-blue-200 mb-6">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                <FileText className="mr-2 text-blue-600" size={20} />
                Documentos a presentar
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                  Original y copia de la Constancia para la Reposición de Credencial
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                  Original y copia de la orden y comprobante de pago emitido por la institución bancaria donde se realizó
                </li>
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
