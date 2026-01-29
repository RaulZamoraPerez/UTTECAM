const API_URL = import.meta.env.VITE_API_URL || '';

export interface HeroSlide {
  id: number;
  titulo: string;
  tipo: 'imagen' | 'video';
  archivo: string;
  orden: number;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha_evento: string;
  tema?: string;
  color?: string;
  imagen_fondo_url?: string | null;
  texto_boton?: string | null;
  url_boton?: string | null;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  orden: number;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Anuncio {
  id: number;
  titulo: string;
  imagen: string;
  fecha_inicio: string;
  fecha_fin: string;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

// Hero Slides
export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const response = await fetch(`${API_URL}/api/hero-slides`);
  if (!response.ok) throw new Error('Error al obtener hero slides');
  return response.json();
};

export const getHeroSlideFileUrl = (filename: string): string => {
  if (filename.startsWith('http')) return filename;
  if (filename.startsWith('/')) return `${API_URL}${filename}`;
  return `${API_URL}/uploads/hero/${filename}`;
};

// Eventos
export const getEventos = async (): Promise<Evento[]> => {
  const response = await fetch(`${API_URL}/api/eventos`);
  if (!response.ok) throw new Error('Error al obtener eventos');
  return response.json();
};

export const getEventoActivo = async (): Promise<Evento | null> => {
  try {
    const response = await fetch(`${API_URL}/api/eventos`);
    if (!response.ok) return null;
    const eventos: Evento[] = await response.json();
    // Filtrar eventos activos y obtener el primero
    const eventosActivos = eventos.filter(e => e.activo);
    return eventosActivos.length > 0 ? eventosActivos[0] : null;
  } catch (error) {
    console.error('Error al obtener evento activo:', error);
    return null;
  }
};

export const getEventoImageUrl = (filename: string | null | undefined): string | null => {
  if (!filename) return null;
  if (filename.startsWith('http://') || filename.startsWith('https://')) return filename;
  if (filename.startsWith('/')) return `${API_URL}${filename}`;
  return `${API_URL}/uploads/eventos/${filename}`;
};

// Noticias
export const getNoticias = async (): Promise<Noticia[]> => {
  const response = await fetch(`${API_URL}/api/noticias`);
  if (!response.ok) throw new Error('Error al obtener noticias');
  return response.json();
};

export const getNoticiaFileUrl = (filename: string): string => {
  if (filename.startsWith('http')) return filename;
  if (filename.startsWith('/')) return `${API_URL}${filename}`;
  return `${API_URL}/uploads/noticias/${filename}`;
};

// Anuncios
export const getAnuncios = async (): Promise<Anuncio[]> => {
  const response = await fetch(`${API_URL}/api/anuncios`);
  if (!response.ok) throw new Error('Error al obtener anuncios');
  return response.json();
};

export const getAnuncioActivo = async (): Promise<Anuncio | null> => {
  try {
    const response = await fetch(`${API_URL}/api/anuncios`);
    if (!response.ok) return null;
    const anuncios: Anuncio[] = await response.json();
    // Filtrar anuncios activos y obtener el primero
    const anunciosActivos = anuncios.filter(a => a.activo);
    return anunciosActivos.length > 0 ? anunciosActivos[0] : null;
  } catch (error) {
    console.error('Error al obtener anuncio activo:', error);
    return null;
  }
};

export const getAnuncioFileUrl = (filename: string): string => {
  if (filename.startsWith('http')) return filename;
  if (filename.startsWith('/')) return `${API_URL}${filename}`;
  return `${API_URL}/uploads/anuncios/${filename}`;
};

