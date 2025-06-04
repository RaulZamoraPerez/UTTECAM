import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable"


    const datos = [
        {
        id: "2018",
        titulo: "Productos de Investigación 2018",
        documentos: [
            { id: "doc1", titulo: "El efecto de la delincuencia en las estrategias de gestión" },
            { id: "doc2", titulo: "Modelo de control interno administrativo" },
            { id: "doc3", titulo: "Potencial tecnológico de las micro y pequeñas" },
        ],
    },
    {
        id: "2019",
        titulo: "Productos de Investigación 2019",
        documentos: [
            { id: "doc4", titulo: "Aplicación de las dos primeras etapas del modelo" },
            { id: "doc5", titulo: "Efecto de la corrupción" },
            { id: "doc6", titulo: "Remesas y migración en el municipio de Tecamachalco Puebla, México" },
            { id: "doc7", titulo: "Strategies for the competitiveness" },
        ],
    },
    {
        id: "2020",
        titulo: "Productos de Investigación 2020",
        documentos: [
            { id: "doc8", titulo: "Aspectos culturales del comercio informal" },
            { id: "doc9", titulo: "Challenges and perspectives for the implementation" },
            { id: "doc10", titulo: "Coffee production and marketing in the municipality" },
            { id: "doc11", titulo: "Deterioro de la salud por causa de las vibraciones" },
            { id: "doc12", titulo: "Drone sembrador" },
            { id: "doc13", titulo: "Imagen pública de la micro y pequeña empresa" },
            { id: "doc14", titulo: "Impacto de las tecnologías de procesamiento" },
            { id: "doc15", titulo: "Propuesta de un plan de negocios para papel picado Huixcolotla" },
            { id: "doc16", titulo: "Sentido artificial ultrasónico" },
            { id: "doc17", titulo: "Volviendo a trabajar prótesis electrónica" },
        ],
    },
    {
        id: "2021",
        titulo: "Productos de Investigación 2021",
        documentos: [
            { id: "doc18", titulo: "A review on the effect on phytochemical" },
            { id: "doc19", titulo: "Diseño y construcción de celda de manufactura" },
            { id: "doc20", titulo: "El impacto de la aplicación de estrategias mercadológicas" },
            { id: "doc21", titulo: "Implementación de mantenimiento proactivo" },
        ],
    },
    {
        id: "2022",
        titulo: "Productos de Investigación 2022",
        documentos: [
            { id: "doc22", titulo: "Análisis del impacto de las asignaturas" },
            { id: "doc23", titulo: "Analysis of the extraction process" },
            { id: "doc24", titulo: "Analysis of the low level of achievement" },
            { id: "doc25", titulo: "Capacitación y desarrollo de habilidades directivas" },
            { id: "doc26", titulo: "Diseño de un sistema de suministro eléctrico" },
            { id: "doc27", titulo: "Efecto de un fitoestimulador a base de manihot" },
            { id: "doc28", titulo: "Evaluación de calci comprimidos" },
            { id: "doc29", titulo: "Impacto laboral de la covid-19" },
            { id: "doc30", titulo: "Production structure and commercialization" },
            { id: "doc31", titulo: "Quantum-chemical analysis of the interactions" },
            { id: "doc32", titulo: "Revisión de herramientas para crear entornos personalizados" },
            { id: "doc33", titulo: "Study of the energy performance of solar biocells" },
        ],
    },
    {
        id: "2023",
        titulo: "Productos de Investigación 2023",
        documentos: [
            { id: "doc34", titulo: "Analysis of the interactions of capsaicin" },
            { id: "doc35", titulo: "Banco de estudio de casos de electroneumática avanzada" },
            { id: "doc36", titulo: "Chemical-quantum study" },
            { id: "doc37", titulo: "Creación, documentación y registro de la marca cuatzo lácteos y derivados" },
            { id: "doc38", titulo: "Design and construction of a knife sharpening machine" },
            { id: "doc39", titulo: "Design and construction of a pid control" },
            { id: "doc40", titulo: "Export of vegetables in the rural development" },
            { id: "doc41", titulo: "Implementación de manual de mantenimiento" },
            { id: "doc42", titulo: "Importancia del monitoreo de vibraciones" },
            { id: "doc43", titulo: "Las habilidades directivas y el clima organizacional en los micro y pequeñas empresas" },
            { id: "doc44", titulo: "Locator system for lost pets based" },
            { id: "doc45", titulo: "Metabolitos secundarios de entomopatógenos" },
            { id: "doc46", titulo: "Planteamiento de aprendizaje basado en proyectos" },
            { id: "doc47", titulo: "Tipo de turismo en Tecamachalco y zona" },
            { id: "doc48", titulo: "Trabajo decente bajo la perspectiva" },
        ],
    },
    {
        id: "2024",
        titulo: "Productos de Investigación 2024",
        documentos: [
            { id: "doc49", titulo: "Análisis in silico de las interacciones químico-cuánticas de los aminoácidos del Factor nuclear kappa-B y el ácido Zoledrónico" },
            { id: "doc50", titulo: "Analysis of caffeine and its interaction" },
            { id: "doc51", titulo: "Analysis of hyperglycemia comparing" },
            { id: "doc52", titulo: "Analysis of the sites cortisol on unsulin" },
            { id: "doc53", titulo: "Analysis of the sites of quantum chemical" },
            { id: "doc54", titulo: "Analysisi of ivermectin" },
            { id: "doc55", titulo: "Construyendo puentes de diálogo: el rol de las universidades para mitigar la polarización social" },
            { id: "doc56", titulo: "Demonstration of nicotine dependency by interacting" },
            { id: "doc57", titulo: "Desarrollo comunitario sostenible" },
            { id: "doc58", titulo: "Diagnóstico de inclusión financiera en el municipio de Tecamachalco, Puebla, México" },
            { id: "doc59", titulo: "Diseño y fabricación de un prototipo" },
            { id: "doc60", titulo: "Diseño y fabricación de un prototipo secador de lecho fluidizado para especies" },
            { id: "doc61", titulo: "Estudio del comportamiento de la velocidad de migración de alcoholes alifáticos (C1-C5) en TLC con sílica gel de acuerdo a los principios de química clásica y química cuántica" },
            { id: "doc62", titulo: "Estudio de las interacciones químico-cuánticas del ácido elágico y su influencia óxido-reductiva en el her2 y el cáncer de seno" },
            { id: "doc63", titulo: "Heliopsis longipes S.F. Blake, una planta indígena con “Raíces de Oro”: Generalidades y Potencial Biotecnológico" },
            { id: "doc64", titulo: "Implementación de metodologías" },
            { id: "doc65", titulo: "In silico demonstrations of anti-aging with" },
            { id: "doc66", titulo: "Las estrategias operativas y su influencia en el desempeño económico de las micro y pequeñas empresas de Tecamachalco, Puebla, México" },
            { id: "doc67", titulo: "La ventaja competitiva: una perspectiva desde la teoría de Sistemas. Micro y Pequeñas Empresas en Tecamachalco, Puebla, México" },
            { id: "doc68", titulo: "Modelado del proceso de secado en lecho fluidizado de pirul (Schinus molle L.) Hojas" },
            { id: "doc69", titulo: "Resultados de la investigación sobre los factores docentes que afectan la actitud de los estudiantes en el aula" },
            { id: "doc70", titulo: "Revalorización de hojas de canela mediante un compuesto fenólico proceso de extracción: una optimización mediante caja-diseño Behnken" },
            { id: "doc71", titulo: "Re-valorization of red habanero chili pepper" },
            { id: "doc72", titulo: "Spray-drying of Escontria chiotilla" },
            { id: "doc73", titulo: "Study of the chemical-quantum" },
            { id: "doc74", titulo: "Valoración in silico e in vivo de la toxicidad del Acetamiprid en lombrices Eisenia fetida S. y el posible daño en el ser humano" },
        ],
    },
    {
        id: "2025",
        titulo: "Productos de Investigación 2025",
        documentos: [
            { id: "doc75", titulo: "Pertinencia del financiamiento en las MIPYMES de la cabecera Municipal de Tecamachalco" },
            { id: "doc76", titulo: "Gastronomía en Tecamachalco, Puebla, México y zona de influencia" },
            { id: "doc77", titulo: "¿Por qué tenemos que dormir mucho y_profundo? Una comprobación de la bondad antioxidante de la melatonina (hormona del sueño) usando química cuántica" },
        ],
    },
    {
        id: "1",
        titulo: "Catalogo de servicios tecnológicos",
        documentos: [
            { id: "79", titulo: "Servicios tecnológicos que la UTTECAM ofrece al sector productivo de bienes y servicios" },
        ],
    },
    ]

export default function Vinculacion() {
    return (
        <TablaDocumentosReutilizable
            secciones={datos}
            titulo="Repositorio Digital de Productos de Investigación"
            descripcion="Explora los productos de investigación generados por la comunidad académica de la institución, organizados por año y tipo de documento."
        />
    )
}
