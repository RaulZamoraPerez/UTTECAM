/**
 * Servicio para obtener la configuración dinámica de los formularios
 * Obtiene título, subtítulo, descripción, requisitos, pasos, documentos, tiempo y costo
 */

import { envs } from '../config/envs';

// Tipos para la información principal del formulario
export interface InfoFormulario {
  titulo: string;
  subtitulo: string;
  descripcion?: string;
  tiempoEntrega: string;
  costo?: string;
}

// Tipo para el resultado de la petición
export interface ResultadoConfiguracion<T> {
  exito: boolean;
  datos?: T;
  error?: string;
  sinRegistro?: boolean;
}

// Tipo completo de configuración del formulario
export interface ConfiguracionFormulario {
  info: InfoFormulario;
  requisitos: string[];
  pasos: string[];
  documentos: string[];
}

/**
 * Obtiene la información principal del formulario
 */
async function obtenerInfo(tipo: string): Promise<ResultadoConfiguracion<InfoFormulario>> {
  const url = `${envs.API_BASE_URL}/api/formularios-config/${tipo}/info`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    const data = await response.json();

    if (response.status === 404 || data.error?.toLowerCase().includes('no se encontró')) {
      return { exito: false, sinRegistro: true, error: data.error };
    }

    if (!response.ok || data.error) {
      return { exito: false, error: data.error || `Error ${response.status}` };
    }

    return { exito: true, datos: data };
  } catch (error) {
    console.error('Error obtenerInfo:', error);
    return { exito: false, error: 'Error de conexión al obtener información.' };
  }
}

/**
 * Obtiene la lista de requisitos del formulario
 */
async function obtenerRequisitos(tipo: string): Promise<ResultadoConfiguracion<string[]>> {
  const url = `${envs.API_BASE_URL}/api/formularios-config/${tipo}/requisitos`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      return { exito: false, error: data.error || `Error ${response.status}` };
    }

    // La API puede devolver un array directamente o un objeto con items
    const items = Array.isArray(data) ? data : (data.items || []);
    return { exito: true, datos: items };
  } catch (error) {
    console.error('Error obtenerRequisitos:', error);
    return { exito: false, error: 'Error de conexión al obtener requisitos.' };
  }
}

/**
 * Obtiene la lista de pasos del formulario
 */
async function obtenerPasos(tipo: string): Promise<ResultadoConfiguracion<string[]>> {
  const url = `${envs.API_BASE_URL}/api/formularios-config/${tipo}/pasos`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      return { exito: false, error: data.error || `Error ${response.status}` };
    }

    const items = Array.isArray(data) ? data : (data.items || []);
    return { exito: true, datos: items };
  } catch (error) {
    console.error('Error obtenerPasos:', error);
    return { exito: false, error: 'Error de conexión al obtener pasos.' };
  }
}

/**
 * Obtiene la lista de documentos del formulario
 */
async function obtenerDocumentos(tipo: string): Promise<ResultadoConfiguracion<string[]>> {
  const url = `${envs.API_BASE_URL}/api/formularios-config/${tipo}/documentos`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      return { exito: false, error: data.error || `Error ${response.status}` };
    }

    const items = Array.isArray(data) ? data : (data.items || []);
    return { exito: true, datos: items };
  } catch (error) {
    console.error('Error obtenerDocumentos:', error);
    return { exito: false, error: 'Error de conexión al obtener documentos.' };
  }
}

/**
 * Obtiene toda la configuración del formulario en una sola llamada
 * Realiza las 4 peticiones en paralelo para mejor rendimiento
 */
export async function obtenerConfiguracionFormulario(
  tipo: string
): Promise<ResultadoConfiguracion<ConfiguracionFormulario>> {
  try {
    // Realizar todas las peticiones en paralelo
    const [infoResult, requisitosResult, pasosResult, documentosResult] = await Promise.all([
      obtenerInfo(tipo),
      obtenerRequisitos(tipo),
      obtenerPasos(tipo),
      obtenerDocumentos(tipo),
    ]);

    // Verificar si la info principal existe (es obligatoria)
    if (!infoResult.exito || !infoResult.datos) {
      return {
        exito: false,
        sinRegistro: infoResult.sinRegistro,
        error: infoResult.error || 'No se pudo obtener la información del trámite.',
      };
    }

    // Construir el objeto de configuración
    const configuracion: ConfiguracionFormulario = {
      info: infoResult.datos,
      requisitos: requisitosResult.datos || [],
      pasos: pasosResult.datos || [],
      documentos: documentosResult.datos || [],
    };

    return {
      exito: true,
      datos: configuracion,
    };
  } catch (error) {
    console.error('Error obtenerConfiguracionFormulario:', error);
    return {
      exito: false,
      error: 'Ocurrió un error inesperado al cargar la configuración del formulario.',
    };
  }
}

// Exportar funciones individuales por si se necesitan
export {
  obtenerInfo,
  obtenerRequisitos,
  obtenerPasos,
  obtenerDocumentos,
};
