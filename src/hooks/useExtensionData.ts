import { useState, useEffect } from 'react';

// Determine normalized API base and ensure a consistent `/api` suffix
const _RAW_API = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKENDURL || 'http://localhost:3002';
const API_BASE = String(_RAW_API).replace(/\/+$|\/api$|\/api\/$/g, '');
const API_URL = `${API_BASE}/api`;

export const useExtensionSection = (slug: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/extension/sections/${slug}`);
        let result;
        try { result = await response.json(); } catch (e) { result = null; }
        if (!response.ok) {
          // Try to surface backend error message if present
          const apiMessage = result && (result.message || result.error);
          throw new Error(apiMessage || 'Error fetching section data');
        }
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { data, loading, error };
};

export const useExtensionDocuments = (category: string) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/extension/documents/${category}`);
        if (!response.ok) throw new Error('Error fetching documents');
        const result = await response.json();
        setDocuments(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { documents, loading, error };
};
