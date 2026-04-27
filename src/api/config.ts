export const API_BASE_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';

export const getImageUrl = (path: string, modulePrefix: string = 'directorios'): string => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  if (cleanPath.includes("uploads/")) {
     return `${API_BASE_URL}/${cleanPath}`;
  }
  
  return `${API_BASE_URL}/uploads/${modulePrefix}/${cleanPath}`;
};
