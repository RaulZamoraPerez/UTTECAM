import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";


const datos = [
    {
        id: "leyes",
        titulo: "Leyes",
        documentos: [
            { id: "ley1", titulo: "LEY DE EGRESOS 2023" },
            { id: "ley2", titulo: "LEY DE PRESUPUESTO Y GASTO PÚBLICO RESPONSABLE DEL ESTADO DE PUEBLA" },
            { id: "ley3", titulo: "LEY GENERAL DE CONTABILIDAD GUBERNAMENTAL" },
            { id: "ley4", titulo: "LEY PARA EL ACCESO DE LAS MUJERES A UNA VIDA LIBRE DE VIOLENCIA" },
            { id: "ley5", titulo: "LEY PARA LA IGUALDAD ENTRE MUJERES Y HOMBRES DEL ESTADO DE PUEBLA" },
        ],
    },
    {
        id: "lineamientos",
        titulo: "Lineamientos",
        documentos: [
            { id: "lin1", titulo: "LINEAMIENTOS GENERALES PARA EL SEGUIMIENTO Y EVALUACIÓN DE LOS DOCUMENTOS RECTORES Y PROGRAMAS PRESUPUESTARIOS DE LA ADMINISTRACIÓN PÚBLICA DE PUEBLA" },
            { id: "lin2", titulo: "LINEAMIENTOS PARA EL MONITOREO Y SEGUIMIENTO DEL AVANCE FÍSICO Y FINANCIERO DE LOS INDICADORES DE DESEMPEÑO DE LOS PROGRAMAS PRESUPUESTARIOS" },
            { id: "lin3", titulo: "LINEAMIENTOS PARA LA OPERACIÓN DEL SISTEMA DE INFORMACIÓN PARA EL SEGUIMIENTO A LA PLANEACIÓN Y EVALUACIÓN DEL DESARROLLO EN EL ESTADO" },
            { id: "lin4", titulo: "LINEAMIENTOS PARA LOS PROGRAMAS PRESUPUESTARIOS DE LAS DEPENDENCIAS Y ENTIDADES DE LA ADMINISTRACIÓN PÚBLICA ESTATAL" },
            { id: "lin5", titulo: "LINEAMIENTOS QUE DEBERÁN OBSERVAR LAS DEPENDENCIAS Y ENTIDADES PARAESTATALES DEL GOBIERNO DEL ESTADO DE PUEBLA EN MATERIA DE IGUALDAD SUSTANTIVA" },
            { id: "lin6", titulo: "LINEAMIENTOS CILyND UTTECAM" },
        ],
    },
    {
        id: "codigo",
        titulo: "Código",
        documentos: [
            { id: "cod1", titulo: "CÓDIGO DE CONDUCTA UTTECAM" },
            { id: "cod2", titulo: "CÓDIGO DE ÉTICA" },
            { id: "cod3", titulo: "CÓDIGO DE ÉTICA Y LAS REGLAS DE INTEGRIDAD PARA EL EJERCICIO DE LA FUNCIÓN PÚBLICA" },
        ],
    },
    {
        id: "guias",
        titulo: "Guías",
        documentos: [
            { id: "gui1", titulo: "GUÍA PARA ELABORAR PLANES INSTITUCIONALES DE IGUALDAD SUSTANTIVA" },
        ],
    },
    {
        id: "decreto_creacion",
        titulo: "Decreto de Creación",
        documentos: [
            { id: "dec1", titulo: "DECRETO DE CREACIÓN DE LA UTTECAM" },
            { id: "dec2", titulo: "DECRETO QUE REFORMA LA CONSTITUCIÓN DEL CONSEJO DIRECTIVO (ART. 6)" },
            { id: "dec3", titulo: "DECRETO QUE REFORMA LOS OBJETIVOS DE LA UTTECAM" },
        ],
    },
    {
        id: "manuales",
        titulo: "Manuales",
        documentos: [
            { id: "man1", titulo: "MANUAL DE ORGANIZACIÓN DE LA UTT" },
            { id: "man2", titulo: "MANUAL DE PROCEDIMIENTO PARA LA ATENCIÓN DE QUEJAS POR HOSTIGAMIENTO, ACOSO SEXUAL, LABORAL Y DISCRIMINACIÓN" },
            { id: "man3", titulo: "MANUAL DE PROCEDIMIENTOS DE TUTORÍAS" },
            { id: "man4", titulo: "MANUAL DE PROCEDIMIENTOS UTTECAM" },
            { id: "man5", titulo: "MANUAL DE SEGURIDAD EN INSTITUCIONES DE EDUCACIÓN SUPERIOR ANUIES" },
            { id: "man6", titulo: "MANUAL PARA LA INSTALACIÓN DE UNIDADES DE IGUALDAD SUSTANTIVA" },
        ],
    },
    {
        id: "politicas",
        titulo: "Políticas",
        documentos: [
            { id: "pol1", titulo: "POLÍTICA GENERAL DE IGUALDAD, NO DISCRIMINACIÓN Y DERECHOS HUMANOS" },
        ],
    },
    {
        id: "protocolos",
        titulo: "Protocolos",
        documentos: [
            { id: "pro1", titulo: "PROTOCOLO DE PREVENCIÓN, ACTUACIÓN Y SANCIÓN EN CASOS DE VIOLENCIA" },
        ],
    },
    {
        id: "reglamentos",
        titulo: "Reglamentos",
        documentos: [
            { id: "reg1", titulo: "REGLAMENTO DE LA LEY PARA LA IGUALDAD ENTRE MUJERES Y HOMBRES DEL ESTADO DE PUEBLA" },
            { id: "reg2", titulo: "REGLAMENTO DE ACADEMIAS" },
            { id: "reg3", titulo: "REGLAMENTO DE CERTIFICACIÓN, ACREDITACIÓN Y TITULACIÓN" },
            { id: "reg4", titulo: "REGLAMENTO DE ESTADÍAS DE LOS ALUMNOS EN EL SECTOR PRODUCTIVO" },
            { id: "reg5", titulo: "REGLAMENTO DE INGRESO, PROMOCIÓN Y PERMANENCIA DEL PERSONAL ACADÉMICO (RIPPPA)" },
            { id: "reg6", titulo: "REGLAMENTO DE LA INCUBADORA DE EMPRESAS DE LA UTTECAM" },
            { id: "reg7", titulo: "REGLAMENTO DE PROTECCIÓN CONTRA EXPOSICIÓN AL HUMO DE TABACO DENTRO DE LAS INSTALACIONES DE LA UNIVERSIDAD" },
            { id: "reg8", titulo: "REGLAMENTO DE RESPONSABILIDADES" },
            { id: "reg9", titulo: "REGLAMENTO DE VISITAS INDUSTRIALES" },
            { id: "reg10", titulo: "REGLAMENTO DEL COMITÉ DE ADQUISICIONES, ARRENDAMIENTOS Y SERVICIOS DE LA UTTECAM" },
            { id: "reg11", titulo: "REGLAMENTO DEL CONSEJO DIRECTIVO DE LA UTTECAM" },
            { id: "reg12", titulo: "REGLAMENTO DEL CONSEJO EDITORIAL" },
            { id: "reg13", titulo: "REGLAMENTO DEL PROGRAMA INSTITUCIONAL DE TUTORÍAS" },
            { id: "reg14", titulo: "REGLAMENTO DE SERVICIO SOCIAL DE LA UTTECAM" },
            { id: "reg15", titulo: "REGLAMENTO GENERAL SOBRE EL USO Y FUNCIONAMIENTO DE LA BIBLIOTECA" },
            { id: "reg16", titulo: "REGLAMENTO INTERIOR DE LA UTTECAM" },
            { id: "reg17", titulo: "REGLAMENTO INTERIOR DE TRABAJO DEL PERSONAL DE LA UTTECAM" },
            { id: "reg18", titulo: "REGLAMENTO PARA LA EVALUACIÓN DE LOS APRENDIZAJES" },
            { id: "reg19", titulo: "REGLAMENTO PARA LA REGULARIZACIÓN DE BECAS Y CRÉDITOS EDUCATIVOS" },
            { id: "reg20", titulo: "REGLAMENTO QUE NORMA EL USO DE LOS LABORATORIOS Y EL TALLER DE LA CARRERA DE TECNOLOGÍA DE ALIMENTOS" },
            { id: "reg21", titulo: "REGLAMENTO QUE NORMA EL USO DE LOS LABORATORIOS Y EL TALLER DE LA CARRERA DE MANTENIMIENTO INDUSTRIAL" },
            { id: "reg22", titulo: "REGLAMENTO QUE NORMA EL USO DE LOS LABORATORIOS Y TALLERES DE LA CARRERA DE PROCESOS DE PRODUCCIÓN" },
            { id: "reg23", titulo: "REGLAMENTO QUE REGULA EL USO DE VEHÍCULOS OFICIALES DE LA UTTECAM" },
            { id: "reg24", titulo: "REGLAMENTO QUE REGULA LOS DERECHOS Y OBLIGACIONES DE LOS ALUMNOS" },
            { id: "reg25", titulo: "REQUISITOS DE EQUIVALENCIA ENTRE OTROS SISTEMAS DE EDUCACIÓN SUPERIOR AL DE UTs" },
            { id: "reg26", titulo: "REQUISITOS DE EQUIVALENCIA ENTRE UTs" },
        ],
    },
    {
        id: "convocatoria_personal_academico",
        titulo: "Convocatoria de Personal Académico",
        documentos: [
            { id: "conv1", titulo: "CONVOCATORIA PA" },
        ],
    },
];


export default function Normatividad() {
    return (
        <TablaDocumentosReutilizable
            secciones={datos}
            titulo="Normatividad Institucional"
            descripcion="Explora los documentos académicos por año"
        />
    )
}
