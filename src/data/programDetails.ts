export interface ProgramDetail {
  programId: number
  videoUrl?: string
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
  //SOFTWARE
  {
    programId: 1,
    profileImage: "/PORTADASPE/TICS.jpg",
    videoUrl: "/VIDEOSPE2025/TICS.mp4",
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
    admissionProfile: `
Habilidades y capacidades del aspirante:
Indagar, analizar, transmitir y comunicar información eficazmente a través del trabajo colaborativo e iniciativa propia para la resolución de problemas metodológicamente, guiando sus actividades con respeto a la diversidad cultural de forma cívica y ética para mejorar su entorno.

Habilidades y capacidades específicas del aspirante:
Pensamiento crítico, conocimientos básicos en matemáticas y ciencias, capacidad de organización para el desarrollo de proyectos e interés en el desarrollo tecnológico.
`,


    graduateProfile: `
El Ingeniero en Tecnologías de la Información e Innovación Digital posee las competencias profesionales esenciales que respaldan su desempeño en el dinámico entorno laboral, tanto en el ámbito local, como regional y nacional, que le permitan desarrollar soluciones innovadoras de integración de tecnologías de la información mediante metodologías y herramientas de desarrollo de software, redes inteligentes, seguridad informática, internet de las cosas, sistemas inteligentes y administración de proyectos; con base en las normas y estándares aplicables enfocados a atender las áreas de oportunidad y optimizar los procesos y recursos de los diversos sectores empresariales.
`,

    competencies: [
      "Resolver problemas complejos de ingeniería con base en principios de física química y matemáticas, a través del método científico para sustentar la toma de decisiones.",
      "Desarrollar una comunicación efectiva en los diferentes entornos (laboral, social y personal), haciendo uso del idioma inglés, además del fortalecimiento de habilidades y competencias a lo largo de su vida.",
    ],
    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Fundamentos de Redes",
          "Física",
          "Fundamentos de Programación",
          "Comunicación y Habilidades Digitales"
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Conmutación y Enrutamiento de Redes",
          "Probabilidad y Estadística",
          "Programación Estructurada",
          "Sistemas Operativos"
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Tópicos de Calidad para el Diseño de Software",
          "Bases de Datos",
          "Programación Orientada a Objetos",
          "Proyecto Integrador I"
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Aplicaciones Web",
          "Estructura de Datos",
          "Desarrollo de Aplicaciones Móviles",
          "Análisis y Diseño de Software"
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Ecuaciones Diferenciales",
          "Aplicaciones Web Orientadas a Servicios",
          "Bases de Datos Avanzadas",
          "Estándares y Métricas para el Desarrollo de Software",
          "Proyecto Integrador II"
        ],
      },
      {
        semester: "Sexto",
        subjects: [
          "Estadía"
        ],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Formulación de Proyectos de Tecnología",
          "Fundamentos de Inteligencia Artificial",
          "Ética y Legislación en Tecnologías de la Información",
          "Optativa I",
          "Seguridad Informática"
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Electrónica Digital",
          "Gestión de Proyectos de Tecnología",
          "Programación para Inteligencia Artificial",
          "Administración de Servidores",
          "Optativa II",
          "Informática Forense"
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Internet de las Cosas",
          "Evaluación de Proyectos de Tecnología",
          "Ciencia de Datos",
          "Tecnologías Disruptivas",
          "Optativa III",
          "Proyecto Integrador III"
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Estadía"
        ],
      }
    ],

  },
  //REDES
  {

    programId: 2,

    profileImage: "/PORTADASPE/TICS.jpg",
    videoUrl: "/VIDEOSPE2025/TICS.mp4",
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
    admissionProfile: `
Habilidades y capacidades del aspirante:
Indagar, analizar, transmitir y comunicar información eficazmente a través del trabajo colaborativo e iniciativa propia para la resolución de problemas metodológicamente, guiando sus actividades con respeto a la diversidad cultural de forma cívica y ética para mejorar su entorno.

Habilidades y capacidades específicas del aspirante:
Pensamiento crítico, conocimientos básicos en matemáticas y ciencias, capacidad de organización para el desarrollo de proyectos e interés en el desarrollo tecnológico.
`,
    graduateProfile: `
El Ingeniero en Tecnologías de la Información e Innovación Digital posee las competencias profesionales esenciales que respaldan su desempeño en el dinámico entorno laboral, tanto en el ámbito local, como regional y nacional,
que le permitan desarrollar soluciones innovadoras de integración de tecnologías de la información mediante metodologías y herramientas de desarrollo de software,
redes inteligentes, seguridad informática, internet de las cosas, sistemas inteligentes y administración de proyectos;
con base en las normas y estándares aplicables enfocados a atender las áreas de oportunidad y optimizar los procesos y recursos de los diversos sectores empresariales.
`,
    competencies: [
      "Resolver problemas complejos de ingeniería con base en principios de física química y matemáticas, a través del método científico para sustentar la toma de decisiones.",
      "Desarrollar una comunicación efectiva en los diferentes entornos (laboral, social y personal), haciendo uso del idioma inglés, además del fortalecimiento de habilidades y competencias a lo largo de su vida.",
    ],
    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Fundamentos de Redes",
          "Física",
          "Fundamentos de Programación",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Conmutación y Enrutamiento de Redes",
          "Probabilidad y Estadística",
          "Programación Estructurada",
          "Sistemas Operativos",
        ],
      },
      {
        semester: "Tercer",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Tópicos de Calidad para el Diseño de Software",
          "Bases de Datos",
          "Programación Orientada a Objetos",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Escalabilidad de Redes",
          "Programación de Redes",
          "Centro de Datos",
          "Infraestructura de Redes de Datos",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Ecuaciones Diferenciales",
          "Conexión de Redes WAN",
          "Cómputo en la Nube",
          "Seguridad en Redes",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Formulación de Proyectos de Tecnología",
          "Fundamentos de Inteligencia Artificial",
          "Ética y Legislación en Tecnologías de la Información",
          "Optativa I",
          "Seguridad Informática",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Electrónica Digital",
          "Gestión de Proyectos de Tecnología",
          "Programación para Inteligencia Artificial",
          "Administración de Servidores",
          "Optativa II",
          "Informática Forense",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Internet de las Cosas",
          "Evaluación de Proyectos de Tecnología",
          "Ciencia de Datos",
          "Tecnologías Disruptivas",
          "Optativa III",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ],
  },
  //AGRICULTURA
  {
    programId: 3,
    profileImage: "/PORTADASPE/AGRICULTURA.jpg",
    videoUrl: "/VIDEOSPE2025/AGRICULTURA.mp4",
    educationalObjectives: [
      "Gestionar procesos agrícolas para mejorar la productividad y sostenibilidad.",
      "Implementar sistemas de calidad en la producción agropecuaria.",
      "Optimizar el uso de recursos naturales y materiales en la agricultura.",
      "Aplicar normas de seguridad y buenas prácticas agrícolas."
    ],
    graduateAttributes: [
      "Liderar equipos de trabajo en entornos agrícolas y agroindustriales.",
      "Desarrollar proyectos de mejora continua en cultivos y producción agrícola.",
      "Comunicar de manera efectiva en el sector agropecuario.",
      "Aplicar principios éticos en la toma de decisiones agrícolas y ambientales."
    ],

    admissionProfile:
      "El aspirante a la carrera de Ingeniería en Agricultura Sustentable y Protegida debe mostrar vocación por las actividades agrícolas, capacidad de análisis crítico, trabajo en equipo e interés por contribuir al desarrollo comunitario. Debe contar con conocimientos básicos en matemáticas, física, química y biología, así como habilidades en el manejo de software, comunicación, innovación, resolución de problemas y una fuerte convicción hacia la sustentabilidad y el aprovechamiento racional de los recursos naturales.",
    graduateProfile:
      "El Ingeniero en Agricultura Sustentable y Protegida se distingue por poseer las competencias profesionales esenciales que respaldan su desempeño con éxito en el dinámico entorno laboral, abarcando tanto el ámbito local como el regional y nacional. Este perfil integral no solo se ajusta a las demandas actuales del sector, sino que también anticipa y se adapta a las transformaciones y desafíos emergentes del Ingeniero en Agricultura Sustentable y Protegida. Su capacidad para integrar conocimientos técnicos especializados, habilidades analíticas y una visión innovadora lo posiciona como un profesional altamente calificado y preparado para contribuir significativamente al avance de la disciplina y a la resolución eficiente de problemáticas complejas en distintos contextos. ",
    competencies: [
      "Analizar procesos agrícolas para optimizar la producción.",
      "Implementar sistemas de gestión de calidad en cultivos y producción agropecuaria."
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Botánica",
          "Sustentabilidad Agrícola",
          "Química Agrícola",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Física",
          "Probabilidad y Estadística",
          "Entomología Agrícola",
          "Edafología",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Sistemas de Producción Agrícola Sustentable",
          "Microbiología Agrícola",
          "Fisiología Vegetal",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Fitopatología",
          "Manejo de Malezas",
          "Fertirrigación",
          "Agricultura Protegida",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Ecuaciones Diferenciales",
          "Fruticultura",
          "Horticultura y Floricultura Protegida",
          "Topografía y Sistemas Geoespaciales",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Legislación y Certificación Agrícola",
          "Diseños Experimentales",
          "Administración de Proyectos Agrícolas",
          "Nutrición Vegetal",
          "Control de Variables Agroclimatológicas",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Fitogenética",
          "Manejo Postcosecha",
          "Innovación y Desarrollo Agrícola",
          "Agronegocios I",
          "Manejo Integrado de Plagas",
          "Diseño de Sistemas Agrícolas I",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Diseño de Sistemas Agrícolas II",
          "Agrónica",
          "Transferencia de Tecnología",
          "Agronegocios II",
          "Manejo Integrado de Enfermedades",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ],

  },

  // MECATRONICA
  {
    programId: 4,
   profileImage: "/PORTADASPE/MECATRONICA.jpg",
    videoUrl: "/VIDEOSPE2025/MECATRONICA.mp4",
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
      "El aspirante a Ingeniería en Mecatrónica debe contar con conocimientos básicos en ciencias como física y matemáticas, preferentemente habilidades digitales, lógica y programación. Se valora el interés por la innovación, la tecnología y la solución de problemas reales mediante el análisis y la aplicación científica. Es recomendable tener comprensión lectora en inglés y disposición para el aprendizaje continuo.",
    graduateProfile:
      "El egresado de Ingeniería en Mecatrónica será capaz de integrarse a empresas públicas o privadas en sectores industriales, enfocándose en el diseño, desarrollo, mantenimiento e innovación de sistemas automatizados. También podrá emprender su propia empresa tecnológica o desempeñarse como consultor, integrador de sistemas de control, o investigador en tecnologías de automatización y robótica.",
    competencies: [
      "Diseñar sistemas de control.",
      "Integrar componentes electrónicos y mecánicos.",
    ],
    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Procesos Industriales",
          "Metodología de la Programación",
          "Metrología",
          "Comunicación y Habilidades Digitales"
        ]
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Física",
          "Probabilidad y Estadística",
          "Circuitos Eléctricos",
          "Dibujo para Ingeniería"
        ]
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Elementos Mecánicos",
          "Electrónica Digital",
          "Electrónica Analógica y de Potencia",
          "Proyecto Integrador I"
        ]
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Estructura y Propiedad de los Materiales",
          "Control de Motores Eléctricos",
          "Sistemas Neumáticos e Hidráulicos",
          "Instrumentación Industrial"
        ]
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Rendimiento",
          "Ecuaciones Diferenciales",
          "Controladores Lógicos Programables",
          "Procesos de Manufactura",
          "Implementación de Sistemas Automáticos",
          "Proyecto Integrador II"
        ]
      },
      {
        semester: "Sexto",
        subjects: [
          "Estadía"
        ]
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Modelado y Simulación de Sistemas",
          "Cinemática y Dinámica de Robots",
          "Análisis de Mecanismos",
          "Instrumentación Virtual",
          "Sistemas Embebidos"
        ]
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Diseño Asistido por Computadora",
          "Ingeniería de Control",
          "Programación de Robots Industriales",
          "Diseño Mecánico",
          "Sistemas CAM CNC",
          "Diseño de Sistemas Mecatrónicos"
        ]
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Sistemas Eléctricos Industriales",
          "Control Avanzado",
          "Administración de Mantenimiento",
          "Ingeniería Asistida por Computadora",
          "Sistemas de Manufactura Flexible",
          "Proyecto Integrador III"
        ]
      },
      {
        semester: "Décimo",
        subjects: [
          "Estadía"
        ]
      }
    ]
    ,
  },
  //MANTENIMIENTO INDUSTRIAL
  {
    programId: 5,
    profileImage: "/PORTADASPE/INDUSTRIAL.jpg",
    videoUrl: "/VIDEOSPE2025/INDUSTRIAL.mp4",
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
      "El aspirante debe contar con pensamiento crítico, lógico y matemático; habilidades interpersonales y de gestión del tiempo; así como creatividad, liderazgo y compromiso. Se requiere capacidad para trabajar bajo presión, conocimientos básicos en herramientas manuales, uso de equipo de cómputo y herramientas digitales, y una buena interacción con el entorno físico.",
    graduateProfile:
      "Se distingue por poseer las competencias profesionales esenciales que respaldan su desempeño con éxito en el dinámico entorno laboral, abarcando tanto el ámbito local, como el regional y nacional. Este perfil integral no solo se ajusta a las demandas actuales del sector, sino que también anticipa y se adapta a las transformaciones y desafíos emergentes de la Licenciatura en Ingeniería en Mantenimiento Industrial. Su capacidad para integrar conocimientos técnicos especializados, habilidades analíticas y una visión innovadora lo posiciona como un profesional altamente cualificado y preparado para contribuir significativamente al avance de la disciplina y a la resolución eficiente de problemáticas complejas en distintos contextos.",
    competencies: [
      "Evaluar impacto ambiental.",
      "Diseñar estrategias de mitigación.",
    ],
    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Fundamentos de Mantenimiento",
          "Dibujo Industrial",
          "Seguridad Industrial",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Física",
          "Probabilidad y Estadística",
          "Gestión del Mantenimiento",
          "Termodinámica",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Sistemas Eléctricos",
          "Máquinas y Mecanismos",
          "Electrónica Analógica",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Máquinas Eléctricas",
          "Mantenimiento a Procesos de Manufactura",
          "Electrónica Digital",
          "Sistemas Neumáticos e Hidráulicos",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Rendimiento",
          "Ecuaciones Diferenciales",
          "Automatización y Robótica",
          "Sistemas Térmicos e Industriales",
          "Ciencia de los Materiales",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Física para Ingeniería",
          "Administración Estratégica para Mantenimiento",
          "Tribología",
          "Instalaciones Eléctricas",
          "Métodos y Sistemas de Trabajo",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Ingeniería Económica",
          "Mantenimiento Predictivo Mecánico",
          "Técnicas TPM y RCM",
          "Ensayos Destructivos",
          "Sistemas Automatizados y Redes Industriales",
          "Protocolos de Operación y Mantenimiento",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Gestión Ambiental",
          "Manufactura Asistida por Computadora",
          "Gestión del Talento Humano",
          "Ensayos no Destructivos",
          "Visualización y Control de Procesos",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ],

  },

  //PROCESOS ALIMENTICIOS
  {
    programId: 6,
    profileImage: "/PORTADASPE/ALIMENTOS.jpg",
    videoUrl: "/VIDEOSPE2025/ALIMENTOS.mp4",
    educationalObjectives: [
      "Diseñar y optimizar procesos de producción alimentaria seguros y eficientes.",
      "Gestionar proyectos de desarrollo y mejora en la industria alimentaria.",
      "Aplicar normas de calidad e inocuidad alimentaria.",
      "Promover la innovación y sostenibilidad en la ingeniería de alimentos.",
    ],
    graduateAttributes: [
      "Liderar equipos multidisciplinarios en la producción y control de alimentos.",
      "Supervisar procesos y operaciones en plantas de alimentos.",
      "Comunicar resultados y avances en proyectos alimentarios.",
      "Aplicar principios éticos y de responsabilidad social en la industria alimentaria.",
    ],

    admissionProfile:
      "El aspirante debe mostrar interés por la ciencia, tecnología y el sector alimentario, tener conocimientos básicos en física, química, biología y matemáticas, gusto por el trabajo en laboratorio y en equipo, así como una preocupación por el impacto ambiental y social de la industria de alimentos. También debe tener iniciativa para innovar y emprender en el ámbito agroalimentario.",
    graduateProfile:
      "El egresado es un profesional altamente capacitado, con habilidades técnicas, analíticas e innovadoras, capaz de enfrentar retos en el sector alimentario a nivel local, regional y nacional. Está preparado para adaptarse a los cambios del entorno, contribuir al desarrollo del área de alimentos y resolver problemáticas complejas de manera eficiente.",
    competencies: [
      "Desarrollar y aplicar soluciones tecnológicas en el procesamiento de alimentos, integrando conocimientos científicos y técnicos para mejorar la calidad, seguridad y sostenibilidad de los productos alimenticios.",
      "Evaluar y optimizar procesos en la industria alimentaria, considerando factores nutricionales, impacto ambiental, normativas vigentes y necesidades del consumidor, con una visión innovadora y emprendedora.",
    ],
    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Biología",
          "Química General",
          "Metodología de la Investigación",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Física",
          "Probabilidad y Estadística",
          "Química Analítica",
          "Microbiología",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Tecnología de Alimentos I",
          "Química de Alimentos",
          "Tecnología de Conservación de Alimentos",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Análisis de Alimentos",
          "Inocuidad Alimentaria",
          "Microbiología de Alimentos",
          "Tecnología de Alimentos II",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Ecuaciones Diferenciales",
          "Administración de la Producción",
          "Sistemas de Calidad",
          "Tecnología de Alimentos III",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Bioquímica",
          "Termodinámica",
          "Balance de Materia y Energía",
          "Operaciones Unitarias I",
          "Diseño de Experimentos",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Gestión de la Producción",
          "Emprendimiento e Innovación",
          "Formulación y Evaluación de Proyectos",
          "Estandarización de Procesos Alimentarios",
          "Operaciones Unitarias II",
          "Industrias Alimentarias Sostenibles",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Diseño de Plantas",
          "Diseño de Procesos",
          "Consultoría y Capacitación a Empresas",
          "Bioingeniería",
          "Operaciones Unitarias III",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ],
  },

  //INGENIERIA INDUSTRIAL
  {
    programId: 7,
    profileImage: "/PORTADASPE/INDUSTRIAL.jpg",
    videoUrl: "/VIDEOSPE2025/INDUSTRIAL.mp4",
    educationalObjectives: [
      "Optimizar procesos productivos y de operaciones industriales.",
      "Gestionar proyectos de mejora continua en la industria.",
      "Promover prácticas sustentables y responsabilidad social empresarial.",
      "Aplicar normas de seguridad y calidad industrial.",
    ],
    graduateAttributes: [
      "Analizar y mejorar sistemas de producción y logística.",
      "Supervisar operaciones industriales y equipos de trabajo.",
      "Comunicar efectivamente resultados y propuestas técnicas.",
      "Colaborar en equipos multidisciplinarios para la innovación industrial.",
    ],

    admissionProfile:
      "El aspirante al Técnico Superior Universitario en Procesos Productivos debe contar con habilidades de pensamiento crítico, que le permitan analizar, evaluar y resolver problemas. Además, debe poseer una capacidad de razonamiento verbal, así como un sólido razonamiento lógico y matemático.",
    graduateProfile:
      "El Ingeniero Industrial se distingue por poseer las competencias profesionales esenciales que respaldan su desempeño con éxito en el dinámico entorno laboral, abarcando tanto el ámbito local como el regional y nacional. Este perfil integral no solo se ajusta a las demandas actuales del sector, sino que también anticipa y se adapta a las transformaciones y desafíos emergentes de la/el Ingeniero Industrial. Su capacidad para integrar conocimientos técnicos especializados, habilidades analíticas y una visión innovadora lo posiciona como un profesional altamente cualificado y preparado para contribuir significativamente al avance de la disciplina y a la resolución eficiente de problemáticas complejas en distintos contextos.",
    competencies: [
      "Optimizar procesos productivos para aumentar la eficiencia.",
      "Gestionar recursos humanos y materiales en entornos industriales.",
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Dibujo Industrial",
          "Química Básica",
          "Metrología",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Cálculo Diferencial",
          "Física",
          "Probabilidad y Estadística",
          "Seguridad, Higiene y Medio Ambiente",
          "Costos de Producción",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Cálculo Integral",
          "Control de Calidad",
          "Procesos de Fabricación",
          "Estudio del Trabajo",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Cálculo de Varias Variables",
          "Ingeniería de Planta y Estudio del Trabajo",
          "Administración y Control de la Calidad",
          "Tecnologías de Transformación de Materiales",
          "Ingeniería Económica",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Ecuaciones Diferenciales",
          "Administración y Control de Operaciones",
          "Gestión Ambiental en Procesos Industriales",
          "Sistemas de Manufactura Aplicada",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Ingeniería de Planta",
          "Investigación de Operaciones I",
          "Manufactura Esbelta",
          "Automatización y Control de Procesos",
          "Tópicos de Nuevas Tecnologías de Manufactura",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Sistemas de Gestión de la Calidad",
          "Logística",
          "Investigación de Operaciones II",
          "6 Sigma",
          "Diseño del Producto",
          "Evaluación y Administración de Proyectos",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Legislación Industrial",
          "Administración Industrial y de Servicios",
          "Simulación de Procesos",
          "Administración del Mantenimiento",
          "Manufactura Integrada por Computadora",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ],

  },

  //CONTADURIA
  {
    programId: 8,
    profileImage: "/PORTADASPE/CONTADURIA.jpg",
    videoUrl: "/VIDEOSPE2025/CONTADURIA.mp4",
    educationalObjectives: [
      "Elaborar e interpretar información financiera y fiscal para la toma de decisiones.",
      "Diseñar estrategias contables que apoyen la gestión empresarial.",
      "Aplicar principios normativos y éticos en el ejercicio profesional.",
      "Contribuir al desarrollo económico mediante una contabilidad transparente y eficiente.",
    ],
    graduateAttributes: [
      "Registrar operaciones contables conforme a la normativa vigente.",
      "Analizar estados financieros para proponer soluciones empresariales.",
      "Trabajar en equipos interdisciplinarios con enfoque ético y profesional.",
      "Comunicar eficazmente información financiera a distintos públicos.",
    ],

    admissionProfile:
      "El aspirante debe mostrar interés por el análisis y la resolución de problemas, contar con habilidades para investigar, comunicar ideas de forma clara en distintos contextos y aprender de manera autónoma. Además, se espera que tenga disposición para trabajar en equipo, fomentar la inclusión y el respeto por la diversidad, así como participar con responsabilidad ética y cívica en su entorno social y cultural.",
    graduateProfile:
      "El egresado en Contaduría tiene las competencias profesionales de verificar información financiera, así como implementar soluciones a problemas financieros para satisfacer las necesidades del sector social y productivo a través de la aplicación de sus habilidades, conocimientos y la emisión de opiniones profesionales de utilidad pública para entes públicos y privados, en beneficio de su región, estado y nación.",
    competencies: [
      "Analizar e interpretar información financiera para la toma de decisiones.",
      "Aplicar normas contables y fiscales en el registro de operaciones económicas.",
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Matemáticas para Negocios",
          "Informática",
          "Fundamentos de Administración",
          "Contabilidad Básica",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Estadística para Negocios",
          "Derecho Laboral",
          "Derecho Mercantil y Civil",
          "Contabilidad Intermedia",
          "Economía",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Matemáticas Financieras",
          "Derecho Fiscal",
          "Contabilidad de Sociedades",
          "Contabilidad Superior",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Análisis e Interpretación de Estados Financieros",
          "Contribuciones de Personas Morales",
          "Presupuestos",
          "Contabilidad de Costos I",
          "Comercio Exterior",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Fundamentos de Auditoría",
          "Contribuciones de Personas Físicas",
          "Sueldos y Salarios",
          "Contabilidad de Costos II",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Mercado de Valores",
          "Administración Financiera",
          "Seminario Fiscal de Personas Morales",
          "Seminario Fiscal de Asociaciones y Sociedades Civiles",
          "Auditoría Financiera",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Contabilidad Gubernamental",
          "Estructura de Capital",
          "Contabilidades Especiales",
          "Seminario Fiscal de Personas Físicas",
          "Seguridad Social",
          "Desarrollo Organizacional",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Auditoría Gubernamental",
          "Evaluación Financiera",
          "Auditoría Fiscal",
          "Seminario de Defensa Fiscal",
          "Administración de Costos e Inventarios",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ]
    ,
  },

  //CAPITAL HUMANO
  {
    programId: 9,
    profileImage: "/PORTADASPE/ADMINISTRACION.jpg",
    videoUrl: "/VIDEOSPE2025/ADMINISTRACION.mp4",
    educationalObjectives: [
      "Diseñar estrategias para la gestión eficaz del talento humano.",
      "Implementar procesos organizacionales que fomenten el desarrollo del personal.",
      "Resolver problemáticas laborales mediante enfoques éticos y estratégicos.",
      "Contribuir al fortalecimiento del capital humano en entornos empresariales dinámicos.",
    ],

    graduateAttributes: [
      "Aplicar conocimientos de administración y psicología organizacional en la gestión del talento.",
      "Diseñar e implementar programas de capacitación y desarrollo.",
      "Fomentar ambientes laborales colaborativos y saludables.",
      "Comunicar de forma efectiva en distintos niveles organizacionales.",
    ],

    admissionProfile:
      "El aspirante debe contar con habilidades básicas de razonamiento, análisis estadístico y administración. Se espera que tenga pensamiento crítico, iniciativa para el aprendizaje continuo, comunicación asertiva, adaptación a entornos empresariales cambiantes y habilidades interpersonales para fomentar un ambiente de trabajo positivo.",
    graduateProfile:
      "El egresado se caracteriza por poseer competencias profesionales clave que le permiten desempeñarse con éxito en entornos laborales locales, regionales y nacionales. Integra conocimientos técnicos, pensamiento analítico y visión innovadora para adaptarse a los cambios del sector y contribuir eficazmente a la resolución de problemáticas en el campo de la administración.",
    competencies: [
      "Gestionar procesos de reclutamiento, selección y desarrollo del talento humano.",
      "Implementar estrategias de capacitación y clima organizacional para mejorar el desempeño laboral.",
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Contabilidad I",
          "Fundamentos de Administración",
          "Marco Legal de las Organizaciones",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Probabilidad y Estadística",
          "Contabilidad II",
          "Planeación Estratégica",
          "Microeconomía",
          "Derecho Corporativo",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Fundamentos de Mercadotecnia",
          "Análisis Financiero",
          "Fundamentos de Calidad",
          "Macroeconomía",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Gestión del Capital Humano",
          "Integración del Capital Humano",
          "Comportamiento Organizacional",
          "Sueldos y Salarios I",
          "Legislación Laboral",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Desarrollo del Capital Humano",
          "Seguridad e Higiene Laboral",
          "Desarrollo Organizacional",
          "Sueldos y Salarios II",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: ["Estadía"],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Mercadotecnia Estratégica",
          "Tecnologías Aplicadas a los Negocios",
          "Proyectos de Innovación Sostenibles",
          "Gestión del Talento Humano",
          "Administración de la Producción",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Dirección Estratégica",
          "Investigación de Operaciones",
          "Sistemas de la Información Aplicados en la Organización",
          "Modelos de Negocios",
          "Evaluación en el Desempeño del Capital Humano",
          "Administración y Gestión de la Calidad",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Comercio y Logística Internacional",
          "Consultoría Empresarial",
          "Gestión de la Propiedad Intelectual",
          "Desarrollo en Proyectos de Emprendimiento Social",
          "Finanzas Corporativas",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: ["Estadía"],
      },
    ],

  },
  //NEGOCIOS
  {
    programId: 10,
    profileImage: "/PORTADASPE/NEGOCIOS.jpg",
   
    educationalObjectives: [
      "Gestionar procesos administrativos y financieros en organizaciones.",
      "Implementar estrategias innovadoras para el desarrollo empresarial.",
      "Optimizar recursos humanos y materiales para alcanzar objetivos organizacionales.",
      "Aplicar normas éticas y legales en la administración de empresas."
    ],
    graduateAttributes: [
      "Liderar equipos de trabajo en entornos organizacionales diversos.",
      "Desarrollar proyectos de emprendimiento y mejora continua.",
      "Comunicar de manera efectiva en contextos empresariales y sociales.",
      "Aplicar principios éticos y responsabilidad social en la toma de decisiones."
    ],

    admissionProfile:
      "El aspirante cuenta con habilidades básicas de razonamiento y administración, capacidad para plantear y resolver problemas mediante análisis estadístico, y pensamiento crítico para evaluar proyectos de inversión en diversos sectores. Posee adaptabilidad para aprender en entornos empresariales cambiantes, comunicación asertiva, y habilidades interpersonales que fomentan un ambiente laboral productivo.",
    graduateProfile:
      "Se distingue por poseer las competencias profesionales esenciales que respaldan su desempeño con éxito en el dinámico entorno laboral, abarcando tanto el ámbito local, como el regional y nacional. Este perfil integral no solo se ajusta a las demandas actuales del sector, sino que también anticipa y se adapta a las transformaciones y desafíos emergentes de la Licenciatura en Administración. Su capacidad para integrar conocimientos técnicos especializados, habilidades analíticas y una visión innovadora lo posiciona como un profesional altamente cualificado y preparado para contribuir significativamente al avance de la disciplina y a la resolución eficiente de problemáticas complejas en distintos contextos.",
    competencies: [
      "Analizar procesos administrativos y financieros.",
      "Implementar sistemas de gestión y mejora continua en organizaciones."
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Fundamentos Matemáticos",
          "Contabilidad I",
          "Fundamentos de Administración",
          "Marco Legal de las Organizaciones",
          "Comunicación y Habilidades Digitales",
        ],
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Probabilidad y Estadística",
          "Contabilidad II",
          "Planeación Estratégica",
          "Microeconomía",
          "Derecho Corporativo",
        ],
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Fundamentos de Mercadotecnia",
          "Análisis Financiero",
          "Fundamentos de Calidad",
          "Macroeconomía",
          "Proyecto Integrador I",
        ],
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Innovación y Emprendimiento",
          "Estudio de Mercado",
          "Administración de Proyectos I",
          "Fundamentos de Sistemas de Producción",
          "Estudio Técnico y Organizacional",
        ],
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Diagnóstico Local y Regional",
          "Estudio Financiero",
          "Administración de Proyectos II",
          "Evaluación Financiera de Proyectos",
          "Proyecto Integrador II",
        ],
      },
      {
        semester: "Sexto",
        subjects: [
          "Estadía",
        ],
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Mercadotecnia Estratégica",
          "Tecnologías Aplicadas a los Negocios",
          "Proyectos de Innovación Sostenibles",
          "Gestión del Talento Humano",
          "Administración de la Producción",
        ],
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Dirección Estratégica",
          "Investigación de Operaciones",
          "Sistemas de la Información Aplicados en la Organización",
          "Modelos de Negocios",
          "Evaluación en el Desempeño del Capital Humano",
          "Administración y Gestión de la Calidad",
        ],
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Comercio y Logística Internacional",
          "Consultoría Empresarial",
          "Gestión de la Propiedad Intelectual",
          "Desarrollo en Proyectos de Emprendimiento Social",
          "Finanzas Corporativas",
          "Proyecto Integrador III",
        ],
      },
      {
        semester: "Décimo",
        subjects: [
          "Estadía",
        ],
      },
    ]

  },

  //MERCADOTECNIA
  {
    programId: 11,
    profileImage: "/perfil/InnovaciondeNegociosyMercadotecnia.png",
    videoUrl: "/VIDEOSPE2025/MERCADOTECNIA.mp4",
    educationalObjectives: [
      "Diseñar y ejecutar estrategias de marketing efectivas.",
      "Gestionar campañas publicitarias y de promoción con enfoque en resultados.",
      "Optimizar el posicionamiento de marca en mercados competitivos.",
      "Aplicar herramientas digitales para la gestión de mercadotecnia."
    ],
    graduateAttributes: [
      "Liderar equipos multidisciplinarios en proyectos de marketing.",
      "Desarrollar campañas innovadoras basadas en análisis de mercado.",
      "Comunicar mensajes persuasivos y efectivos en diversos canales.",
      "Actuar con ética y responsabilidad en decisiones comerciales y publicitarias."
    ],

    admissionProfile:
      "El aspirante debe contar con habilidades para el trabajo en equipo y liderazgo, capacidad para comunicarse efectivamente tanto de forma oral como escrita, así como destrezas en relaciones públicas. También debe ser adaptable a entornos cambiantes, tener una mentalidad abierta hacia diferentes culturas y mercados, y estar dispuesto a aprender y ajustar estrategias ante la incertidumbre",
    graduateProfile:
      "El egresado estará preparado para desempeñarse en cargos como director comercial, gerente de mercadotecnia, coordinador de marca, analista de mercado, community manager, desarrollador de contenido, gerente de ventas, asesor en desarrollo de negocios, coordinador de servicio al cliente, entre otros. Además, podrá ejercer como emprendedor o dirigir su propia empresa, gestionando proyectos comerciales y de marketing con enfoque estratégico e innovador.",
    competencies: [
      "Analizar el comportamiento del consumidor y las tendencias del mercado.",
      "Diseñar e implementar estrategias de marketing efectivas."
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo humano y valores",
          "Mercadotecnia",
          "Matemáticas",
          "Informática",
          "Fundamentos de administración y entorno empresarial",
          "Comunicación y habilidades digitales"
        ]
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades socioemocionales y manejo de conflictos",
          "Estadística I",
          "Planeación Estratégica",
          "Contabilidad para negocios",
          "Comportamiento del consumidor",
          "Economía"
        ]
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del pensamiento y toma de decisiones",
          "Legislación comercial",
          "Estadística II",
          "Sistema de investigación de mercados I",
          "Estrategias de producto y precio",
          "Proyecto integrador I"
        ]
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética profesional",
          "Mezcla promocional",
          "Diseño digital y multimedia",
          "Sistema de investigación de mercados II",
          "Gestión de ventas",
          "Administración del tiempo"
        ]
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de equipos de alto desempeño",
          "Logística y distribución",
          "Mercadotecnia de servicios",
          "Mercadotecnia digital I",
          "Mercadotecnia Estratégica",
          "Proyecto integrador II"
        ]
      },
      {
        semester: "Sexto",
        subjects: [
          "Estadía"
        ]
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades gerenciales",
          "Estadística aplicada a los negocios",
          "Mercadotecnia internacional",
          "Desarrollo de nuevos productos",
          "Tendencias de mercado y consumidor global",
          "Planeación y organización del trabajo"
        ]
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Mercadotecnia digital II",
          "Inteligencia de mercados",
          "Gestión de la calidad",
          "Inteligencia financiera",
          "Administración de la producción",
          "Gestión del talento humano"
        ]
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Cultura emprendedora",
          "Cadena de suministro",
          "Plan de negocios",
          "Comunicación integral de mercadotecnia",
          "Derecho corporativo",
          "Proyecto integrador III"
        ]
      },
      {
        semester: "Décimo",
        subjects: [
          "Estadía"
        ]
      }
    ]
    ,
  },
  //FINANZAS
  {
    programId: 12,
     profileImage: "/PORTADASPE/ASESORFINANCIERO.jpg",
    educationalObjectives: [
      "Analizar y gestionar productos y servicios financieros de manera eficiente.",
      "Implementar estrategias financieras para la toma de decisiones empresariales.",
      "Optimizar recursos financieros mediante técnicas de asesoría especializada.",
      "Aplicar normativas y principios éticos en la gestión financiera."
    ],
    graduateAttributes: [
      "Liderar procesos de asesoría financiera y gestión de clientes.",
      "Desarrollar proyectos financieros innovadores y sustentables.",
      "Comunicar información financiera de manera clara y efectiva.",
      "Actuar con responsabilidad y ética en la toma de decisiones financieras."
    ],

    admissionProfile:
      "El aspirante debe contar con habilidades de pensamiento crítico para analizar y resolver problemas, comunicación básica en inglés, destrezas numéricas para cálculos financieros, habilidades sociales para atención al cliente, así como capacidades de venta, negociación y análisis cuantitativo para la toma de decisiones financieras.",
    graduateProfile:
      "El egresado será un profesional altamente capacitado, con competencias técnicas, analíticas e innovadoras, preparado para desempeñarse con éxito en entornos laborales locales, regionales y nacionales. Su perfil integral le permite adaptarse a los cambios del sector financiero, contribuir al avance de la disciplina y resolver problemáticas complejas de manera eficiente.",
    competencies: [
      "Analizar y evaluar información financiera para la toma de decisiones.",
      "Aplicar técnicas de venta y negociación en productos y servicios financieros."
    ],

    studyPlan: [
      {
        semester: "Primero",
        subjects: [
          "Inglés I",
          "Desarrollo Humano y Valores",
          "Contabilidad Básica",
          "Microeconomía",
          "Informática",
          "Comunicación y Atención al Socio",
          "Comunicación y Habilidades Digitales"
        ]
      },
      {
        semester: "Segundo",
        subjects: [
          "Inglés II",
          "Habilidades Socioemocionales y Manejo de Conflictos",
          "Calidad",
          "Macroeconomía",
          "Introducción al Sistema Financiero",
          "Estadística Administrativa",
          "Marco Jurídico y Legal"
        ]
      },
      {
        semester: "Tercero",
        subjects: [
          "Inglés III",
          "Desarrollo del Pensamiento y Toma de Decisiones",
          "Educación Financiera",
          "Crédito, Financiamiento y Servicios Financieros Complementarios",
          "Matemáticas Financieras",
          "Ahorro e Inversión",
          "Proyecto Integrador I"
        ]
      },
      {
        semester: "Cuarto",
        subjects: [
          "Inglés IV",
          "Ética Profesional",
          "Mercadotecnia",
          "Administración Estratégica",
          "Cobranza",
          "Análisis e Interpretación de Estados Financieros",
          "Asesoría Financiera Integral"
        ]
      },
      {
        semester: "Quinto",
        subjects: [
          "Inglés V",
          "Liderazgo de Equipos de Alto Desempeño",
          "Estudio de Mercado",
          "Metodología de la Investigación",
          "Proyecto de Emprendimiento Social",
          "Evaluación Financiera",
          "Proyecto Integrador II"
        ]
      },
      {
        semester: "Sexto",
        subjects: [
          "Estadía"
        ]
      },
      {
        semester: "Séptimo",
        subjects: [
          "Inglés VI",
          "Habilidades Gerenciales",
          "Contabilidad Intermedia",
          "Estadística Inferencial",
          "Formulación y Planeación de Proyectos Financieros",
          "Mercado de Valores",
          "Planeación Estratégica Corporativa"
        ]
      },
      {
        semester: "Octavo",
        subjects: [
          "Inglés VII",
          "Economía de la Empresa",
          "Contabilidad de Costos",
          "Econometría",
          "Evaluación de Proyectos Financieros",
          "Finanzas Públicas",
          "Derecho Corporativo"
        ]
      },
      {
        semester: "Noveno",
        subjects: [
          "Inglés VIII",
          "Economía Política",
          "Auditoría Financiera",
          "Modelos de Programación Financiera",
          "Análisis de Riesgos Financieros",
          "Finanzas Internacionales",
          "Proyecto Integrador III"
        ]
      },
      {
        semester: "Décimo",
        subjects: [
          "Estadía"
        ]
      }
    ],

  },
]
