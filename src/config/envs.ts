/**
 * Configuración de variables de entorno para Vite
 * Las variables deben estar prefijadas con VITE_ en el archivo .env
 */

export const envs = {
  // EmailJS Configuration
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',

  // API Backend URL
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    import.meta.env.VITE_BACKENDURL ||
    'http://localhost:3002',
  API_UPLOAD_ENDPOINT: import.meta.env.VITE_API_UPLOAD_ENDPOINT || '/api/upload/single',
};



