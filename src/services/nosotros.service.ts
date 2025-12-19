import { envs } from '@/config/envs';

export interface SectionContent {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

export interface ValoresContent {
  titulo: string;
  lista: string[];
  imagen?: string;
}

export interface NosotrosContent {
  id: number;
  politicaIntegral: SectionContent;
  objetivoIntegral: SectionContent; // Check if this exists in DB, if not, maybe it's hardcoded or part of politica
  vision: SectionContent;
  mision: SectionContent;
  valores: ValoresContent;
  noDiscriminacion: {
    titulo: string;
    descripcion: string;
    columnas: string[][];
  };
  historia?: string; // If available
}

export const getNosotrosContent = async (): Promise<NosotrosContent | null> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/nosotros/content`); // Note: /content might be needed based on controller comment
    if (!response.ok) throw new Error('Error fetching nosotros content');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
