"use client"

interface ModelToggleProps {
  selectedModel: string
  onModelChange: (model: string) => void
}

const ModelToggle = ({ selectedModel, onModelChange }: ModelToggleProps) => {
  const handleToggle = () => {
    onModelChange(selectedModel === "2024" ? "2025" : "2024")
  }

  return (
    <div className="flex justify-center items-center gap-4 mb-12">
      <span className={`text-sm ${selectedModel === "2024" ? "text-gray-900 font-medium" : "text-gray-500"}`}>
        Modelo 2024
      </span>
      <div className="relative">
        <button
          onClick={handleToggle}
          className={`w-14 h-7 rounded-full transition-colors duration-200 ${selectedModel === "2025" ? "" : "bg-gray-300"
            }`}
          style={{
            backgroundColor: selectedModel === "2025" ? "#D1672A" : undefined,
          }}
        >

          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${selectedModel === "2025" ? "translate-x-8" : "translate-x-1"
              } mt-1`}
          />
        </button>
      </div>
      <span className={`text-sm ${selectedModel === "2025" ? "text-emerald-600 font-medium" : "text-gray-500"}`}>
        Modelo 2025
      </span>
    </div>
  )
}

export default ModelToggle
