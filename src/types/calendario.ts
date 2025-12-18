export interface Calendario {
    id: number;
    titulo: string;
    descripcion?: string;
    archivo: string;
    archivo_path?: string | null;
    archivo_url?: string | null;
    fechaSubida: string;
    createdAt: string;
    updatedAt: string;
}
