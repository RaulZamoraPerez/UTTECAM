import { envs } from '@/config/envs';

export interface Calendario {
  id: number;
  titulo: string;
  archivoUrl: string; // PDF URL
  cicloEscolar: string;
  activo: boolean;
}

export const getCalendario = async (): Promise<Calendario | null> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/calendarios`);
    if (!response.ok) throw new Error('Error fetching calendario');
    const data = await response.json();
    // Assuming it returns the active calendar or a list
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
