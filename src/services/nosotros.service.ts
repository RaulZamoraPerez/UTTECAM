/**
 * Servicio para consumir la API de "Nosotros" del backend UTTECAM.
 * Solo se usa el endpoint GET /api/nosotros/content (público, sin auth).
 *
 * Estructura real del backend (modelo Sequelize):
 *   vision           → { title, description: string, imageSrc }
 *   mision           → { title, description: string, imageSrc }
 *   valores          → { title, description: string[], imageSrc }
 *   politicaIntegral → { title, description: string, imageSrc }  (text alias)
 *   objetivoIntegral → string  (TEXT en BD)
 *   noDiscriminacion → string[][] (array de 3 columnas)
 */

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';
const NOSOTROS_ENDPOINT = `${API_BASE_URL}/api/nosotros/content`;

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface NosotrosVisionMision {
  title?: string;
  description?: string;
  imageSrc?: string | null;
}

export interface NosotrosValores {
  title?: string;
  description?: string[];
  imageSrc?: string | null;
}

export interface NosotrosPoliticaIntegral {
  title?: string;
  /** El backend puede devolver `description` o `text` dependiendo del endpoint/versión */
  description?: string;
  text?: string;
  imageSrc?: string | null;
}

export interface NosotrosContent {
  vision?: NosotrosVisionMision | null;
  mision?: NosotrosVisionMision | null;
  valores?: NosotrosValores | null;
  /** politicaIntegral: usa campo `description` en el modelo o `text` en el DTO */
  politicaIntegral?: NosotrosPoliticaIntegral | null;
  /** objetivoIntegral es TEXT plano en la BD */
  objetivoIntegral?: string | null;
  /**
   * noDiscriminacion: el backend ahora siempre devuelve { text, items }.
   * Datos viejos (string[][]) son normalizados en el backend antes de salir.
   */
  noDiscriminacion?: { text?: string; items?: string[] } | null;
}

/** Resultado refinado listo para el componente */
export interface NosotrosNormalizado {
  visionTitle: string;
  visionText: string;
  visionImage: string | null;
  misionTitle: string;
  misionText: string;
  misionImage: string | null;
  valoresTitle: string;
  valoresItems: string[];
  valoresImage: string | null;
  politicaText: string;
  politicaImage: string | null;
  objetivoText: string;
  /** Texto descriptivo de la sección (viene del backend si fue guardado) */
  noDiscText: string;
  /** 3 columnas de items de no discriminación (para el grid) */
  noDiscColumns: string[][];
}

// ─── Helper de imágenes ───────────────────────────────────────────────────────

/**
 * Convierte una ruta relativa de imagen a URL absoluta apuntando al backend.
 * Retorna null si no hay ruta válida.
 */
export const getNosotrosImageUrl = (imagePath?: string | null): string | null => {
  if (!imagePath) return null;

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  if (imagePath.startsWith('/uploads/')) {
    return `${API_BASE_URL}${imagePath}`;
  }
  if (imagePath.startsWith('nosotros/')) {
    return `${API_BASE_URL}/uploads/${imagePath}`;
  }
  return `${API_BASE_URL}/${imagePath}`;
};

// ─── Helper: extraer texto de politicaIntegral ───────────────────────────────
const getPoliticaText = (p?: NosotrosPoliticaIntegral | null): string => {
  if (!p) return '';
  // El dashboard envía `text`, el modelo original guarda `description`
  return p.text || p.description || '';
};

// ─── Helper: normalizar noDiscriminacion ─────────────────────────────────────

/**
 * El backend ahora siempre devuelve { text, items } para noDiscriminacion.
 * Convierte items (string[]) en 3 columnas para el layout actual.
 * Si viene string[][] (dato muy viejo antes del fix), también se maneja.
 */
const normalizeNoDiscColumns = (raw: unknown): { text: string; columns: string[][] } => {
  if (!raw) return { text: '', columns: [[], [], []] };

  // Formato nuevo (post-fix): { text, items }
  if (
    typeof raw === 'object' &&
    !Array.isArray(raw) &&
    ('text' in (raw as object) || 'items' in (raw as object))
  ) {
    const r = raw as { text?: string; items?: unknown };
    const text = typeof r.text === 'string' ? r.text : '';
    const flatItems = Array.isArray(r.items)
      ? (r.items as unknown[]).flat().filter((v) => typeof v === 'string') as string[]
      : [];
    const perCol = Math.ceil(flatItems.length / 3);
    const columns: string[][] = perCol === 0
      ? [[], [], []]
      : [
          flatItems.slice(0, perCol),
          flatItems.slice(perCol, perCol * 2),
          flatItems.slice(perCol * 2),
        ];
    return { text, columns };
  }

  // Formato viejo: string[][] (3 columnas ya armadas)
  if (Array.isArray(raw) && raw.length > 0 && Array.isArray(raw[0])) {
    const cols = (raw as unknown[][]).map(
      (col) => Array.isArray(col) ? col.filter((v) => typeof v === 'string') as string[] : []
    );
    return { text: '', columns: cols };
  }

  return { text: '', columns: [[], [], []] };
};

