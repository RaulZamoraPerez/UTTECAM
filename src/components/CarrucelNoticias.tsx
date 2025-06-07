"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function EducationalCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const courses = [
        {
            id: 1,
            image: "/noticias/tequios2.jpg",
        },
        {
            id: 2,
            image: "/noticias/EntregaLentes.jpg",
        },
        {
            id: 3,
            image: "/noticias/ConsejoV.jpg",
        },
        {
            id: 4,
            image: "/noticias/tequios2.jpg",
        },
        {
            id: 5,
            image: "/noticias/tequios4.jpg",
        },
        {
            id: 6,
            image: "/noticias/tequios5.jpg",
        },
        {
            id: 7,
            image: "/noticias/Expo2.jpg",
        },
        {
            id: 8,
            image: "/noticias/Expo1.jpg",
        },
        {
            id: 9,
            image: "/noticias/tequios6.jpg",
        },
    ]


    const extendedCourses = [...courses, ...courses, ...courses]

    const slides = []
    for (let i = 0; i < extendedCourses.length; i += 3) {
        slides.push(extendedCourses.slice(i, i + 3))
    }

    const totalSlides = Math.ceil(courses.length / 3)
    const startIndex = totalSlides 

    const nextSlide = () => {
        setCurrentSlide((prev) => prev + 1)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => prev - 1)
    }

    useEffect(() => {
        if (currentSlide >= totalSlides * 2) {
            setTimeout(() => {
                setCurrentSlide(totalSlides)
            }, 500)
        } else if (currentSlide < totalSlides) {
            setTimeout(() => {
                setCurrentSlide(totalSlides * 2 - 1)
            }, 500)
        }
    }, [currentSlide, totalSlides])

    useEffect(() => {
        setCurrentSlide(startIndex)
    }, [startIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center bg-[#f1f1f1]">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#D35400] mb-4">Noticias de la universidad</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Aquí encontrarás las últimas noticias y actualizaciones de la universidad, incluyendo eventos, anuncios importantes y más.
                </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto px-16">
                <div className="overflow-hidden rounded-lg">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slideGroup, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4 px-2">
                                {slideGroup.map((course, courseIndex) => (
                                    <div key={`${course.id}-${slideIndex}-${courseIndex}`} className="flex-1">
                                        <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                                            <div className="relative h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] w-full">
                                                <img
                                                    src={course.image || "/placeholder.svg?height=300&width=400"}
                                                    alt={`Curso ${course.id}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {slideGroup.length < 3 &&
                                    Array.from({ length: 3 - slideGroup.length }).map((_, emptyIndex) => (
                                        <div key={`empty-${slideIndex}-${emptyIndex}`} className="flex-1">
                                            <div className="overflow-hidden rounded-lg shadow-lg bg-gray-100">
                                                <div className="aspect-[4/3] relative flex items-center justify-center">
                                                    <span className="text-gray-400">Sin contenido</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#0A9782] backdrop-blur-sm hover:bg-[#D1672A] shadow-lg border border-gray-200 flex items-center justify-center z-10 transition-all duration-200 hover:scale-110"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6 text-white" />
                    <span className="sr-only">Anterior</span>
                </button>

                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#0A9782] backdrop-blur-sm hover:bg-[#D1672A] e shadow-lg border border-gray-200 flex items-center justify-center z-10 transition-all duration-200 hover:scale-110"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6 text-white" />
                    <span className="sr-only">Siguiente</span>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6 mb-5">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${(currentSlide % totalSlides) === index ? "bg-[#D35400] scale-110" : "bg-gray-300"
                                }`}
                            onClick={() => setCurrentSlide(startIndex + index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
