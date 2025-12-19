import emailjs from '@emailjs/browser';

// Inicializar EmailJS con la clave pública
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Función para enviar formulario con React
export async function enviarFormularioReact(
  servicioID: string,
  plantillaID: string,
  formData: Record<string, unknown>
): Promise<string> {
  try {
    
    // EmailJS espera un objeto de pares clave/valor de strings
    const payload: Record<string, string> = Object.fromEntries(
      Object.entries(formData).map(([k, v]) => [k, String(v)])
    );

    const response = await emailjs.send(servicioID, plantillaID, payload);
    console.log('Email enviado exitosamente:', response);
    return '¡Formulario enviado correctamente!';
  } catch (error: unknown) {
    console.error('Error detallado:', error);
    throw new Error('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
  }
}