// ─── Función principal ────────────────────────────────────────────────────────

/**
 * Obtiene el contenido de "Nosotros" desde el backend y lo normaliza.
 * GET /api/nosotros/content — no requiere autenticación.
 *
 * @throws Error con mensaje legible si el servidor responde con error HTTP >= 500
 */
export const getNosotrosContent = async (): Promise<NosotrosContent | null> => {
  let response: Response;

  try {
    response = await fetch(NOSOTROS_ENDPOINT, {
      headers: { 'Accept': 'application/json' },
    });
  } catch (networkError) {
    // Error de red (backend caído, CORS, etc.)
    throw new Error('No se pudo conectar al servidor. Verifica que el backend esté activo.');
  }

  // Backend responde null cuando no hay contenido creado aún → manejarlo sin error
  if (response.status === 404 || response.status === 204) {
    return null;
  }

  // Errores del servidor (5xx) son críticos
  if (response.status >= 500) {
    let serverMsg = '';
    try {
      const body = await response.json();
      serverMsg = body?.message || body?.error || '';
    } catch { /* ignorar si no es JSON */ }
    throw new Error(
      `Error del servidor (${response.status})${serverMsg ? ': ' + serverMsg : '.'}`
    );
  }

  // Otros errores 4xx que no sean 404
  if (!response.ok) {
    throw new Error(`Error ${response.status} al obtener contenido de Nosotros.`);
  }

  let data: any;
  try {
    data = await response.json();
  } catch {
    throw new Error('La respuesta del servidor no es JSON válido.');
  }

  // El backend retorna null cuando no hay contenido
  if (data === null || data === undefined) {
    return null;
  }

  return {
    vision: data.vision ?? null,
    mision: data.mision ?? null,
    valores: data.valores ?? null,
    politicaIntegral: data.politicaIntegral ?? null,
    objetivoIntegral:
      typeof data.objetivoIntegral === 'string'
        ? data.objetivoIntegral
        : typeof data.objetivoIntegral === 'object' && data.objetivoIntegral?.text
          ? data.objetivoIntegral.text
          : null,
    noDiscriminacion: normalizeNoDiscColumns(data.noDiscriminacion),
  };
};

// ─── Utilidades de normalización para el componente ──────────────────────────

/**
 * Devuelve los datos del backend ya combinados con los fallbacks estáticos.
 * El componente solo llama a esta función — nunca tiene que manejar nulls.
 */
export const resolveNosotrosData = (
  content: NosotrosContent | null,
  fallbacks: {
    vision: string;
    mision: string;
    valores: string[];
    politica: string;
    objetivo: string;
    noDiscTexto: string;
    noDiscColumns: string[][];
  }
): NosotrosNormalizado => {
  const safeStr = (v?: string | null, fb = '') =>
    typeof v === 'string' && v.trim() !== '' ? v : fb;

  const safeArr = (v?: string[] | null, fb: string[] = []): string[] =>
    Array.isArray(v) && v.length > 0 ? v : fb;

  const safeCols = (v?: string[][] | null, fb: string[][] = [[], [], []]): string[][] => {
    if (!Array.isArray(v) || v.every((c) => !Array.isArray(c) || c.length === 0)) return fb;
    return v;
  };

  // Normalizar noDiscriminacion al formato unificado
  const noDiscNorm = normalizeNoDiscColumns(content?.noDiscriminacion);

  return {
    visionTitle: safeStr(content?.vision?.title, 'Visión'),
    visionText: safeStr(content?.vision?.description, fallbacks.vision),
    visionImage: getNosotrosImageUrl(content?.vision?.imageSrc),

    misionTitle: safeStr(content?.mision?.title, 'Misión'),
    misionText: safeStr(content?.mision?.description, fallbacks.mision),
    misionImage: getNosotrosImageUrl(content?.mision?.imageSrc),

    valoresTitle: safeStr(content?.valores?.title, 'Valores'),
    valoresItems: safeArr(content?.valores?.description, fallbacks.valores),
    valoresImage: getNosotrosImageUrl(content?.valores?.imageSrc),

    politicaText: safeStr(getPoliticaText(content?.politicaIntegral), fallbacks.politica),
    politicaImage: getNosotrosImageUrl(content?.politicaIntegral?.imageSrc),

    objetivoText: safeStr(content?.objetivoIntegral, fallbacks.objetivo),

    // noDiscText: texto descriptivo dinámico, con fallback estático si está vacío
    noDiscText: safeStr(noDiscNorm.text, fallbacks.noDiscTexto),
    noDiscColumns: safeCols(noDiscNorm.columns, fallbacks.noDiscColumns),
  };
};
