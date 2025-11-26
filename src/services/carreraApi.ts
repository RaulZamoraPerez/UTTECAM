const API_URL = import.meta.env.VITE_API_URL || '';

export interface Carrera {
  id: number;
  nombre: string;
  siglas: string;
  nivel: 'TSU' | 'Ingenieria' | 'Licenciatura';
  duracion: string;
  objetivo: string;
  perfil_ingreso: string;
  perfil_egreso: string;
  campo_laboral: string;
  imagen: string;
  imagen_portada?: string;
  video_url?: string;
  plan_estudios_url?: string;
  mapa_curricular?: any;
  competencias?: string;
  atributos_egreso?: string;
  objetivos_educacionales?: string;
  orden: number;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

// GET - Obtener todas las carreras activas
export const getCarreras = async (): Promise<Carrera[]> => {
  const response = await fetch(`${API_URL}/api/carreras`);
  if (!response.ok) throw new Error('Error al obtener carreras');
  return response.json();
};

// GET - Obtener carreras por nivel
export const getCarrerasByNivel = async (nivel: 'TSU' | 'Ingenieria' | 'Licenciatura'): Promise<Carrera[]> => {
  const response = await fetch(`${API_URL}/api/carreras/nivel/${nivel}`);
  if (!response.ok) throw new Error('Error al obtener carreras por nivel');
  return response.json();
};

// GET - Obtener una carrera por ID
export const getCarreraById = async (id: number): Promise<Carrera> => {
  const response = await fetch(`${API_URL}/api/carreras/${id}`);
  if (!response.ok) throw new Error('Error al obtener carrera');
  return response.json();
};

// Helper para obtener URL de imagen
// El backend guarda: imagen='caratulas/{filename}' o imagen_portada='portadas/{filename}'
// La ruta completa es: /uploads/carreras/caratulas/ o /uploads/carreras/portadas/
export const getCarreraImageUrl = (filename: string): string => {
  if (!filename) return '/placeholder-carrera.jpg';
  // Si ya es una URL absoluta
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename;
  }
  // El backend guarda rutas relativas como 'caratulas/{file}' o 'portadas/{file}'
  // Construir la ruta completa
  return `${API_URL}/uploads/carreras/${filename}`;
};

// Helper para obtener URL de plan de estudios
// El backend guarda: plan_estudios_url='{filename}' (solo el nombre del archivo)
// La ruta completa es: /uploads/carreras/planes/{filename}
export const getCarreraPlanUrl = (filename: string): string => {
  if (!filename) return '';
  if (filename.startsWith('http://') || filename.startsWith('https://')) return filename;
  // El backend guarda solo el nombre del archivo, construir ruta completa
  return `${API_URL}/uploads/carreras/planes/${filename}`;
};

// Helper para obtener URL de video
// El backend guarda: video_url='{filename}' (solo el nombre del archivo)
// La ruta completa es: /uploads/carreras/videos/{filename}
export const getCarreraVideoUrl = (filename: string): string => {
  if (!filename) return '';
  if (filename.startsWith('http://') || filename.startsWith('https://')) return filename;
  // El backend guarda solo el nombre del archivo, construir ruta completa
  return `${API_URL}/uploads/carreras/videos/${filename}`;
};
