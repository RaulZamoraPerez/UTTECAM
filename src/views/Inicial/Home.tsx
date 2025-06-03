export const Home = () => {
  return (
    <section className="px-4 py-10 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
        Modelos educativos
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Conoce nuestro enfoque educativo diseñado para formar profesionales
        competitivos.
      </p>

      <div className="flex justify-center items-center gap-4 mb-8">
        <span className="text-gray-700 font-medium">Modelo 2024</span>

        <span className="text-orange-600 font-bold">Modelo 2025</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center ">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-orange-600">
            Modelo Educativo 2025
          </h3>
          <p className="text-gray-700">
            El modelo educativo 2025 representa una evolución hacia la educación
            del futuro, incorporando tecnologías emergentes, metodologías
            innovadoras y un enfoque en la sostenibilidad y responsabilidad
            social. Preparamos a nuestros estudiantes para los retos del mañana.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-orange-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                4
              </span>
              <div>
                <p className="font-semibold text-orange-700">
                  Educación híbrida y flexible
                </p>
                <p className="text-gray-600 text-sm">
                  Combinación de modalidades presenciales y virtuales con
                  horarios adaptables.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                4
              </span>
              <div>
                <p className="font-semibold text-orange-700">
                  Tecnologías emergentes
                </p>
                <p className="text-gray-600 text-sm">
                  Nuevas incorporaciones en los procesos de enseñanza
                  tecnológico.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                4
              </span>
              <div>
                <p className="font-semibold text-orange-700">
                  Enfoque en sostenibilidad
                </p>
                <p className="text-gray-600 text-sm">
                  Formación con conciencia ambiental y responsabilidad social.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                4
              </span>

              <div>
                <p className="font-semibold text-orange-700">
                  Internacionalización
                </p>
                <p className="text-gray-600 text-sm">
                  Programas de intercambio y colaboración con universidades
                  extranjeras.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          {/* Aquí puedes poner tu imagen personalizada */}
          <img
            src="./modeloeducativo.png"
            alt="Modelo Educativo 2025"
            width={400}
            height={400}
            className="rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-green-700">
          Programas Educativos
        </h3>
        <p className="text-gray-700 mt-2">
          ¡Únete a nuestra comunidad educativa hoy mismo y descubre todo lo que
          nuestros programas educativos tienen para ofrecer!
        </p>
      </div>
    </section>
  );
};
