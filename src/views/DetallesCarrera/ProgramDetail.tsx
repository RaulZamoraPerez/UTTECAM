"use client"

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { programs } from "../../data/programs"
import { programDetails } from "../../data/programDetails"
import VideoContainer from "@/components/ProgramsDetails/VideoContainer"
import ProgramImage from "@/components/ProgramsDetails/ProgramImage"

const ProgramDetail = () => {
  const { id } = useParams()
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [id])

  const program = programs.find((p) => p.id === Number.parseInt(id || "0"))
  const details = programDetails.find((d) => d.programId === Number.parseInt(id || "0"))

  if (!program || !details) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Programa no encontrado</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
          Volver al inicio
        </Link>
      </div>
    )
  }

  const handleAccordionToggle = (panel: string) => {
    setExpandedAccordion(expandedAccordion === panel ? null : panel)
  }

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

{/* video */}
 {details.videoUrl && <VideoContainer videoUrl={details.videoUrl} />}



        {/* Program Image */}
       <ProgramImage details={details} program={program} />

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Educational Objectives */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A9782]/5 to-transparent rounded-3xl"></div>
            <div className="relative px-8 md:px-12 lg:px-16 py-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0A9782] to-[#087968] bg-clip-text text-transparent">
                  Objetivos Educacionales
                </h2>
              </div>
              <div className="grid gap-4">
                {details.educationalObjectives.map((objetivo, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="font-medium text-slate-700 leading-relaxed">{objetivo}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Graduate Attributes */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A9782]/5 to-transparent rounded-3xl"></div>
            <div className="relative px-8 md:px-12 lg:px-16 py-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0A9782] to-[#087968] bg-clip-text text-transparent">
                  Atributos de Egreso
                </h2>
              </div>
              <div className="grid gap-4">
                {details.graduateAttributes.map((atributo, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="font-medium text-slate-700 leading-relaxed">{atributo}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

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
                  <p className="text-slate-700 font-medium leading-relaxed">{details.admissionProfile}</p>
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
                  <p className="text-slate-700 font-medium leading-relaxed">{details.graduateProfile}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Competencies */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/10 via-[#087968]/5 to-[#065a4d]/10 rounded-3xl"></div>
            <div className="relative py-16 px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0A9782] via-[#087968] to-[#065a4d] bg-clip-text text-transparent mb-4">
                  Competencias
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#0A9782] to-[#087968] mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {details.competencies.map((competency, index) => (
                  <div key={index} className="group">
                    <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/5 to-[#087968]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed">{competency}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

{/* Study Plan */}
<section className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A9782]/5 to-[#087968]/5 rounded-3xl"></div>
  <div className="relative py-12">
    <div className="text-center mb-8">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0A9782] via-[#087968] to-[#065a4d] bg-clip-text text-transparent mb-4">
        Plan de Estudios
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#0A9782] to-[#087968] mx-auto rounded-full mt-2"></div>
    </div>

    <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-4">
      {details.studyPlan.map((semester, index) => {
        const panelId = `panel${index + 1}`
        const isExpanded = expandedAccordion === panelId

        const getSemesterNumber = (semesterName: string): string => {
          const mapping: { [key: string]: string } = {
            "Primero": "1",
            "Segundo": "2",
            "Tercero": "3",
            "Cuarto": "4",
            "Quinto": "5",
            "Sexto": "6",
            "Séptimo": "7",
            "Octavo": "8",
            "Noveno": "9",
            "Décimo": "10",
            "Undécimo": "11",
            "Estadía": "E",
          }
          return mapping[semesterName] || "?"
        }

        return (
          <div key={panelId} className="group">
            {/* Encabezado de nivel académico */}
            {(index === 0 || index === 6) && (
              <div className="mb-2 mt-8">
                <h3 className="text-2xl font-semibold text-[#0A9782] border-b-2 border-[#0A9782]/30 inline-block px-2 pb-1">
                  {index === 0 ? "Técnico Superior Universitario" : "Ingeniería"}
                </h3>
              </div>
            )}

            <div className="w-full bg-white rounded-2xl shadow border border-white/40 overflow-hidden hover:shadow-md transition-all duration-200">
              <button
                onClick={() => handleAccordionToggle(panelId)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-blue-50 transition duration-200 flex justify-between items-center group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-xl flex items-center justify-center shadow">
                    <span className="text-white font-semibold text-sm">
                      {getSemesterNumber(semester.semester)}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-700 group-hover:text-[#0A9782] transition-colors">
                    {semester.semester}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? "bg-[#0A9782]/10 rotate-90" : "group-hover:bg-blue-50"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition duration-300 ${
                      isExpanded ? "text-[#0A9782]" : "text-slate-500"
                    }`}
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 py-4 bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-200">
                  <div className="grid gap-2">
                    {semester.subjects.map((subject, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg border border-white/60 hover:shadow transition-all duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#0A9782] to-[#087968] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700 leading-tight">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  </div>
</section>

</div>
      </section>
    </div>
  )
}

export default ProgramDetail
