import { API_BASE_URL } from "@/api/config";
import axios from "axios";


export interface DBDirectorio {
  id: number;
  titulo: string;
  nombre: string;
  telefono?: string;
  extension?: string;
  correo?: string;
  imagen?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getDirectorios = async (): Promise<DBDirectorio[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/directorios`);
    // Axios response.data es el body del backend: { message: "...", data: [...] }
    // Por lo tanto, el arreglo está en response.data.data
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching directorios:", error);
    return [];
  }
};

export { getImageUrl } from "@/api/config";
