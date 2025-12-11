import { envs } from "@/config/envs";

interface OpcionesReinscripcionInfo {
  id: string;
  titulo: string;
  subtitulo: string | null;
  createdAt: string;
  updatedAt: string;
}

interface OpcionesReinscripcionResponse {
  success: boolean;
  data?: {
    titulo: string;
    subtitulo: string | null;
  };
}

export interface OpcionReinscripcionCard {
  id: string;
  titulo: string;
  subtitulo: string;
  archivoPath: string;
  archivoUrl: string;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

interface OpcionesReinscripcionCardsResponse {
  success: boolean;
  data?: OpcionReinscripcionCard[];
}

export const obtenerOpcionesReinscripcionInfo = async (): Promise<OpcionesReinscripcionResponse> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/opciones-reinscripcion/seccion`);
    
    if (!response.ok) {
      return { success: false };
    }

    const data: OpcionesReinscripcionInfo = await response.json();
    
    return {
      success: true,
      data: {
        titulo: data.titulo,
        subtitulo: data.subtitulo
      }
    };
  } catch (error) {
    console.error('Error al obtener información de opciones de reinscripción:', error);
    return { success: false };
  }
};

export const obtenerOpcionesReinscripcionCards = async (): Promise<OpcionesReinscripcionCardsResponse> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/opciones-reinscripcion/?activas=true`);
    
    if (!response.ok) {
      return { success: false };
    }

    const data: OpcionReinscripcionCard[] = await response.json();
    
    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('Error al obtener opciones de reinscripción:', error);
    return { success: false };
  }
};
