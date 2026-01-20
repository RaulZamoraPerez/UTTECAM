const API_URL = import.meta.env.VITE_API_URL || '';

export interface Archivo {
    id: number;
    nombre: string;
    descripcion: string;
    ruta: string;
    tipo: string;
    size: number;
    fecha: string;
    url: string;
    downloadUrl: string;
}

export interface Categoria {
    id: number;
    nombre: string;
    archivos: Archivo[];
}

export const obtenerCategorias = async (areaId?: number): Promise<Categoria[]> => {
    try {
        const response = await fetch(`${API_URL}/api/documentos/categorias`);

        if (!response.ok) {
            if (response.status === 404) return [];
            throw new Error('Error al obtener categorías');
        }

        const data = await response.json();

        return data
            .filter((cat: any) => !areaId || cat.ID_Area === areaId)
            .map((cat: any) => ({
                id: cat.ID_Categorias,
                nombre: cat.Nombre,
                archivos: (cat.archivos || []).map((file: any) => {
                    // Ensure API_URL has protocol, default to localhost:3000 if empty
                    const baseUrl = (API_URL || 'http://localhost:3000').replace(/\/$/, '');

                    // Normalize path: remove leading slashes/backslashes and 'uploads/' if present
                    const cleanPath = file.Ruta_Documento.replace(/^[/\\]+/, '');

                    const fullUrl = `${baseUrl}/${cleanPath}`;

                    return {
                        id: file.ID_Archivo,
                        nombre: file.Nombre,
                        descripcion: file.Descripcion,
                        ruta: file.Ruta_Documento,
                        tipo: 'file',
                        size: 0,
                        fecha: file.updatedAt,
                        url: fullUrl,
                        downloadUrl: fullUrl
                    };
                })
            }));

    } catch (error) {
        console.error('Error en documentosApi:', error);
        return [];
    }
};
