import emailjs from '@emailjs/browser';

// Inicializar EmailJS con la clave pública
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Función para enviar formulario con React
export async function enviarFormularioReact(
  servicioID: string,
  plantillaID: string,
  formData: Record<string, any>
): Promise<string> {
  try {
    
    const response = await emailjs.send(servicioID, plantillaID, formData);
    console.log('Email enviado exitosamente:', response);
    return '¡Formulario enviado correctamente!';
  } catch (error) {
    console.error('Error detallado:', error);
    throw new Error('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
  }
}
