import { fetchAPI } from './apiService';
import type { Directorio } from '../types/directorio';


// Use explicit URL to allow standalone consumption (not relying on proxy)
const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export const getImageUrl = (imagePath?: string): string => {
    if (!imagePath) {
        // Return a local default image or placeholder if you have one, 
        // or return undefined if the component handles fallbacks.
        // Assuming UTTECAM has a default avatar or we can use a placeholder service.
        // For now, let's keep it similar to the reference.
        return '/assets/images/default-avatar.png'; // Adjust path if needed
    }
    if (imagePath.startsWith('http')) {
        return imagePath;
    }
    // Remove leading slash if present to avoid double slashes with base URL if it has one, 
    // but mostly logical per original code

    // Si ya viene con la ruta de uploads
    if (imagePath.startsWith('/uploads/') || imagePath.startsWith('uploads/')) {
        const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${API_BASE_URL}${cleanPath}`;
    }

    // Normalizar rutas relativas a la carpeta correcta del backend
    if (imagePath.startsWith('directorio/')) {
        return `${API_BASE_URL}/uploads/${imagePath.replace('directorio/', 'directorios/')}`;
    }
    if (imagePath.startsWith('directorios/')) {
        return `${API_BASE_URL}/uploads/${imagePath}`;
    }
    return `${API_BASE_URL}/uploads/directorios/${imagePath}`;
};

export const getAllDirectorios = async (): Promise<Directorio[]> => {
    const response = await fetchAPI<{ data: Directorio[] }>('/api/directorios');
    // The API response structure in free-react was { data: Directorio[] }
    return response.data;
};
