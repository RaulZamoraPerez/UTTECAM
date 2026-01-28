/**
 * Utilidad para enviar formularios a la API
 * Maneja FormData, archivos, validaciones y errores del backend
 */

import React from 'react';
import { envs } from '../config/envs';

export interface FormularioData {
  // Identificador del formulario
  'titulo-formulario'?: string;

  // Campos obligatorios (comunes a todos los formularios)
  nombre: string;
  matricula: string;
  email: string;
  telefono: string;
  carrera: string;

  // Campos opcionales (específicos por formulario)
  nivel?: 'TSU' | 'LIC' | 'LIC/ING';
  entrega?: 'presencial' | 'electronico';
  referencia?: string;
  numeroReferencia?: string;
  'numero-seguro'?: string;
  tramite?: string;
  'documentos-solicitados'?: string;
  comentarios?: string;
  // Archivo(s) adjunto(s) opcional(es)
  attachment?: File | File[] | null;
}

export interface ApiError {
  path?: string;
  msg?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  msg?: string;
  errors?: ApiError[];
  error?: string;
}

export interface ErroresAgrupados {
  [campo: string]: string[];
}

/**
 * Configuración para el envío del formulario
 */
export interface ConfigFormulario {
  endpoint?: string; // Default: '/api/upload/single'
  timeout?: number;  // Default: 20000ms (20s)
  baseURL?: string;  // Default: 'http://localhost:3002'
}

/**
 * Resultado del envío del formulario
 */
export interface ResultadoEnvio {
  exito: boolean;
  mensaje: string;
  erroresPorCampo?: ErroresAgrupados;
  respuestaCompleta?: unknown;
}

/**
 * Construye un FormData a partir de los datos del formulario
 */
function construirFormData(datos: FormularioData): FormData {
  const formData = new FormData();

  // Agregar todos los campos (excepto attachment que se maneja aparte)
  Object.entries(datos).forEach(([key, value]) => {
    if (key === 'attachment') return; // Se maneja después

    if (value !== null && value !== undefined && value !== '') {
      formData.append(key, String(value));
    }
  });

  // Agregar archivo(s) si existe(n)
  if (datos.attachment) {
    // Si es un array de archivos (múltiples)
    if (Array.isArray(datos.attachment)) {
      datos.attachment.forEach((file) => {
        if (file instanceof File) {
          formData.append('attachment', file, file.name);
        }
      });
    }
    // Si es un archivo único
    else if (datos.attachment instanceof File) {
      formData.append('attachment', datos.attachment, datos.attachment.name);
    }
  }

  return formData;
}

/**
 * Agrupa los errores del backend por campo
 */
function agruparErrores(errores: ApiError[]): ErroresAgrupados {
  const agrupados: ErroresAgrupados = {};

  for (const error of errores) {
    const campo = error.path || 'general';
    const mensaje = error.msg || 'Dato inválido';

    if (!agrupados[campo]) {
      agrupados[campo] = [];
    }

    agrupados[campo].push(mensaje);
  }

  return agrupados;
}

/**
 * Extrae el mensaje de error de la respuesta de la API
 */
function extraerMensajeError(payload: unknown, statusCode: number): string {
  if (typeof payload === 'string' && payload) {
    return payload;
  }

  if (payload && typeof payload === 'object') {
    const p = payload as Record<string, unknown>;
    if (typeof p.message === 'string') return p.message;
    if (typeof p.error === 'string') return p.error;
    if (typeof p.msg === 'string') return p.msg;
  }

  return `Error ${statusCode}: No se pudo procesar la solicitud`;
}

/**
 * Extrae el mensaje de éxito de la respuesta de la API
 */
function extraerMensajeExito(payload: unknown): string {
  if (payload && typeof payload === 'object') {
    const p = payload as Record<string, unknown>;
    if (typeof p.message === 'string') return p.message;
    if (typeof p.msg === 'string') return p.msg;
  }

  if (typeof payload === 'string' && payload) {
    return payload;
  }

  return 'Solicitud registrada correctamente';
}

