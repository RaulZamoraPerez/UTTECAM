// util/directorioApi.ts
const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export interface DirectorioItem {
  id: number;
  titulo: string;
  nombre: string;
  telefono?: string;
  extension?: string;
  correo?: string;
  imagen?: string;
}

export interface DirectorioResponse {
  message: string;
  data: DirectorioItem[];
}

/**
 * Obtiene todos los directorios desde el backend
 */
export async function fetchDirectorios(): Promise<DirectorioItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/directorios`);
    if (!response.ok) {
      throw new Error('Error al obtener directorios');
    }
    const result: DirectorioResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching directorios:', error);
    return [];
  }
}

/**
 * Construye la URL completa para una imagen de directorio
 * @param imagePath - Ruta relativa de la imagen
 * @returns URL completa de la imagen
 */
export function getDirectorioImageUrl(imagePath?: string): string {
  if (!imagePath) {
    return '/images/default-avatar.png';
  }
  
  // Si ya es una URL completa, retornarla
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Si viene con /uploads/, construir URL
  if (imagePath.startsWith('/uploads/')) {
    return `${API_BASE_URL}${imagePath}`;
  }
  
  // Si es una ruta relativa incluyendo el subdirectorio
  if (imagePath.startsWith('directorio/')) {
    // Normalizar a la carpeta correcta en el backend (plural)
    return `${API_BASE_URL}/uploads/${imagePath.replace('directorio/', 'directorios/')}`;
  }
  if (imagePath.startsWith('directorios/')) {
    return `${API_BASE_URL}/uploads/${imagePath}`;
  }
  
  // Por defecto, el backend guarda solo el nombre de archivo en uploads/directorios
  return `${API_BASE_URL}/uploads/directorios/${imagePath}`;
}
