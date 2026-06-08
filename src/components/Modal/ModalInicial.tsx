"use client"

import { useState, useEffect } from "react"
import { X, Bell, ExternalLink } from "lucide-react"

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
                {/* Tooltip de texto (Solo PC) */}
                {!isMobile && (
                    <div className={`mb-3 transition-all duration-500 ease-out overflow-hidden flex justify-center ${
                        showText ? 'max-h-20 opacity-100 -translate-y-1' : 'max-h-0 opacity-0 translate-y-2'
                    }`}>
                        <div style={{
                            background: 'rgba(15, 23, 42, 0.82)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.10)',
                            borderRadius: '999px',
                            padding: '6px 16px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
                        }}>
                            <span style={{
                                color: 'rgba(255,255,255,0.88)',
                                fontSize: '0.78rem',
                                fontWeight: 500,
                                letterSpacing: '0.03em',
                                whiteSpace: 'nowrap',
                                fontFamily: 'Inter, sans-serif',
                            }}>
                                Nuevas noticias disponibles
                            </span>
                        </div>
                    </div>
                )}

                <button
                    onClick={openModal}
                    className={`flex items-center group pointer-events-auto focus:outline-none transition-all duration-300`}
                    title="Ver Noticias"
                    style={isMobile ? {
                        background: 'rgba(255,255,255,0.88)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderLeft: 'none',
                        borderRadius: '0 10px 10px 0',
                        padding: '6px 6px 6px 4px',
                        boxShadow: '2px 2px 12px rgba(0,0,0,0.12)',
                    } : {}}
                >
                    <div 
                        className={`transition-all duration-300 flex items-center justify-center relative ${
                            isMobile ? '' : 'group-hover:scale-110'
                        }`}
                        style={{
                            background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            borderRadius: '50%',
                            width: isMobile ? '28px' : '52px',
                            height: isMobile ? '28px' : '52px',
                            flexShrink: 0,
                            boxShadow: isMobile
                                ? 'none'
                                : '0 4px 20px rgba(0,0,0,0.15), 0 0 0 4px rgba(255,255,255,0.35)',
                            border: isMobile ? 'none' : '1.5px solid rgba(255,255,255,0.8)',
                        }}
                    >
                        <Bell
                            style={{
                                color: '#0f766e',
                                width: isMobile ? '14px' : '22px',
                                height: isMobile ? '14px' : '22px',
                            }}
                        />
                        {/* Badge */}
                        <div
                            style={{
                                position: 'absolute',
                                top: isMobile ? '-3px' : '-4px',
                                right: isMobile ? '-3px' : '-4px',
                                width: isMobile ? '12px' : '18px',
                                height: isMobile ? '12px' : '18px',
                                background: 'linear-gradient(135deg, #0d9488, #0f766e)',
                                borderRadius: '50%',
                                color: '#fff',
                                fontSize: isMobile ? '7px' : '9px',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 1px 4px rgba(13,148,136,0.4)',
                            }}
                        >
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
                                    href="/noticias/PROCESO DE ADMISION 2026 UTTECAM.pdf  "
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
