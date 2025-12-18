import { fetchAPI } from './apiService';

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';

export interface SectionContent {
    title?: string;
    description?: string | string[];
    imageSrc?: string;
    items?: string[];
    text?: string;
}

export interface NosotrosData {
    vision: SectionContent | null;
    mision: SectionContent | null;
    valores: SectionContent | null;
    politicaIntegral: SectionContent | null;
    objetivoIntegral: SectionContent | null;
    noDiscriminacion: SectionContent | null;
}

export const getImageUrl = (path?: string | null): string => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // Clean leading slash
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // If we are already pointing to uploads (e.g. from other modules)
    if (cleanPath.startsWith('uploads/')) {
        return `${API_BASE_URL}/${cleanPath}`;
    }

    // If the path is already relative to the category folder (e.g. "nosotros/image.jpg")
    if (cleanPath.startsWith('nosotros/')) {
        return `${API_BASE_URL}/uploads/${cleanPath}`;
    }

    // Default fallback
    return `${API_BASE_URL}/uploads/nosotros/${cleanPath}`;
};

export const getNosotrosContent = async (): Promise<NosotrosData> => {
    const data = await fetchAPI<any>('/api/nosotros/content');

    // Normalize response to ensure image URLs are full paths
    const normalize = (section: any) => {
        if (!section) return null;
        const s = { ...section };
        if (s.imageSrc) s.imageSrc = getImageUrl(s.imageSrc);
        return s;
    };

    return {
        vision: normalize(data.vision),
        mision: normalize(data.mision),
        valores: normalize(data.valores),
        politicaIntegral: normalize(data.politicaIntegral),
        objetivoIntegral: normalize(data.objetivoIntegral),
        noDiscriminacion: normalize(data.noDiscriminacion),
    };
};
