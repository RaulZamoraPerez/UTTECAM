"use client"

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getCarreraById, getCarreraImageUrl, getCarreraVideoUrl, type Carrera } from "../../services/carreraApi"
import VideoContainer from "@/components/ProgramsDetails/VideoContainer"

const ProgramDetail = () => {
  const { id } = useParams()
  const [carrera, setCarrera] = useState<Carrera | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
    loadCarrera()
  }, [id])

  const loadCarrera = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCarreraById(Number(id))
      setCarrera(data)
    } catch (err) {
      console.error('Error al cargar carrera:', err)
      setError('Error al cargar los detalles de la carrera')
    } finally {
      setLoading(false)
    }
  }

  const handleAccordionToggle = (panel: string) => {
    setExpandedAccordion(expandedAccordion === panel ? null : panel)
  }

  // Parsear campo_laboral (puede ser JSON array o texto separado por saltos de línea)
  const parseFieldList = (field: string): string[] => {
    try {
      const parsed = JSON.parse(field)
      return Array.isArray(parsed) ? parsed : [field]
    } catch {
      return field.split('\n').filter(line => line.trim())
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0A9782] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Cargando información de la carrera...</p>
        </div>
      </div>
    )
  }

  if (error || !carrera) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Carrera no encontrada</h1>
          <p className="text-slate-600 mb-6">{error || 'No se pudo cargar la información'}</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A9782] to-[#087968] text-white rounded-lg hover:shadow-lg transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const campoLaboralList = parseFieldList(carrera.campo_laboral)
  const competenciasList = carrera.competencias ? parseFieldList(carrera.competencias) : []
  const atributosEgresoList = carrera.atributos_egreso ? parseFieldList(carrera.atributos_egreso) : []
  const objetivosEducacionalesList = carrera.objetivos_educacionales ? parseFieldList(carrera.objetivos_educacionales) : []
  const mapaCurricular = carrera.mapa_curricular // Ya viene como objeto JSON si el backend lo envía así, o string si es TEXT
  
  // Asegurar que mapaCurricular sea un array si existe
  const studyPlan = Array.isArray(mapaCurricular) ? mapaCurricular : (typeof mapaCurricular === 'string' ? JSON.parse(mapaCurricular) : null)

  const videoUrl = carrera.video_url ? getCarreraVideoUrl(carrera.video_url) : null
  // Prefer the portada (cover) image if available, otherwise fallback to imagen
  const imageUrl = getCarreraImageUrl(carrera.imagen_portada || carrera.imagen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="px-6 md:px-8 lg:px-12 container mx-auto pt-8 pb-20">
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-3 mb-8 group transition-all duration-300 hover:gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#0A9782] to-[#087968] text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <span className="font-semibold text-slate-700 group-hover:text-[#0A9782] transition-colors duration-300">
            Volver a programas
          </span>
        </Link>

        {/* Video */}
        {videoUrl && <VideoContainer videoUrl={videoUrl} />}

        {/* Program Image - Banner Hero */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-16 rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
          <img
            src={imageUrl}
            alt={carrera.nombre}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-full mb-4">
                <span className="text-white font-semibold text-sm">{carrera.nivel}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {carrera.nombre}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{carrera.duracion}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Objetivo */}
          {carrera.objetivo && (
            <section className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 md:p-12 shadow-xl border border-white/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0A9782] to-[#087968] bg-clip-text text-transparent">
                    Objetivo de la Carrera
                  </h2>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">{carrera.objetivo}</p>
              </div>
            </section>
          )}

          {/* Admission and Graduate Profiles */}
          <section className="grid lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/5 to-[#087968]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0A9782] to-[#087968] bg-clip-text text-transparent">
                      Perfil de Ingreso
                    </h3>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line">{carrera.perfil_ingreso}</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/5 to-[#087968]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0A9782] to-[#087968] bg-clip-text text-transparent">
                      Perfil de Egreso
                    </h3>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line">{carrera.perfil_egreso}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Competencias */}
          {competenciasList.length > 0 && (
            <section className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0A9782] to-[#087968] bg-clip-text text-transparent">
                    Competencias Profesionales
                  </h2>
                </div>
                <ul className="space-y-4">
                  {competenciasList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#0A9782] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Atributos de Egreso y Objetivos Educacionales */}
          {(atributosEgresoList.length > 0 || objetivosEducacionalesList.length > 0) && (
            <section className="grid lg:grid-cols-2 gap-8">
              {atributosEgresoList.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-bold text-[#0A9782] mb-6">Atributos de Egreso</h3>
                  <ul className="space-y-3">
                    {atributosEgresoList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0A9782] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {objetivosEducacionalesList.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-bold text-[#0A9782] mb-6">Objetivos Educacionales</h3>
                  <ul className="space-y-3">
                    {objetivosEducacionalesList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0A9782] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Labor Field */}
          {campoLaboralList.length > 0 && (
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/10 via-[#087968]/5 to-[#065a4d]/10 rounded-3xl"></div>
              <div className="relative py-16 px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0A9782] via-[#087968] to-[#065a4d] bg-clip-text text-transparent mb-4">
                    Campo Laboral
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#0A9782] to-[#087968] mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  {campoLaboralList.map((field, index) => (
                    <div key={index} className="group">
                      <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/5 to-[#087968]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-start gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-slate-700 font-medium leading-relaxed">{field.trim()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Plan de estudios */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/5 to-[#087968]/5 rounded-3xl"></div>
            <div className="relative py-12 px-8">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0A9782] via-[#087968] to-[#065a4d] bg-clip-text text-transparent mb-4">
                  Plan de Estudios
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#0A9782] to-[#087968] mx-auto rounded-full mb-8"></div>
                
                {studyPlan && studyPlan.length > 0 ? (
                  <div className="max-w-4xl mx-auto space-y-4">
                    {/* Etiqueta TSU antes del primer cuatrimestre */}
                    <div className="bg-gradient-to-r from-[#0A9782]/10 to-[#087968]/10 rounded-lg p-4 border border-[#0A9782]/20">
                      <p className="text-center text-slate-700 font-semibold text-sm">
                        TSU
                      </p>
                    </div>
                    
                    {studyPlan.map((semester: any, idx: number) => (
                      <div key={`semester-${idx}`}>
                        {/* Etiqueta Ingeniería después del sexto cuatrimestre */}
                        {idx === 5 && (
                          <div className="bg-gradient-to-r from-[#0A9782]/10 to-[#087968]/10 rounded-lg p-4 border border-[#0A9782]/20 mb-4">
                            <p className="text-center text-slate-700 font-semibold text-sm">
                              Ingeniería
                            </p>
                          </div>
                        )}
                        
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                          <button
                            onClick={() => handleAccordionToggle(`semester-${idx}`)}
                            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-slate-50 transition-colors"
                          >
                            <h3 className="text-lg font-bold text-slate-800">{semester.semester}</h3>
                            <svg
                              className={`w-5 h-5 text-[#0A9782] transform transition-transform duration-300 ${
                                expandedAccordion === `semester-${idx}` ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <div
                            className={`transition-all duration-300 ease-in-out ${
                              expandedAccordion === `semester-${idx}` ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                              <ul className="grid md:grid-cols-2 gap-3">
                                {semester.subjects.map((subject: string, sIdx: number) => (
                                  <li key={sIdx} className="flex items-start gap-2 text-slate-700 text-sm">
                                    <svg className="w-4 h-4 text-[#0A9782] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{subject}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* PDF Download - Oculto por solicitud */}
                {/* {carrera.plan_estudios_url && (
                  <div className="max-w-2xl mx-auto mt-12">
                    <p className="text-slate-600 mb-6">Descarga el plan de estudios completo en formato PDF</p>
                    <a
                      href={`${import.meta.env.VITE_API_URL}/uploads/carreras/planes/${carrera.plan_estudios_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A9782] to-[#087968] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Plan de Estudios
                    </a>
                  </div>
                )} */}
                
                {!studyPlan && !carrera.plan_estudios_url && (
                  <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0A9782]/10 to-[#087968]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#0A9782]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-slate-600 text-lg">
                      El plan de estudios detallado estará disponible próximamente
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default ProgramDetail
