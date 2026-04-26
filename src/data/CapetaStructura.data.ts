export interface DataCarpetas {

  id: string;
  titulo: string;
  subTitulo: string;
  subCarpetas?: ({
    title: string;
    subcarpetas?: {
      title: string;
      documentos?: {
        id: string;
        titulo: string;
        archivo: string;
      }[];
    }[];
    documentos?: undefined;
  } | {
    title: string;
    documentos?: {
      id: string;
      titulo: string;
      archivo: string;
    }[];
    subcarpetas?: undefined;
  })[];
}

export const data: DataCarpetas = {
  id: "seccion2",
  titulo: "Sistema de gestion de calidad",
  subTitulo: " instrucciones de trabajo",

  subCarpetas: [
    {
      title: "IT Direccion de Extensión Universitaria",
      subcarpetas: [
        {
          title: "Prensa y Difusión",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Medios de Expresion.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Medios de Expresión.pdf",
            },
          ],
        },
        {
          title: "Dirección de Extensión Universitaria",
          documentos: [
            {
              id: "doc2",
              titulo: "IT Actividades de Extension Universitaria.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades de Extension Universitaria con la Comunidad.pdf",
            },
          ],
        },
        {
          title: "Servicio Médico",
          documentos: [
            {
              id: "doc3",
              titulo: "IT Atención y Preservacion de la Salud.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Atención y Preservación de la Salud.pdf",
            },
          ],
        },
        {
          title: "Actividades Culturales y Deportivas",
          documentos: [
            {
              id: "doc4",
              titulo: "IT Actividades Culturales y Deportivas.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Actividades Culturales y Deportivas.pdf",
            },
          ],
        },
        {
          title: "Subdirección de Difusión y Divulgación Universitaria",
          documentos: [
            {
              id: "doc5",
              titulo: "IT Difusión y Divulgación.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Difusion y Divulgacion.pdf",
            },
            {
              id: "doc6",
              titulo: "Matriz de Comunicación.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Matriz de Comunicación.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Subdirección de Servicios Escolares",
      subcarpetas: [
        {
          title: "Servicios Bibliotecarios",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Servicios Bibliotecarios.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios Bibliotecarios.pdf",
            },
          ],
        },

        {
          title: "Servicios Estudiantiles",
          documentos: [
            {
              id: "doc2",
              titulo:
                "IT Seguimiento a Convocatorias de Becas Internas y Externas para Estudiantes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Seguimiento a Convocatorias de Becas Internas y Externas para Estudiaantes.pdf",
            },
          ],
        },
        {
          title: "Servicios Escolares",
          documentos: [
            {
              id: "doc3",
              titulo: "IT Tramite de Titulo Profesional Electronico.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Tramite de Titulo Electronico.pdf",
            },
            {
              id: "doc4",
              titulo: "IT Inscripción de Estudiantes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Inscripcion de Estudiantes.pdf",
            },
            {
              id: "doc5",
              titulo: "IT Acto Protocolario.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Acto Protocolario.pdf",
            },
          ],
        },
      ],
    },

    {
      title: "IT Direccion de Administración y Finanzas",
      subcarpetas: [
        {
          title: "Recursos Financieros y Contabilidad",
          documentos: [
            {
              id: "doc1",
              titulo: "IT CONCILIACIÓN BANCARIA.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT CONCILIACION BANCARIA.pdf",
            },
            {
              id: "doc2",
              titulo:
                "IT Solicitud y Expedición de Cheques y/o Transferencia.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Solicitud y Expedición de Cheques y_o Transferencias Eléctronica Bancaria.pdf",
            },
          ],
        },
        {
          title: "Mantenimiento e Instalaciones",
          documentos: [
            {
              id: "doc3",
              titulo: "IT Mantenimiento a Instalaciones e Infraestructura.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Mantenimiento a Instalaciones e Infraestructura.pdf",
            },
            {
              id: "doc4",
              titulo: "IT Sistema de Gestión Ambiental Institucional.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Sistema de Gestion Ambiental Institucional.pdf",
            },
            {
              id: "doc5",
              titulo:
                "Control Operacional para el Uso Eficiente de la Energia.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control Operacional para el Uso Eficiente de la Energía Eléctrica.pdf",
            },
            {
              id: "doc6",
              titulo: "Control Operacional para el Uso Eficiente del Agua.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control Operacional para el Uso Eficiente del Agua.pdf",
            },
            {
              id: "doc7",
              titulo: "Control Operacional para la Recolección de Residuos.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control Operacional para la Recoleccion de Residuos.pdf",
            },
          ],
        },
        {
          title: "Recursos Humanos",
          documentos: [
            {
              id: "doc8",
              titulo: "IT Capacitacion.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Capacitacion.pdf",
            },
            {
              id: "doc9",
              titulo:
                "IT Reclutamiento, Selección y Contratación de Personal.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Reclutamiento, Seleccion y Contratacion de Personal.pdf",
            },
          ],
        },
        {
          title: "Programación y Presupuesto",
          documentos: [
            {
              id: "doc10",
              titulo: "IT Asignación y Comprobación de Viaticos.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignacion y Comprobacion de Viaticos.pdf",
            },
            {
              id: "doc11",
              titulo: "IT Asignación Presupuestal.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Asignación Presupuestal.pdf",
            },
          ],
        },
        {
          title: "Recursos Materiales y Servicios Generales",
          documentos: [
            {
              id: "doc12",
              titulo: "IT Adquisición de Materiales.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Adquisición de Materiales.pdf",
            },
          ],
        },
        {
          title: "Subdirección de  Servicios Administrativos",
          documentos: [
            {
              id: "doc13",
              titulo:
                "IT Prestamo de Auditorios para la realización de eventos institucionales.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Prestamo de Auditorios para la realizacion de eventos institucionales.pdf",
            },
            {
              id: "doc14",
              titulo:
                "IT Prestamo y control de unidades del parque vehicular.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Prestamo y control de unidades del parque vehicular.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Abogado General",
      documentos: [
        {
          id: "doc1",
          titulo: "IT Requisitos Legales.pdf",
          archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Requisitos Legales.pdf",
        },
        {
          id: "doc2",
          titulo: "IT Matriz de requisitos legales ambientales.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/Matriz de requisitos legales ambientales.pdf",
        },
        {
          id: "doc3",
          titulo: "IT Matriz Institucional de requisitos legales.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/Matriz Institucional de requisitos legales.pdf",
        },
      ],
    },

    {
      title: "IT Secretaria Academica",
      subcarpetas: [
        {
          title: "Apoyo Psicopedagógico",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Apoyo Psicopedagógico.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicio de Apoyo Psicopedagógico.pdf",
            },
          ],
        },
        {
          title: "PIT",
          documentos: [
            {
              id: "doc3",
              titulo:
                "IT Coordinación del Programa Institucional de Tutorias_PIT.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Coordinación del Programa Institucional de Tutorias (PIT).pdf",
            },
          ],
        },
        {
          title: "Secretaria Académica",
          documentos: [
            {
              id: "doc4",
              titulo: "IT Administración del Proceso Enseñanza Apredizaje.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Administración del Proceso Enseñanza Apredizaje.pdf",
            },
            {
              id: "doc5",
              titulo: "IT Asignación y seguimiento de estadias.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Asignación y Seguimiento de Estadias.pdf",
            },
            {
              id: "doc6",
              titulo: "IT PROGRAMACIÓN CUATRIMESTRAL.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT PROGRAMACIÓN CUATRIMESTRAL.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Secretaria de Vinculación",
      subcarpetas: [
        {
          title: "Practicas y Estadías",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Gestión de Visitas Industriales.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Visitas Industriales.pdf",
            },
            {
              id: "doc2",
              titulo: "IT Gestión de Estadias.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Estadías.pdf",
            },
            {
              id: "doc3",
              titulo:
                "Protocolo de Acción Situaciones Potenciales de Emergencia.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Situaciones Potenciales de Emergencia en Estadias y SS.PDF",
            },
            {
              id: "doc4",
              titulo: "IT Servicio Social.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicio Social.pdf",
            },
          ],
        },
        {
          title: "Investigación y Desarrollo",
          documentos: [
            {
              id: "doc5",
              titulo:
                "IT Actividades de Investigación, Innovación y Desarrollo Tecnologico.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Actividades de Investigación, Innovación y Desarrollo Tecnológico.pdf",
            },
            {
              id: "doc6",
              titulo: "IT Servicios Tecnologicos.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Servicios Tecnológicos.pdf",
            },
          ],
        },
        {
          title: "Educación Continua",
          documentos: [
            {
              id: "doc7",
              titulo: "IT Educcion Continua.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT Educacion Continua.pdf",
            },
          ],
        },
        {
          title: "Desempeño de Egresados",
          documentos: [
            {
              id: "doc8",
              titulo: "IT Bolsa de Trabajo.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Bolsa de Trabajo.pdf",
            },
            {
              id: "doc9",
              titulo: "IT DESEMPEÑO DE EGRESADOS.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/IT DESEMPEÑO DE EGRESADOS.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Subdirección de Planificación y Evaluación",
      subcarpetas: [
        {
          title: "Servicios TIC",
          documentos: [
            {
              id: "doc1",
              titulo: "IT Servicios TIC.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Servicios TIC.pdf",
            },
          ],
        },
        {
          title: "Sistema Integral de Gestión",
          documentos: [
            {
              id: "doc2",
              titulo: "Manual Sistema Integral de Gestión.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Manual Sistema Integral de Gestión.pdf",
            },
            {
              id: "doc3",
              titulo: "Información Documentada.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/INFORMACIÓN DOCUMENTADA.pdf",
            },
            {
              id: "doc4",
              titulo: "Auditorías Internas.pdf",
              archivo: "/SIG/INSTRUCCIONES DE TRABAJO/AUDITORÍAS INTERNAS.pdf",
            },
            {
              id: "doc5",
              titulo: "Recursos de seguimiento y medición.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/RECURSOS DE SEGUIMIENTO Y MEDICIÓN.pdf",
            },
            {
              id: "doc6",
              titulo: "Control de las Salidas No Conformes.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Control de las Salidas No Conformes.pdf",
            },
            {
              id: "doc7",
              titulo:
                "Procedimiento Mandatorio No Conformidad y Acción Correctiva.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Procedimiento Mandatorio No Conformidad y Acción Correctiva.pdf",
            },
            {
              id: "doc8",
              titulo: "Matriz de Roles y Responsabilidades.pdf",
              archivo:
                "/SIG/INSTRUCCIONES DE TRABAJO/Matriz de Roles y Responsabilidades.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "IT Contraloria Interna",
      documentos: [
        {
          id: "doc1",
          titulo: "IT Gestión de Quejas o Sugerencias.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/IT Gestión de Quejas o Sugerencias.pdf",
        },
        {
          id: "doc2",
          titulo:
            "Procedimiento para el funcionamiento del Comité de Control y Desempeño Institucional.pdf",
          archivo:
            "/SIG/INSTRUCCIONES DE TRABAJO/IT Procedimiento para el funcionamiento del Comité de Control y Desempeño Institucional.pdf",
        },
        {
          id: "doc3",
          titulo: "IT Procedimiento de Actos Entrega-Recepción.PDF",
          archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Procedimiento de Actos Entrega-Recepción.PDF"
        },
        {
          id: "doc4",
          titulo: "IT Procedimiento para el Funcionamiento de Sesiones de Consejo Directivo.PDF",
          archivo: "/SIG/INSTRUCCIONES DE TRABAJO/IT Procedimiento para el Funcionamiento de Sesiones de Consejo Directivo.PDF"
        }
      ],
    },
  ],
};


export const dataFormatos = {
  id: "sistema_organizacional",
  titulo: "Estructura Organizacional y Documentación",
  subTitulo: "Archivos y Formatos por Área",
  subCarpetas: [
    {
      title: "Abogado General",
      subcarpetas: [
        {
          title: "Archivos Generales",
          documentos: [
            {
              id: "AG_doc1",
              titulo: "Encuesta de satisfacción AG.pdf",
              archivo: "/SIG/FORMATOS/Abogado General/Encuesta de satisfacción AG.pdf"
            },
            {
              id: "AG_doc2",
              titulo: "Solicitud para crear, reformar y abrogar normatividad interna. AG.xlsx",
              archivo: "/SIG/FORMATOS/Abogado General/Solicitud para crear, reformar y abrogar normatividad interna. AG.xlsx"
            },
            {
              id: "AG_doc3",
              titulo: "Solicitud trámite externo AG.xlsx",
              archivo: "/SIG/FORMATOS/Abogado General/Solicitud trámite externo AG.xlsx"
            }
          ]
        }
      ]
    },
    {
      title: "Contraloría Interna",
      subcarpetas: [
        {
          title: "Archivos Generales",
          documentos: [
            {
              id: "CI_doc1",
              titulo: "formato quejas buzon..pdf",
              archivo: "/SIG/FORMATOS/Contraloría Interna/formato quejas buzon..pdf"
            }
          ]
        }
      ]
    },
    {
      title: "Dirección de Administración y Finanzas",
      subcarpetas: [
        {
          title: "Departamento de Mantenimiento e Instalaciones",
          documentos: [
            {
              id: "DAF_DMI_doc1",
              titulo: "MNIT01-R01 Orden de trabajo",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Mantenimiento e Instalaciones/MNIT01-R01 ORDEN DE TRABAJO.xlsx"
            },
            {
              id: "DAF_DMI_doc2",
              titulo: "MNIT02-R01 BITÁCORA ENTREGA DE RESIDUOS.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Mantenimiento e Instalaciones/MNIT02-R01 BITÁCORA ENTREGA DE RESIDUOS.xlsx"
            },
            {
              id: "DAF_DMI_doc3",
              titulo: "MNIT03-R02 BITÁCORA PARA EQUIPOS DE MAYOR CONSUMO DE AGUA.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Mantenimiento e Instalaciones/MNIT03-R02 BITÁCORA PARA EQUIPOS DE MAYOR CONSUMO DE AGUA.docx"
            },
            {
              id: "DAF_DMI_doc4",
              titulo: "MNIT04-R01 BITÁCORA DE CONSUMO DE ENERGÍA ELÉCTRICA.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Mantenimiento e Instalaciones/MNIT04-R01 BITÁCORA DE CONSUMO DE ENERGÍA ELÉCTRICA.xlsx"
            },
            {
              id: "DAF_DMI_doc5",
              titulo: "MNIT04-R02 EQUIPOS DE MAYOR CONSUMO DE ENERGÍA ELÉCTRICA.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Mantenimiento e Instalaciones/MNIT04-R02 EQUIPOS DE MAYOR CONSUMO DE ENERGÍA ELÉCTRICA.docx"
            }
          ]
        },
        {
          title: "Departamento de Programación y Presupuesto",
          documentos: [
            {
              id: "DAF_DPP_doc1",
              titulo: "Formato Presupuesto 2025.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/Formato Presupuesto 2025.xlsx"
            },
            {
              id: "DAF_DPP_doc2",
              titulo: "PGIT01 Cuestionario ok.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/PGIT01 Cuestionario ok.pdf"
            },
            {
              id: "DAF_DPP_doc3",
              titulo: "PGIT01_Formato Edo Cta Pptal.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/PGIT01_Formato Edo Cta Pptal.pdf"
            },
            {
              id: "DAF_DPP_doc4",
              titulo: "PGIT02-R01 Aviso de comisión.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/PGIT02-R01 Aviso de comisión.pdf"
            },
            {
              id: "DAF_DPP_doc5",
              titulo: "PGIT02-R02 Infome de comisión.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/PGIT02-R02 Infome de comisión.pdf"
            },
            {
              id: "DAF_DPP_doc6",
              titulo: "PGIT02-R03 Formato solicitud de transferencia.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/PGIT02-R03 Formato solicitud de transferencia.pdf"
            },
            {
              id: "DAF_DPP_doc7",
              titulo: "PGIT02-R04 Cuestionario.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Programación y Presupuesto/PGIT02-R04 Cuestionario.pdf"
            }
          ]
        },
        {
          title: "Departamento de Recursos Financieros y Contabilidad",
          documentos: [
            {
              id: "DAF_DRFC_doc1",
              titulo: "RFIT01-R01 Encuesta de satisfacción solicitud y expedición de cheques.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Financieros y Contabilidad/RFIT01-R01 Encuesta de satisfacción solicitud y expedición de cheques.docx"
            },
            {
              id: "DAF_DRFC_doc2",
              titulo: "RFIT02-R02 Encuesta satisfacción conciliación bancaria.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Financieros y Contabilidad/RFIT02-R02 Encuesta satisfacción conciliación bancaria.docx"
            }
          ]
        },
        {
          title: "Departamento de Recursos Humanos",
          documentos: [
            {
              id: "DAF_DRH_doc1",
              titulo: "RHIT01-R01 Solicitud de personal.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT01-R01 Solicitud de personal.docx"
            },
            {
              id: "DAF_DRH_doc2",
              titulo: "RHIT01-R02 Indicador cuatrimestral.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT01-R02  Indicador cuatrimestral.xlsx"
            },
            {
              id: "DAF_DRH_doc3",
              titulo: "RHIT01-R03 Escrito de aceptación.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT01-R03  Escrito de aceptación.docx"
            },
            {
              id: "DAF_DRH_doc4",
              titulo: "RHIT01-R05 Expediente del personal.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT01-R05  Expediente del personal.docx"
            },
            {
              id: "DAF_DRH_doc5",
              titulo: "RHIT01-R06 Lineamientos para la integración de expedientes 2024.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT01-R06  Lineamientos para la integración de expedientes 2024.docx"
            },
            {
              id: "DAF_DRH_doc6",
              titulo: "RHIT02-R01 Formato de detección de necesidades de capacitación.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R01 Formato de detección de necesidades de capacitación.docx"
            },
            {
              id: "DAF_DRH_doc7",
              titulo: "RHIT02-R02 PROGRAMA DE CAPACITACIÓN.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R02 PROGRAMA DE CAPACITACIÓN.xlsx"
            },
            {
              id: "DAF_DRH_doc8",
              titulo: "RHIT02-R03 SOLICITUD_CURSOS.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R03 SOLICITUD_CURSOS.docx"
            },
            {
              id: "DAF_DRH_doc9",
              titulo: "RHIT02-R04 Listas de Asistencia.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R04 Listas de Asistencia.pdf"
            },
            {
              id: "DAF_DRH_doc10",
              titulo: "RHIT02-R05 Encuesta de Satisfaccion del Curso_2021.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R05 Encuesta de Satisfaccion del Curso_2021.docx"
            },
            {
              id: "DAF_DRH_doc11",
              titulo: "RHIT02-R06 Listas de Entrega de Constancias.docx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R06 Listas de Entrega de Constancias.docx"
            },
            {
              id: "DAF_DRH_doc12",
              titulo: "RHIT02-R07_ FORMATO DE EVALUACIÓN DE CAPACITACIÓN SEMESTRAL.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Humanos/RHIT02-R07_ FORMATO DE EVALUACIÓN DE CAPACITACIÓN SEMESTRAL.xlsx"
            }
          ]
        },
        {
          title: "Departamento de Recursos Materiales y Servicios Generales",
          documentos: [
            {
              id: "DAF_DRMSG_doc1",
              titulo: "RMIT01-R01 Formato req rmsg.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Materiales y Servicios Generales/RMIT01-R01 Formato req rmsg.xlsx"
            },
            {
              id: "DAF_DRMSG_doc2",
              titulo: "RMIT01-R03 Vales rmsg.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Materiales y Servicios Generales/RMIT01-R03 Vales rmsg.xlsx"
            },
            {
              id: "DAF_DRMSG_doc3",
              titulo: "RMIT01-R04 EVALUACION DE PROVEEDOR.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Administración y Finanzas/Departamento de Recursos Materiales y Servicios Generales/RMIT01-R04 EVALUACION DE PROVEEDOR.xlsx"
            }
          ]
        }
      ]
    },
    {
      title: "Dirección de Extensión Universitaria",
      subcarpetas: [
        {
          title: "Departamento de Actividades Culturales y Deportivas",
          documentos: [
            {
              id: "DEU_DACD_doc1",
              titulo: "ACYD01 LISTA DE ASISTENCIA.pdf",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Actividades Culturales y Deportivas/ACYD01 LISTA DE ASISTENCIA.pdf"
            },
            {
              id: "DEU_DACD_doc2",
              titulo: "ACYD02 FORMATO DE CAMBIO DE TALLER.jpeg",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Actividades Culturales y Deportivas/ACYD02 FORMATO DE CAMBIO DE TALLER.jpeg"
            },
            {
              id: "DEU_DACD_doc3",
              titulo: "ACYD03 ACUMULACIÓN DE HORAS EXTRAS.jpeg",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Actividades Culturales y Deportivas/ACYD03 ACUMULACIÓN DE HORAS EXTRAS.jpeg"
            }
          ]
        },
        {
          title: "Departamento de Prensa y Difusión",
          documentos: [
            {
              id: "DEU_DPD_doc1",
              titulo: "PDIT01-R01 FORMATO DE REQUERIMIENTOS PARA DISEÑO DE MATERIAL PROMOCIONAL IMPRESO Y DIGITAL .xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Prensa y Difusión/PDIT01-R01 FORMATO DE REQUERIMIENTOS PARA DISEÑO DE MATERIAL PROMOCIONAL IMPRESO Y DIGITAL.xlsx"
            }
          ]
        },
        {
          title: "Departamento de Servicio Médico",
          documentos: [
            {
              id: "DEU_DSM_doc1",
              titulo: "AUTOEVALUACION_CURSOS PLATICAS CONFERENCIAS SM 2024.docx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/AUTOEVALUACION_CURSOS PLATICAS CONFERENCIAS SM 2024.docx"
            },
            {
              id: "DEU_DSM_doc2",
              titulo: "ENCUESTA DE SATISFACCION DEL SERVICIO MEDICO 2024.docx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/ENCUESTA DE SATISFACCION DEL SERVICIO MEDICO 2024.docx"
            },
            {
              id: "DEU_DSM_doc3",
              titulo: "SMIT01-04 Lista de Asistencia EVENTOS O CONFERENCIAS.xls",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/SMIT01-04 Lista de Asistencia EVENTOS O CONFERENCIAS.xls"
            },
            {
              id: "DEU_DSM_doc4",
              titulo: "SMIT01-R01 HOJA DIARIA DE CONSULTA EXTERNA.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/SMIT01-R01 HOJA DIARIA DE CONSULTA EXTERNA.xlsx"
            },
            {
              id: "DEU_DSM_doc5",
              titulo: "SMIT01-R02 CONSENTRADO MENSUAL DE CONSULTA.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/SMIT01-R02 CONSENTRADO MENSUAL DE CONSULTA.xlsx"
            },
            {
              id: "DEU_DSM_doc6",
              titulo: "SMIT01-R03 REGISTRO DE SOLICITUD DE CONFERENCIAS.xlsx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/SMIT01-R03 REGISTRO DE SOLICITUD DE CONFERENCIAS.xlsx"
            },
            {
              id: "DEU_DSM_doc7",
              titulo: "SMIT01-R05FORMATO DE ENVIO A LA UNIDAD DE APOYO PSICOPEDAGOGICO.docx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Departamento de Servicio Médico/SMIT01-R05FORMATO DE ENVIO A LA UNIDAD DE APOYO PSICOPEDAGOGICO.docx"
            }
          ]
        },
        {
          title: "Dirección de Extensión Universitaria",
          documentos: [
            {
              id: "DEU_DEU_doc1",
              titulo: "EUIT01-R01 FICHA DE PROTOCOLO PARA EVENTOS_V3.DOCX",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Dirección de Extensión Universitaría/EUIT01_R01FICHA_DE_PROTOCOLO_PARA_EVENTOSV3.DOCX"
            }
          ]
        },
        {
          title: "Subdirección de Difusión y Divulgación Universitaria",
          documentos: [
            {
              id: "DEU_SDDU_doc1",
              titulo: "SUIT02-R02 Matriz de Comunicación.docx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Subdirección de Difusión y Divulgación Universitaria/SUIT02-R02 Matriz de Comunicación.docx"
            },
            {
              id: "DEU_SDDU_doc2",
              titulo: "SUIT01-R03 FORMATO DE REGISTRO DE ASPIRANTES.docx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Subdirección de Difusión y Divulgación Universitaria/SUIT01-R03 FORMATO DE REGISTRO DE ASPIRANTES.docx"
            },
            {
              id: "DEU_SDDU_doc3",
              titulo: "SUIT02-R01 Plan de comunicación.docx",
              archivo: "/SIG/FORMATOS/Dirección de Extensión Universitaria/Subdirección de Difusión y Divulgación Universitaria/SUIT02-R01 Plan de comunicación.docx"
            }
          ]
        }
      ]
    },
    {
      title: "Secretaría Académica",
      subcarpetas: [
        {
          title: "Apoyo Psicopedagógico",
          documentos: [
            {
              id: "SA_AP_doc1",
              titulo: "SSIT03-R08 Constancia de Asistencia.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Apoyo Psicopedagógico/SSIT03-R08 Constancia de Asistencia.docx"
            },
            {
              id: "SA_AP_doc2",
              titulo: "SSIT03-R11 REGISTRO DE ASISTENCIA A PLÁTICAS, CONFERENCIAS, TALLERES.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Apoyo Psicopedagógico/SSIT03-R11 REGISTRO DE ASISTENCIA A PLÁTICAS, CONFERENCIAS, TALLERES.docx"
            }
          ]
        },
        {
          title: "Programa Institucional de Tutorías",
          documentos: [
            {
              id: "SA_PIT_doc1",
              titulo: "PEIT02-R07 TUTORIA_GRUPAL.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PEIT02-R07 TUTORIA_GRUPAL.docx"
            },
            {
              id: "SA_PIT_doc2",
              titulo: "PEIT02-R08 REGISTRO DE TUTORIA INDIVIDUAL.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PEIT02-R08 REGISTRO DE TUTORIA INDIVIDUAL.xlsx"
            },
            {
              id: "SA_PIT_doc3",
              titulo: "PEIT02-R09 SOLICITUD_DE_CANALIZACION.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PEIT02-R09 SOLICITUD_DE_CANALIZACION.docx"
            },
            {
              id: "SA_PIT_doc4",
              titulo: "PEIT02-R10 INFORME CUATRIMESTRAL DE TUTORÍA-1.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PEIT02-R10 INFORME CUATRIMESTRAL DE TUTORÍA-1.xlsx"
            },
            {
              id: "SA_PIT_doc5",
              titulo: "PEIT02-R11 EXPEDIENTE DEL APRENDIENTE-1.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PEIT02-R11 EXPEDIENTE DEL APRENDIENTE-1.xlsx"
            },
            {
              id: "SA_PIT_doc6",
              titulo: "PITIT01-R01 FORMATOS_SEGUIMIENTO ACCIONES REMEDIALES.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PITIT01-R01 FORMATOS_SEGUIMIENTO ACCIONES REMEDIALES.xlsx"
            },
            {
              id: "SA_PIT_doc7",
              titulo: "PITIT01-R02 REGISTRO DE ALUMNOS ASIGNADOS.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PITIT01-R02 REGISTRO DE ALUMNOS ASIGNADOS.xlsx"
            },
            {
              id: "SA_PIT_doc8",
              titulo: "PITIT01-R03 Reporte de la sesión grupal de tutoría_Formato.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PITIT01-R03 Reporte de la sesión grupal de tutoría_Formato.docx"
            },
            {
              id: "SA_PIT_doc9",
              titulo: "PITIT01-R05 FORMATO BAJA REGLAMENTARIA.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PITIT01-R05 FORMATO BAJA REGLAMENTARIA.docx"
            },
            {
              id: "SA_PIT_doc10",
              titulo: "PITIT01-R06 FORMATO DE BAJA VOLUNTARIA.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PITIT01-R06 FORMATO DE BAJA VOLUNTARIA.docx"
            },
            {
              id: "SA_PIT_doc11",
              titulo: "PITIT01-R09 FORMATO CARTA COMPROMISO ALUMNO.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programa Institucional de Tutorias/PITIT01-R09 FORMATO CARTA COMPROMISO ALUMNO.docx"
            }
          ]
        },
        {
          title: "Programas Educativos",
          documentos: [
            {
              id: "SA_PE_doc1",
              titulo: "PEIT01-R01 CARGA HORARIA .xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT01-R01 CARGA HORARIA.xlsx"
            },
            {
              id: "SA_PE_doc2",
              titulo: "PEIT01-R02 HORARIO_DOCENTE 1.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT01-R02 HORARIO_DOCENTE 1.docx"
            },
            {
              id: "SA_PE_doc3",
              titulo: "PEIT01-R03 HORARIO_GRUPO.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT01-R03 HORARIO_GRUPO.docx"
            },
            {
              id: "SA_PE_doc4",
              titulo: "PEIT02-R01 PROGRAMACION_Y_AVANCE_DE_TEMAS .doc",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R01 PROGRAMACION_Y_AVANCE_DE_TEMAS .doc"
            },
            {
              id: "SA_PE_doc5",
              titulo: "PEIT02-R02 REGISTRO_DE_ASESORIAS.doc",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R02 REGISTRO_DE_ASESORIAS.doc"
            },
            {
              id: "SA_PE_doc6",
              titulo: "PEIT02-R03 LISTA_DE_ASISTENCIA .xls",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R03 LISTA_DE_ASISTENCIA .xls"
            },
            {
              id: "SA_PE_doc7",
              titulo: "PEIT02-R04 VERIFICACION_Y_SEGUIMIENTO.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R04 VERIFICACION_Y_SEGUIMIENTO.docx"
            },
            {
              id: "SA_PE_doc8",
              titulo: "PEIT02-R05 Reporte de Seguimiento Académico.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R05 Reporte de Seguimiento Académico.docx"
            },
            {
              id: "SA_PE_doc9",
              titulo: "PEIT02-R06 INFORME FINAL DEL PROCESO ENSEÑANZA-APRENDIZAJE.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R06 INFORME FINAL DEL PROCESO ENSEÑANZA-APRENDIZAJE.docx"
            },
            {
              id: "SA_PE_doc10",
              titulo: "PEIT02-R07 TUTORIA_GRUPAL .docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R07 TUTORIA_GRUPAL .docx"
            },
            {
              id: "SA_PE_doc11",
              titulo: "PEIT02-R08 REGISTRO DE TUTORIA INDIVIDUAL",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R08 REGISTRO DE TUTORIA INDIVIDUAL.xlsx"
            },
            {
              id: "SA_PE_doc12",
              titulo: "PEIT02-R09 SOLICITUD_DE_CANALIZACION.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R09 SOLICITUD_DE_CANALIZACION.docx"
            },
            {
              id: "SA_PE_doc13",
              titulo: "PEIT02-R10 INFORME DE COORDINADOR DE TUTORES",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R10 INFORME DE CORDINADOR DE TUTORES.xlsx"
            },
            {
              id: "SA_PE_doc14",
              titulo: "PEIT02-R11 EXPEDIENTE DEL ESTUDIANTE",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT02-R11 EXPEDIENTE DEL ESTUDIANTE.xlsx"
            },
            {
              id: "SA_PE_doc15",
              titulo: "PEIT03-R02 FORMATO DE ASIGNACIÓN DE ASESOR.docx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT03-R02 FORMATO DE ASIGNACIÓN DE ASESOR.docx"
            },
            {
              id: "SA_PE_doc16",
              titulo: "PEIT03-R03 FORMATO DE REGISTRO Y CONTROL DE AVANCE DE ESTADIA.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría Academica/Programas Educativos/PEIT03-R03 FORMATO DE REGISTRO Y CONTROL DE AVANCE DE ESTADÍA.xlsx"
            }
          ]
        }
      ]
    },
    {
      title: "Secretaría de Vinculación",
      subcarpetas: [
        {
          title: "Departamento de Educación Continua",
          documentos: [
            {
              id: "SV_DEC_doc1",
              titulo: "1 ECIT01-R001_2025_FICHA TECNICA.pdf",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Educación Continua/1 ECIT01-R001_2025_FICHA TECNICA.pdf"
            },
            {
              id: "SV_DEC_doc2",
              titulo: "2 ECIT01-R002_2025_FORMATO DE LISTA ASISTENCIA.pdf",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Educación Continua/2 ECIT01-R002_2025_FORMATO DE LISTA ASISTENCIA.pdf"
            },
            {
              id: "SV_DEC_doc3",
              titulo: "3 ECIT01-R003_2025_ENCUESTA DE SATISFACCION.pdf",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Educación Continua/3 ECIT01-R003_2025_ENCUESTA DE SATISFACCION.pdf"
            },
            {
              id: "SV_DEC_doc4",
              titulo: "4 ECIT01-R004_2025_FORMATO DE LISTA ENTREGA DE RECONOCIMIENTOS.pdf",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Educación Continua/4 ECIT01-R004_2025_FORMATO DE LISTA ENTREGA DE RECONOCIMIENTOS.pdf"
            }
          ]
        },
        {
          title: "Departamento de Investigación y Desarrollo",
          subcarpetas: [
            {
              title: "Formatos Actividades de Investigación",
              documentos: [
                {
                  id: "SV_DID_FAI_doc1",
                  titulo: "EVALUACIÓN DE LA SATISFACCIÓN DEL CLIENTE IDIT02-02.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/EVALUACIÓN DE LA SATISFACCIÓN DEL CLIENTE IDIT02-02-1.pdf"
                },
                {
                  id: "SV_DID_FAI_doc2",
                  titulo: "FORMATO DE REGISTRO DE ACTIVIDADES PERSONAL IDIT02 R03.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/FORMATO DE REGISTRO DE ACTIVIDADES PERSONAL IDIT02 R03.pdf"
                },
                {
                  id: "SV_DID_FAI_doc3",
                  titulo: "FORMATO DE REGISTRO DE AIIDT IDIT02 R01 2025.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/FORMATO DE REGISTRO DE AIIDT IDIT02 R01 2025.pdf"
                },
                {
                  id: "SV_DID_FAI_doc4",
                  titulo: "FORMATO PARA INFORME DE AIIDT IDIT02 R06.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/FORMATO PARA INFORME DE AIIDT IDIT02 R06.pdf"
                },
                {
                  id: "SV_DID_FAI_doc5",
                  titulo: "FORMATO PRODUCTOS DE INVESTIGACION PUBLICADOS IDIT02 R07.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/FORMATO PRODUCTOS DE INVESTIGACION PUBLICADOS IDIT02 R07.pdf"
                },
                {
                  id: "SV_DID_FAI_doc6",
                  titulo: "INSTRUCTIVO DE LLENADO DEL FORMATO IDIT02 R01.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/INSTRUCTIVO DE LLENADO DEL FORMATO IDIT02 R01.pdf"
                },
                {
                  id: "SV_DID_FAI_doc7",
                  titulo: "INSTRUCTIVO DE LLENADO DEL FORMATO IDIT02 R03.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/INSTRUCTIVO DE LLENADO DEL FORMATO IDIT02 R03.pdf"
                },
                {
                  id: "SV_DID_FAI_doc8",
                  titulo: "REGISTRO DE CA Y GI IDIT02-R05.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/REGISTRO DE CA y GI IDIT02-R05.pdf"
                },
                {
                  id: "SV_DID_FAI_doc9",
                  titulo: "RETROALIMENTACION DE LA IT DE AIIDT IDIT02-R04.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Actividades de Investigación/RETROALIMENTACION DE LA IT DE AIIDT IDIT02-R04.pdf"
                }
              ]
            },
            {
              title: "Formatos Servicios Tecnológicos",
              documentos: [
                {
                  id: "SV_DID_FST_doc1",
                  titulo: "FORMATO APRENDIENTES QUE PARTICIPAN EN LA ATENCIÓN DE ST IDIT01-R04.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Servicios Tecnológicos/FORMATO APRENDIENTES QUE PARTICIPAN EN LA ATENCIÓN DE ST IDIT01-R04-1.pdf"
                },
                {
                  id: "SV_DID_FST_doc2",
                  titulo: "FORMATO DE PLAN DE TRABAJO DE SERVICIOS TECNOLÓGICOS IDIT01-R02.xlsx",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Servicios Tecnológicos/FORMATO DE PLAN DE TRABAJO DE SERVICIOS TECNOLÓGICOS IDIT01-R02.xlsx"
                },
                {
                  id: "SV_DID_FST_doc3",
                  titulo: "FORMATO DE REGISTRO DE SERVICIOS TECNOLÓGICOS IDIT01-R01.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Servicios Tecnológicos/FORMATO DE REGISTRO DE SERVICIOS TECNOLÓGICOS IDIT01-R01.pdf"
                },
                {
                  id: "SV_DID_FST_doc4",
                  titulo: "INSTRUMENTO DE RETROALIMENTACIÓN PARA USUARIOS IDIT01-R03.pdf",
                  archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Investigación y Desarrollo/Formatos Servicios Tecnológicos/INSTRUMENTO DE RETROALIMENTACIÓN PARA USUARIOS IDIT01-R03.pdf"
                }
              ]
            }
          ]
        },
        {
          title: "Departamento de Prácticas y Estadías",
          documentos: [
            {
              id: "SV_DPE_doc1",
              titulo: "1. PSIT01-R01-FORMATO DE SOLICITUD DE ESTADIAS ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/1. PSIT01-R01-FORMATO DE SOLICITUD DE ESTADIAS ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc2",
              titulo: "1. PSIT01-R01A-FORMATO DE SOLICITUD DE ESTADIAS TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/1. PSIT01-R01A-FORMATO DE SOLICITUD DE ESTADIAS TSU.docx"
            },
            {
              id: "SV_DPE_doc3",
              titulo: "1. PSIT01-R03-FORMATO DE CARTA DE PRESENTACIÓN.xlsx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/1. PSIT03-R01-FORMATO DE CARTA DE PRESENTACIÓN.xlsx"
            },
            {
              id: "SV_DPE_doc4",
              titulo: "1. PSIT02-R01-PROGRAMA AUTORIZADO DE VISITAS INDUSTRIALES.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/1. PSITO2-R01-PROGRAMA AUTORIZADO DE VISITAS INDUSTRIALES.docx"
            },
            {
              id: "SV_DPE_doc5",
              titulo: "2. PSIT01-R02-NOTIFICACIÓN DE ESPACIO DE ESTADÍA AL PE ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/2. PSIT01-R02-NOTIFICACIÓN DE ESPACIO DE ESTADÍA AL PE ING-LIC..docx"
            },
            {
              id: "SV_DPE_doc6",
              titulo: "2. PSIT01-R02A-NOTIFICACIÓN DE ESPACIO DE ESTADÍA AL PE TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/2. PSIT01-R02A-NOTIFICACIÓN DE ESPACIO DE ESTADÍA AL PE TSU.docx"
            },
            {
              id: "SV_DPE_doc7",
              titulo: "2. PSIT03-R02-ANEXO A SERVICIO SOCIAL.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/2. PSIT03-R02-ANEXO A SERVICIO SOCIAL.docx"
            },
            {
              id: "SV_DPE_doc8",
              titulo: "2. PSIT02-R02-SOLICITUD DE VISITA INDUSTRIAL.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/2. PSITO2-R02-SOLICITUD DE VISITA INDUSTRIAL.docx"
            },
            {
              id: "SV_DPE_doc9",
              titulo: "3. PSIT01-R03-CARTA DE ENTREVISTA DEL AP ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/3. PSIT01-R03-CARTA DE ENTREVISTA DEL AP ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc10",
              titulo: "3. PSIT01-R03A-CARTA DE ENTREVISTA DEL AP TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/3. PSIT01-R03A-CARTA DE ENTREVISTA DEL AP TSU.docx"
            },
            {
              id: "SV_DPE_doc11",
              titulo: "3. PSIT02-R03-NOTIFICACIÓN DE VISITA INDUSTRIAL AL PE.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/3. PSIT02-R03-NOTIFICACIÓN DE VISITA INDUSTRIAL AL PE.docx"
            },
            {
              id: "SV_DPE_doc12",
              titulo: "3. PSIT03-R03-CARTA DE PRESENTACIÓN A LA INSTANCIA.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/3. PSIT03-R03-CARTA DE PRESENTACIÓN A LA INSTANCIA.docx"
            },
            {
              id: "SV_DPE_doc13",
              titulo: "4. PSIT01-R04-CARTA DE ASIGNACIÓN DEL AP ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/4. PSIT01-R04-CARTA DE ASIGNACIÓN DEL AP ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc14",
              titulo: "4. PSIT01-R04A-CARTA DE ASIGNACIÓN DEL AP TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/4. PSIT01-R04A-CARTA DE ASIGNACIÓN DEL AP TSU.docx"
            },
            {
              id: "SV_DPE_doc15",
              titulo: "4. PSIT02-R04-SOLICITUD DE AUTOBUS.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/4. PSIT02-R04-SOLICITUD DE AUTOBÚS.docx"
            },
            {
              id: "SV_DPE_doc16",
              titulo: "4. PSIT03-R04-FORMATO DE CARTA DE ACEPTACIÓN DE SERVICIO SOCIAL.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/4. PSIT03-R04-FORMATO DE CARTA DE ACEPTACIÓN DE SERVICIO SOCIAL.docx"
            },
            {
              id: "SV_DPE_doc17",
              titulo: "5. PSIT01-R05-CARTA DE PRESENTACIÓN DEL AP ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/5. PSIT01-R05-CARTA DE PRESENTACIÓN DEL AP ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc18",
              titulo: "5. PSIT01-R05A-CARTA DE PRESENTACIÓN DEL AP TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/5. PSIT01-R05A-CARTA DE PRESENTACIÓN DEL AP TSU.docx"
            },
            {
              id: "SV_DPE_doc19",
              titulo: "5. PSIT02-05-SOLICITUD DE AUTORIZACIÓN A LA SUBDIRECCIÓN DE UNIVERSIDADES.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/5. PSIT02-05-SOLICITUD DE AUTORIZACIÓN A LA SUBDIRECCIÓN DE UNIVERSIDADES.docx"
            },
            {
              id: "SV_DPE_doc20",
              titulo: "5. PSIT03-R05-FORMATO DE REGISTRO DE HORAS.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/5. PSIT03-R05-FORMATO DE REGISTRO DE HORAS.docx"
            },
            {
              id: "SV_DPE_doc21",
              titulo: "6. PSIT01-06-CARTA COMPROMISO AP ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/6. PSIT01-06-CARTA COMPROMISO AP ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc22",
              titulo: "6. PSIT01-06A-CARTA COMPROMISO AP TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/6. PSIT01-06A-CARTA COMPROMISO AP TSU.docx"
            },
            {
              id: "SV_DPE_doc23",
              titulo: "6. PSIT02-R06-CARTA DE PRESENTACIÓN A LA EMPRESA.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/6. PSIT02-R06-CARTA DE PRESENTACIÓN A LA EMPRESA.docx"
            },
            {
              id: "SV_DPE_doc24",
              titulo: "6. PSIT03-R06-FORMATO DE CARTA DE TÉRMINO.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/6. PSIT03-R06-FORMATO DE CARTA DE TÉRMINO.docx"
            },
            {
              id: "SV_DPE_doc25",
              titulo: "7. PSIT01-07-CARTA DE ACEPTACIÓN DE LA EMPRESA ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/7. PSIT01-07-CARTA DE ACEPTACIÓN DE LA EMPRESA ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc26",
              titulo: "7. PSIT01-07A-CARTA DE ACEPTACIÓN DE LA EMPRESA TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/7. PSIT01-07A-CARTA DE ACEPTACIÓN DE LA EMPRESA TSU.docx"
            },
            {
              id: "SV_DPE_doc27",
              titulo: "7. PSIT02-R07-REPORTE FINAL DE VISITAS INDUSTRIALES.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/7. PSIT02-R07-REPORTE FINAL DE VISITAS INDUSTRIALES.docx"
            },
            {
              id: "SV_DPE_doc28",
              titulo: "7. PSIT03-R07-CONSTANCIA DE LIBERACIÓN.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/7. PSIT03-R07-CONSTANCIA DE LIBERACIÓN.docx"
            },
            {
              id: "SV_DPE_doc29",
              titulo: "8. PSIT01-08-FORMATO SOLICITUD DE CARTA DE TÉRMINO DE ESTADIA ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/8. PSIT01-08-FORMATO SOLICITUD DE CARTA DE TÉRMINO DE ESTADIA ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc30",
              titulo: "8. PSIT01-08A-FORMATO SOLICITUD DE CARTA DE TÉRMINO DE ESTADIA TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/8. PSIT01-08A-FORMATO SOLICITUD DE CARTA DE TÉRMINO DE ESTADIA TSU.docx"
            },
            {
              id: "SV_DPE_doc31",
              titulo: "8. PSIT03-R08-REPORTE MESUAL DE SERVICIO SOCIAL.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/8. PSIT03-R08-REPORTE MESUAL DE SERVICIO SOCIAL.docx"
            },
            {
              id: "SV_DPE_doc32",
              titulo: "9. PSIT01-09-CARTA DE TÉRMINO DE ESTADÍA ING-LIC.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/9. PSIT01-09-CARTA DE TÉRMINO DE ESTADÍA ING-LIC.docx"
            },
            {
              id: "SV_DPE_doc33",
              titulo: "9. PSIT01-09A-CARTA DE TÉRMINO DE ESTADÍA TSU.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/9. PSIT01-09A-CARTA DE TÉRMINO DE ESTADÍA TSU.docx"
            },
            {
              id: "SV_DPE_doc34",
              titulo: "9. PSIT03-R09-ENCUESTA DE SATISFACCIÓN DEL PROCESO.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/9. PSIT03-R09-ENCUESTA DE SATISFACCIÓN DEL PROCESO.docx"
            },
            {
              id: "SV_DPE_doc35",
              titulo: "10. PSIT01-R10-INSTRUMENTO DE RETROALIMENTACIÓN PARA AP DE ESTADÍA.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/10. PSIT01-R10-INSTRUMENTO DE RETROALIMENTACIÓN PARA AP DE ESTADÍA.docx"
            },
            {
              id: "SV_DPE_doc36",
              titulo: "10. PSIT03-R10-INSTRUMENTO DE RETROALIMENTACIÓN PARA PLÁTICAS DE SS.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/10. PSIT03-R10-INSTRUMENTO DE RETROALIMENTACIÓN PARA PLÁTICAS DE SS.docx"
            },
            {
              id: "SV_DPE_doc37",
              titulo: "11. PSIT01-R11-INSTRUMENTO DE RETROALIMENTACIÓN DEL EMPLEADOR (DESEMPEÑO DEL AP EN ESTADÍA).docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/11. PSIT01-R11-INSTRUMENTO DE RETROALIMENTACIÓN DEL EMPLEADOR (DESEMPEÑO DEL AP EN ESTADÍA).docx"
            },
            {
              id: "SV_DPE_doc38",
              titulo: "12. PSIT01-R12-INSTRUMENTO DE RETROALIMENTACIÓN PARA PLÁTICAS DE ESTADÍA.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/12. PSIT01-R12-INSTRUMENTO DE RETROALIMENTACIÓN PARA PLÁTICAS DE ESTADÍA.docx"
            },
            {
              id: "SV_DPE_doc39",
              titulo: "PEIT03-R04 EVALUACIÓN ESTADÍA.docx",
              archivo: "/SIG/FORMATOS/Secretaría de Vinculación/Departamento de Prácticas y Estadías/PEIT03-R04  EVALUACIÓN ESTADÍA.docx"
            }
          ]
        }
      ]
    },
    {
      title: "Subdirección de Planeación y Evaluación",
      subcarpetas: [
        {
          title: "Servicios TIC",
          documentos: [
            {
              id: "SPE_STIC_doc1",
              titulo: "STITCI01-R01 Formato de solicitud de servicio Rev 10.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Planeación y Evaluación/Servicios TIC/STICIT01-R01 Formato de solicitud de servicio Rev 10.docx"
            },
            {
              id: "SPE_STIC_doc2",
              titulo: "STITCI01-R03 Dictamen Rev 03.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Planeación y Evaluación/Servicios TIC/STICIT01-R03 Dictamen Rev 03.docx"
            },
            {
              id: "SPE_STIC_doc3",
              titulo: "STITCI01-R04 Formato de liberacion de servicio externo Rev 03.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Planeación y Evaluación/Servicios TIC/STICIT01-R04 Formato de liberacion de servicio externo Rev 03.docx"
            },
            {
              id: "SPE_STIC_doc4",
              titulo: "STITCI01-R05 Plan de mantenimiento Rev 03.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Planeación y Evaluación/Servicios TIC/STICIT01-R05 Plan de mantenimiento Rev 03.docx"
            }
          ]
        }
      ]
    },
    {
      title: "Subdirección de Servicios Escolares",
      subcarpetas: [
        {
          title: "Departamento de Servicios Bibliotecarios",
          documentos: [
            {
              id: "SSE_DSB_doc1",
              titulo: "SBIT01-R01 Requisición de Material bibliografico",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Bibliotecarios/SBIT01-R01 Requisición de Material bibliografico.docx"
            },
            {
              id: "SSE_DSB_doc2",
              titulo: "SBIT01-R02 Registro de Usuarios y Evaluación de satifacción",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Bibliotecarios/SBIT01-R02 Registro de Usuarios y Evaluación de satifacción.docx"
            }
          ]
        },
        {
          title: "Departamento de Servicios Escolares",
          documentos: [
            {
              id: "SSE_DSE_doc1",
              titulo: "SEIT01-R01 ENCUESTA SATISFACCIÓN Aspirantes S.E.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Escolares/SEIT01-R01  ENCUESTA SATISFACIÓN Aspirantes S.E.docx"
            },
            {
              id: "SSE_DSE_doc2",
              titulo: "SEIT02-R01 Encuesta de Satisfacción IT Acto Prot..docx",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Escolares/SEIT02-R01  Encuesta de Satisfacción IT Acto Prot.docx"
            }
          ]
        },
        {
          title: "Departamento de Servicios Estudiantiles",
          documentos: [
            {
              id: "SSE_DSEST_doc1",
              titulo: "STIT01-R01 FORMATO SOLICITUD DE BECA DE EXENCIÓN 2025",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R01 FORMATO SOLICITUD DE BECA DE EXENCIÓN 2025.pdf"
            },
            {
              id: "SSE_DSEST_doc2",
              titulo: "STIT01-R02 ESTUDIO SOCIOECONOMICO UTTECAM",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R02 ESTUDIO SOCIOECONOMICO UTTECAM.pdf"
            },
            // {
            //   id: "SSE_DSEST_doc2",
            //   titulo: "STIT01-R02 CUESTIONARIO SOCIOECONÓMICO UTTECAM.docx",
            //   archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R02 CUESTIONARIO SOCIOECONÓMICO UTTECAM.docx"
            // },
            {
              id: "SSE_DSEST_doc3",
              titulo: "STIT01-R03 CARTA BAJO PROTESTA ",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R03 CARTA PROTESTA.pdf"
            },
            {
              id: "SSE_DSEST_doc4",
              titulo: "STIT01-R04 CARTA COMPROMISO (EXENCION 50%) ",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R04 CARTA COMPROMISO (EXENCION 50_).docx"
            },

            {
              id: "SSE_DSEST_doc6",
              titulo: "STIT01-R06 Relación para registro de servicio",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R06 Relacion para registro de servicio.xlsx"
            },
            {
              id: "SSE_DSEST_doc7",
              titulo: "STIT01-R07 Formato de Asistencia_Platica Informativa 2025",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Departamento de Servicios Estudiantiles/STIT01-R07 Formato de Asistencia_Platica Informativa 2025.pdf"
            }
          ]
        },
        {
          title: "Subdirección de Servicios Escolares (Archivos Nivel Principal)",
          documentos: [
            {
              id: "SSE_SSE_doc1",
              titulo: "Lista de Servicios Académicos y de Apoyo al Estudiante.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Subdirección de Servicios Escolares/Lista de Servicios Académicos y de Apoyo al Estudiante.docx"
            },
            {
              id: "SSE_SSE_doc2",
              titulo: "SSIT01-R01 ENCUESTA DE SATISFACCIÓN DE LOS SERVICIOS DE APOYO AL ESTUDIANTE.docx",
              archivo: "/SIG/FORMATOS/Subdirección de Servicios Escolares/Subdirección de Servicios Escolares/SSIT01-R01 ENCUESTA DE SATISFACCIÓN DE LOS SERVICIOS DE APOYO AL ESTUDIANTE.docx"
            }
          ]
        }
      ]
    }
  ]
};