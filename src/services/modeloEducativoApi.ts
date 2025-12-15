import { API_URL } from '../config/api'

export interface Caracteristica {
  number: number
  title: string
  description: string
}

export interface ModeloEducativo {
  id: number
  titulo_principal: string
  descripcion_principal: string
  titulo_seccion: string
  descripcion_seccion: string
  imagen_url: string
  caracteristicas: Caracteristica[]
  activo: boolean
}

export const getModeloEducativo = async (): Promise<ModeloEducativo> => {
  const response = await fetch(`${API_URL}/api/modelo-educativo`)
  if (!response.ok) {
    throw new Error('Error al obtener modelo educativo')
  }
  return response.json()
}

export const getModeloEducativoImageUrl = (filename: string): string => {
  if (!filename) return ''
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename
  }
  if (filename.startsWith('/uploads/')) {
    return encodeURI(`${API_URL}${filename}`)
  }
  return encodeURI(`${API_URL}/uploads/PE2025/${filename}`)
}
