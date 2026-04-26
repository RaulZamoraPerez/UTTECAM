import type React from "react"
import { useEffect, useState } from "react"

interface CountdownCircleProps {
  label: string
  value: number
  max: number
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({ label, value, max }) => {
  const percentage = (value / max) * 100

  return (
    <div className="w-[120px] h-[120px] sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center relative group">
      {/* Resplandor de fondo mejorado */}
      <div className="absolute inset-2 rounded-full bg-amber-500/20 blur-md animate-pulse"></div>

      <svg viewBox="0 0 160 160" className="w-full h-full relative z-10 drop-shadow-2xl">
        {/* Círculo de fondo (riel) */}
        <circle 
          cx="80" 
          cy="80" 
          r="70" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="10" 
          fill="rgba(0,0,0,0.2)" 
        />
        
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2AD" />
            <stop offset="50%" stopColor="#F4BD76" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {/* Círculo de progreso animado */}
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="url(#goldGradient)"
          strokeWidth="12"
          fill="none"
          strokeDasharray={`${Math.PI * 2 * 70}`}
          strokeDashoffset={`${Math.PI * 2 * 70 * (1 - percentage / 100)}`}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
          className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-[stroke-dashoffset] duration-700 ease-in-out"
        />

        {/* Valor Numérico */}
        <text
          x="80"
          y="75"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48"
          fontWeight="900"
          fill="#FFD700"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
        >
          {String(value).padStart(2, "0")}
        </text>

        {/* Etiqueta (DÍAS, HORAS...) */}
        <text
          x="80"
          y="110"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fill="#F4BD76"
          className="uppercase tracking-[0.2em]"
        >
          {label}
        </text>
      </svg>
    </div>
  )
}

const DecorativeBorder = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-amber-500 rounded-tl-lg"></div>
    <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-amber-500 rounded-tr-lg"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-amber-500 rounded-bl-lg"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-amber-500 rounded-br-lg"></div>
  </div>
)

const Countdown: React.FC = () => {
 const targetDate = new Date(2026, 8, 6, 0, 0, 0) // 6 de septiembre de 2026

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const maxDays = Math.ceil((targetDate.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-[50vh] md:min-h-screen flex items-center justify-center text-center py-10 md:py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-black to-black animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFD700' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="relative p-0.5 md:p-1 rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 opacity-80 animate-pulse"></div>

          <div className="relative bg-black/90 backdrop-blur-md rounded-xl p-6 md:p-12 shadow-2xl">
            <DecorativeBorder />

            <div className="relative mb-6 md:mb-8">
              <h2 className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
                30° Aniversario UTTECAM
              </h2>
              <p className="text-amber-300 text-base md:text-xl font-medium">
                6 de septiembre 2026
              </p>
            </div>

            <p className="text-amber-300/80 text-sm md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
              Celebrando casi tres décadas de excelencia académica y compromiso con la educación.
            </p>

            <div className="grid grid-cols-2 lg:flex lg:justify-center gap-6 sm:gap-10 md:gap-12 max-w-[340px] sm:max-w-none mx-auto justify-items-center">
              <CountdownCircle label="DÍAS" value={timeLeft.days} max={maxDays} />
              <CountdownCircle label="HORAS" value={timeLeft.hours} max={24} />
              <CountdownCircle label="MINS" value={timeLeft.minutes} max={60} />
              <CountdownCircle label="SEGS" value={timeLeft.seconds} max={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
