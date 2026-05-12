"use client"

import { useState, useEffect } from "react"
import { X, Megaphone, ExternalLink } from "lucide-react"

export default function NewsModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [showText, setShowText] = useState(false)
    // Controla el fade-in de la mascota al cargar
    const [mascotaCargada, setMascotaCargada] = useState(false)

    useEffect(() => {
        const isMobileDevice = window.innerWidth <= 768
        setIsMobile(isMobileDevice)

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        window.addEventListener('resize', checkMobile)

        // Preload de la imagen de admisión para caché inmediato
        const imgPreload = new window.Image()
        imgPreload.src = "/noticias/adminsion.jpg"

        if (!isMobileDevice) {
            const modalTimer = setTimeout(() => {
                setIsModalOpen(true)
            }, 2500)

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
            setMascotaCargada(false)
        }, 500)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {/* Botón flotante de noticias */}
            <div
                className={`fixed z-[99] flex flex-col items-center transition-all duration-500 pointer-events-none ${
                    isModalOpen ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
                } ${
                    isMobile 
                    ? 'top-1/2 left-0 -translate-y-1/2'
                    : 'bottom-6 left-6'
                }`}
            >
                {/* Texto que aparece (Solo PC) */}
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
                        <div className={`absolute -top-2 -right-2 bg-red-600 text-white rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md ${
                            isMobile ? 'h-5 w-5 text-[10px]' : 'h-6 w-6 text-xs'
                        }`}>
                            1
                        </div>
                    </div>
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className={`fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 transition-opacity duration-500 ${
                        isClosing ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={closeModal}
                >
                    {/* Wrapper overflow-visible para la mascota */}
                    <div
                        className={`relative max-w-[550px] w-full transition-all duration-500 ${
                            isClosing ? "opacity-0 scale-90" : "opacity-100 scale-100"
                        }`}
                        style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.50))" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Mascota en esquina inferior-derecha */}
                        <img
                            src="/noticias/motocle.png"
                            alt="Mascota UTTECAM"
                            loading="eager"
                            onLoad={() => setMascotaCargada(true)}
                            className={`absolute -bottom-10 -right-10 w-44 h-44 sm:-bottom-12 sm:-right-14 sm:w-52 sm:h-52 object-contain z-30 animate-float pointer-events-none transition-opacity duration-500 ${
                                mascotaCargada ? 'opacity-100' : 'opacity-0'
                            }`}
                        />

                        {/* Tab saliente en el borde superior-central */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 bg-[#D1672A] text-white text-xs font-bold px-4 py-1.5 rounded-t-xl shadow-md tracking-wide">
                                <ExternalLink className="h-3 w-3" />
                                Presiona para más detalles
                            </span>
                        </div>

                        {/* Contenido del modal — sin borde blanco extra */}
                        <div
                            className="relative bg-white rounded-[2rem] overflow-hidden"
                            style={{ maxHeight: "85vh" }}
                        >
                                {/* Botón cerrar — izquierda para no chocar con mascota */}
                                <button
                                    onClick={closeModal}
                                    className="absolute left-3 top-3 z-30 bg-white/90 hover:bg-white text-gray-600 hover:text-red-500 rounded-full p-2 shadow-lg transition-all duration-300 hover:rotate-90 border border-gray-200"
                                    title="Cerrar"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                {/* Imagen clickeable que abre el PDF */}
                                <a
                                    href="/noticias/PROCESO DE ADMISION 2026 UTTECAM.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block cursor-pointer group"
                                    title="Ver convocatoria completa"
                                >
                                    <img
                                        src="/noticias/adminsion.jpg"
                                        alt="Proceso de Admisión 2026 UTTECAM — clic para abrir"
                                        loading="eager"
                                        className="w-full h-auto block rounded-[1.4rem] group-hover:brightness-95 transition-all duration-300"
                                        style={{ maxHeight: "82vh" }}
                                    />
                                </a>
                        </div>


                    </div>
                </div>
            )}
        </>
    )
}
