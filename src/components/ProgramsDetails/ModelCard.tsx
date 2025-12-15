import { useState, useEffect } from 'react'
import { getModeloEducativo, getModeloEducativoImageUrl } from '@/services/modeloEducativoApi'

const ModelCard = () => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getModeloEducativo()
        setImageUrl(getModeloEducativoImageUrl(data.imagen_url))
      } catch (error) {
        console.error('Error cargando imagen modelo educativo:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="rounded-2xl overflow-hidden w-full max-w-[608px] aspect-[608/621] mx-auto bg-gray-200 animate-pulse" />
    )
  }

  return (
    <div className="rounded-2xl overflow-hidden w-full max-w-[608px] aspect-[608/621] mx-auto">
      <img
        src={imageUrl}
        alt="Modelo Educativo"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default ModelCard;
