import { envs } from "../config/envs";

export interface BecaSection {
  id: string;
  title: string;
  type: "header" | "results" | "banner" | "convocatoria" | "avisos" | "footer" | "repository" | "requirements" | "documents" | "links" | "platform" | "infographics";
  data: any;
  active: boolean;
  module: "becas" | "estadia";
}

export const getSectionsByModule = async (module: string): Promise<BecaSection[]> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/becas/sections?module=${module}`);
    if (!response.ok) throw new Error("Error fetching sections");
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${module} sections:`, error);
    return [];
  }
};

export const getImageUrl = (path: string | undefined): string => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${envs.API_BASE_URL}${path}`;
};
