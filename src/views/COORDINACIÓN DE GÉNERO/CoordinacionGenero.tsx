import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2";

const datos = [
    {   
        id: "1",
        titulo: "Apartado 1",
        documentos: [ 
            { 
                id: "Protocolo del comite de igualdad", 
                titulo: "Protocolo del comité de igualdad",
                archivo: "/Coordiancion de genero/apartado 1/Protocolo del comite de igualdad laboral.jpg"
            },
            {
                id: "Nombramiento",
                titulo: "Nombramientos del comite de igualdad laboral",
                archivo: "/Coordiancion de genero/apartado 1/nombramiento.jpg"
            },
            {
                id: "Organigrama comite de igualdad laboral",
                titulo: "Organigrama comite de igualdad laboral",
                archivo: "/Coordiancion de genero/apartado 1/organigrama comite de igualdad laboral.jpg"
            }

        ]
    },
    {
        id: "2",
        titulo: "Apartado Protocolo de prevención, actuación y sanción en casos de violencia",
        documentos: [
            { 
                id: "doc2", 
                titulo: "POLITICA DE IGUALDAD LABORAL Y NO DISCRIMINACIÓN.pdf", 
                archivo: "/Coordiancion de genero/2.- PROTOCOLO DE PREVENCIÓN, ACTUACIÓN Y SANCIÓN EN CASOS DE VIOLENCIA/POLITICA DE IGUALDAD LABORAL Y NO DISCRIMINACIÓN.pdf" 
            },
        ],
    },
    {
        id: "3",
        titulo: "Apartado Plan de capacitación anual coordinación de género 2025",
        documentos: [
            { 
                id: "doc3", 
                titulo: "PLAN DE CAPACITACION ANUAL COORDINACION DE GENERO 2025.pdf", 
                archivo: "/Coordiancion de genero/3.-PLAN DE CAPACITACIÓN ANUAL  COORDINACION DE GENERO 2025/PLAN DE CAPACITACION ANUAL  COORDINACION DE GENERO 2025.pdf" 
            }
        ],
    },
    {
        id: "4",
        titulo: "Apartado Guía de lenguaje incluyente para la administración pública del Estado de Puebla",
        documentos: [
            { 
                id: "doc4a", 
                titulo: "Guía_de_Lenguaje_Incluyente_para_la_Administración_Pública_del_Estado_de_Puebla.pdf", 
                archivo: "/Coordiancion de genero/4.-Guía de Lenguaje Incluyente para la Administración Pública del Estado de Puebla/Guía_de_Lenguaje_Incluyente_para_la_Administración_Pública_del_Estado_de_Puebla.pdf" 
            },
            { 
                id: "doc4b", 
                titulo: "Lineamientos Lenguaje Incluyente.pdf", 
                archivo: "/Coordiancion de genero/4.-Guía de Lenguaje Incluyente para la Administración Pública del Estado de Puebla/Lineamientos Lenguaje Incluyente.pdf" 
            },
            { 
                id: "doc4c", 
                titulo: "Lineamientos que deberan Observar las Dependencias y Entidades Paraestatales del Gob del Edo de Puebla en materia de Igualdad Sustantiva_2032020.pdf", 
                archivo: "/Coordiancion de genero/4.-Guía de Lenguaje Incluyente para la Administración Pública del Estado de Puebla/Lineamientos que deberan Observar las Dependencias y Entidades Paraestatales del Gob del Edo de Puebla en materia de Igualdad Sustantiva_2032020.pdf" 
            }
        ],
    },
    {
        id: "5",
        titulo: "Apartado Violentómetro UTTECAM",
        documentos: [
            { 
                id: "doc5", 
                titulo: "VIOLENTÓMETRO UTTECAM.pdf", 
                archivo: "/Coordiancion de genero/5.- VIOLENTÓMETRO UTTECAM/VIOLENTÓMETRO UTTECAM.pdf" 
            }
        ],
    },
    {
        id: "6",
        titulo: "Apartado Acosómetro UTTECAM",
        documentos: [
            { 
                id: "doc6", 
                titulo: "ACOSOMETRO UTTECAM.pdf", 
                archivo: "/Coordiancion de genero/6.- ACOSOMETRO UTTECAM/ACOSOMETRO UTTECAM.pdf" 
            }
        ],
    },
    {
        id: "7",
        titulo: "Apartado Lactario",
        documentos: [
            { 
                id: "doc7a", 
                titulo: "Reglamento de Lactario.pdf", 
                archivo: "/Coordiancion de genero/7.- LACTARIO/Reglamento de Lactario.pdf" 
            },
            { 
                id: "doc7b", 
                titulo: " Galería del Lactario - Ver en Facebook", 
                archivo: "/Coordiancion de genero/7.- LACTARIO/lactario.jpg",
                facebookLink: "https://www.facebook.com/share/p/1JCimPbdD4/?mibextid=wwXIfr"
            }
        ]
    },
    {
        id: "8",
        titulo: "Apartado Día Naranja",
        documentos: [
          
           
            { 
                id: "doc8d", 
                titulo: "🎭 Obra Voces en Naranja - Ver en Facebook", 
                archivo: "/Coordiancion de genero/8.- DÍA NARANJA/Obra Voces en Naranja/dia naranja.jpg",
                facebookLink: "https://m.facebook.com/story.php?story_fbid=1204590451701511&id=100064517027031&mibextid=wwXIfr"
            }
        ]
    },
];


export default function Coordinacion() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="COORDINACIÓN DE GÉNERO"
            descripcion="Explora Coordinacion de genero y recursos disponibles para el desarrollo profesional del personal docente, organizados por año y tipo de documento."
        />
    )
}
