"use client"

import { motion } from "framer-motion"

interface Patrocinador {
    id: string
    nombre: string
    logo: string
    website: string
    }

    export default function Pleca() {
    const patrocinadores: Patrocinador[] = [
        {
        id: "1",
        nombre: "Puebla",
        logo: "/logoPuebla.png",
        website: "https://www.puebla.gob.mx/",
        },
        {
        id: "2",
        nombre: "Educacion",
        logo: "/logoESE.png",
        website: "https://sep.puebla.gob.mx/",
        },
        {
        id: "3",
        nombre: "EDUCACIÓN",
        logo: "/EDUCACIÓN.png",
        website: "https://dgutyp.sep.gob.mx/",
        },
        {
        id: "4",
        nombre: "EDUCERT",
        logo: "/EDUCERT.jpg",
        website: "https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio",
        },
        {
        id: "5",
        nombre: "EDUCERT2",
        logo: "/EDUCERT2.jpg",
        website: "https://digitalpro.com",
        },
        {
        id: "6",
        nombre: "ANUIES",
        logo: "/ANUIES.png",
        website: "https://smartsolutions.com",
        },
        {
        id: "7",
        nombre: "CACEI",
        logo: "/CACEI.png",
        website: "https://futuretech.com",
        },
        {
        id: "8",
        nombre: "PNT",
        logo: "/PNT.png",
        website: "https://nextgen.com",
        },
        {
        id: "9",
        nombre: "RC",
        logo: "/RC.png",
        website: "https://techflow.com",
        },
        {
        id: "10",
        nombre: "CIEES",
        logo: "/CIEES.png",
        website: "https://codelab.com",
        },
        {
        id: "11",
        nombre: "UTyP",
        logo: "/UTyP.png",
        website: "https://codelab.com",
        },
    ]

    // Triplicar para efecto infinito más suave
    const extendedPatrocinadores = [...patrocinadores, ...patrocinadores, ...patrocinadores]

    return (
        <div className="bg-white border-t border-b border-gray-200 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

            {/* Carrusel infinito */}
            <div className="relative py-4">
            <motion.div
                className="flex space-x-16 items-center"
                animate={{
                x: [0, -100 * (patrocinadores.length / 3) + "%"],
                }}
                transition={{
                x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 60, 
                    ease: "linear",
                },
                }}
            >
                {extendedPatrocinadores.map((patrocinador, index) => (
                <motion.div
                    key={`${patrocinador.id}-${index}`}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.35 }} 
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <a
                    href={patrocinador.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 p-6 w-52 h-28 flex items-center justify-center group"
                    >
                    <img
                        src={patrocinador.logo || "/placeholder.svg"}
                        alt={`Logo de ${patrocinador.nombre}`}
                        className="max-h-16 max-w-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    </a>
                </motion.div>
                ))}
            </motion.div>

            {/* Gradientes laterales
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div> */}
            </div>
        </div>
        </div>
    )
}
