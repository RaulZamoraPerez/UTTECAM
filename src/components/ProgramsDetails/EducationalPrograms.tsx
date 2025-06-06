"use client"

import { useState } from "react"
import ProgramFilter from "./ProgramFilter"
import ProgramGrid from "./ProgramGrid"
import { programs } from "../../data/programs"

const EducationalPrograms = () => {
  const [selectedFilter, setSelectedFilter] = useState("Ingenierías")

  const filteredPrograms = programs.filter((program) => program.category === selectedFilter)

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
