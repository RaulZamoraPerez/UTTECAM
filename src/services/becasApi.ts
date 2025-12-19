const API_URL = import.meta.env.VITE_API_URL || '';

export interface BecaSection {
    id: number;
    type: 'header' | 'requirements' | 'documents' | 'links' | 'platform' | 'results' | 'banner' | 'avisos' | 'convocatoria' | 'footer' | 'repository';
    title: string;
    data: any;
    order: number;
    active: boolean;
}

// GET - Obtener todas las secciones activas
export const getBecasSections = async (): Promise<BecaSection[]> => {
    const response = await fetch(`${API_URL}/api/becas/sections`);
    if (!response.ok) throw new Error('Error al obtener secciones de becas');
    return response.json();
};
