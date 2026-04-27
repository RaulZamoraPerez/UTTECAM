import { CustomOrgNode } from "@/data/Organigrama.data";

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';
const ORGANIGRAMA_ENDPOINT = `${API_BASE_URL}/api/quienes-somos/organigrama`;

/**
 * Obtiene la estructura jerárquica del organigrama desde el backend.
 */
export const getOrganigrama = async (): Promise<CustomOrgNode[]> => {
  try {
    const response = await fetch(ORGANIGRAMA_ENDPOINT);
    if (!response.ok) throw new Error('Error al obtener el organigrama');
    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching organigrama:', error);
    throw error;
  }
};

/**
 * Genera la URL absoluta para una imagen del organigrama.
 */
export const getOrganigramaImageUrl = (imagePath?: string | null): string | null => {
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  
  if (imagePath.startsWith('/uploads')) {
    return `${API_BASE_URL}${imagePath}`;
  }
  
  return `${API_BASE_URL}/uploads/organigrama/${imagePath}`;
};
