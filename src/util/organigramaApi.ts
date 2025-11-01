// util/organigramaApi.ts
const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export interface OrganigramaNodeData {
  image: string;
  name: string;
  title: string;
  text?: string;
}

export interface OrganigramaNode {
  key?: string;
  expanded?: boolean;
  type?: string;
  data: OrganigramaNodeData;
  children?: OrganigramaNode[];
}

export interface OrganigramaResponse {
  message: string;
  data: OrganigramaNode[];
}

/**
 * Obtiene el organigrama completo desde el backend
 */
export async function fetchOrganigrama(): Promise<OrganigramaNode[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/organigrama`);
    if (!response.ok) {
      throw new Error('Error al obtener organigrama');
    }
    const result: OrganigramaResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching organigrama:', error);
    return [];
  }
}

/**
 * Construye la URL completa para una imagen de organigrama
 * @param imagePath - Ruta relativa de la imagen
 * @returns URL completa de la imagen
 */
export function getOrganigramaImageUrl(imagePath?: string): string {
  if (!imagePath) {
    return '/Profesores/image.png';
  }
  
  // Si ya es una URL completa, retornarla
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Si viene con /uploads/, construir URL
  if (imagePath.startsWith('/uploads/')) {
    return `${API_BASE_URL}${imagePath}`;
  }
  
  // Si es una ruta relativa de organigrama desde uploads
  if (imagePath.startsWith('organigrama/')) {
    return `${API_BASE_URL}/uploads/${imagePath}`;
  }
  
  // Si es una ruta que apunta a /public (como "Organigrama/Rector.png")
  // mantenemos compatibilidad con imágenes locales
  if (imagePath.startsWith('Organigrama/') || imagePath.startsWith('Profesores/')) {
    return `/${imagePath}`;
  }
  
  // Por defecto, asumir que está en /uploads/organigrama/
  return `${API_BASE_URL}/uploads/organigrama/${imagePath}`;
}
