import type { RelojDigital } from '@/types/RelojDigital';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const relojDigitalApi = {
  // Obtener configuración activa del reloj digital
  getActive: async (): Promise<RelojDigital> => {
    const response = await fetch(`${API_BASE_URL}/api/reloj-digital/activo`);
    if (!response.ok) {
      throw new Error('Error al obtener configuración del reloj');
    }
    const data = await response.json();
    return data.data;
  },
};
