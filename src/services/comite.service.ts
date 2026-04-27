const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';

export const getComiteBySlug = async (slug: string) => {
    const response = await fetch(`${API_BASE_URL}/api/comites/${slug}`);
    if (!response.ok) throw new Error(`Error fetching comite ${slug}`);
    return await response.json();
};

export const getComiteFileUrl = (archivo: string) => {
    if (!archivo) return "";
    if (archivo.startsWith("http")) return archivo;
    return `${API_BASE_URL}${archivo}`;
};
