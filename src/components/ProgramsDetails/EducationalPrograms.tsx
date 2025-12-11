"use client"

import { useState, useEffect } from "react"
import ProgramFilter from "./ProgramFilter"
import ProgramGrid from "./ProgramGrid"
import { getCarreras, type Carrera } from "../../services/carreraApi"

const EducationalPrograms = () => {
  const [selectedFilter, setSelectedFilter] = useState("Ingenierías")
  const [carreras, setCarreras] = useState<Carrera[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCarreras = async () => {
      try {
        const data = await getCarreras()
        setCarreras(data)
      } catch (error) {
        console.error('Error al cargar carreras:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCarreras()
  }, [])

  // Mapear nivel de carrera al nombre del filtro
  const filterToNivel: Record<string, string> = {
    'TSU': 'TSU',
    'Ingenierías': 'Ingenieria',
    'Licenciaturas': 'Licenciatura',
  }

  const filteredPrograms = carreras
    .filter((carrera) => carrera.nivel === filterToNivel[selectedFilter])

  if (loading) {
    return (
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">Cargando programas educativos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#0A9782' }}>
            Programas Educativos
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Únete a nuestra comunidad educativa hoy mismo y descubre todo lo que nuestros programas educativos tienen
            para ofrecerte.
          </p>
        </div>

        <ProgramFilter selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

        <ProgramGrid programs={filteredPrograms} />
      </div>
    </div>
  )
}

export default EducationalPrograms
