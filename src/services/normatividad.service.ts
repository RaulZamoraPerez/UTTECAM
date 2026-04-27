/**
 * Servicio para consumir la API de Normatividad del backend UTTECAM.
 * Permite obtener las categorías y documentos públicos.
 */

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';
const NORMATIVIDAD_ENDPOINT = `${API_BASE_URL}/api/quienes-somos/normatividad`;

export interface NormatividadDocumento {
  id: number;
  titulo: string;
  archivo: string;
  archivo_name?: string;
  archivoname?: string;
}

export interface NormatividadCategoria {
  id: number;
  titulo: string;
  key?: string;
  documentos: NormatividadDocumento[];
}

/**
 * Obtiene todas las categorías de normatividad con sus documentos.
 */
export const getNormatividad = async (): Promise<NormatividadCategoria[]> => {
  try {
    const response = await fetch(NORMATIVIDAD_ENDPOINT, {
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo obtener la normatividad.`);
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error en getNormatividad:', error);
    return [];
  }
};

/**
 * Helper para construir la URL del archivo PDF.
 */
export const getNormatividadFileUrl = (archivo?: string | null): string => {
  if (!archivo) return '';
  if (archivo.startsWith('http')) return archivo;
  
  if (archivo.startsWith('/uploads')) {
    return `${API_BASE_URL}${archivo}`;
  }
  
  // Si solo viene el nombre del archivo, asumimos la ruta estándar del backend
  return `${API_BASE_URL}/uploads/normatividad/${archivo}`;
};
