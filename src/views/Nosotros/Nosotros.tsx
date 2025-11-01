import { useState, useEffect } from 'react';
import FeatureCardNosotros from '../../components/FeatureCard';
import { fetchNosotrosContent } from '../../util/nosotrosApi';
import type { NosotrosContent } from '../../util/nosotrosApi';

export default function Nosotros() {
  const [data, setData] = useState<NosotrosContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await fetchNosotrosContent();
        if (content) {
          setData(content);
        } else {
          setError('No se pudo cargar el contenido');
        }
      } catch (err) {
        setError('Error al cargar el contenido');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-700"></div>
          <p className="mt-4 text-gray-600">Cargando contenido...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 text-xl">{error || 'Error al cargar el contenido'}</p>
        </div>
      </div>
    );
  }

  const features = [data.vision, data.mision, data.valores];

  return (
    <div className="mb-24">
      <section className="bg-white py-12 px-4">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">{data.politicaIntegral.title}</h2>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center gap-8">
          {/* Imagen */}
          <div className="w-full lg:w-1/2">
            <img
              src={data.politicaIntegral.imageSrc}
              alt={data.politicaIntegral.title}
              className="w-auto h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              {data.politicaIntegral.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-20">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Objetivo Integral</h2>
        <p className='text-gray-700 leading-relaxed'>
          {data.objetivoIntegral}
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
            {data.noDiscriminacion.map((items, idx) => (
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
  );
}