export interface ProgramDetail {
  programId: number
  profileImage: string
  educationalObjectives: string[]
  graduateAttributes: string[]
  admissionProfile: string
  graduateProfile: string
  competencies: string[]
  studyPlan: {
    semester: string
    subjects: string[]
  }[]
}

export const programDetails: ProgramDetail[] = [
  {
    programId: 1,
    profileImage: "/perfil/IngenieriaenDesarrolloyGestiondeSoftware.png",
    educationalObjectives: [
      "Resolver problemas complejos de ingeniería a través del método científico para sustentar la toma de decisiones.",
      "Desarrollar una comunicación efectiva en sus diferentes entornos haciendo uso del idioma inglés.",
      "Dirigir organizaciones a través del ejercicio ético del liderazgo, con enfoque sistémico para contribuir al logro de objetivos estratégicos y sustentables.",
      "Gestionar proyectos de sistemas computacionales para contribuir al crecimiento y desarrollo organizacional, regional, estatal y del país.",
    ],
    graduateAttributes: [
      "Diseñar y desarrollar sistemas computacionales, a través de la administración y dirección de proyectos tecnológicos, alineados a normas y estándares vigentes, para contribuir a la continuidad del negocio.",
      "Plantear y solucionar problemas de ingeniería con base en los principios y teorías de física, química y matemáticas, a través del método científico para sustentar la toma de decisiones en los ámbitos científico y tecnológico.",
      "Desarrollar y dirigir organizaciones a través del ejercicio ético del liderazgo, con enfoque sistémico para contribuir al logro de objetivos estratégicos.",
      "Comunicar sentimientos, pensamientos, conocimientos, experiencias, ideas, reflexiones, opiniones, en los ámbitos público, personal, educativo y ocupacional, productiva y receptivamente en el idioma inglés de acuerdo al nivel B1.",
    ],
    admissionProfile:
      "Egresado(a) de Educación Media Superior con interés por el uso de dispositivos tecnológicos, creativo, participativo, emprendedor, responsable, activo con habilidades para las relaciones sociales y la comunicación.",
    graduateProfile:
      "El Ingeniero(a) en Sistemas Computacionales sabrá diseñar y desarrollar sistemas computacionales, a través de la administración y dirección de proyectos tecnológicos, alineados a normas y estándares vigentes, para contribuir a la continuidad del negocio.",
    competencies: [
      "Resolver problemas complejos de ingeniería con base en principios de física química y matemáticas, a través del método científico para sustentar la toma de decisiones.",
      "Desarrollar una comunicación efectiva en los diferentes entornos (laboral, social y personal), haciendo uso del idioma inglés, además del fortalecimiento de habilidades y competencias a lo largo de su vida.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Cálculo Integral",
          "Programación Orientada a Objetos",
          "Bases de Datos",
          "Redes de Computadoras",
          "Inglés VI",
          "Administración del Tiempo",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Ingeniería de Software",
          "Desarrollo Web",
          "Dirección de Proyectos I",
          "Optativa I",
          "Inglés VII",
          "Planeación Y Organización del Trabajo",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Desarrollo Móvil",
          "Inteligencia Artificial",
          "Dirección de Proyectos II",
          "Sistemas de Calidad para TI",
          "Optativa II",
          "Inglés VIII",
          "Dirección de Equipos de Alto Rendimiento",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Seguridad Informática",
          "Cloud Computing",
          "Administración de Proyectos",
          "Integradora",
          "Inglés IX",
          "Negociación Empresarial",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 2,
    profileImage: "/perfil/IngenieriaenRedesInteligentesyCiberseguridad.png",
    educationalObjectives: [
      "Resolver problemas complejos de ingeniería a través del método científico para sustentar la toma de decisiones.",
      "Desarrollar una comunicación efectiva en sus diferentes entornos haciendo uso del idioma inglés.",
      "Dirigir organizaciones a través del ejercicio ético del liderazgo, con enfoque sistémico para contribuir al logro de objetivos estratégicos y sustentables.",
      "Gestionar proyectos de redes inteligentes y ciberseguridad para contribuir al crecimiento y desarrollo organizacional, regional, estatal y del país.",
    ],
    graduateAttributes: [
      "Diseñar y optimizar soluciones de redes digitales, a través de la administración y dirección de proyectos tecnológicos, alineados a normas y estándares vigentes, para contribuir a la continuidad del negocio.",
      "Plantear y solucionar problemas de ingeniería con base en los principios y teorías de física, química y matemáticas, a través del método científico para sustentar la toma de decisiones en los ámbitos científico y tecnológico.",
      "Desarrollar y dirigir organizaciones a través del ejercicio ético del liderazgo, con enfoque sistémico para contribuir al logro de objetivos estratégicos.",
      "Comunicar sentimientos, pensamientos, conocimientos, experiencias, ideas, reflexiones, opiniones, en los ámbitos público, personal, educativo y ocupacional, productiva y receptivamente en el idioma inglés de acuerdo al nivel B1, usuario independiente del Marco de referencia Europeo para contribuir en el desempeño de sus funciones en su entorno laboral, social y personal.",
    ],
    admissionProfile:
      "Egresado(a) de Educación Media Superior con interés por el uso de dispositivos tecnológicos, creativo, participativo, emprendedor, responsable, activo con habilidades para las relaciones sociales y la comunicación.",
    graduateProfile:
      "El Ingeniero(a) en Desarrollo y Gestión de Software sabrá diseñar y optimizar soluciones de software, a través de la administración y dirección de proyectos tecnológicos, alineados a normas y estándares vigentes, para contribuir a la continuidad del negocio.",
    competencies: [
      "Resolver problemas complejos de ingeniería con base en principios de física química y matemáticas, a través del método científico para sustentar la toma de decisiones.",
      "Desarrollar una comunicación efectiva en los diferentes entornos (laboral, social y personal), haciendo uso del idioma inglés, además del fortalecimiento de habilidades y competencias a lo largo de su vida.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Cálculo Integral",
          "Administración Avanzada de Infraestructura Virtualizada",
          "Tecnologías para Manejo Masivo de Datos",
          "Infraestructura de Centros de Datos",
          "Inglés VI",
          "Administración del Tiempo",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Gestión de la Seguridad Informática",
          "Cómputo en la Nube",
          "Dirección de Proyectos I",
          "Optativa I",
          "Inglés VII",
          "Planeación Y Organización del Trabajo",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Hacking Ético",
          "Automatización de Infraestructura Digital I",
          "Dirección de Proyectos II",
          "Sistemas de Calidad para TI",
          "Optativa II",
          "Inglés VIII",
          "Dirección de Equipos de Alto Rendimiento",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Informática Forense",
          "Automatización de Infraestructura Digital II",
          "Administración de Redes Empresariales",
          "Integradora",
          "Inglés IX",
          "Negociación Empresarial",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 3,
    profileImage: "/perfil/AgriculturaSustentableyProtegida.png",
    educationalObjectives: [
      "Gestionar procesos industriales para mejorar la productividad.",
      "Implementar sistemas de calidad en la industria.",
      "Optimizar recursos humanos y materiales.",
      "Aplicar normas de seguridad industrial.",
    ],
    graduateAttributes: [
      "Liderar equipos de trabajo en ambientes industriales.",
      "Desarrollar proyectos de mejora continua.",
      "Comunicar de manera efectiva en el entorno laboral.",
      "Aplicar principios éticos en la toma de decisiones.",
    ],
    admissionProfile:
      "Interés en procesos industriales y mejora continua.",
    graduateProfile:
      "El Ingeniero Industrial será capaz de gestionar y optimizar procesos productivos.",
    competencies: [
      "Analizar procesos industriales.",
      "Implementar sistemas de gestión de calidad.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Procesos Industriales",
          "Calidad Total",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Logística",
          "Gestión de Proyectos",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Seguridad Industrial",
          "Simulación de Procesos",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Administración de la Producción",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 4,
    profileImage: "/perfil/Mecatronica.png",
    educationalObjectives: [
      "Diseñar sistemas mecatrónicos innovadores.",
      "Integrar tecnologías de automatización.",
      "Resolver problemas complejos de ingeniería.",
      "Fomentar el desarrollo tecnológico.",
    ],
    graduateAttributes: [
      "Desarrollar proyectos de automatización.",
      "Aplicar conocimientos multidisciplinarios.",
      "Trabajar en equipos interdisciplinarios.",
      "Comunicar resultados técnicos.",
    ],
    admissionProfile:
      "Interés en robótica y automatización.",
    graduateProfile:
      "El Ingeniero Mecatrónico podrá diseñar e implementar sistemas automatizados.",
    competencies: [
      "Diseñar sistemas de control.",
      "Integrar componentes electrónicos y mecánicos.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Robótica",
          "Electrónica Industrial",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Automatización",
          "Diseño Mecánico",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Sistemas Embebidos",
          "Control Digital",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Proyecto Mecatrónico",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 5,
    profileImage: "/perfil/MantenimientoIndustrial.png",
    educationalObjectives: [
      "Gestionar recursos naturales de manera sostenible.",
      "Evaluar el impacto ambiental de proyectos.",
      "Promover el desarrollo sustentable.",
      "Implementar tecnologías limpias.",
    ],
    graduateAttributes: [
      "Analizar problemas ambientales.",
      "Proponer soluciones ecológicas.",
      "Trabajar en equipos multidisciplinarios.",
      "Comunicar estrategias ambientales.",
    ],
    admissionProfile:
      "Interés en el medio ambiente y la sostenibilidad.",
    graduateProfile:
      "El Ingeniero Ambiental podrá gestionar proyectos ecológicos.",
    competencies: [
      "Evaluar impacto ambiental.",
      "Diseñar estrategias de mitigación.",
    ],
    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Gestión Ambiental",
          "Ecología",
          "Inglés VI",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Tecnologías Limpias",
          "Legislación Ambiental",
          "Inglés VII",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Impacto Ambiental",
          "Sustentabilidad",
          "Inglés VIII",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Proyecto Ambiental",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 6,
    profileImage: "/perfil/ProcesosBioalimentarios.png",
    educationalObjectives: [
      "Diseñar y construir infraestructuras seguras.",
      "Gestionar proyectos de obra civil.",
      "Aplicar normas de construcción.",
      "Promover la innovación en la ingeniería civil.",
    ],
    graduateAttributes: [
      "Liderar equipos de construcción.",
      "Supervisar obras civiles.",
      "Comunicar avances de proyectos.",
      "Aplicar principios éticos en la construcción.",
    ],
    admissionProfile:
      "Interés en la construcción y diseño de infraestructuras.",
    graduateProfile:
      "El Ingeniero Civil podrá diseñar y supervisar obras civiles.",
    competencies: [
      "Diseñar estructuras.",
      "Gestionar recursos en obra.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Estructuras",
          "Topografía",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Construcción",
          "Gestión de Proyectos",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Materiales de Construcción",
          "Hidráulica",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Proyecto Civil",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 7,
    profileImage: "/perfil/Ingenieriaindustrial.png",
    educationalObjectives: [
      "Diseñar sistemas eléctricos eficientes.",
      "Gestionar proyectos eléctricos.",
      "Promover el uso de energías renovables.",
      "Aplicar normas de seguridad eléctrica.",
    ],
    graduateAttributes: [
      "Desarrollar proyectos eléctricos.",
      "Supervisar instalaciones eléctricas.",
      "Comunicar resultados técnicos.",
      "Trabajar en equipos multidisciplinarios.",
    ],
    admissionProfile:
      "Interés en la electricidad y energías renovables.",
    graduateProfile:
      "El Ingeniero Eléctrico podrá diseñar y supervisar sistemas eléctricos.",
    competencies: [
      "Diseñar circuitos eléctricos.",
      "Gestionar proyectos de energía.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Circuitos Eléctricos",
          "Energías Renovables",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Instalaciones Eléctricas",
          "Gestión de Proyectos",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Automatización Eléctrica",
          "Protección de Sistemas",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Proyecto Eléctrico",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 8,
    profileImage: "/perfil/Contaduria.png",
    educationalObjectives: [
      "Diseñar sistemas electrónicos innovadores.",
      "Integrar tecnologías digitales y analógicas.",
      "Resolver problemas complejos de electrónica.",
      "Fomentar el desarrollo tecnológico.",
    ],
    graduateAttributes: [
      "Desarrollar proyectos electrónicos.",
      "Aplicar conocimientos multidisciplinarios.",
      "Trabajar en equipos interdisciplinarios.",
      "Comunicar resultados técnicos.",
    ],
    admissionProfile:
      "Interés en la electrónica y tecnología.",
    graduateProfile:
      "El Ingeniero Electrónico podrá diseñar e implementar sistemas electrónicos.",
    competencies: [
      "Diseñar circuitos electrónicos.",
      "Integrar sistemas digitales y analógicos.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Electrónica Digital",
          "Microcontroladores",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Sistemas de Comunicación",
          "Diseño de PCB",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Instrumentación",
          "Control Electrónico",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Proyecto Electrónico",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 9,
    profileImage: "/perfil/CapitalHumano.png",
    educationalObjectives: [
      "Diseñar dispositivos médicos innovadores.",
      "Integrar tecnologías en el área de la salud.",
      "Resolver problemas complejos en ingeniería biomédica.",
      "Fomentar el desarrollo tecnológico en salud.",
    ],
    graduateAttributes: [
      "Desarrollar proyectos biomédicos.",
      "Aplicar conocimientos multidisciplinarios.",
      "Trabajar en equipos de salud.",
      "Comunicar resultados técnicos.",
    ],
    admissionProfile:
      "Interés en la salud y tecnología.",
    graduateProfile:
      "El Ingeniero Biomédico podrá diseñar e implementar dispositivos médicos.",
    competencies: [
      "Diseñar equipos médicos.",
      "Integrar sistemas electrónicos en salud.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Bioinstrumentación",
          "Electrónica Médica",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Biomecánica",
          "Gestión Hospitalaria",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Imágenes Médicas",
          "Control Biomédico",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Proyecto Biomédico",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 10,
    profileImage:"/perfil/GestiondeNegociosyProyectos.jpg",
    educationalObjectives: [
      "Gestionar procesos químicos industriales.",
      "Implementar tecnologías limpias en la industria química.",
      "Optimizar recursos en procesos químicos.",
      "Aplicar normas de seguridad industrial.",
    ],
    graduateAttributes: [
      "Liderar equipos en la industria química.",
      "Desarrollar proyectos de mejora continua.",
      "Comunicar de manera efectiva en el entorno laboral.",
      "Aplicar principios éticos en la toma de decisiones.",
    ],
    admissionProfile:
      "Interés en la química y procesos industriales.",
    graduateProfile:
      "El Ingeniero Químico será capaz de gestionar y optimizar procesos químicos.",
    competencies: [
      "Analizar procesos químicos.",
      "Implementar sistemas de gestión de calidad.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Procesos Químicos",
          "Química Industrial",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Tecnologías Limpias",
          "Gestión de Proyectos",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Seguridad Industrial",
          "Simulación de Procesos",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Administración de la Producción",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 11,
    profileImage: "/perfil/InnovaciondeNegociosyMercadotecnia.png",
    educationalObjectives: [
      "Gestionar empresas de manera eficiente.",
      "Implementar estrategias de negocios.",
      "Optimizar recursos empresariales.",
      "Aplicar normas de calidad en la gestión.",
    ],
    graduateAttributes: [
      "Liderar equipos de trabajo en empresas.",
      "Desarrollar proyectos de mejora continua.",
      "Comunicar de manera efectiva en el entorno empresarial.",
      "Aplicar principios éticos en la toma de decisiones.",
    ],
    admissionProfile:
      "Interés en la administración y gestión empresarial.",
    graduateProfile:
      "El Ingeniero en Gestión Empresarial será capaz de liderar y optimizar empresas.",
    competencies: [
      "Analizar procesos empresariales.",
      "Implementar sistemas de gestión de calidad.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Gestión Empresarial",
          "Calidad Total",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Logística",
          "Gestión de Proyectos",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Finanzas Empresariales",
          "Simulación de Negocios",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Administración de la Producción",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
  {
    programId: 12,
    profileImage: "/perfil/AsesorFinancieroCooperativo.png",
    educationalObjectives: [
      "Gestionar cadenas de suministro eficientes.",
      "Optimizar procesos logísticos.",
      "Implementar tecnologías en logística.",
      "Aplicar normas de calidad en la logística.",
    ],
    graduateAttributes: [
      "Liderar equipos de trabajo en logística.",
      "Desarrollar proyectos de mejora continua.",
      "Comunicar de manera efectiva en el entorno logístico.",
      "Aplicar principios éticos en la toma de decisiones.",
    ],
    admissionProfile:
      "Interés en la logística y gestión de cadenas de suministro.",
    graduateProfile:
      "El Ingeniero en Logística será capaz de liderar y optimizar procesos logísticos.",
    competencies: [
      "Analizar procesos logísticos.",
      "Implementar sistemas de gestión de calidad.",
    ],
    studyPlan: [
      {
        semester: "Séptimo",
        subjects: [
          "Logística",
          "Gestión de Inventarios",
          "Inglés VI",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Transporte y Distribución",
          "Gestión de Proyectos",
          "Inglés VII",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Comercio Internacional",
          "Simulación de Procesos",
          "Inglés VIII",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Administración de la Cadena de Suministro",
          "Integradora",
          "Inglés IX",
        ],
      },
      {
        semester: "Estadía",
        subjects: ["480 horas"],
      },
    ],
  },
]
