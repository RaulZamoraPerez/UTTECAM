import { envs } from '@/config/envs';

export interface HeroSlide {
  id: number;
  titulo: string;
  descripcion?: string;
  imagenUrl: string; // Or whatever the backend returns
  videoUrl?: string;
  tipo: 'IMAGEN' | 'VIDEO';
  orden: number;
  activo: boolean;
}

export interface VideoInstitucional {
  id: number;
  titulo: string;
  url: string;
  activo: boolean;
}

export interface RelojDigital {
  id: number;
  fechaFin: string;
  titulo: string;
  activo: boolean;
}

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/hero-slides`);
    if (!response.ok) throw new Error('Error fetching hero slides');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getVideoInstitucional = async (): Promise<VideoInstitucional | null> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/video-institucional`);
    if (!response.ok) throw new Error('Error fetching video institucional');
    const data = await response.json();
    // Assuming the API returns an array or a single object. 
    // If array, take the first active one.
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRelojDigital = async (): Promise<RelojDigital | null> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/reloj-digital`);
    if (!response.ok) throw new Error('Error fetching reloj digital');
    const data = await response.json();
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
