import { useState, type ChangeEvent, type FormEvent } from "react";
import { enviarFormularioReact } from '@/util/sendEmailForms';
import { useAlert } from '@/components/alerts/Formularios';
import carreras from "@/util/carreras";
import {
  Clock,
  DollarSign,
  ClipboardList,
  FileText,
  User,
  BookOpen,
  Mail,
  Phone,
  GraduationCap,
  Send,
  ArrowRight,
  FileBox,
  FileArchive,
} from "lucide-react";

interface FormData {
  nombre: string;
  matricula: string;
  correo: string;
  telefono: string;
  carrera: string;
  nivel: 'TSU' | 'LIC' | '';
  entrega: 'presencial' | 'electronico' | '';
  referencia: string;
  documentos: string[];
}

export default function ConstanciasKardex() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    matricula: "",
    correo: "",
    telefono: "",
    carrera: "",
    nivel: "",
    entrega: "",
    referencia: "",
    documentos: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showAlert, AlertComponent } = useAlert();

  const tramiteInfo = {
    titulo: "Solicitud de Constancia de Estudios o Kardex",
    requisitos: [
      "Ser o haber sido estudiante, o en su caso egresado de la Universidad",
      "No contar con ningún adeudo con la Institución",
      "Pagar el costo del servicio",
    ],
    pasos: [
      "Descargar la orden pago de la página pagos en línea Puebla",
      "Realizar el pago en cualquiera de las instituciones bancarias autorizadas",
      "Ingresar a la página de la Universidad en Servicios Escolares en Línea",
      "Elegir tu carrera y tipo de documento solicitado",
      "Contestar el formulario con número de referencia de pago",
      "Presentarse en ventanilla con el comprobante de pago original",
    ],
    documentos: [
      "Identificarse con credencial de estudiante o INE",
      "Original y copia de la orden y comprobante de pago",
    ],
    tiempo: "1 día",
    costo: "$49.00",
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      const documentos = [...formData.documentos];
      if (target.checked) {
        documentos.push(value);
      } else {
        const index = documentos.indexOf(value);
        if (index > -1) {
          documentos.splice(index, 1);
        }
      }
      setFormData(prev => ({ ...prev, documentos }));
    } else if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      // Aplicar validaciones específicas por campo
      let validatedValue = value;

      switch (name) {
        case 'nombre':
          // Solo letras, espacios y acentos
          validatedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
          break;
        
        case 'matricula':
          // Solo números y máximo 10 dígitos
          validatedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
          break;
        
        case 'telefono':
          // Solo números y máximo 10 dígitos
          validatedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
          break;
        
        case 'correo':
          // Permitir caracteres válidos para email
          validatedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
          break;
        
        default:
          validatedValue = value;
      }

      setFormData(prev => ({ ...prev, [name]: validatedValue }));
    }
  };

  // Función para validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar matrícula (10 dígitos exactos)
  const validateMatricula = (matricula: string): boolean => {
    return matricula.length === 8 && /^\d{8}$/.test(matricula);
  };

  // Función para validar teléfono (10 dígitos exactos)
  const validateTelefono = (telefono: string): boolean => {
    return telefono.length === 10 && /^\d{10}$/.test(telefono);
  };

  // Función para validar nombre (solo letras y espacios)
  const validateNombre = (nombre: string): boolean => {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) && nombre.trim().length >= 3;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos requeridos estén llenos
    if (!formData.nombre || !formData.matricula || !formData.correo || !formData.telefono || 
        !formData.carrera || !formData.nivel || !formData.entrega || !formData.referencia) {
      showAlert('warning', '¡Campos incompletos!', 'Por favor, completa todos los campos requeridos antes de continuar.');
      return;
    }

    // Validaciones específicas
    if (!validateNombre(formData.nombre)) {
      showAlert('error', 'Error en el nombre', 'El nombre debe contener solo letras y tener al menos 3 caracteres.');
      return;
    }

    if (!validateMatricula(formData.matricula)) {
      showAlert('error', 'Error en la matrícula', 'La matrícula debe tener exactamente 8 dígitos numéricos.');
      return;
    }

    if (!validateEmail(formData.correo)) {
      showAlert('error', 'Error en el correo', 'Por favor, ingresa un correo electrónico válido (ejemplo: nombre@dominio.com).');
      return;
    }

    if (!validateTelefono(formData.telefono)) {
      showAlert('error', 'Error en el teléfono', 'El teléfono debe tener exactamente 10 dígitos numéricos.');
      return;
    }

    // Validar que al menos un documento esté seleccionado
    if (formData.documentos.length === 0) {
      showAlert('warning', '¡Documentos no seleccionados!', 'Por favor, selecciona al menos un documento que deseas solicitar.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar los datos para enviar
      const datosEnvio = {
        nombre: formData.nombre,
        matricula: formData.matricula,
        correo: formData.correo,
        email_destination: 'js750565@gmail.com',
        titulo: 'Solicitud de Constancia de Estudios o Kardex',
        telefono: formData.telefono,
        carrera: formData.carrera,
        nivel: formData.nivel,
        entrega: formData.entrega,
        numero_referencia: formData.referencia,
        documentos: formData.documentos.join(', '),
        fecha: new Date().toLocaleDateString('es-MX'),
        hora: new Date().toLocaleTimeString('es-MX'),
        tipo_solicitud: 'Constancia de Estudios o Kardex'
      };

      console.log('Intentando enviar:', datosEnvio);

      await enviarFormularioReact(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        datosEnvio
      );

      showAlert('success', '¡Solicitud enviada exitosamente!', 'Tu solicitud ha sido procesada correctamente. Recibirás una confirmación por correo electrónico en breve.');
      
      setFormData({
        nombre: "",
        matricula: "",
        correo: "",
        telefono: "",
        carrera: "",
        nivel: "",
        entrega: "",
        referencia: "",
        documentos: [],
      });
    } catch (error) {
      console.error('Error en handleSubmit:', error);
      showAlert('error', 'Error al enviar la solicitud', 'Ocurrió un error al procesar tu solicitud. Por favor, verifica tu conexión a internet e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 py-8 px-4">
      {/* Componente de alerta personalizada */}
      <AlertComponent />
      
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            Solicitud de Constancia de Estudios o Kardex
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-yellow-700">
            Departamento de Servicios Escolares - Universidad Tecnológica de Tecamachalco
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
              <div className="flex items-center justify-between mb-6 p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="text-yellow-700 mr-2" size={20} />
                  <span className="font-semibold text-yellow-800">Tiempo de entrega</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                  {tramiteInfo.tiempo}
                </span>
              </div>

              {/* Requisitos */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Requisitos
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  {tramiteInfo.requisitos.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                      {req}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Costo */}
              <div className="flex items-center justify-between mb-6 p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="text-yellow-700 mr-2" size={20} />
                  <span className="font-semibold text-yellow-800">Costo</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                  {tramiteInfo.costo}
                </span>
              </div>

              {/* Pasos a seguir */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <ClipboardList className="mr-2 text-green-600" size={20} />
                  Pasos a seguir
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  {tramiteInfo.pasos.map((paso, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                      {paso}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Documentos a presentar */}
              <div className="mb-4">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Documentos a presentar
                </h3>
                <ol className="list-decimal list-inside space-y-2 pl-2 text-gray-700">
                  {tramiteInfo.documentos.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                      {doc}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Botón para redirigir a la página de pagos */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://rl.puebla.gob.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md"
                >
                  <ArrowRight className="mr-2" size={18} />
                  Ir a la página de pagos Puebla
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 px-6">
              <h2 className="text-xl font-bold">FORMULARIO</h2>
              <p>Solicitud de Constancia de Estudios o Kardex</p>
            </div>

            <div className="p-1 bg-green-700">
              <p className="text-xs text-center text-white py-1">
                Departamento de Servicios Escolares - Universidad Tecnológica de Tecamachalco
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <h3 className="text-lg font-bold text-green-800 mb-6 pb-2 border-b border-green-200 flex items-center">
                <User className="mr-2 text-green-600" size={20} />
                Datos del estudiante
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-green-600" size={16} />
                    </div>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        formData.nombre && !validateNombre(formData.nombre) 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300'
                      }`}
                      placeholder="Nombre completo (solo letras)"
                      required
                    />
                  </div>
                  {formData.nombre && !validateNombre(formData.nombre) && (
                    <p className="text-red-500 text-xs mt-1">Solo se permiten letras y espacios</p>
                  )}
                </div>

                {/* Matrícula */}
                <div>
                  <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
                    Matrícula: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen className="text-green-600" size={16} />
                    </div>
                    <input
                      type="text"
                      id="matricula"
                      name="matricula"
                      value={formData.matricula}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        formData.matricula && !validateMatricula(formData.matricula) 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300'
                      }`}
                      placeholder="1234567890 (10 dígitos)"
                      maxLength={10}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.matricula.length}/10 dígitos
                  </p>
                  {formData.matricula && !validateMatricula(formData.matricula) && formData.matricula.length > 0 && (
                    <p className="text-red-500 text-xs mt-1">La matrícula debe tener exactamente 10 dígitos</p>
                  )}
                </div>

                {/* Correo */}
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-green-600" size={16} />
                    </div>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        formData.correo && !validateEmail(formData.correo) 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300'
                      }`}
                      placeholder="correo@institucional.edu.mx"
                      required
                    />
                  </div>
                  {formData.correo && !validateEmail(formData.correo) && (
                    <p className="text-red-500 text-xs mt-1">Ingresa un correo válido</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Tel. de contacto: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="text-green-600" size={16} />
                    </div>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        formData.telefono && !validateTelefono(formData.telefono) 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300'
                      }`}
                      placeholder="1234567890 (10 dígitos)"
                      maxLength={10}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.telefono.length}/10 dígitos
                  </p>
                  {formData.telefono && !validateTelefono(formData.telefono) && formData.telefono.length > 0 && (
                    <p className="text-red-500 text-xs mt-1">El teléfono debe tener exactamente 10 dígitos</p>
                  )}
                </div>
              </div>

              {/* Carrera */}
              <div className="mb-5">
                <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">
                  Carrera: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="text-green-600" size={16} />
                  </div>
                  <select
                    id="carrera"
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
              </div>

              {/* Nivel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Nivel: <span className="text-red-500">*</span></span>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="nivel"
                        value="TSU"
                        checked={formData.nivel === "TSU"}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                        required
                      />
                      <span className="ml-2">TSU</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="nivel"
                        value="LIC"
                        checked={formData.nivel === "LIC"}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">LIC</span>
                    </label>
                  </div>
                </div>

                {/* Entrega */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Entrega: <span className="text-red-500">*</span></span>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="entrega"
                        value="presencial"
                        checked={formData.entrega === "presencial"}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                        required
                      />
                      <span className="ml-2">Presencial</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="entrega"
                        value="electronico"
                        checked={formData.entrega === "electronico"}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">Electrónico</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Documento solicitado */}
              <div className="mb-5">
                <span className="block text-sm font-medium text-gray-700 mb-1">Documento que solicita: <span className="text-red-500">*</span></span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { value: "Constancia de Estudios", label: "Constancia de Estudios", icon: <FileText className="mr-2" size={16} /> },
                    { value: "Constancia de trámite de título", label: "Constancia de trámite de título", icon: <FileBox className="mr-2" size={16} /> },
                    { value: "Kardex", label: "Kardex", icon: <FileArchive className="mr-2" size={16} /> },
                  ].map((option) => (
                    <label key={option.value} className="inline-flex items-center bg-green-50 p-2 rounded-lg border border-green-200 cursor-pointer hover:bg-green-100 transition">
                      <input
                        type="checkbox"
                        name="documentos"
                        value={option.value}
                        checked={formData.documentos.includes(option.value)}
                        onChange={handleChange}
                        className="form-checkbox h-4 w-4 text-green-600 rounded"
                      />
                      <span className="ml-2 inline-flex items-center text-sm">
                        {option.icon}
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Referencia */}
              <div className="mb-6">
                <label htmlFor="referencia" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Referencia: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText className="text-green-600" size={16} />
                  </div>
                  <input
                    type="text"
                    id="referencia"
                    name="referencia"
                    value={formData.referencia}
                    onChange={handleChange}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Número de referencia"
                    required
                  />
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-lg">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Nota:</span> Una vez enviada la solicitud deberás presentarte en el departamento de Servicios Escolares, 
                  en la ventanilla de tu Programa Educativo en un lapso no mayor de 1 día hábil para la entrega del documento solicitado.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="mr-2" size={18} />
                  {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
