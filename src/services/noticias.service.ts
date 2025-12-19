import { envs } from '@/config/envs';

export interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  contenido: string;
  imagenUrl: string;
  fechaPublicacion: string;
  slug: string;
  activo: boolean;
}

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  lugar: string;
  imagenUrl: string;
  activo: boolean;
}

export const getNoticias = async (): Promise<Noticia[]> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/noticias`);
    if (!response.ok) throw new Error('Error fetching noticias');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEventos = async (): Promise<Evento[]> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/eventos`);
    if (!response.ok) throw new Error('Error fetching eventos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
