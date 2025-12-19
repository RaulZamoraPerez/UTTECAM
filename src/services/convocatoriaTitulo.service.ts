/**
 * Servicio para obtener la información de la convocatoria de título profesional
 */

import { envs } from '@/config/envs';

export interface ConvocatoriaTituloInfo {
  id: string;
  titulo: string;
  subtitulo: string;
  nombreSeccionDocumentos: string;
  createdAt: string;
  updatedAt: string;
}

export interface ConvocatoriaTituloResponse {
  success: boolean;
  data: ConvocatoriaTituloInfo | null;
  message?: string;
}

export interface DocumentoConvocatoria {
  id: string;
  titulo: string;
  createdAt: string;
  updatedAt: string;
}

export interface DocumentosConvocatoriaResponse {
  success: boolean;
  data: {
    total: number;
    documentos: DocumentoConvocatoria[];
  } | null;
  message?: string;
}

/**
 * Obtiene la información principal de la convocatoria de título profesional
 */
export async function obtenerConvocatoriaTituloInfo(): Promise<ConvocatoriaTituloResponse> {
  try {
    const url = `${envs.API_BASE_URL}/api/servicios-escolares/convocatoria-titulo/mainInfo`;
    
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
    console.error('Error al obtener información de convocatoria de título:', error);
    return {
      success: false,
      data: null,
      message: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Obtiene la lista de documentos de la convocatoria de título profesional
 */
export async function obtenerDocumentosConvocatoria(): Promise<DocumentosConvocatoriaResponse> {
  try {
    const url = `${envs.API_BASE_URL}/api/servicios-escolares/convocatoria-titulo/documentos`;
    
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
    console.error('Error al obtener documentos de convocatoria:', error);
    return {
      success: false,
      data: null,
      message: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Obtiene la URL para visualizar un documento de convocatoria
 */
export function obtenerUrlDocumentoConvocatoria(id: string): string {
  return `${envs.API_BASE_URL}/api/servicios-escolares/convocatoria-titulo/documentos/${id}/download`;
}

/**
 * Verifica si un documento existe y se puede visualizar
 */
export async function verificarDocumentoConvocatoria(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const url = obtenerUrlDocumentoConvocatoria(id);
    const response = await fetch(url, {
      method: 'HEAD', // Solo verificar headers sin descargar el contenido
    });

    if (!response.ok) {
      // Si hay error, intentar obtener el mensaje de error
      const errorResponse = await fetch(url);
      const errorData = await errorResponse.json();
      return {
        success: false,
        error: errorData.error || 'No se pudo cargar el documento'
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error verificarDocumentoConvocatoria:', error);
    return {
      success: false,
      error: 'Error al verificar el documento'
    };
  }
}
