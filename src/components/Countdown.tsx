import type React from "react"
import { useEffect, useState } from "react"
import { getEventoActivo, getEventoImageUrl, type Evento } from "../services/homeApi"

interface CountdownCircleProps {
  label: string
  value: number
  max: number
  color: string
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({ label, value, max, color }) => {
  const percentage = (value / max) * 100

  return (
    <div className="w-40 h-40 flex items-center justify-center relative group">
      <div 
        className="absolute inset-0 rounded-full opacity-20 blur-sm animate-pulse"
        style={{ 
          background: `linear-gradient(to right, ${color}40, ${color}80, ${color}40)` 
        }}
      ></div>

      <svg width="160" height="160" className="relative z-10">
        <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
        <defs>
          <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="50%" stopColor={`${color}cc`} />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>

        <circle
          cx="80"
          cy="80"
          r="70"
          stroke={`url(#gradient-${label})`}
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${Math.PI * 2 * 70}`}
          strokeDashoffset={`${Math.PI * 2 * 70 * (1 - percentage / 100)}`}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
          style={{
            filter: `drop-shadow(0 0 3px ${color}70)`,
            transition: 'stroke-dashoffset 0.5s ease-out'
          }}
        />

        <text
          x="80"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="36"
          fontWeight="bold"
          fill={color}
          className="drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
        >
          {String(value).padStart(2, "0")}
        </text>

        <text
          x="80"
          y="110"
          textAnchor="middle"
          fontSize="14"
          fontWeight="medium"
          fill={color}
          className="uppercase tracking-wider"
          style={{ opacity: 0.8 }}
        >
          {label}
        </text>
      </svg>

      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: `${color}10` }}
      ></div>
    </div>
  )
}

const DecorativeBorder = ({ color }: { color: string }) => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 rounded-tl-lg" style={{ borderColor: color }}></div>
    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 rounded-tr-lg" style={{ borderColor: color }}></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 rounded-bl-lg" style={{ borderColor: color }}></div>
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 rounded-br-lg" style={{ borderColor: color }}></div>

    <div className="absolute top-0 left-16 right-16 h-4 border-t-4" style={{ borderColor: color }}></div>
    <div className="absolute bottom-0 left-16 right-16 h-4 border-b-4" style={{ borderColor: color }}></div>
    <div className="absolute left-0 top-16 bottom-16 w-4 border-l-4" style={{ borderColor: color }}></div>
    <div className="absolute right-0 top-16 bottom-16 w-4 border-r-4" style={{ borderColor: color }}></div>
  </div>
)

const Countdown: React.FC = () => {
  const [evento, setEvento] = useState<Evento | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const data = await getEventoActivo()
        setEvento(data)
      } catch (error) {
        console.error('Error al cargar evento:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvento()
  }, [])

  const targetDate = evento ? new Date(evento.fecha_evento) : new Date()

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      totalMilliseconds: difference
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    if (!evento) return

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [evento])

  // Cálculo dinámico del máximo de días
  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const maxDays = Math.ceil((targetDate.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24))

  // Color del evento (personalizable desde el Dashboard)
  const eventColor = evento?.color || '#FFD700'
  const backgroundImageUrl = getEventoImageUrl(evento?.imagen_fondo_url)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-amber-300">Cargando evento...</p>
      </div>
    )
  }

  if (!evento) {
    return null
  }

  // Función para obtener color con transparencia
  const getColorWithAlpha = (color: string, alpha: number) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center text-center py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: backgroundImageUrl 
          ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!backgroundImageUrl && (
        <div className="fixed inset-0 bg-black -z-30">
          <div 
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] animate-pulse"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, ${getColorWithAlpha(eventColor, 0.3)}, black, black)`
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFD700' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div 
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 blur-[100px] rounded-full animate-pulse"
            style={{ backgroundColor: getColorWithAlpha(eventColor, 0.1) }}
          ></div>
          <div
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 blur-[80px] rounded-full animate-pulse"
            style={{ 
              backgroundColor: getColorWithAlpha(eventColor, 0.05),
              animationDelay: "1s" 
            }}
          ></div>
        </div>
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative p-1 rounded-2xl">
          <div 
            className="absolute inset-0 rounded-2xl opacity-80 animate-pulse"
            style={{
              background: `linear-gradient(to right, ${eventColor}, ${getColorWithAlpha(eventColor, 0.6)}, ${eventColor})`
            }}
          ></div>

          <div className="relative bg-black/90 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl">
            <DecorativeBorder color={eventColor} />

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div 
                className="w-24 h-2 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${eventColor}, ${getColorWithAlpha(eventColor, 0.6)}, ${eventColor})`
                }}
              ></div>
            </div>

            <div className="relative mb-8">
              <h2 
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                style={{
                  background: `linear-gradient(to right, ${getColorWithAlpha(eventColor, 0.8)}, ${eventColor}, ${getColorWithAlpha(eventColor, 0.8)})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {evento.titulo}
              </h2>
              <p 
                className="text-lg md:text-xl font-medium"
                style={{ color: getColorWithAlpha(eventColor, 0.9) }}
              >
                {new Date(evento.fecha_evento).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <div 
                className="absolute -inset-1 -z-10 blur-md opacity-70"
                style={{
                  background: `linear-gradient(to right, ${getColorWithAlpha(eventColor, 0.2)}, ${getColorWithAlpha(eventColor, 0.2)}, ${getColorWithAlpha(eventColor, 0.2)})`
                }}
              ></div>
            </div>

            {evento.descripcion && (
              <p 
                className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                style={{ color: getColorWithAlpha(eventColor, 0.8) }}
              >
                {evento.descripcion}
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <CountdownCircle label="DÍAS" value={timeLeft.days} max={maxDays} color={eventColor} />
              <CountdownCircle label="HORAS" value={timeLeft.hours} max={24} color={eventColor} />
              <CountdownCircle label="MINUTOS" value={timeLeft.minutes} max={60} color={eventColor} />
              <CountdownCircle label="SEGUNDOS" value={timeLeft.seconds} max={60} color={eventColor} />
            </div>

            {evento.texto_boton && evento.url_boton && (
              <div className="mt-12">
                <a
                  href={evento.url_boton}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: eventColor,
                    color: '#000',
                    boxShadow: `0 4px 20px ${getColorWithAlpha(eventColor, 0.4)}`
                  }}
                >
                  {evento.texto_boton}
                </a>
              </div>
            )}

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div 
                className="w-24 h-2 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${eventColor}, ${getColorWithAlpha(eventColor, 0.6)}, ${eventColor})`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
