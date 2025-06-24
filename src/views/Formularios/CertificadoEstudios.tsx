import React, { useState, type ChangeEvent, type FormEvent, } from 'react';
import carreras from '@/util/carreras';
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
  FileDigit,
  ArrowRight
} from 'lucide-react';

interface FormData {
  nombre: string;
  matricula: string;
  correo: string;
  telefono: string;
  carrera: string;
  nivel: 'TSU' | 'LIC' | '';
  documentos: string[];
  entrega: 'presencial' | 'electronico' | '';
  referencia: string;
}

type DocumentoOption = 'constancia_estudios' | 'constancia_titulo' | 'kardex' | 'certificado_estudios';

const CertificadoEstudios: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    matricula: '',
    correo: '',
    telefono: '',
    carrera: '',
    nivel: '',
    documentos: [],
    entrega: '',
    referencia: ''
  });

  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      const documentos = [...formData.documentos];
      const documentoValue = target.value as DocumentoOption;
      
      if (target.checked) {
        documentos.push(documentoValue);
      } else {
        const index = documentos.indexOf(documentoValue);
        if (index > -1) {
          documentos.splice(index, 1);
        }
      }
      setFormData({ ...formData, documentos });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Solicitud enviada correctamente');
    setFormData({
      nombre: '',
      matricula: '',
      correo: '',
      telefono: '',
      carrera: '',
      nivel: '',
      documentos: [],
      entrega: '',
      referencia: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50 py-8 px-4">
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
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">20 dias</span>
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
                    Elegir tu carrera y tipo de documento solicitado
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
              <p>Solicitud de Constancia de Estudios o Kardex</p>
            </div>
            
            <div className="p-1 bg-green-700">
              <p className="text-xs text-center text-white py-1">
                Departamento de Servicios Escolares - Universidad Tecnológica de Tecomachalco
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <h3 className="text-lg font-bold text-green-800 mb-6 pb-2 border-b border-green-200 flex items-center">
                <User className="mr-2 text-green-600" size={20} />
                Datos del estudiante
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre:
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
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
                    Matrícula:
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
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Número de matrícula"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo:
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
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="correo@institucional.edu.mx"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Tel. de contacto:
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
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="(000) 000-0000"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">
                  Carrera:
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
                      <option key={index} value={carrera}>{carrera}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Nivel:</span>
                  <div className="flex space-x-4">
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
                        value="LIC"
                        checked={formData.nivel === 'LIC'}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">LIC</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Entrega:</span>
                  <div className="flex space-x-4">
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
                </div>
              </div>
              
              
              <div className="mb-6">
                <label htmlFor="referencia" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Referencia:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileDigit className="text-green-600" size={16} />
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
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-lg mt-10">
                <p className="text-sm text-orange-800">
                  <span className="font-semibold">Nota:</span> Una vez enviada la solicitud deberás presentarte en el departamento de Servicios Escolares, 
                  en la ventanilla de tu Programa Educativo en un lapso no mayor de 5 días hábiles para la entrega de tus fotografías.
                </p>
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
};

export default CertificadoEstudios;