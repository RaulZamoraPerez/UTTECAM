/**
 * Servicio para obtener las carreras
 */

import { envs } from '@/config/envs';

export interface Carrera {
  id: string;
  nombre: string;
  tipo: 'TSU' | 'INGENIERIA';
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CarrerasResponse {
  success: boolean;
  data: Carrera[];
  message?: string;
}

/**
 * Obtiene la lista de carreras activas
 */
export async function obtenerCarreras(): Promise<CarrerasResponse> {
  try {
    const url = `${envs.API_BASE_URL}/api/carreras-simples?activas=true`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: Array.isArray(data) ? data : [],
    };
  } catch (error) {
    console.error('Error al obtener carreras:', error);
    return {
      success: false,
      data: [],
      message: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Filtra carreras por tipo
 */
export function filtrarCarrerasPorTipo(carreras: Carrera[], tipo: 'TSU' | 'INGENIERIA'): Carrera[] {
  return carreras.filter(carrera => carrera.tipo === tipo);
}
