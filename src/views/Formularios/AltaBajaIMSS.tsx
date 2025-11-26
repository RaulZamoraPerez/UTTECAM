
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { enviarFormulario } from '@/util/apiFormularios';
import { useAlert } from '@/components/alerts/Formularios';
import carreras, { carrerasPorNivel } from "@/util/carreras";
import { obtenerConfiguracionFormulario, type ConfiguracionFormulario } from "../../services/configuracionFormulario.service";
import { Spinner } from "@/components/Spinner";
import { 
  ClipboardList, 
  Clock, 
  FileText, 
  ArrowRight, 
  Send, 
  User, 
  BookOpen, 
  Mail, 
  Phone, 
  GraduationCap, 
  FileUp,
  Hash,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FormData {
  nombre: string;
  matricula: string;
  numeroSeguridadSocial: string;
  correo: string;
  telefono: string;
  carrera: string;
  nivel: 'TSU' | 'LIC/ING' | '';
  constanciaIMSS: File[];
}

export default function AltaBajaIMSS() {
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
    titulo: "Solicitud de Alta / Baja del IMSS",
    subtitulo: "Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco",
    descripcion: "",
    tiempo: "72 horas en días hábiles",
    costo: "Gratuito",
    requisitos: [
      "Ser o haber sido estudiante de la Universidad (según sea el caso)",
      "No contar con ningún adeudo con la Institución"
    ],
    pasos: [
      "Descargar constancia de vigencia de derechos IMSS desde la página oficial del IMSS",
      "Completar el formulario en línea con todos tus datos",
      "Adjuntar la constancia de vigencia en formato PDF",
      "Enviar la solicitud",
      "En un máximo de 72 horas se notificará a través de correo electrónico que se atendió la solicitud."
    ],
    documentos: [
      "Constancia de vigencia de derechos del IMSS (archivo digital en PDF)"
    ]
  };

  // Cargar configuración al montar el componente
  useEffect(() => {
    const cargarConfiguracion = async () => {
      try {
        const config = await obtenerConfiguracionFormulario('imss');
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

  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    matricula: "",
    numeroSeguridadSocial: "",
    correo: "",
    telefono: "",
    carrera: "",
    nivel: "",
    constanciaIMSS: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showAlert, AlertComponent } = useAlert();

  // NUEVO: errores del backend por campo
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // limpiar error backend del campo editado
    setServerErrors(prev => {
      if (!(name in prev)) return prev;
      const copy = { ...prev };
      delete copy[name as keyof FormData];
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
        validatedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        break;
      case 'matricula':
        // Solo números y máximo 8 dígitos
        validatedValue = value.replace(/[^0-9]/g, '').slice(0, 8);
        break;
      case 'numeroSeguridadSocial':
        // Solo números y máximo 11 dígitos (formato NSS)
        validatedValue = value.replace(/[^0-9]/g, '').slice(0, 11);
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

    setFormData((prev) => ({ ...prev, [name]: validatedValue }));
  };

  // Función para manejar cambio de archivos (múltiples)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // limpiar posibles errores backend asociados al archivo
    setServerErrors(prev => {
      const copy = { ...prev };
      delete copy.constanciaIMSS;
      delete copy.file;
      delete copy.attachment;
      return copy;
    });
    
    if (files.length === 0) return;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSizePerFile = 5 * 1024 * 1024; // 5MB por archivo
    const maxTotalSize = 5 * 1024 * 1024; // 5MB en total para todos los archivos
    const maxFiles = 5;

    // Validar número máximo de archivos
    const totalFiles = formData.constanciaIMSS.length + files.length;
    if (totalFiles > maxFiles) {
      showAlert('warning', 'Límite de archivos excedido', `Solo puedes adjuntar un máximo de ${maxFiles} archivos.`);
      e.target.value = '';
      return;
    }

    // Calcular tamaño actual de archivos ya adjuntados
    const currentTotalSize = formData.constanciaIMSS.reduce((sum, file) => sum + file.size, 0);
    
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
      constanciaIMSS: [...prev.constanciaIMSS, ...files] 
    }));
    e.target.value = '';
  };

  // Función para eliminar un archivo de la lista
  const handleRemoveFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      constanciaIMSS: prev.constanciaIMSS.filter((_, i) => i !== index),
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

  // Función para validar NSS (11 dígitos exactos)
  const validateNSS = (nss: string): boolean => {
    return nss.length === 11 && /^\d{11}$/.test(nss);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // limpiar errores previos del backend
    setServerErrors({});
    
    // Validar que todos los campos requeridos estén llenos
    if (!formData.nombre || !formData.matricula || !formData.numeroSeguridadSocial || 
        !formData.correo || !formData.telefono || !formData.carrera || formData.constanciaIMSS.length === 0) {
      showAlert('warning', '¡Campos incompletos!', 'Por favor, completa todos los campos requeridos y adjunta al menos un archivo de constancia del IMSS.');
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

    if (!validateNSS(formData.numeroSeguridadSocial)) {
      showAlert('error', 'Error en el NSS', 'El número de seguridad social debe tener exactamente 11 dígitos numéricos.');
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

    try {
      // Enviar formulario usando la utilidad reutilizable
      const resultado = await enviarFormulario({
        'titulo-formulario': 'Alta/Baja IMSS',
        nombre: formData.nombre,
        matricula: formData.matricula,
        email: formData.correo,
        telefono: formData.telefono,
        carrera: formData.carrera,
        nivel: formData.nivel as 'TSU' | 'LIC/ING',
        'numero-seguro': formData.numeroSeguridadSocial,
        tramite: 'Alta/Baja IMSS',
        attachment: formData.constanciaIMSS, // Enviar todos los archivos
      });

      if (resultado.exito) {
        // ✅ Éxito
        showAlert('success', '¡Solicitud enviada exitosamente!', 'Archivos cargados y correo electrónico enviado.');
        
        // Resetear formulario
        setFormData({
          nombre: "",
          matricula: "",
          numeroSeguridadSocial: "",
          correo: "",
          telefono: "",
          carrera: "",
          nivel: "",
          constanciaIMSS: [],
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
      showAlert('error', 'Error de red', 'No fue posible contactar al servidor. Revisa tu conexión e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mostrar spinner mientras carga la configuración
  if (cargandoConfig) {
    return <Spinner text="Cargando información del trámite..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8 px-4">
      {/* Componente de alerta personalizada */}
      <AlertComponent />
      
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            {tramiteInfo.titulo}
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-green-700">
            {tramiteInfo.subtitulo}
          </p>
        </div>

        {/* Aviso si hubo error al cargar configuración */}
        {errorConfig && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg max-w-6xl mx-auto flex items-center">
            <AlertCircle className="text-yellow-600 mr-2" size={20} />
            <p className="text-yellow-700 text-sm">
              No se pudo cargar la configuración actualizada. Se muestran valores por defecto.
            </p>
          </div>
        )}

        {/* Descripción del trámite (si existe) */}
        {tramiteInfo.descripcion && (
          <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow-md mb-8 max-w-6xl mx-auto">
            <p className="text-green-800">{tramiteInfo.descripcion}</p>
          </div>
        )}

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
                  {tramiteInfo.requisitos.map((requisito: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                      {requisito}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Pasos a seguir */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Pasos a seguir
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  {tramiteInfo.pasos.map((paso: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                      {paso}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Documentos a presentar */}
              <div className="border-b border-green-200 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center">
                  <FileText className="mr-2 text-green-600" size={20} />
                  Documentos a presentar
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-gray-700">
                  {tramiteInfo.documentos.map((documento: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-green-600" size={16} />
                      {documento}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enlace al IMSS */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://www.imss.gob.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center shadow-md"
                >
                  <ArrowRight className="mr-2" size={18} />
                  Ir al sitio oficial del IMSS
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6">
              <h2 className="text-xl font-bold">FORMULARIO</h2>
              <p>Solicitud de Alta / Baja del IMSS</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6" encType="multipart/form-data">
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

                {/* Número de Seguridad Social */}
                <div>
                  <label htmlFor="numeroSeguridadSocial" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Seguridad Social: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Hash className="text-green-600" size={16} />
                    </div>
                    <input
                      type="text"
                      id="numeroSeguridadSocial"
                      name="numeroSeguridadSocial"
                      value={formData.numeroSeguridadSocial}
                      onChange={handleChange}
                      className={`pl-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        (formData.numeroSeguridadSocial && !validateNSS(formData.numeroSeguridadSocial)) || hasServerError('numeroSeguridadSocial')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="12345678901 (11 dígitos)"
                      maxLength={11}
                      required
                    />
                  </div>
                  <p className={`text-xs mt-1 ${formData.numeroSeguridadSocial.length === 11 ? 'text-green-600' : 'text-gray-500'}`}>
                    {formData.numeroSeguridadSocial.length}/11 dígitos
                  </p>
                  {(((formData.numeroSeguridadSocial && !validateNSS(formData.numeroSeguridadSocial)) || hasServerError('numeroSeguridadSocial')) && formData.numeroSeguridadSocial.length > 0) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('numeroSeguridadSocial') ? getServerErrorText('numeroSeguridadSocial') : 'El NSS debe tener exactamente 11 dígitos'}
                    </p>
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
                        (formData.correo && !validateEmail(formData.correo)) || hasServerError('correo')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="correo@institucional.edu.mx"
                      required
                    />
                  </div>
                  {((formData.correo && !validateEmail(formData.correo)) || hasServerError('correo')) && (
                    <p className="text-red-500 text-xs mt-1">
                      {hasServerError('correo') ? getServerErrorText('correo') : 'Ingresa un correo válido'}
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
                      checked={formData.nivel === "LIC/ING"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-green-600"
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
                      <option key={index} value={carrera}>
                        {carrera}
                      </option>
                    ))}
                  </select>
                </div>
                {((!formData.carrera && isSubmitting) || hasServerError('carrera')) && (
                  <p className="text-red-500 text-xs mt-1">
                    {hasServerError('carrera') ? getServerErrorText('carrera') : 'Selecciona tu carrera'}
                  </p>
                )}
              </div>

              {/* Adjuntar Constancia IMSS */}
              <div className="mb-6">
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                  Adjuntar Constancia de Vigencia de Derechos del IMSS: <span className="text-red-500">*</span>
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
                      hasServerError('constanciaIMSS') || hasServerError('file') || hasServerError('attachment')
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Formatos aceptados: PDF, JPG, JPEG, PNG. Tamaño máximo: 5MB en total. Máximo 5 archivos.
                </p>
                
                {/* Lista de archivos adjuntados */}
                {formData.constanciaIMSS.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-medium text-gray-700">
                      {formData.constanciaIMSS.length} archivo(s) adjuntado(s):
                    </p>
                    {formData.constanciaIMSS.map((file, index) => (
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
                
                {(hasServerError('constanciaIMSS') || hasServerError('file') || hasServerError('attachment')) && (
                  <p className="text-red-500 text-xs mt-1">
                    {getServerErrorText('constanciaIMSS') || getServerErrorText('file') || getServerErrorText('attachment')}
                  </p>
                )}
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-lg">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Nota:</span> Una vez enviada la solicitud, recibirás una confirmación por correo electrónico. 
                  El proceso será completado en un máximo de 72 horas hábiles.
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
