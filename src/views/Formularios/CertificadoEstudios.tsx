import { useState, type ChangeEvent, type FormEvent } from 'react';
import { enviarFormulario } from '@/util/apiFormularios';
import { useAlert } from '@/components/alerts/Formularios';
import carreras, { carrerasPorNivel } from '@/util/carreras';
import { 
  Clock, 
  DollarSign, 
  CheckCircle, 
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
} from 'lucide-react';

interface FormData {
  nombre: string;
  matricula: string;
  email: string;
  telefono: string;
  carrera: string;
  nivel: 'TSU' | 'LIC/ING' | '';
  entrega: 'presencial' | 'electronico' | '';
  comprobantePago: File[];
  numeroReferencia: string;
  comentarios: string;
}

const CertificadoEstudios: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    matricula: '',
    email: '',
    telefono: '',
    carrera: '',
    nivel: '',
    entrega: '',
    comprobantePago: [],
    numeroReferencia: '',
    comentarios: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showAlert, AlertComponent } = useAlert();

  // Errores devueltos por el backend (agrupados por campo)
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
    const { name, value, type } = e.target as HTMLInputElement;

    // limpiar error del backend para el campo editado
    setServerErrors(prev => {
      if (!(name in prev)) return prev;
      const copy = { ...prev };
      delete copy[name as keyof FormData];
      return copy;
    });

    if (type === 'radio') {
      // Si cambia el nivel, resetear la carrera
      if (name === 'nivel') {
        setFormData({ ...formData, [name]: value as 'TSU' | 'LIC/ING', carrera: '' });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      // Validaciones por campo
      let validatedValue = value;

      switch (name) {
        case 'nombre':
          validatedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
          break;
        case 'matricula':
          validatedValue = value.replace(/[^0-9]/g, '').slice(0, 8);
          break;
        case 'telefono':
          validatedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
          break;
        case 'email':
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

      setFormData({ ...formData, [name]: validatedValue });
    }
  };

  // Función para manejar cambio de archivos (múltiples)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) return;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSizePerFile = 5 * 1024 * 1024; // 5MB por archivo
    const maxTotalSize = 5 * 1024 * 1024; // 5MB en total para todos los archivos
    const maxFiles = 5;

    // Validar número máximo de archivos
    const totalFiles = formData.comprobantePago.length + files.length;
    if (totalFiles > maxFiles) {
      showAlert('warning', 'Límite de archivos excedido', `Solo puedes adjuntar un máximo de ${maxFiles} archivos.`);
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
        showAlert('error', 'Formato no válido', `El archivo "${file.name}" no es válido. Solo se permiten archivos PDF, JPG, JPEG o PNG.`);
        e.target.value = '';
        return;
      }
      
      if (file.size > maxSizePerFile) {
        showAlert('error', 'Archivo muy grande', `El archivo "${file.name}" excede los 5MB de tamaño.`);
        e.target.value = '';
        return;
      }
    }
    
    setFormData((prev) => ({ 
      ...prev, 
      comprobantePago: [...prev.comprobantePago, ...files] 
    }));
    e.target.value = '';
  };

  // Función para eliminar un archivo de la lista
  const handleRemoveFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      comprobantePago: prev.comprobantePago.filter((_, i) => i !== index),
    }));
  };

  // Función para formatear el tamaño del archivo
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

  // Validaciones nuevas
  const validateCarrera = (carrera: string): boolean => carrera.trim().length > 0;
  const validateNivel = (nivel: string): boolean => nivel === 'TSU' || nivel === 'LIC';
  const validateEntrega = (entrega: string): boolean => entrega === 'presencial' || entrega === 'electronico';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // limpiar errores previos del backend
    setServerErrors({});
    
    // Validar que todos los campos requeridos estén llenos
    if (!formData.nombre || !formData.matricula || !formData.email || !formData.telefono || 
        !formData.carrera || !formData.nivel || !formData.entrega || formData.comprobantePago.length === 0) {
      showAlert('warning', '¡Campos incompletos!', 'Por favor, completa todos los campos requeridos y adjunta al menos un archivo antes de continuar.');
      return;
    }

    // Validaciones específicas
    if (!validateNombre(formData.nombre)) {
      showAlert('error', 'Error en el nombre', 'El nombre debe contener solo letras y tener al menos 3 caracteres.');
      return;
    }

    if (!validateMatricula(formData.matricula)) {
      showAlert('error', 'Error en la matrícula', 'La matrícula debe tener exactamente 10 dígitos numéricos.');
      return;
    }

    if (!validateEmail(formData.email)) {
      showAlert('error', 'Error en el correo', 'Por favor, ingresa un correo electrónico válido (ejemplo: nombre@dominio.com).');
      return;
    }

    if (!validateTelefono(formData.telefono)) {
      showAlert('error', 'Error en el teléfono', 'El teléfono debe tener exactamente 10 dígitos numéricos.');
      return;
    }

    // Nuevas validaciones
    if (!validateCarrera(formData.carrera)) {
      showAlert('error', 'Carrera requerida', 'Selecciona tu carrera.');
      return;
    }

    if (!validateNivel(formData.nivel)) {
      showAlert('error', 'Nivel requerido', 'Selecciona TSU o LIC.');
      return;
    }

    if (!validateEntrega(formData.entrega)) {
      showAlert('error', 'Entrega requerida', 'Selecciona Presencial o Electrónico.');
      return;
    }

    setIsSubmitting(true);
    setServerErrors({}); // Limpiar errores previos

    try {
      // Enviar formulario usando la utilidad reutilizable
      const resultado = await enviarFormulario({
        'titulo-formulario': 'Certificado de Estudios',
        nombre: formData.nombre,
        matricula: formData.matricula,
        email: formData.email,
        telefono: formData.telefono,
        carrera: formData.carrera,
        nivel: formData.nivel as 'TSU' | 'LIC/ING',
        entrega: formData.entrega as 'presencial' | 'electronico',
        referencia: formData.numeroReferencia,
        comentarios: formData.comentarios,
        attachment: formData.comprobantePago, // Enviar todos los archivos
      });

      if (resultado.exito) {
        // ✅ Éxito
        showAlert('success', '¡Solicitud registrada!', 'Archivos cargados y correo electrónico enviado.');
        
        // Resetear formulario
        setFormData({
          nombre: '',
          matricula: '',
          email: '',
          telefono: '',
          carrera: '',
          nivel: '',
          entrega: '',
          comprobantePago: [],
          numeroReferencia: '',
          comentarios: '',
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
      showAlert('error', 'Error inesperado', 'Ocurrió un error al procesar tu solicitud.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50 py-8 px-4">
      {/* Componente de alerta personalizada */}
      <AlertComponent />
      
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            Solicitud de Certificado de Estudios
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
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
              <div className="flex items-center justify-between mb-6 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="text-green-700 mr-2" size={20} />
                  <span className="font-semibold text-green-800">Tiempo de entrega</span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">20 días</span>
              </div>
              
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Requisitos
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Ser o haber sido estudiante, o en su caso egresado de la Universidad
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    No contar con ningún adeudo con la Institución
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Pagar el costo del servicio
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    3 fotografías tamaño infantil a blanco y negro con adherible; toma de la fotografía con ropa formal
                  </li>
                </ol>
              </div>
              
              <div className="flex items-center justify-between mb-6 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="text-green-700 mr-2" size={20} />
                  <span className="font-semibold text-green-800">Costo 2025</span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">$305.00</span>
              </div>
              
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <ClipboardList className="mr-2 text-green-600" size={20} />
                  Pasos a seguir
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Descargar la orden pago de la página pagos en línea Puebla
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Realizar el pago en cualquiera de las instituciones bancarias autorizadas
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Ingresar a la página de la Universidad en Servicios Escolares en Línea
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Elegir tu carrera
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Contestar el formulario con número de referencia de pago
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Presentarse en ventanilla con el comprobante de pago original
                  </li>
                </ol>
              </div>
              
              <div className="flex items-center justify-between mb-6 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="text-green-700 mr-2" size={20} />
                  <span className="font-semibold text-green-800">Estado actual</span>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Disponible</span>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Documentos a presentar
                </h3>
                <ol className="list-decimal list-inside space-y-2 pl-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Identificarse con credencial de estudiante o INE
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                    Original y copia de la orden y comprobante de pago
                  </li>
                </ol>
              </div>
              
              {/* Botón para redirigir a la página de pagos Puebla */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://rl.puebla.gob.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md"
                >
                  <ArrowRight className="mr-2" size={18} />
                  Ir a la página de pagos Puebla
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6">
              <h2 className="text-xl font-bold">FORMULARIO</h2>
              <p>Solicitud de Certificado de Estudios</p>
            </div>
            
            <div className="p-1 bg-green-700">
              <p className="text-xs text-center text-white py-1">
                Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6" id='certificado'>
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
                        (formData.nombre && !validateNombre(formData.nombre)) || hasServerError('nombre')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="Nombre completo (solo letras)"
                      required
                    />
                  </div>
                  {((formData.nombre && !validateNombre(formData.nombre)) || hasServerError('nombre')) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('nombre') ? getServerErrorText('nombre') : 'Solo se permiten letras y espacios'}
                    </p>
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
                        (formData.matricula && !validateMatricula(formData.matricula)) || hasServerError('matricula')
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
                  {(((formData.matricula && !validateMatricula(formData.matricula)) || hasServerError('matricula')) && formData.matricula.length > 0) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('matricula') ? getServerErrorText('matricula') : 'La matrícula debe tener exactamente 8 dígitos'}
                    </p>
                  )}
                </div>
                
                {/* Correo */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-green-600" size={16} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        (formData.email && !validateEmail(formData.email)) || hasServerError('email')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="correo@institucional.edu.mx"
                      required
                    />
                  </div>
                  {((formData.email && !validateEmail(formData.email)) || hasServerError('email')) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('email') ? getServerErrorText('email') : 'Ingresa un correo válido'}
                    </p>
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
                        (formData.telefono && !validateTelefono(formData.telefono)) || hasServerError('telefono')
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
                  {(((formData.telefono && !validateTelefono(formData.telefono)) || hasServerError('telefono')) && formData.telefono.length > 0) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('telefono') ? getServerErrorText('telefono') : 'El teléfono debe tener exactamente 10 dígitos'}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Nivel y Entrega */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Nivel: <span className="text-red-500">*</span></span>
                  <div className={`flex space-x-4 p-2 rounded-lg ${
                    (!validateNivel(formData.nivel) && isSubmitting) || hasServerError('nivel') ? 'bg-red-50 ring-1 ring-red-300' : ''
                  }`}>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="nivel"
                        value="TSU"
                        checked={formData.nivel === 'TSU'}
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
                        value="LIC/ING"
                        checked={formData.nivel === 'LIC/ING'}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">LIC/ING</span>
                    </label>
                  </div>
                  {((!validateNivel(formData.nivel) && isSubmitting) || hasServerError('nivel')) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('nivel') ? getServerErrorText('nivel') : 'Selecciona un nivel'}
                    </p>
                  )}
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Entrega: <span className="text-red-500">*</span></span>
                  <div className={`flex space-x-4 p-2 rounded-lg ${
                    (!validateEntrega(formData.entrega) && isSubmitting) || hasServerError('entrega') ? 'bg-red-50 ring-1 ring-red-300' : ''
                  }`}>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="entrega"
                        value="presencial"
                        checked={formData.entrega === 'presencial'}
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
                        checked={formData.entrega === 'electronico'}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">Electrónico</span>
                    </label>
                  </div>
                  {((!validateEntrega(formData.entrega) && isSubmitting) || hasServerError('entrega')) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('entrega') ? getServerErrorText('entrega') : 'Selecciona un tipo de entrega'}
                    </p>
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
                    className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      (!formData.carrera && isSubmitting) || hasServerError('carrera') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Selecciona tu carrera</option>
                    {getCarrerasPorNivel().map((carrera, index) => (
                      <option key={index} value={carrera}>{carrera}</option>
                    ))}
                  </select>
                </div>
                {((!formData.carrera && isSubmitting) || hasServerError('carrera')) && (
                  <p className="text-red-500 text-xs mt-1">
                    {hasServerError('carrera') ? getServerErrorText('carrera') : 'Selecciona tu carrera'}
                  </p>
                )}
              </div>
              
              {/* Comprobante de Pago */}
              <div className="mb-6">
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                  Adjuntar Comprobante de Pago: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileUp className="text-green-600" size={16} />
                  </div>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    multiple
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      hasServerError('comprobantePago') || hasServerError('file') || hasServerError('attachment')
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Formatos aceptados: PDF, JPG, JPEG, PNG. Tamaño máximo: 5MB en total. Máximo 5 archivos.
                </p>
                
                {/* Lista de archivos adjuntados */}
                {formData.comprobantePago.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-medium text-gray-700">
                      {formData.comprobantePago.length} archivo(s) adjuntado(s):
                    </p>
                    {formData.comprobantePago.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                          <span className="text-sm text-gray-700 truncate">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            • {formatFileSize(file.size)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="ml-2 p-1 hover:bg-red-100 rounded-full transition-colors flex-shrink-0"
                          title="Eliminar archivo"
                        >
                          <X className="text-red-600" size={18} />
                        </button>
                      </div>
                    ))}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
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
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-lg mt-10">
                <p className="text-sm text-orange-800">
                  <span className="font-semibold">Nota:</span> Una vez enviada la solicitud deberás presentarte en el departamento de Servicios Escolares, 
                  en la ventanilla de tu Programa Educativo en un lapso no mayor de 5 días hábiles para la entrega de tus fotografías.
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md ${
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
};

export default CertificadoEstudios;