"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function NewsModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        // Verificar si el usuario ya vio el modal hoy
        const checkShouldShowModal = () => {
            const lastShown = localStorage.getItem('uttecam-modal-last-shown')
            const today = new Date().toDateString()
            
            // Si nunca se ha mostrado o si fue mostrado en un día diferente
            if (!lastShown || lastShown !== today) {
                // Mostrar el modal después de 2 segundos (menos molesto)
                const timer = setTimeout(() => {
                    setIsModalOpen(true)
                    // Guardar que se mostró hoy
                    localStorage.setItem('uttecam-modal-last-shown', today)
                }, 2000)
                
                return () => clearTimeout(timer)
            }
        }

        checkShouldShowModal()
    }, [])

    const closeModal = (dontShowToday = false) => {
        if (dontShowToday) {
            // Marcar como visto hoy para que no se muestre más
            localStorage.setItem('uttecam-modal-last-shown', new Date().toDateString())
        }
        
        setIsClosing(true)
        setTimeout(() => {
            setIsModalOpen(false)
            setIsClosing(false)
        }, 500)
    }

    if (!isModalOpen) return null

    return (
        <>
            <div
                className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-opacity duration-500 ${isClosing ? "opacity-0" : "opacity-100"
                    }`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
                onClick={() => closeModal(false)}
            >
                <div
                    className={`relative bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden transition-all duration-500 ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                    style={{
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                        maxHeight: "90vh",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="h-2 w-full" style={{ backgroundColor: "#008066" }}></div>
                    <button
                        onClick={() => closeModal(false)}
                        className="absolute right-4 top-6 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-xl transition-all duration-200 hover:rotate-90 border-2"
                        style={{
                            borderColor: "#008066",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        }}
                        title="Cerrar"
                    >
                        <X className="h-6 w-6" style={{ color: "#008066" }} />
                    </button>
                    <div className="relative" style={{ height: "400px", overflow: "hidden" }}>
                        <img
                            src="/INGRESOUTTECAM2025.webp"
                            alt="Noticia importante"
                            width={600}
                            height={100}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "center 5%" }} 
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)",
                            }}
                        ></div>
                        <div className="absolute bottom-4 left-6 right-6">
                            <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">¡Noticia Importante!</h3>
                            <p className="text-white text-sm drop-shadow-md mb-4">
                                Mantente informado con las últimas novedades de nuestra plataforma
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center">
                                <div className="w-1.5 h-6 rounded-full mr-3" style={{ backgroundColor: "#008066" }}></div>
                                <p className="text-gray-700 text-sm">Haz clic en "Saber más" para tener más información.</p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                                <button
                                    onClick={() => closeModal(true)}
                                    className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200 underline decoration-dotted underline-offset-4"
                                >
                                    No mostrar hoy
                                </button>
                                
                                <button
                                    onClick={() => {
                                        closeModal(true)
                                        window.location.href = '/proceso-admision'
                                    }}
                                    className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl flex-shrink-0"
                                    style={{
                                        backgroundColor: "#D1672A",
                                        boxShadow: "0 6px 12px rgba(209, 103, 42, 0.3)",
                                    }}
                                >
                                    Saber más
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-full" style={{ backgroundColor: "#D1672A" }}></div>
                </div>
            </div>
        </>
    )
}
