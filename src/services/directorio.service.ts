import { envs } from '@/config/envs';

export interface DirectorioItem {
  id: number;
  nombre: string;
  cargo: string;
  email: string;
  telefono: string;
  extension: string;
  area: string;
  orden: number;
}

export const getDirectorio = async (): Promise<DirectorioItem[]> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/directorios`);
    if (!response.ok) throw new Error('Error fetching directorio');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
