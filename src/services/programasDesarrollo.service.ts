import { API_BASE_URL } from "@/api/config";

// 
const ENDPOINT = `${API_BASE_URL}/api/programas-desarrollo`;

export interface ProgramaD {
    id: number;
    titulo: string;
    descripcion: string;
    archivo: string;
    activo: boolean;
}

export interface ProgramaCategoria {
    id: number;
    titulo: string;
    programas: ProgramaD[];
}

export const getProgramas = async (): Promise<ProgramaCategoria[]> => {
    const response = await fetch(ENDPOINT);
    if (!response.ok) throw new Error("Error fetching programas de desarrollo");
    const data = await response.json();
    return data;
};

export const getProgramaFileUrl = (archivo: string) => {
    if (!archivo) return "";
    if (archivo.startsWith("http")) return archivo;
    return `${API_BASE_URL}${archivo}`;
};
