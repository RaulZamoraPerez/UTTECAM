/**
 * Servicio para consumir la API de "Calendarios" del backend UTTECAM.
 */

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';
const CALENDARIO_ENDPOINT = `${API_BASE_URL}/api/calendarios`;

export interface CalendarioType {
  id: number;
  titulo: string;
  descripcion?: string;
  archivo: string;
  fechaSubida: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Convierte una ruta relativa de archivo a URL absoluta apuntando al backend.
 */
export const getCalendarioFileUrl = (filePath: string): string => {
  if (!filePath) return '';
  if (filePath.startsWith('http')) return filePath;
  return `${API_BASE_URL}/uploads/calendarios/${filePath}`;
};

/**
 * Obtiene la lista de calendarios disponibles.
 */
export const getCalendarios = async (): Promise<CalendarioType[]> => {
  try {
    const response = await fetch(CALENDARIO_ENDPOINT, {
      headers: { 'Accept': 'application/json' },
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status} al obtener calendarios.`);
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error in getCalendarios:', error);
    throw error;
  }
};
