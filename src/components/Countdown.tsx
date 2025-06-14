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
    <div className="w-40 h-40 flex items-center justify-center relative group">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 opacity-20 blur-sm animate-pulse"></div>

      <svg width="160" height="160" className="relative z-10">
        <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#F4BD76" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="url(#goldGradient)"
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${Math.PI * 2 * 70}`}
          strokeDashoffset={`${Math.PI * 2 * 70 * (1 - percentage / 100)}`}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
          className="drop-shadow-[0_0_3px_rgba(255,215,0,0.7)] transition-[stroke-dashoffset] duration-500 ease-out"
        />

        <text
          x="80"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="36"
          fontWeight="bold"
          fill="#FFD700"
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
          fill="#D4AF37"
          className="uppercase tracking-wider"
        >
          {label}
        </text>
      </svg>

      <div className="absolute inset-0 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

const DecorativeBorder = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-500 rounded-tl-lg"></div>
    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-500 rounded-tr-lg"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-500 rounded-bl-lg"></div>
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-500 rounded-br-lg"></div>

    <div className="absolute top-0 left-16 right-16 h-4 border-t-4 border-amber-500"></div>
    <div className="absolute bottom-0 left-16 right-16 h-4 border-b-4 border-amber-500"></div>
    <div className="absolute left-0 top-16 bottom-16 w-4 border-l-4 border-amber-500"></div>
    <div className="absolute right-0 top-16 bottom-16 w-4 border-r-4 border-amber-500"></div>
  </div>
)

const Countdown: React.FC = () => {
 const targetDate = new Date(2025, 8, 6, 0, 0, 0) // 6 de septiembre de 2025 (mes 8 porque enero = 0)

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Cálculo dinámico del máximo de días
  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const maxDays = Math.ceil((targetDate.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen flex items-center justify-center text-center py-16 px-4 relative overflow-hidden">
      <div className="fixed inset-0 bg-black -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-black to-black animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFD700' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-amber-500/10 blur-[100px] rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-yellow-300/5 blur-[80px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative p-1 rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 opacity-80 animate-pulse"></div>

          <div className="relative bg-black/90 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl">
            <DecorativeBorder />

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-2 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-full"></div>
            </div>

            <div className="relative mb-8">
              <h2 className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                29° Aniversario UTTECAM
              </h2>
              <p className="text-amber-300 text-lg md:text-xl font-medium">
                6 de septiembre 2025
              </p>
              <div className="absolute -inset-1 -z-10 blur-md bg-gradient-to-r from-amber-600/20 via-yellow-400/20 to-amber-600/20 opacity-70"></div>
            </div>


            <p className="text-amber-300/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Celebrando casi tres décadas de excelencia académica y compromiso con la educación
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <CountdownCircle label="DÍAS" value={timeLeft.days} max={maxDays} />
              <CountdownCircle label="HORAS" value={timeLeft.hours} max={24} />
              <CountdownCircle label="MINUTOS" value={timeLeft.minutes} max={60} />
              <CountdownCircle label="SEGUNDOS" value={timeLeft.seconds} max={60} />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-24 h-2 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
