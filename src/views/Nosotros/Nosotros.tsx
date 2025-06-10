import FeatureCardNosotros from '../../components/FeatureCard';

export default function Nosotros() {

  const features = [
    {
      imageSrc: 'nosotros/vision.jpg', // Reemplaza con tu ruta
      title: 'Visión',
      description:
        'En el año 2027 ser una institución de excelencia, reconocida Nacional e Internacionalmente por su eficiencia, eficacia, pertinencia, equidad, inclusión, vinculación y cuerpos académicos consolidados y comprometidos con las expectativas de los aprendientes y de la sociedad, al brindar educación de calidad y profesionistas con alto sentido humano, competitivos e integrados en el ámbito productivo'
    },
    {
      imageSrc: 'nosotros/mision.webp',
      title: 'Misión',
      description:
        'Somos una Institución de Educación Superior comprometida con la excelencia, transparencia y rendición de cuentas, que brinda servicios educativos, científicos y tecnológicos con calidad, equidad, inclusión, responsabilidad social y sentido humano para contribuir al bienestar y desarrollo integral regional, estatal y nacional, cumpliendo los requerimientos de las partes interesadas, mediante un modelo formativo integral.',
    },
    {
      imageSrc: 'nosotros/valores.avif',
      title: 'Valores',
      description:[
        'Austeridad',
        'Honestidad',
        'Empatía',
        'Generosidad',
        'Respeto',
        'Tolerancia',
        'Igualdad',
        'Equidad',
        'Justicia',
        'Fraternidad',
        'Compromiso',
        'Bien Común'
      ],
    },
  ];

  const columns = [
    [
      'Apariencia Física',
      'Cultura',
      'Discapacidad',
      'Idioma'
    ],
    [
      'Estado civil',
      'Religión',
      'Sexo',
      'Embarazo'
    ],
    [
      'Opiniones',
      'Origen étnico o nacional',
      'Género',
      'Edad'
    ]
  ];

  return (
    <div className="mb-24">
      <section className="bg-white py-12 px-4">

        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Política Integral</h2>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center gap-8">
          {/* Imagen */}
          <div className="w-full lg:w-1/2">
            <img
              src="/PortadaPW.jpg"  // Reemplaza con la ruta de tu imagen
              alt="Vista del campus"
              className="w-auto h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 leading-relaxed">
            Somos una institución comprometida en la formación de profesionistas con responsabilidad social, sentido humano y ético, que en conjunto con la comunidad universitaria, contribuyen al desarrollo sustentable a través de establecimiento de objetivos integrales, actualización e innovación de los programas educativos, gestión de la propiedad intelectual y la mejora continua del Sistema de Gestión Integral, considerando el desarrollo educativo, científico y técnico, cumpliendo el marco legal aplicable, considerando las necesidades y expectativas de las partes interesadas, atendiendo los criterios ambientales de manera que se pueda controlar y prevenir la contaminación derivada de nuestros procesos y servicios para la preservación del medio ambiente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-20">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Objetivo Integral</h2>
        <p className='text-gray-700 leading-relaxed'>
        Formar integralmente profesionistas competentes socialmente responsables, creativos, emprendedores e innovadores, comprometidos con el cuidado del medio ambiente y la sustentabilidad, a través del proceso enseñanza-aprendizaje, conducido por una planta docente con sentido humano, perfil profesional, experiencia y capacitación adecuada para la realización de su labor educativa.
        </p>
      </section>

    <section className="bg-white py-12 px-4">
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCardNosotros
            key={feature.title}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>

    <section className="bg-white py-12 px-4">
  <div className="container mx-auto max-w-7xl">
    {/* Título */}
    <h2 className="text-4xl font-bold text-amber-700 mb-6 text-center">
      Política de Igualdad, No Discriminación y Derechos Humanos.
    </h2>

    {/* Párrafo */}
    <p className="text-gray-700 leading-relaxed text-justify mb-8 px-20">
      La Universidad Tecnológica de Tecamachalco es una Institución comprometida
      con la igualdad Laboral y la promoción de los Derechos Humanos, erradicando
      cualquier forma de maltrato, y segregación por parte de cualquier miembro
      de la Comunidad Universitaria hacia aspirantes estudiantes, personal docente
      y/o administrativo y cualquier persona que se encuentre dentro de las
      instalaciones o asistiendo a cualquier evento organizado por la misma
      materia de:
    </p>

    {/* Listado en columnas responsive */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
      {columns.map((items, idx) => (
        <ul key={idx} className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center">
              <span className="mt-1 w-2 h-2 bg-teal-600 rounded-full flex-shrink-0 mr-3"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}