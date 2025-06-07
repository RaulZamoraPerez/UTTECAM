"use client"

interface ProgramFilterProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

const ProgramFilter = ({ selectedFilter, onFilterChange }: ProgramFilterProps) => {
  const filters = ["Ingenierías", "Licenciaturas"]

  return (
    <div className="flex justify-center gap-4 mb-12">
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            style={{
              width: "160px",
              height: "39px",
              backgroundColor: isSelected ? "#0A9782" : "#FFFFFF",
              color: isSelected ? "#FFFFFF" : "#0A9782",
              border: isSelected ? "none" : "2px solid #D1672A",
              borderTopLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              fontWeight: 500,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}

export default ProgramFilter
