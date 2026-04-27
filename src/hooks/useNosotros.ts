/**
 * Hook para obtener el contenido público de "Nosotros" desde el backend.
 * Solo lectura — no requiere autenticación.
 *
 * Estados:
 *   loading  → true mientras se carga
 *   content  → datos del backend (null si aún no hay contenido en la BD)
 *   error    → mensaje legible si hay un error de red o servidor (≠ contenido vacío)
 */
import { useState, useEffect } from 'react';
import { getNosotrosContent, } from '../services/nosotros.service';
import type { NosotrosContent } from '../services/nosotros.service';

interface UseNosotrosReturn {
  content: NosotrosContent | null;
  loading: boolean;
  /** Error crítico (red/servidor). Contenido vacío NO es un error. */
  error: string | null;
}

export const useNosotros = (): UseNosotrosReturn => {
  const [content, setContent] = useState<NosotrosContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getNosotrosContent();
        if (!cancelled) {
          // null = la BD no tiene contenido todavía → no es un error
          setContent(data);
        }
      } catch (err) {
        if (!cancelled) {
          const msg = err instanceof Error
            ? err.message
            : 'Error desconocido al cargar Nosotros.';
          setError(msg);
          console.error('[useNosotros]', msg);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;  // evitar set-state en componente desmontado
    };
  }, []);

  return { content, loading, error };
};
