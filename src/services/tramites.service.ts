/**
 * Servicio para obtener la información de la sección de trámites
 */

import { envs } from '../config/envs';

export interface TramitesInfo {
  id: string;
  titulo: string;
  subtitulo: string;
  createdAt: string;
}

export interface TramitesResponse {
  success: boolean;
  data: TramitesInfo | null;
  message?: string;
}

/**
 * Obtiene el título y subtítulo de la sección de trámites
 */
export async function obtenerTramitesInfo(): Promise<TramitesResponse> {
  try {
    const url = `${envs.API_BASE_URL}/api/servicios-escolares/tramites`;
    
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
      data: data,
    };
  } catch (error) {
    console.error('Error al obtener información de trámites:', error);
    return {
      success: false,
      data: null,
      message: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}
