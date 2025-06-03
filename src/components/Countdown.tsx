import { useEffect, useState } from 'react';

interface CountdownCircleProps {
  label: string;
  value: number;
  max: number;
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({ label, value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-40 h-40 flex items-center justify-center relative">
      <svg width="160" height="160">
        <circle cx="80" cy="80" r="70" stroke="#ddd" strokeWidth="10" fill="none" />
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="#f36f21"
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${Math.PI * 2 * 70}`}
          strokeDashoffset={`${Math.PI * 2 * 70 * (1 - percentage / 100)}`}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
        />
        <text x="80" y="85" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#333">
          {String(value).padStart(2, '0')}
        </text>
        <text x="80" y="115" textAnchor="middle" fontSize="14" fill="#444">
          {label}
        </text>
      </svg>
    </div>
  );
};

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(2026, 6, 6, 0, 0, 0);
    const difference = targetDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center my-24 px-4">
      <h2 className="text-[#c75b20] text-4xl md:text-5xl font-bold mb-12">
        Contando hacia el 30° Aniversario UTTECAM
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <CountdownCircle label="DÍAS" value={timeLeft.days} max={365} />
        <CountdownCircle label="HORAS" value={timeLeft.hours} max={24} />
        <CountdownCircle label="MINUTOS" value={timeLeft.minutes} max={60} />
        <CountdownCircle label="SEGUNDOS" value={timeLeft.seconds} max={60} />
      </div>
    </div>
  );
};

export default Countdown;
