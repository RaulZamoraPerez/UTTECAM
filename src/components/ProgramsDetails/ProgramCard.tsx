import { useNavigate } from "react-router-dom"
import type { Carrera } from "../../services/carreraApi"
import { getCarreraImageUrl } from "../../services/carreraApi"

interface ProgramCardProps {
  program: Carrera
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Use the resource ID for navigation so ProgramDetail can fetch by PK (id)
    navigate(`/programa/${program.id}`)
  }

  // Verificar si la imagen ya es una URL completa o solo el nombre del archivo
  // Priorizar imagen_portada si existe
  const imageToUse = program.imagen_portada || program.imagen;
  const imageUrl = imageToUse && imageToUse.startsWith('http') 
    ? imageToUse 
    : imageToUse 
      ? getCarreraImageUrl(imageToUse)
      : '/placeholder-carrera.jpg'

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
        src={imageUrl}
        alt={program.nombre}
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>
  )
}

export default ProgramCard
