import { useState, useEffect } from 'react';
import { relojDigitalApi } from '@/services/relojDigitalApi';
import type { RelojDigital as RelojDigitalType } from '@/types/RelojDigital';

const RelojDigital = () => {
  const [config, setConfig] = useState<RelojDigitalType | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar configuración del reloj
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const relojConfig = await relojDigitalApi.getActive();
        if (relojConfig.activo) {
          setConfig(relojConfig);
        }
      } catch (err) {
        console.error('Error al cargar configuración del reloj:', err);
        setError('Error al cargar el reloj');
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  // Actualizar hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !config) {
    return null; // No mostrar nada si hay error o no está activo
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-MX', {
      hour12: !config.formato24Horas,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: config.zonaHoraria
    });
  };

  const formatDate = (date: Date) => {
    if (!config.mostrarFecha) return '';

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    if (config.mostrarDiaSemana) {
      options.weekday = 'long';
    }

    return date.toLocaleDateString('es-MX', options);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white shadow-lg">
      <div className="text-center">
        {config.estilo === 'analogico' ? (
          <AnalogClock time={currentTime} />
        ) : (
          <>
            <div className="text-4xl font-mono font-bold mb-2">
              {formatTime(currentTime)}
            </div>
            {config.mostrarFecha && (
              <div className="text-lg opacity-90 capitalize">
                {formatDate(currentTime)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Componente de reloj analógico
const AnalogClock = ({ time }: { time: Date }) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = (seconds * 6) - 90; // 6 degrees per second
  const minuteAngle = (minutes * 6) + (seconds * 0.1) - 90; // 6 degrees per minute + smooth seconds
  const hourAngle = (hours * 30) + (minutes * 0.5) - 90; // 30 degrees per hour + minutes

  return (
    <div className="relative w-32 h-32 mx-auto mb-2">
      {/* Clock face */}
      <div className="absolute inset-0 rounded-full border-4 border-white bg-white bg-opacity-10">
        {/* Hour markers */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-40px)`,
            }}
          />
        ))}

        {/* Minute markers */}
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 6}deg) translateY(-46px)`,
              display: i % 5 !== 0 ? 'block' : 'none', // Hide where hour markers are
            }}
          />
        ))}

        {/* Hour hand */}
        <div
          className="absolute w-1 bg-white transform -translate-x-1/2 origin-bottom"
          style={{
            left: '50%',
            bottom: '50%',
            height: '25%',
            transform: `translateX(-50%) rotate(${hourAngle}deg)`,
          }}
        />

        {/* Minute hand */}
        <div
          className="absolute w-0.5 bg-white transform -translate-x-1/2 origin-bottom"
          style={{
            left: '50%',
            bottom: '50%',
            height: '35%',
            transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
          }}
        />

        {/* Second hand */}
        <div
          className="absolute w-0.5 bg-red-400 transform -translate-x-1/2 origin-bottom"
          style={{
            left: '50%',
            bottom: '50%',
            height: '40%',
            transform: `translateX(-50%) rotate(${secondAngle}deg)`,
          }}
        />

        {/* Center dot */}
        <div className="absolute w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '50%' }} />
      </div>
    </div>
  );
};

export default RelojDigital;
