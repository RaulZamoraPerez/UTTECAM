const ModelDetails = () => {
  const features = [
    {
      number: 1,
      title: "Educación híbrida y flexible",
      description: "Combinación de modalidades presenciales y virtuales con horarios adaptables.",
    },
    {
      number: 2,
      title: "Tecnologías emergentes",
      description: "Nuevas incorporaciones en pedagogías de enseñanza tecnológica.",
    },
    {
      number: 3,
      title: "Enfoque en sostenibilidad",
      description: "Formación con conciencia ambiental y responsabilidad social.",
    },
    {
      number: 4,
      title: "Internacionalización",
      description: "Programas de intercambio y colaboración con universidades extranjeras.",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-orange-500 mb-6">Modelo Educativo 2025</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        El modelo educativo 2025 representa una evolución hacia la educación del futuro, incorporando tecnologías
        emergentes, metodologías innovadoras y un enfoque en la sostenibilidad y responsabilidad social. Preparamos a
        nuestros estudiantes para los retos del mañana.
      </p>

      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.number} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {feature.number}
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModelDetails
