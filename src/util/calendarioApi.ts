// util/calendarioApi.ts
const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export interface CalendarioItem {
  id: number;
  titulo: string;
  descripcion?: string;
  archivo: string;
  fechaSubida: string;
  createdAt: string;
  updatedAt: string;
}

export interface CalendarioResponse {
  message: string;
  data: CalendarioItem[];
}

/**
 * Obtiene todos los calendarios desde el backend
 */
export async function fetchCalendarios(): Promise<CalendarioItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/calendario`);
    if (!response.ok) {
      throw new Error('Error al obtener calendarios');
    }
    const result: CalendarioResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching calendarios:', error);
    return [];
  }
}

/**
 * Construye la URL completa para un archivo de calendario
 * @param filePath - Ruta relativa del archivo
 * @returns URL completa del archivo
 */
export function getCalendarioFileUrl(filePath: string): string {
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return filePath;
  }
  return `${API_BASE_URL}/uploads/calendarios/${filePath}`;
}