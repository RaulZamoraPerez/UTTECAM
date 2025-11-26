// Normalize API base for UTTECAM frontend
const _RAW_API = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';
export const API_BASE = String(_RAW_API).replace(/\/+$|\/api$|\/api\/$/g, '');
export const API_URL = `${API_BASE}/api`;

/**
 * Convert a backend-relative asset path (starting with /uploads) to a full URL to the backend.
 * If the URL is already absolute, it's returned unchanged.
 */
export const getAssetUrl = (url?: string | null) => {
  if (!url) return '';
  if (typeof url !== 'string') return '';
  if (url.startsWith('/uploads') || url.startsWith('/public')) {
    // Backend serves /uploads and /public directly, don't add /api
    return encodeURI(`${API_BASE}${url}`);
  }
  return url;
};

export default API_URL;
