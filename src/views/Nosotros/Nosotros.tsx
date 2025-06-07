import FeatureCardNosotros from '../../components/FeatureCard';

export default function Nosotros() {

  const features = [
    {
      imageSrc: 'nosotros/vision.jpg', // Reemplaza con tu ruta
      title: 'Visión',
      description:
        'Siendo una universidad abierta, flexible, innovadora, promotora de cultura, ciencia y tecnología, vinculada con los sectores social y productivo; que contribuya al desarrollo integral de la región, el estado y del país, distinguida por su compromiso social, desempeño académico, procesos consolidados de evaluación, acreditación de sus programas educativos y transparencia en la rendición de cuentas.',
    },
    {
      imageSrc: 'nosotros/mision.webp',
      title: 'Misión',
      description:
        'Siendo una universidad abierta, flexible, innovadora, promotora de cultura, ciencia y tecnología, vinculada con los sectores social y productivo; que contribuya al desarrollo integral de la región, el estado y del país, distinguida por su compromiso social, desempeño académico, procesos consolidados de evaluación, acreditación de sus programas educativos y transparencia en la rendición de cuentas.',
    },
    {
      imageSrc: 'nosotros/valores.avif',
      title: 'Valores',
      description:
        'Siendo una universidad abierta, flexible, innovadora, promotora de cultura, ciencia y tecnología, vinculada con los sectores social y productivo; que contribuya al desarrollo integral de la región, el estado y del país, distinguida por su compromiso social, desempeño académico, procesos consolidados de evaluación, acreditación de sus programas educativos y transparencia en la rendición de cuentas.',
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

      <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Historia</h2>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center gap-8">
        {/* Imagen */}
        <div className="w-full lg:w-1/2">
          <img
            src="nosotros/explanada-uttecam.jpg"  // Reemplaza con la ruta de tu imagen
            alt="Vista del campus"
            className="w-auto h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-700 leading-relaxed">
            En el año 2027 ser una institución de excelencia, reconocida Nacional e
            Internacionalmente por su eficiencia, eficacia, pertinencia, equidad,
            inclusión, vinculación y cuerpos académicos consolidados y comprometidos
            con las expectativas de los aprendientes y de la sociedad, al brindar
            educación de calidad y profesionistas con alto sentido humano,
            competitivos e integrados en el ámbito productivo.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Siendo una universidad abierta, flexible, innovadora, promotora de cultura,
            ciencia y tecnología, vinculada con los sectores social y productivo; que
            contribuya al desarrollo integral de la región, el estado y del país,
            distinguida por su compromiso social, desempeño académico, procesos
            consolidados de evaluación, acreditación de sus programas educativos y
            transparencia en la rendición de cuentas.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white py-12 px-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-teal-600 mb-8">
        Ser mejor hoy!
      </h2>
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
    <p className="text-gray-700 leading-relaxed text-justify mb-8">
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