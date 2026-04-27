import { useState, useEffect } from 'react';
import { getCalendarios } from '../services/calendario.service';
import type { CalendarioType } from '../services/calendario.service';

export const useCalendarios = () => {
  const [calendarios, setCalendarios] = useState<CalendarioType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCalendarios = async () => {
    try {
      setLoading(true);
      const data = await getCalendarios();
      setCalendarios(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error al cargar los calendarios');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendarios();
  }, []);

  return { calendarios, loading, error, refetch: fetchCalendarios };
};
