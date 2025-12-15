import { useState, useEffect } from 'react'
import ModelDetails from "./ModelDetails"
import ModelCard from "./ModelCard"
import { getModeloEducativo } from '@/services/modeloEducativoApi'

interface ModeloEducativoData {
  titulo_principal: string
  descripcion_principal: string
}

const EducationalModels = () => {
  const [modelo, setModelo] = useState<ModeloEducativoData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getModeloEducativo()
        setModelo(data)
      } catch (error) {
        console.error('Error cargando modelo educativo:', error)
      }
    }
    fetchData()
  }, [])
 
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#0A9782" }}>
            {modelo?.titulo_principal || 'Modelos educativos'}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {modelo?.descripcion_principal || 'Conoce nuestro enfoque educativo diseñado para formar profesionistas competitivos.'}
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
