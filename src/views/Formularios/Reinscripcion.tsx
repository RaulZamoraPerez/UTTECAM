export default function Reinscripcion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Reinscripción
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-blue-700">
            Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
          </p>
        </div>

        {/* Textos informativos */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-10">
          <p className="text-blue-800 font-semibold text-lg mb-4">
            La Reinscripción es un proceso administrativo mediante el cual el o la estudiante inscrito en un programa educativo de la Universidad es registrada(o) para continuar sus estudios en el siguiente cuatrimestre de acuerdo con el Plan y Programa de estudios.
          </p>
          <p className="text-gray-700">
            Para este proceso es importante conocer la siguiente información.
          </p>
        </div>

        {/* Sección Informativa */}
        <div className="bg-white rounded-xl shadow-lg border border-sky-700 overflow-hidden">
          <div className="bg-sky-950 text-white py-4 px-6">
            <h2 className="text-xl font-bold flex items-center">
              Información importante sobre este trámite
            </h2>
          </div>

          <div className="p-6">
            {/* Tiempo del trámite */}
            <div className="flex items-center justify-between mb-6 p-3 bg-sky-100 rounded-lg">
              <div className="flex items-center">
                <span className="font-semibold text-sky-800">Tiempo del trámite</span>
              </div>
              <span className="bg-sky-200 text-sky-800 px-3 py-1 rounded-full font-bold">
                5 Minutos
              </span>
            </div>

            {/* Requisitos */}
            <div className="border-b border-sky-300 mb-6">
              <h3 className="font-bold text-sky-800 mb-3">
                Requisitos
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                <li>Ser estudiante de la Universidad</li>
                <li>No contar con ningún adeudo con la Institución</li>
                <li>Pagar el costo del cuatrimestre</li>
                <li>Pagar el costo del seguro escolar (anual)</li>
                <li>Actualizar sus datos personales</li>
              </ol>
            </div>

            {/* Pasos a seguir */}
            <div className="border-b border-sky-300 mb-6">
              <h3 className="font-bold text-sky-800 mb-3">
                Pasos a seguir
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                <li>Al inicio del cuatrimestre el Departamento de Servicios Escolares informará al Programa Educativo el Calendario de Reinscripción.</li>
                <li>El programa educativo notificará a los estudiantes.</li>
                <li>Descargar la orden de pago de la página pagos en línea Puebla;{" "}
                  <a
                    href="https://rl.puebla.gob.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 underline"
                  >
                    https://rl.puebla.gob.mx/
                  </a>
                </li>
                <li>Realizar el pago en cualquiera de las Instituciones bancarias autorizadas en la orden de pago.</li>
                <li>Acudir con la documentación completa a la ventanilla correspondiente, en el día y la hora indicada.</li>
              </ol>
            </div>

            {/* Documentos a presentar */}
            <div className="border-b border-sky-300 mb-6">
              <h3 className="font-bold text-sky-800 mb-3">
                Documentos a presentar
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-gray-700">
                <li>Credencial de estudiante</li>
                <li>Original y copia de la orden y comprobante de pago emitido por la institución bancaria donde se realizó</li>
                <li>En caso de haber solicitado beca, presentar Acuse de Registro</li>
              </ul>
            </div>

            {/* Costo */}
            <div className="flex items-center justify-between mb-6 p-3 bg-sky-100 rounded-lg">
              <div className="flex items-center">
                <span className="font-semibold text-sky-800">Costo 2025</span>
              </div>
              <span className="bg-sky-200 text-sky-800 px-3 py-1 rounded-full font-bold">
                Cuatrimestre: $1,465.00 | Seguro Escolar: $335.00
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
