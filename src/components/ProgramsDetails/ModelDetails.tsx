import { useState, useEffect } from 'react'
import { getModeloEducativo } from '@/services/modeloEducativoApi'

interface Caracteristica {
  number: number
  title: string
  description: string
}

interface ModeloEducativoData {
  titulo_seccion: string
  descripcion_seccion: string
  caracteristicas: Caracteristica[]
}

const ModelDetails = () => {
  const [modelo, setModelo] = useState<ModeloEducativoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getModeloEducativo()
        setModelo(data)
      } catch (error) {
        console.error('Error cargando modelo educativo:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>
  }

  if (!modelo) {
    return <div className="text-center py-8">No se pudo cargar el contenido</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-orange-500 mb-6">{modelo.titulo_seccion}</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        {modelo.descripcion_seccion}
      </p>

      <div className="space-y-6">
        {modelo.caracteristicas && Array.isArray(modelo.caracteristicas) && modelo.caracteristicas.map((feature) => (
          <div key={feature.number} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {feature.number}
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModelDetails
