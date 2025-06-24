import { useState, type ChangeEvent, type FormEvent } from "react";
import carreras from "@/util/carreras";
import { ClipboardList, Clock, FileText, ArrowRight, Send } from "lucide-react";

interface FormData {
  nombre: string;
  matricula: string;
  numeroSeguridadSocial: string;
  correo: string;
  telefono: string;
  carrera: string;
  constanciaIMSS: File | null;
}

export default function AltaBajaIMSS() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    matricula: "",
    numeroSeguridadSocial: "",
    correo: "",
    telefono: "",
    carrera: "",
    constanciaIMSS: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, constanciaIMSS: file }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Solicitud enviada correctamente");
    setFormData({
      nombre: "",
      matricula: "",
      numeroSeguridadSocial: "",
      correo: "",
      telefono: "",
      carrera: "",
      constanciaIMSS: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            Solicitud de Alta / Baja del IMSS
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-green-700">
            Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sección Informativa */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6">
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
                  72 horas en días hábiles
                </span>
              </div>

              {/* Requisitos */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Requisitos
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Ser o haber sido estudiante de la Universidad (según sea el caso)
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    No contar con ningún adeudo con la Institución
                  </li>
                </ol>
              </div>

              {/* Pasos a seguir */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Pasos a seguir
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Descargar constancia de vigencia de derechos IMSS;{" "}
                    
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Ingresar a la página de la Universidad,{" "}
                    
                    en el menú "(POR DECLARAR..)".
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Elegir tu carrera
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Contestar el formulario
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    En un máximo de 72 horas se notificará a través de correo electrónico que se atendió la solicitud.
                  </li>
                </ol>
              </div>

              {/* Documentos a presentar */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Documentos a presentar
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Constancia de vigencia de derechos del IMSS
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6">
              <h2 className="text-xl font-bold">FORMULARIO</h2>
              <p>Solicitud de Alta / Baja del IMSS</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <h3 className="text-lg font-bold text-green-800 mb-6 pb-2 border-b border-green-200 flex items-center">
                Datos del estudiante
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Número de matrícula"
                    required
                  />
                </div>

                {/* Número de Seguridad Social */}
                <div>
                  <label htmlFor="numeroSeguridadSocial" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Seguridad Social:
                  </label>
                  <input
                    type="text"
                    id="numeroSeguridadSocial"
                    name="numeroSeguridadSocial"
                    value={formData.numeroSeguridadSocial}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Número de Seguridad Social"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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

              {/* Adjuntar Constancia IMSS */}
              <div className="mb-6">
                <label htmlFor="constanciaIMSS" className="block text-sm font-medium text-gray-700 mb-1">
                  Adjuntar Constancia de Vigencia de Derechos del IMSS:
                </label>
                <input
                  type="file"
                  id="constanciaIMSS"
                  name="constanciaIMSS"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md"
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
