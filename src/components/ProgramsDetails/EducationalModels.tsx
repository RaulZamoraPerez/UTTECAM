import ModelDetails from "./ModelDetails"
import ModelCard from "./ModelCard"

const EducationalModels = () => {
 
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#0A9782" }}>Modelos educativos</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conoce nuestro enfoque educativo diseñado para formar profesionistas competitivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ModelDetails />
          <div className="flex justify-center lg:justify-end rounded-2xl">
            <ModelCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationalModels
