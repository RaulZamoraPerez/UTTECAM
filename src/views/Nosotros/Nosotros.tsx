import FeatureCardNosotros from '../../components/FeatureCard';
import { useEffect, useState } from 'react';
import { getNosotrosContent, type NosotrosContent } from '@/services/nosotros.service';
import { envs } from '@/config/envs';

export default function Nosotros() {
  const [content, setContent] = useState<NosotrosContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await getNosotrosContent();
      setContent(data);
    };
    fetchContent();
  }, []);

  if (!content) {
    return <div className="text-center py-20">Cargando...</div>;
  }

  const features = [
    {
      imageSrc: content.vision?.imagen ? `${envs.API_BASE_URL}/uploads/nosotros/${content.vision.imagen}` : 'nosotros/vision.jpg',
      title: content.vision?.titulo || 'Visión',
      description: content.vision?.descripcion || 'Descripción de la visión...'
    },
    {
      imageSrc: content.mision?.imagen ? `${envs.API_BASE_URL}/uploads/nosotros/${content.mision.imagen}` : 'nosotros/mision.webp',
      title: content.mision?.titulo || 'Misión',
      description: content.mision?.descripcion || 'Descripción de la misión...',
    },
    {
      imageSrc: content.valores?.imagen ? `${envs.API_BASE_URL}/uploads/nosotros/${content.valores.imagen}` : 'nosotros/valores.avif',
      title: content.valores?.titulo || 'Valores',
      description: content.valores?.lista || [],
    },
  ];

  return (
    <div className="mb-24">
      <section className="bg-white py-12 px-4">

        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">
          {content.politicaIntegral?.titulo || 'Política Integral'}
        </h2>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center gap-8">
          {/* Imagen */}
          <div className="w-full lg:w-1/2">
            <img
              src={content.politicaIntegral?.imagen ? `${envs.API_BASE_URL}/uploads/nosotros/${content.politicaIntegral.imagen}` : "/PortadaPW.jpg"}
              alt="Vista del campus"
              className="w-auto h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              {content.politicaIntegral?.descripcion || 'Descripción de la política integral...'}
            </p>
          </div>
        </div>
      </section>

      {content.objetivoIntegral && (
        <section className="bg-white py-12 px-20">
          <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">
            {content.objetivoIntegral.titulo || 'Objetivo Integral'}
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            {content.objetivoIntegral.descripcion}
          </p>
        </section>
      )}

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
      {(content.noDiscriminacion?.columnas || []).map((items: string[], idx: number) => (
        <ul key={idx} className="space-y-3">
          {items.map((item: string) => (
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