/**
 * Envía un formulario a la API usando Fetch
 * 
 * @param datos - Datos del formulario (campos + archivo opcional)
 * @param config - Configuración opcional (endpoint, timeout, baseURL)
 * @returns Resultado del envío con mensaje y errores si los hay
 * 
 * @example
 * ```typescript
 * const resultado = await enviarFormulario({
 *   nombre: 'Juan Pérez',
 *   matricula: '22307090',
 *   email: 'juan@example.com',
 *   telefono: '2382762196',
 *   carrera: 'Tecnologías de la Información',
 *   nivel: 'TSU',
 *   entrega: 'presencial',
 *   referencia: '12345678901234567890',
 * });
 * 
 * if (resultado.exito) {
 *   console.log(resultado.mensaje);
 * } else {
 *   console.error(resultado.erroresPorCampo);
 * }
 * ```
 */
export async function enviarFormulario(
  datos: FormularioData,
  config: ConfigFormulario = {}
): Promise<ResultadoEnvio> {
  const {
    endpoint = envs.API_UPLOAD_ENDPOINT,
    timeout = 20000,
    baseURL = envs.API_BASE_URL
  } = config;

  const url = `${baseURL}${endpoint}`;

  try {
    // Construir FormData
    const formData = construirFormData(datos);

    // Configurar timeout con AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // Realizar petición
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
      headers: {
        Accept: 'application/json'
      }
    });

    clearTimeout(timeoutId);

    // Parsear respuesta
    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json')
      ? await response.json().catch(() => ({}))
      : await response.text().catch(() => '');

    // Manejar errores HTTP
    if (!response.ok) {
      // Errores de validación del backend
      if (payload && Array.isArray(payload.errors)) {
        const erroresAgrupados = agruparErrores(payload.errors);

        return {
          exito: false,
          mensaje: 'Errores de validación. Revisa los campos marcados.',
          erroresPorCampo: erroresAgrupados,
          respuestaCompleta: payload
        };
      }

      // Otros errores HTTP
      const mensajeError = extraerMensajeError(payload, response.status);

      return {
        exito: false,
        mensaje: mensajeError,
        respuestaCompleta: payload
      };
    }

    // Éxito
    const mensajeExito = extraerMensajeExito(payload);

    return {
      exito: true,
      mensaje: mensajeExito,
      respuestaCompleta: payload
    };

  } catch (error: unknown) {
    // Error de red o timeout
    if (typeof error === 'object' && error !== null && 'name' in error && (error as Record<string, unknown>).name === 'AbortError') {
      return {
        exito: false,
        mensaje: `La solicitud excedió el tiempo de espera (${timeout / 1000}s). Por favor, inténtalo de nuevo.`
      };
    }

    return {
      exito: false,
      mensaje: 'Error de conexión. Verifica tu conexión a internet e inténtalo de nuevo.'
    };
  }
}

/**
 * Hook de React para manejar el estado de errores del servidor
 * Útil para mostrar errores en los campos del formulario
 */
export function useServerErrors() {
  const [serverErrors, setServerErrors] = React.useState<ErroresAgrupados>({});

  const hasError = (campo: string): boolean => {
    return Boolean(serverErrors[campo]?.length);
  };

  const getErrorText = (campo: string): string => {
    return serverErrors[campo]?.join(' ') || '';
  };

  const clearError = (campo: string) => {
    setServerErrors(prev => {
      if (!(campo in prev)) return prev;
      const copy = { ...prev };
      delete copy[campo];
      return copy;
    });
  };

  const clearAllErrors = () => {
    setServerErrors({});
  };

  return {
    serverErrors,
    setServerErrors,
    hasError,
    getErrorText,
    clearError,
    clearAllErrors
  };
}
