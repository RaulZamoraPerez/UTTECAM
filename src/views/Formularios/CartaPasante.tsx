import { useState, type ChangeEvent, type FormEvent } from "react";
import { enviarFormulario } from '@/util/apiFormularios';
import { useAlert } from '@/components/alerts/Formularios';
import carreras, { carrerasPorNivel } from "@/util/carreras";
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
  FileUp,
  X,
  CheckCircle2,
} from "lucide-react";

interface FormData {
  nombre: string;
  matricula: string;
  correo: string;
  telefono: string;
  carrera: string;
  nivel: 'TSU' | 'LIC/ING' | '';
  comprobantePago: File[];
  numeroReferencia: string;
  comentarios: string;
}

export default function CartaPasante() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    matricula: "",
    correo: "",
    telefono: "",
    carrera: "",
    nivel: "",
    comprobantePago: [],
    numeroReferencia: "",
    comentarios: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showAlert, AlertComponent } = useAlert();

  // Estado para errores del servidor
  const [serverErrors, setServerErrors] = useState<Record<string, string[]>>({});
  
  const hasServerError = (field: keyof FormData | 'file' | 'attachment') => Boolean(serverErrors[field]?.length);
  const getServerErrorText = (field: keyof FormData | 'file' | 'attachment') => serverErrors[field]?.join(' ') || '';

  // Función para filtrar carreras según el nivel seleccionado
  const getCarrerasPorNivel = () => {
    if (!formData.nivel) return carreras;
    
    if (formData.nivel === 'TSU') {
      return carrerasPorNivel.TSU;
    } else if (formData.nivel === 'LIC/ING') {
      return [...carrerasPorNivel.LIC, ...carrerasPorNivel.ING];
    }
    
    return carreras;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Limpiar error del servidor para este campo
    setServerErrors(prev => {
      if (!(name in prev)) return prev;
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
    
    // Manejar radio buttons
    if (type === 'radio') {
      // Si cambia el nivel, resetear la carrera
      if (name === 'nivel') {
        setFormData(prev => ({ ...prev, [name]: value as 'TSU' | 'LIC/ING', carrera: '' }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }
    
    // Aplicar validaciones específicas por campo
    let validatedValue = value;

    switch (name) {
      case 'nombre':
        // Solo letras, espacios y acentos
        validatedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        break;
      
      case 'matricula':
        // Solo números y máximo 8 dígitos
        validatedValue = value.replace(/[^0-9]/g, '').slice(0, 8);
        break;
      
      case 'telefono':
        // Solo números y máximo 10 dígitos
        validatedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
        break;
      
      case 'correo':
        // Permitir caracteres válidos para email
        validatedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        break;
      
      case 'numeroReferencia':
        // Solo números y máximo 20 dígitos
        validatedValue = value.replace(/[^0-9]/g, '').slice(0, 20);
        break;
      
      case 'comentarios':
        // Limitar a 300 caracteres
        validatedValue = value.slice(0, 300);
        break;
      
      default:
        validatedValue = value;
    }

    setFormData((prev) => ({ ...prev, [name]: validatedValue }));
  };

  // Función para manejar cambio de archivos (múltiples)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) return;
    
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSizePerFile = 5 * 1024 * 1024; // 5MB por archivo
    const maxTotalSize = 5 * 1024 * 1024; // 5MB en total para todos los archivos
    const maxFiles = 5; // Máximo 5 archivos
    
    // Validar cantidad de archivos
    if (formData.comprobantePago.length + files.length > maxFiles) {
      showAlert('error', 'Demasiados archivos', `Solo puedes adjuntar un máximo de ${maxFiles} archivos.`);
      e.target.value = '';
      return;
    }
    
    // Calcular tamaño actual de archivos ya adjuntados
    const currentTotalSize = formData.comprobantePago.reduce((sum, file) => sum + file.size, 0);
    
    // Calcular tamaño de los nuevos archivos
    const newFilesSize = files.reduce((sum, file) => sum + file.size, 0);
    
    // Validar tamaño total
    if (currentTotalSize + newFilesSize > maxTotalSize) {
      const totalMB = ((currentTotalSize + newFilesSize) / (1024 * 1024)).toFixed(2);
      showAlert('error', 'Tamaño total excedido', `El tamaño total de todos los archivos (${totalMB} MB) excede el límite de 5MB. Por favor, selecciona archivos más pequeños.`);
      e.target.value = '';
      return;
    }
    
    // Validar cada archivo
    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        showAlert('error', 'Formato no válido', `El archivo "${file.name}" no es válido. Solo se permiten PDF, JPG, JPEG o PNG.`);
        e.target.value = '';
        return;
      }
      
      if (file.size > maxSizePerFile) {
        showAlert('error', 'Archivo muy grande', `El archivo "${file.name}" excede los 5MB de tamaño.`);
        e.target.value = '';
        return;
      }
    }
    
    // Agregar archivos válidos
    setFormData((prev) => ({ 
      ...prev, 
      comprobantePago: [...prev.comprobantePago, ...files] 
    }));
    
    // Limpiar input para permitir seleccionar los mismos archivos de nuevo si se eliminan
    e.target.value = '';
  };

  // Función para eliminar un archivo específico
  const handleRemoveFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      comprobantePago: prev.comprobantePago.filter((_, i) => i !== index)
    }));
  };

  // Función para formatear tamaño de archivo
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Función para validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar matrícula (8 dígitos exactos)
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
    if (!formData.nombre || !formData.matricula || !formData.correo || 
        !formData.telefono || !formData.carrera || formData.comprobantePago.length === 0) {
      showAlert('warning', '¡Campos incompletos!', 'Por favor, completa todos los campos requeridos y adjunta al menos un archivo antes de continuar.');
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

    setIsSubmitting(true);
    setServerErrors({}); // Limpiar errores previos

    try {
      // Enviar formulario usando la utilidad reutilizable
      // Si hay múltiples archivos, enviar cada uno por separado o el primero
      const resultado = await enviarFormulario({
        'titulo-formulario': 'Carta Pasante',
        nombre: formData.nombre,
        matricula: formData.matricula,
        email: formData.correo,
        telefono: formData.telefono,
        carrera: formData.carrera,
        nivel: formData.nivel as 'TSU' | 'LIC/ING',
        referencia: formData.numeroReferencia,
        comentarios: formData.comentarios,
        attachment: formData.comprobantePago, // Enviar todos los archivos
      });

      if (resultado.exito) {
        // ✅ Éxito
        showAlert('success', '¡Solicitud enviada exitosamente!', resultado.mensaje || 'Tu solicitud ha sido procesada correctamente. Recuerda presentarte en Servicios Escolares con tus fotografías en un máximo de 5 días hábiles.');
        
        // Resetear formulario
        setFormData({
          nombre: "",
          matricula: "",
          correo: "",
          telefono: "",
          carrera: "",
          nivel: "",
          comprobantePago: [],
          numeroReferencia: "",
          comentarios: "",
        });
        
        // Limpiar input de archivo
        const fileInput = document.getElementById('attachment') as HTMLInputElement | null;
        if (fileInput) fileInput.value = '';
      } else {
        // ❌ Error
        if (resultado.erroresPorCampo) {
          // Errores de validación por campo
          setServerErrors(resultado.erroresPorCampo);
          
          const detalle = Object.entries(resultado.erroresPorCampo)
            .map(([campo, mensajes]) => `• ${campo}: ${mensajes.join(' ')}`)
            .join('\n');
          
          showAlert('error', 'Errores de validación', detalle || 'Revisa los campos marcados.');
        } else {
          // Error genérico
          showAlert('error', 'Error al enviar', resultado.mensaje);
        }
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      showAlert('error', 'Error al enviar la solicitud', 'Ocurrió un error al procesar tu solicitud. Por favor, verifica tu conexión a internet e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 py-8 px-4">
      {/* Componente de alerta personalizada */}
      <AlertComponent />
      
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Solicitud de Carta Pasante
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-blue-700">
            Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sección Informativa */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6">
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
                    Haber presentado el Acto Protocolario de Nivel Licenciatura/Ingeniería
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    No contar con ningún adeudo con la Institución
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    Pagar el costo del servicio
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    3 fotografías tamaño infantil a blanco y negro con adherible; toma de la fotografía con ropa formal
                  </li>
                </ol>
              </div>

              {/* Costo */}
              <div className="flex items-center justify-between mb-6 p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="text-yellow-700 mr-2" size={20} />
                  <span className="font-semibold text-yellow-800">Costo 2025</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                  $225.00
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
                    Identificarse con credencial de estudiante o INE
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    Original y copia de la orden y comprobante de pago emitido por la institución bancaria donde se realizó
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" size={16} />
                    2 fotografías tamaño infantil a blanco y negro con adherible; toma de la fotografía con ropa formal
                  </li>
                </ol>
                <p className="text-sm text-blue-800 mt-2">
                  <span className="font-semibold">Nota:</span> No se aceptan fotografías instantáneas.
                </p>
              </div>

              {/* Botón para redirigir a la página de pagos */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://rl.puebla.gob.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md"
                >
                  <ArrowRight className="mr-2" size={18} />
                  Ir a la página de pagos Puebla
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 px-6">
              <h2 className="text-xl font-bold">FORMULARIO</h2>
              <p>Solicitud de Carta Pasante</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200 flex items-center">
                <User className="mr-2 text-blue-600" size={20} />
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
                      <User className="text-blue-600" size={16} />
                    </div>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
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
                      <BookOpen className="text-blue-600" size={16} />
                    </div>
                    <input
                      type="text"
                      id="matricula"
                      name="matricula"
                      value={formData.matricula}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        formData.matricula && !validateMatricula(formData.matricula) 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300'
                      }`}
                      placeholder="12345678 (8 dígitos)"
                      maxLength={8}
                      required
                    />
                  </div>
                  <p className={`text-xs mt-1 ${formData.matricula.length === 8 ? 'text-green-600' : 'text-gray-500'}`}>
                    {formData.matricula.length}/8 dígitos
                  </p>
                  {formData.matricula && !validateMatricula(formData.matricula) && formData.matricula.length > 0 && (
                    <p className="text-red-500 text-xs mt-1">La matrícula debe tener exactamente 8 dígitos</p>
                  )}
                </div>

                {/* Correo */}
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-blue-600" size={16} />
                    </div>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
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
                      <Phone className="text-blue-600" size={16} />
                    </div>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        formData.telefono && !validateTelefono(formData.telefono) 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300'
                      }`}
                      placeholder="1234567890 (10 dígitos)"
                      maxLength={10}
                      required
                    />
                  </div>
                  <p className={`text-xs mt-1 ${formData.telefono.length === 10 ? 'text-green-600' : 'text-gray-500'}`}>
                    {formData.telefono.length}/10 dígitos
                  </p>
                  {formData.telefono && !validateTelefono(formData.telefono) && formData.telefono.length > 0 && (
                    <p className="text-red-500 text-xs mt-1">El teléfono debe tener exactamente 10 dígitos</p>
                  )}
                </div>
              </div>

              {/* Nivel */}
              <div className="mb-5">
                <span className="block text-sm font-medium text-gray-700 mb-1">Nivel: <span className="text-red-500">*</span></span>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="nivel"
                      value="TSU"
                      checked={formData.nivel === "TSU"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-blue-600"
                      required
                    />
                    <span className="ml-2">TSU</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="nivel"
                      value="LIC/ING"
                      checked={formData.nivel === "LIC/ING"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">LIC/ING</span>
                  </label>
                </div>
              </div>

              {/* Carrera */}
              <div className="mb-5">
                <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">
                  Carrera: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="text-blue-600" size={16} />
                  </div>
                  <select
                    id="carrera"
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Selecciona tu carrera</option>
                    {getCarrerasPorNivel().map((carrera, index) => (
                      <option key={index} value={carrera}>
                        {carrera}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Comprobante de Pago */}
              <div className="mb-6">
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                  Adjuntar Comprobante(s) de Pago: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileUp className="text-blue-600" size={16} />
                  </div>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    multiple
                    className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      hasServerError('comprobantePago') || hasServerError('file') || hasServerError('attachment')
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Formatos: PDF, JPG, JPEG, PNG • Tamaño máx: 5MB en total • Máximo: 5 archivos
                </p>
                
                {/* Lista de archivos adjuntos */}
                {formData.comprobantePago.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {formData.comprobantePago.map((file, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg group hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="ml-3 p-1 rounded-full hover:bg-red-100 text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
                          title="Eliminar archivo"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                    <p className="text-xs text-blue-600 font-medium">
                      {formData.comprobantePago.length} archivo(s) adjuntado(s)
                    </p>
                  </div>
                )}
                
                {(hasServerError('comprobantePago') || hasServerError('file') || hasServerError('attachment')) && (
                  <p className="text-red-500 text-xs mt-1">
                    {getServerErrorText('comprobantePago') || getServerErrorText('file') || getServerErrorText('attachment')}
                  </p>
                )}
              </div>

              {/* Número de Referencia */}
              <div className="mb-6">
                <label htmlFor="numeroReferencia" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Referencia (opcional)
                </label>
                <input
                  type="text"
                  id="numeroReferencia"
                  name="numeroReferencia"
                  value={formData.numeroReferencia}
                  onChange={handleChange}
                  maxLength={20}
                  placeholder="Ingresa el número de referencia si lo tienes"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Solo números • Máximo 20 dígitos
                </p>
              </div>

              {/* Comentarios */}
              <div className="mb-6">
                <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-1">
                  Comentarios (Opcional)
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
                  rows={4}
                  maxLength={300}
                  placeholder="Si tienes algún comentario adicional sobre tu solicitud, escríbelo aquí (máximo 300 caracteres)..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-gray-500">
                    Máximo 300 caracteres
                  </p>
                  <p className="text-xs text-gray-500">
                    {formData.comentarios.length} / 300 caracteres
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Nota:</span> Una vez enviada la solicitud deberás presentarte en el departamento de Servicios Escolares, 
                  en la ventanilla de tu Programa Educativo en un lapso no mayor de 5 días hábiles para la entrega de tus fotografías.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md ${
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
