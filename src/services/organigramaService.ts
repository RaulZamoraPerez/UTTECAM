import { fetchAPI } from './apiService';
import type { OrganigramaNode } from '../types/organigrama';

const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';

export const getImageUrl = (imagePath?: string): string => {
    if (!imagePath) return '/logos/logo_ut.png'; // Fallback
    if (imagePath.startsWith('http')) return imagePath;

    // Clean leading slash
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;

    // Check if it's already an uploads path
    if (cleanPath.startsWith('uploads/')) {
        return `${API_BASE_URL}/${cleanPath}`;
    }

    // If it's a legacy static path (e.g. "Organigrama/admin/...") we assume it was migrated to backend uploads
    // But wait, our seeder adds "uploads/organigrama/..." prefix.
    // If existing data has "Organigrama/admin/..." (from old static usage), 
    // we might need to map it if we copied it there.
    // The previous xcopy put "Organigrama" folder content directly into "uploads/organigrama".
    // So "Organigrama/admin/img.jpg" -> "uploads/organigrama/admin/img.jpg".

    if (cleanPath.startsWith('Organigrama/')) {
        return `${API_BASE_URL}/uploads/organigrama/${cleanPath.replace('Organigrama/', '')}`;
    }

    return `${API_BASE_URL}/uploads/organigrama/${cleanPath}`;
};

export const getOrganigrama = async (): Promise<OrganigramaNode[]> => {
    const response = await fetchAPI<{ data: OrganigramaNode[] }>('/api/quienes-somos/organigrama');
    // Map images to absolute URLs
    const mapNodes = (nodes: OrganigramaNode[]): OrganigramaNode[] => {
        return nodes.map(node => ({
            ...node,
            data: {
                ...node.data,
                image: getImageUrl(node.data.image)
            },
            children: node.children ? mapNodes(node.children) : []
        }));
    };
    return mapNodes(response.data);
};
