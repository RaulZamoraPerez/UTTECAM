const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export interface Feature {
  imageSrc: string;
  title: string;
  description: string | string[];
}

export interface NosotrosContent {
  politicaIntegral: Feature;
  objetivoIntegral: string;
  vision: Feature;
  mision: Feature;
  valores: Feature;
  noDiscriminacion: string[][];
}

/**
 * Construye la URL completa para una imagen
 * @param imagePath - Ruta relativa de la imagen (ej: 'nosotros/vision.jpg')
 * @returns URL completa de la imagen
 */
export function getImageUrl(imagePath: string): string {
  if (!imagePath) return '/images/placeholder.png';

  // Si ya es una URL absoluta, devolverla tal cual
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Si la ruta ya incluye /uploads/, devolverla con el backend
  if (imagePath.startsWith('/uploads/')) {
    return `${API_BASE_URL}${imagePath}`;
  }

  // Si la ruta es relativa (como 'nosotros/vision.jpg'), construir la ruta completa
  if (imagePath.startsWith('nosotros/')) {
    return `${API_BASE_URL}/uploads/${imagePath}`;
  }

  // Para otros casos, intentar con /uploads/
  return `${API_BASE_URL}/uploads/${imagePath}`;
}

export async function fetchNosotrosContent(): Promise<NosotrosContent | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/nosotros/content`);
    if (!response.ok) {
      throw new Error(`Error fetching nosotros content: ${response.status}`);
    }
    const data = await response.json();

    // El backend ahora devuelve los campos ya parseados
    // Solo necesitamos asegurarnos que el formato sea correcto
    const parseIfNeeded = (field: any) => {
      if (typeof field === 'string') {
        try {
          return JSON.parse(field);
        } catch {
          return field;
        }
      }
      return field;
    };

    const politicaIntegral = parseIfNeeded(data.politicaIntegral);
    const vision = parseIfNeeded(data.vision);
    const mision = parseIfNeeded(data.mision);
    const valores = parseIfNeeded(data.valores);

    const nosotrosContent: NosotrosContent = {
      politicaIntegral: {
        ...politicaIntegral,
        imageSrc: getImageUrl(politicaIntegral.imageSrc)
      },
      objetivoIntegral: data.objetivoIntegral,
      vision: {
        ...vision,
        imageSrc: getImageUrl(vision.imageSrc)
      },
      mision: {
        ...mision,
        imageSrc: getImageUrl(mision.imageSrc)
      },
      valores: {
        ...valores,
        imageSrc: getImageUrl(valores.imageSrc)
      },
      noDiscriminacion: parseIfNeeded(data.noDiscriminacion)
    };

    return nosotrosContent;
  } catch (error) {
    console.error('Error fetching nosotros content:', error);
    return null;
  }
}