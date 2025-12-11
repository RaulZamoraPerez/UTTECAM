const API_URL = import.meta.env.VITE_API_URL || '';

export interface PortalEstudiantesConfig {
  id?: number;
  titulo: string;
  subtitulo: string;
  badgeTexto: string;
  parrafo1: string;
  parrafo2: string;
  parrafo3: string;
  imagenUrl: string;
  enlaceBoton: string;
  textoBoton: string;
  activo?: boolean;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}

/**
 * Obtiene la configuración del portal estudiantes
 */
export const getPortalEstudiantesConfig = async (): Promise<PortalEstudiantesConfig> => {
  const response = await fetch(`${API_URL}/api/portal-estudiantes`);
  if (!response.ok) {
    throw new Error('Error al obtener configuración del portal');
  }
  return response.json();
};

/**
 * Convierte una ruta relativa de imagen a URL completa
 */
export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  if (imagePath.startsWith('/')) {
    return `${API_URL}${imagePath}`;
  }

  // Si es solo el nombre del archivo
  return `${API_URL}/uploads/nosotros/${imagePath}`;
};
