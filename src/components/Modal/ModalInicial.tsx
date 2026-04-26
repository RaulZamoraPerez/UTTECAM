"use client"

import { useState, useEffect } from "react"
import { X, Megaphone } from "lucide-react"

export default function NewsModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        const isMobileDevice = window.innerWidth <= 768
        setIsMobile(isMobileDevice)

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        window.addEventListener('resize', checkMobile)

        // Lógica de presentación diferenciada
        if (!isMobileDevice) {
            // PC: Auto-open modal del anuncio
            const modalTimer = setTimeout(() => {
                setIsModalOpen(true)
            }, 2500)

            // Ciclo de animación progresivo para el texto (8s -> 18s -> 30s -> 60s -> Fin)
            const delays = [8000, 18000, 30000, 60000]
            let cycleCount = 0
            let activeTimer: NodeJS.Timeout

            const scheduleNextText = () => {
                if (cycleCount < delays.length) {
                    activeTimer = setTimeout(() => {
                        setShowText(true)
                        setTimeout(() => setShowText(false), 5000)
                        cycleCount++
                        scheduleNextText()
                    }, delays[cycleCount])
                }
            }

            scheduleNextText()

            return () => {
                clearTimeout(modalTimer)
                if (activeTimer) clearTimeout(activeTimer)
                window.removeEventListener('resize', checkMobile)
            }
        } else {
            // Móvil: Configuración inicial realizada
            return () => {
                window.removeEventListener('resize', checkMobile)
            }
        }
    }, [])

    const closeModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsModalOpen(false)
            setIsClosing(false)
        }, 500)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {/* Interfaz de Noticias Pro y Responsiva */}
            <div
                className={`fixed z-[99] flex flex-col items-center transition-all duration-500 pointer-events-none ${
                    isModalOpen ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
                } ${
                    isMobile 
                    ? 'top-1/2 left-0 -translate-y-1/2' // Móvil: En el medio a la izquierda
                    : 'bottom-6 left-6'                // PC: Esquina inferior izquierda
                }`}
            >
                {/* Texto Profesional que sale hacia ARRIBA (Solo PC) */}
                {!isMobile && (
                    <div className={`mb-3 transition-all duration-700 ease-out overflow-hidden flex justify-center ${
                        showText ? 'max-h-20 opacity-100 -translate-y-2' : 'max-h-0 opacity-0 translate-y-4'
                    }`}>
                        <div className="bg-white px-5 py-2 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100">
                            <span className="text-gray-800 font-semibold text-base whitespace-nowrap tracking-tight">
                                ¡Tienes nuevas noticias! 
                            </span>
                        </div>
                    </div>
                )}

                {/* Botón de Noticias responsivo y discreto */}
                <button
                    onClick={openModal}
                    className={`flex items-center group pointer-events-auto focus:outline-none transition-all duration-300 ${
                        isMobile 
                        ? 'bg-[#D1672A]/90 p-2 pr-4 rounded-r-2xl border-white/40 border-y border-r shadow-lg' 
                        : ''
                    }`}
                    title="Ver Noticias"
                >
                    <div 
                        className={`bg-[#D1672A] text-white rounded-full transition-all duration-300 flex items-center justify-center relative ${
                            isMobile ? 'h-9 w-9 opacity-90 animate-[pulse_4s_infinite]' : 'p-4 group-hover:scale-110 border-2 border-white shadow-2xl shadow-[#D1672A]/40'
                        }`}
                    >
                        <Megaphone className={`${isMobile ? 'h-5 w-5' : 'h-7 w-7'}`} />
                        
                        {/* El Count de "1" (Estilo Mensaje - Más pequeño en móvil) */}
                        <div className={`absolute -top-2 -right-2 bg-red-600 text-white rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md ${
                            isMobile ? 'h-5 w-5 text-[10px]' : 'h-6 w-6 text-xs'
                        }`}>
                            1
                        </div>
                    </div>
                </button>
            </div>

            {isModalOpen && (
                <div
                    className={`fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 transition-opacity duration-500 ${isClosing ? "opacity-0" : "opacity-100"
                        }`}
                    onClick={closeModal}
                >
                    <div
                        className={`relative bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[550px] w-full overflow-hidden transition-all duration-500 ${isClosing ? "opacity-0 scale-90" : "opacity-100 scale-100"
                            }`}
                        style={{
                            border: "10px solid white",
                            maxHeight: "85vh",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Borde Interno Verde de Lujo */}
                        <div className="border-[3px] border-[#008066] rounded-[1.4rem] overflow-hidden relative">
                            <button
                                onClick={closeModal}
                                className="absolute right-3 top-3 z-30 bg-white/90 hover:bg-white text-[#008066] rounded-full p-2 shadow-lg transition-all duration-300 hover:rotate-90 border border-[#008066]/20"
                                title="Cerrar"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative w-full h-[70vh] group">
                                <iframe
                                    src="/noticias/PROCESO DE ADMISIÓN 2026 UTTECAM_compressed.pdf"
                                    className="w-full h-full"
                                    title="Proceso de Admisión 2026 UTTECAM"
                                    style={{ border: "none" }}
                                />
                                {/* Botón de descarga/abrir fuera del iframe para mayor comodidad */}
                                <div className="absolute bottom-4 right-4 z-30">
                                    <a 
                                        href="/noticias/PROCESO DE ADMISIÓN 2026 UTTECAM_compressed.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#D1672A] text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-[#b05623] transition-all duration-300 border border-white/30 flex items-center gap-2"
                                    >
                                        <Megaphone className="h-4 w-4" />
                                        Abrir en pantalla completa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
