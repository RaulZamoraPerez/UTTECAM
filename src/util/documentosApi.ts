import API_URL from '@/util/apiBase';

export interface Archivo {
  ID: number;
  Nombre: string;
  Descripcion: string | null;
  Ruta_Documento: string;
  Fecha_Subida: string;
  ID_Categorias: number;
}

export interface Categoria {
  ID_Categorias: number;
  Nombre: string;
  ID_Area: number;
  archivos: Archivo[];
}

export interface Area {
  ID_Area: number;
  Nombre: string;
  categorias: Categoria[];
}

export async function fetchCategoria(id: number): Promise<Categoria | null> {
  try {
    const response = await fetch(`${API_URL}/documentos/categorias/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching categoria: ${response.status}`);
    }
    const data: Categoria = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categoria:', error);
    return null;
  }
}

export async function fetchArea(id: number): Promise<Area | null> {
  try {
    const response = await fetch(`${API_URL}/documentos/areas/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching area: ${response.status}`);
    }
    const data: Area = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching area:', error);
    return null;
  }
}