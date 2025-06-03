import { useNavigate } from "react-router-dom"
import type { Program } from "../types/Program"

interface ProgramCardProps {
  program: Program
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/programa/${program.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md bg-white overflow-hidden"
      style={{
        width: "343px",
        height: "350px",
        borderRadius: "20px",
      }}
    >
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>
  )
}

export default ProgramCard
