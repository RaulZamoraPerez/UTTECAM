import { useState, type ChangeEvent, type FormEvent } from "react";
import carreras from "@/util/carreras";
import { ClipboardList, Clock, FileText, ArrowRight, Send } from "lucide-react";

interface FormData {
  nombre: string;
  matricula: string;
  correo: string;
  telefono: string;
  carrera: string;
}

export default function TramiteTitulo() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    matricula: "",
    correo: "",
    telefono: "",
    carrera: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Solicitud enviada correctamente");
    setFormData({
      nombre: "",
      matricula: "",
      correo: "",
      telefono: "",
      carrera: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">
            Solicitud de Trámite de Título
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-orange-700">
            Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
          </p>
        </div>

        {/* Textos adicionales */}
        <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md mb-10">
          <p className="text-orange-800 font-semibold text-lg mb-4">
            Este espacio está diseñado para que puedas recibir información confiable acerca del proceso que tendrás que seguir cuando, una vez titulado, quieras tramitar tu Título Profesional Electrónico.
          </p>
          <p className="text-gray-700 mb-4">
            Recuerda que entre más pronto inicies tu trámite menos tardarán en llegar tu Título Profesional.
          </p>
          <p className="text-gray-700 mb-4">
            Primero debes tramitar el título de nivel Técnico Superior Universitario y después el de Ingeniería/Licenciatura, por lo tanto, si te retrasas en el primero, te demorarás en el segundo.
          </p>
          <p className="text-gray-700">
            Para saber los pasos y documentos que necesitas para realizar la solicitud de Título Profesional Electrónico, consulta la siguiente información.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sección Informativa */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-6">
              <h2 className="text-xl font-bold flex items-center">
                <ClipboardList className="mr-2" size={24} />
                Información importante sobre este trámite
              </h2>
            </div>

            <div className="p-6">
              {/* Tiempo de entrega */}
              <div className="flex items-center justify-between mb-6 p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="text-orange-700 mr-2" size={20} />
                  <span className="font-semibold text-orange-800">Tiempo de entrega</span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">
                  Entre 6 y 8 meses
                </span>
              </div>

              {/* Requisitos */}
              <div className="border-b border-orange-200 mb-6">
                <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-orange-600" size={20} />
                  Requisitos
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-orange-600" size={16} />
                    Haber presentado el Acto Protocolario de Nivel Licenciatura/Ingeniería
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-orange-600" size={16} />
                    No contar con ningún adeudo con la Institución
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-orange-600" size={16} />
                    Agendar cita
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-orange-600" size={16} />
                    Entregar la documentación requerida
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-orange-600" size={16} />
                    Pagar el costo del servicio
                  </li>
                </ol>
              </div>

              {/* Documentos a presentar */}
              <div className="border-b border-orange-200 mb-6">
                <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-orange-600" size={20} />
                  Documentos a presentar
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li>Original y copia (tamaño carta) del Acta de Nacimiento</li>
                  <li>Escaneo a color de Acta de Nacimiento en formato PDF</li>
                  <li>Certificado original y copia (tamaño carta) de bachillerato legalizado original</li>
                  <li>Escaneo a color de Certificado de bachillerato legalizado original en formato PDF</li>
                  <li>CURP (formato actualizado)</li>
                  <li>Original y copia de credencial del INE</li>
                </ul>
              </div>

              {/* Costo */}
              <div className="flex items-center justify-between mb-6 p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="text-orange-700 mr-2" size={20} />
                  <span className="font-semibold text-orange-800">Costo 2025</span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">
                  $2,630.00
                </span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6">
              <h2 className="text-xl font-bold">FORMULARIO</h2>
              <p>Solicitud de Trámite de Título</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-6 pb-2 border-b border-orange-200 flex items-center">
                Datos del solicitante
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Nombre completo"
                    required
                  />
                </div>

                {/* Matrícula */}
                <div>
                  <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
                    Matrícula:
                  </label>
                  <input
                    type="text"
                    id="matricula"
                    name="matricula"
                    value={formData.matricula}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Número de matrícula"
                    required
                  />
                </div>

                {/* Correo */}
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo:
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="correo@institucional.edu.mx"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Tel. de contacto:
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="(000) 000-0000"
                    required
                  />
                </div>
              </div>

              {/* Carrera */}
              <div className="mb-5">
                <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">
                  Carrera:
                </label>
                <select
                  id="carrera"
                  name="carrera"
                  value={formData.carrera}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Selecciona tu carrera</option>
                  {carreras.map((carrera, index) => (
                    <option key={index} value={carrera}>
                      {carrera}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md"
                >
                  <Send className="mr-2" size={18} />
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
