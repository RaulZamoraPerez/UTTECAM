"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ZoomIn, ZoomOut, Contrast, Palette, Volume2, X, Circle, SpaceIcon as Space, RotateCcw } from "lucide-react"

export function AccessibilityButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [zoom, setZoom] = useState(100)
    const [grayscale, setGrayscale] = useState(false)
    const [highContrast, setHighContrast] = useState(false)
    const [invertColors, setInvertColors] = useState(false)
    const [textToSpeech, setTextToSpeech] = useState(false)
    const [underlineLinks, setUnderlineLinks] = useState(false)
    const [largeText, setLargeText] = useState(false)
    const [textSpacing, setTextSpacing] = useState(false)

    // Cargar configuración guardada
    useEffect(() => {
        const savedSettings = localStorage.getItem('accessibilitySettings')
        if (savedSettings) {
            try {
                const settings = JSON.parse(savedSettings)
                setZoom(settings.zoom || 100)
                setGrayscale(settings.grayscale || false)
                setHighContrast(settings.highContrast || false)
                setInvertColors(settings.invertColors || false)
                setTextToSpeech(settings.textToSpeech || false)
                setUnderlineLinks(settings.underlineLinks || false)
                setLargeText(settings.largeText || false)
                setTextSpacing(settings.textSpacing || false)
            } catch (e) {
                console.error('Error loading accessibility settings:', e)
            }
        }
    }, [])

    // Guardar configuración
    useEffect(() => {
        const settings = {
            zoom,
            grayscale,
            highContrast,
            invertColors,
            textToSpeech,
            underlineLinks,
            largeText,
            textSpacing
        }
        localStorage.setItem('accessibilitySettings', JSON.stringify(settings))
    }, [zoom, grayscale, highContrast, invertColors, textToSpeech, underlineLinks, largeText, textSpacing])

    // Aplicar zoom
    useEffect(() => {
        document.documentElement.style.fontSize = `${zoom}%`
    }, [zoom])

    // Aplicar filtros (escala de grises e invertir colores)
    useEffect(() => {
        const filters: string[] = []
        if (grayscale) filters.push('grayscale(100%)')
        if (invertColors) filters.push('invert(1)')
        
        document.documentElement.style.filter = filters.length > 0 ? filters.join(' ') : 'none'
    }, [grayscale, invertColors])

    // Aplicar alto contraste
    useEffect(() => {
        const root = document.documentElement
        if (highContrast) {
            root.classList.add('high-contrast-mode')
        } else {
            root.classList.remove('high-contrast-mode')
        }
    }, [highContrast])

    // Aplicar espaciado de texto
    useEffect(() => {
        const root = document.documentElement
        if (textSpacing) {
            root.classList.add('text-spacing-mode')
        } else {
            root.classList.remove('text-spacing-mode')
        }
    }, [textSpacing])

    // Manejar lectura de texto (corregido)
    useEffect(() => {
        if (textToSpeech) {
            const handleSelection = () => {
                const selectedText = window.getSelection()?.toString()
                if (selectedText && selectedText.trim()) {
                    window.speechSynthesis.cancel() // Cancelar lectura anterior
                    const utterance = new SpeechSynthesisUtterance(selectedText)
                    utterance.lang = "es-ES"
                    window.speechSynthesis.speak(utterance)
                }
            }
            document.addEventListener("mouseup", handleSelection)
            
            // Cleanup
            return () => {
                document.removeEventListener("mouseup", handleSelection)
                window.speechSynthesis.cancel()
            }
        } else {
            window.speechSynthesis.cancel()
        }
    }, [textToSpeech])

    // Función para restablecer todo
    const resetAllSettings = () => {
        setZoom(100)
        setGrayscale(false)
        setHighContrast(false)
        setInvertColors(false)
        setTextToSpeech(false)
        setUnderlineLinks(false)
        setLargeText(false)
        setTextSpacing(false)
        window.speechSynthesis.cancel()
    }

    const increaseZoom = () => setZoom((prev) => Math.min(prev + 10, 200))
    const decreaseZoom = () => setZoom((prev) => Math.max(prev - 10, 50))

    return (
        <>
            {/* Botón flotante principal */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-18 h-18 rounded-full shadow-2xl flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#0a9782]/50 bg-white border-4 border-[#0a9782]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Abrir menú de accesibilidad"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-8 h-8 text-[#0a9782]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <img 
                                    src="/logos/accesibilidad.jpg" 
                                    alt="Accesibilidad" 
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Panel de opciones */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border-4 border-[#0a9782] overflow-hidden"
                    >
                        {/* Header con imagen y título */}
                        <div className="px-6 py-4 bg-white border-b-2 border-[#0a9782] flex items-center gap-3">
                            <img 
                                src="/logos/accesibilidad.jpg" 
                                alt="Accesibilidad" 
                                className="w-16 h-16 rounded-full object-cover border-2 border-[#0a9782]"
                            />
                            <span className="font-bold text-xl text-gray-800">Accesibilidad</span>
                        </div>

                        {/* Opciones */}
                        <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto bg-white">
                            {/* Zoom */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-2"
                            >
                                <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Circle className="w-2 h-2 fill-[#0a9782] text-[#0a9782]" />
                                    Zoom de Texto ({zoom}%)
                                </p>
                                <div className="flex gap-2">
                                    <motion.button
                                        onClick={decreaseZoom}
                                        disabled={zoom <= 50}
                                        className="flex-1 px-4 py-2 rounded-lg bg-[#0a9782] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0a9782]"
                                        whileHover={{ scale: zoom > 50 ? 1.05 : 1 }}
                                        whileTap={{ scale: zoom > 50 ? 0.95 : 1 }}
                                    >
                                        <ZoomOut className="w-4 h-4" />
                                        <span className="text-sm">Reducir</span>
                                    </motion.button>
                                    <motion.button
                                        onClick={increaseZoom}
                                        disabled={zoom >= 200}
                                        className="flex-1 px-4 py-2 rounded-lg bg-[#ff6900] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                                        whileHover={{ scale: zoom < 200 ? 1.05 : 1 }}
                                        whileTap={{ scale: zoom < 200 ? 0.95 : 1 }}
                                    >
                                        <ZoomIn className="w-4 h-4" />
                                        <span className="text-sm">Ampliar</span>
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Escala de grises */}
                            <ToggleOption
                                icon={<Palette className="w-5 h-5" />}
                                label="Escala de Grises"
                                active={grayscale}
                                onClick={() => setGrayscale(!grayscale)}
                                delay={0.15}
                                activeColor="#16a34a"
                            />

                            {/* Alto contraste */}
                            <ToggleOption
                                icon={<Contrast className="w-5 h-5" />}
                                label="Alto Contraste"
                                active={highContrast}
                                onClick={() => setHighContrast(!highContrast)}
                                delay={0.2}
                                activeColor="#2563eb"
                            />

                            {/* Invertir colores */}
                            <ToggleOption
                                icon={<Palette className="w-5 h-5 rotate-180" />}
                                label="Invertir Colores"
                                active={invertColors}
                                onClick={() => setInvertColors(!invertColors)}
                                delay={0.25}
                                activeColor="#16a34a"
                            />

                            {/* Lectura de texto */}
                            <ToggleOption
                                icon={<Volume2 className="w-5 h-5" />}
                                label="Lectura de Texto"
                                active={textToSpeech}
                                onClick={() => setTextToSpeech(!textToSpeech)}
                                delay={0.3}
                                activeColor="#2563eb"
                                subtitle="Selecciona texto para escucharlo"
                            />

                            {/* Espaciado de texto */}
                            <ToggleOption
                                icon={<Space className="w-5 h-5" />}
                                label="Espaciado de Texto"
                                active={textSpacing}
                                onClick={() => setTextSpacing(!textSpacing)}
                                delay={0.45}
                                activeColor="#16a34a"
                                subtitle="Mayor espacio entre letras y líneas"
                            />

                            {/* Botón Restablecer */}
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={resetAllSettings}
                                className="w-full mt-4 p-3 rounded-xl bg-[#0a9782] hover:bg-[#0a9782] text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <RotateCcw className="w-5 h-5" />
                                <span>Restablecer Todo</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Estilos CSS globales para las clases de accesibilidad */}
            <style>{`
                .high-contrast-mode {
                    filter: contrast(150%) !important;
                }
                
                .underline-links-mode a {
                    text-decoration: underline !important;
                }
                
                .large-text-mode * {
                    font-size: 120% !important;
                    line-height: 1.6 !important;
                }
                
                .text-spacing-mode * {
                    letter-spacing: 0.12em !important;
                    word-spacing: 0.16em !important;
                    line-height: 1.8 !important;
                }

                @media (max-width: 640px) {
                    .fixed.bottom-6.right-6 {
                        bottom: 1rem !important;
                        right: 1rem !important;
                    }
                    
                    .fixed.bottom-24.right-6 {
                        bottom: 5rem !important;
                        right: 1rem !important;
                        left: 1rem !important;
                        width: auto !important;
                    }
                }
            `}</style>
        </>
    )
}

// Componente reutilizable para opciones toggle
function ToggleOption({
    icon,
    label,
    active,
    onClick,
    delay,
    activeColor,
    subtitle,
}: {
    icon: React.ReactNode
    label: string
    active: boolean
    onClick: () => void
    delay: number
    activeColor: string
    subtitle?: string
}) {
    return (
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            onClick={onClick}
            className={`w-full p-4 rounded-xl flex items-center gap-3 font-semibold transition-all ${active
                    ? "text-white shadow-lg transform scale-[1.02]"
                    : "bg-gray-50 text-gray-700 border-2 border-gray-200"
                }`}
            style={active ? { backgroundColor: activeColor } : {}}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div animate={active ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                {icon}
            </motion.div>
            <div className="flex-1 text-left">
                <div>{label}</div>
                {subtitle && <div className="text-xs opacity-80 font-normal mt-0.5">{subtitle}</div>}
            </div>
            {/* Switch toggle animado */}
            <motion.div className={`w-12 h-6 rounded-full relative ${active ? "bg-white/30" : "bg-gray-300"}`} layout>
                <motion.div
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md"
                    animate={{ x: active ? 24 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </motion.div>
        </motion.button>
    )
}
