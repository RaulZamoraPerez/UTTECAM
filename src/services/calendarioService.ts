import { fetchAPI } from './apiService';
import type { Calendario } from '../types/calendario';

// Use explicit URL to allow standalone consumption (not relying on proxy)
const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';

export const getFileUrl = (filePath?: string): string => {
    if (!filePath) {
        return '';
    }
    if (filePath.startsWith('http')) {
        return filePath;
    }

    // Clean up leading slash if present
    const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;

    // Si ya viene con la ruta de uploads
    if (cleanPath.startsWith('uploads/')) {
        return `${API_BASE_URL}/${cleanPath}`;
    }

    if (cleanPath.startsWith('calendario/')) {
        return `${API_BASE_URL}/uploads/${cleanPath.replace('calendario/', 'calendarios/')}`;
    }
    if (cleanPath.startsWith('calendarios/')) {
        return `${API_BASE_URL}/uploads/${cleanPath}`;
    }
    return `${API_BASE_URL}/uploads/calendarios/${cleanPath}`;
};

export const getAllCalendarios = async (): Promise<Calendario[]> => {
    const response = await fetchAPI<{ data: Calendario[] }>('/api/calendarios');
    return response.data;
};

export const getLatestCalendario = async (): Promise<Calendario | null> => {
    const calendarios = await getAllCalendarios();
    if (calendarios && calendarios.length > 0) {
        // Sort by id descending (assuming higher id is newer) or fechaSubida
        return calendarios.sort((a, b) => new Date(b.fechaSubida).getTime() - new Date(a.fechaSubida).getTime())[0];
    }
    return null;
};
