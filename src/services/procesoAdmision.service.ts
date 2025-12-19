/**
 * Servicio para obtener información del proceso de admisión
 */

import { envs } from '../config/envs';

export interface ArchivoProcesoAdmision {
  nombre: string;
  mimeType: string;
  base64: string;
}

export interface ProcesoAdmisionResponse {
  id: string;
  titulo: string;
  subtitulo: string;
  archivo: ArchivoProcesoAdmision;
}

export interface ProcesoAdmisionError {
  error: string;
}

export interface ResultadoProcesoAdmision {
  exito: boolean;
  datos?: ProcesoAdmisionResponse;
  error?: string;
  sinRegistro?: boolean; // Indica que no hay convocatoria disponible
}

/**
 * Obtiene la información del proceso de admisión desde la API
 * @returns Resultado con los datos o mensaje de error
 */
export async function obtenerProcesoAdmision(): Promise<ResultadoProcesoAdmision> {
  const url = `${envs.API_BASE_URL}/api/servicios-escolares/proceso-admision`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const data = await response.json();

    // Verificar si no se encontró ningún registro (404 o mensaje específico)
    if (response.status === 404 || data.error?.toLowerCase().includes('no se encontró')) {
      return {
        exito: false,
        sinRegistro: true,
        error: data.error || 'No se encontró ningún registro de proceso de admisión.',
      };
    }

    // Verificar si la respuesta contiene otro tipo de error
    if (!response.ok || data.error) {
      return {
        exito: false,
        error: data.error || `Error ${response.status}: No se pudo obtener la información`,
      };
    }

    // Validar que la respuesta tenga la estructura esperada
    if (!data.id || !data.titulo || !data.archivo) {
      return {
        exito: false,
        error: 'La respuesta del servidor no tiene el formato esperado',
      };
    }

    return {
      exito: true,
      datos: data as ProcesoAdmisionResponse,
    };

  } catch (error: unknown) {
    // Error de red o parsing
    if (error instanceof Error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return {
          exito: false,
          error: 'Error de conexión. Verifica tu conexión a internet e inténtalo de nuevo.',
        };
      }
    }

    return {
      exito: false,
      error: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
    };
  }
}
