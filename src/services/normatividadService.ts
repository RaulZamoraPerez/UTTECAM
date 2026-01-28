import { fetchAPI } from './apiService';

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export interface NormatividadDocumento {
    id: string;
    titulo: string;
    archivo: string;
    archivo_name?: string;
}

export interface NormatividadCategoria {
    id: string;
    titulo: string;
    key?: string;
    documentos: NormatividadDocumento[];
}

export const getFileUrl = (path?: string): string => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // Clean leading slash
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // If we are already pointing to uploads
    if (cleanPath.startsWith('uploads/')) {
        return `${API_BASE_URL}/${cleanPath}`;
    }

    // Default to normatividad uploads
    return `${API_BASE_URL}/uploads/normatividad/${cleanPath}`;
};

export const getAllNormatividad = async (): Promise<NormatividadCategoria[]> => {
    const data = await fetchAPI<any[]>('/api/quienes-somos/normatividad');
    // Map and normalize
    return data.map(cat => ({
        id: String(cat.id),
        titulo: cat.titulo,
        key: cat.key,
        documentos: (cat.documentos || []).map((doc: any) => ({
            id: String(doc.id),
            titulo: doc.titulo,
            archivo: getFileUrl(doc.archivo),
            archivo_name: doc.archivo_name || doc.archivoName
        }))
    }));
};
