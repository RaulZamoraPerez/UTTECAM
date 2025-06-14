"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function NewsModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true)
        }, 300)

        return () => clearTimeout(timer)
    }, [])

    const closeModal = () => {
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
                onClick={closeModal}
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
                        onClick={closeModal}
                        className="absolute right-4 top-6 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-xl transition-all duration-200 hover:rotate-90 border-2"
                        style={{
                            borderColor: "#008066",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        }}
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
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center">
                                <div className="w-1.5 h-6 rounded-full mr-3" style={{ backgroundColor: "#008066" }}></div>
                                <p className="text-gray-700 text-sm">Haz clic en "Saber más" para tener mas información.</p>
                            </div>
                            <button
                                className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl flex-shrink-0"
                                style={{
                                    backgroundColor: "#D1672A",
                                    boxShadow: "0 6px 12px rgba(209, 103, 42, 0.3)",
                                }}
                            >
                                <a href="/proceso-admision">Saber más</a>
                            </button>
                        </div>
                    </div>
                    <div className="h-1 w-full" style={{ backgroundColor: "#D1672A" }}></div>
                </div>
            </div>
        </>
    )
}
