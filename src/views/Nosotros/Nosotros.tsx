import FeatureCardNosotros from '../../components/FeatureCard';
import { useNosotros } from '../../hooks/useNosotros';
import { resolveNosotrosData } from '../../services/nosotros.service';
import { RenderHtml } from '../../components/RenderHtml';

// ── Fallbacks estáticos (se usan si la API está vacía o falla) ────────────────
const FB_VISION =
  'En el año 2027, ser una institución de excelencia, reconocida Nacional e Internacionalmente por su eficiencia, eficacia, pertinencia, equidad, inclusión, vinculación y cuerpos académicos consolidados y comprometidos con las expectativas de los aprendientes y de la sociedad, al brindar educación de calidad y profesionistas con alto sentido humano, competitivos e integrados en el ámbito productivo. Siendo una Universidad abierta, flexible, innovadora, promotora de cultura, ciencia y tecnología, vinculada con los sectores social y productivo; que contribuya al desarrollo integral de la región, el estado y del país, distinguida por su compromiso social, desempeño académico, procesos consolidados de evaluación, acreditación de sus programas educativos y transparencia en la rendición de cuentas.';

const FB_MISION =
  'Somos una Institución de Educación Superior comprometida con la excelencia, transparencia y rendición de cuentas, que brinda servicios educativos, científicos y tecnológicos con calidad, equidad, inclusión, responsabilidad social y sentido humano para contribuir al bienestar y desarrollo integral regional, estatal y nacional, cumpliendo los requerimientos de las partes interesadas, mediante un modelo formativo integral.';

const FB_VALORES = [
  'Austeridad', 'Honestidad', 'Empatía', 'Generosidad',
  'Respeto', 'Tolerancia', 'Igualdad', 'Equidad',
  'Justicia', 'Fraternidad', 'Compromiso', 'Bien Común',
];

const FB_POLITICA =
  'Somos una institución comprometida en la formación de profesionistas con responsabilidad social, sentido humano y ético, que en conjunto con la comunidad universitaria, contribuyen al desarrollo sustentable a través de establecimiento de objetivos integrales, actualización e innovación de los programas educativos, gestión de la propiedad intelectual y la mejora continua del Sistema de Gestión Integral, considerando el desarrollo educativo, científico y técnico, cumpliendo el marco legal aplicable, considerando las necesidades y expectativas de las partes interesadas, atendiendo los criterios ambientales de manera que se pueda controlar y prevenir la contaminación derivada de nuestros procesos y servicios para la preservación del medio ambiente.';

const FB_OBJETIVO =
  'Formar integralmente profesionistas competentes socialmente responsables, creativos, emprendedores e innovadores, comprometidos con el cuidado del medio ambiente y la sustentabilidad, a través del proceso enseñanza-aprendizaje, conducido por una planta docente con sentido humano, perfil profesional, experiencia y capacitación adecuada para la realización de su labor educativa.';

const FB_NODISC_TEXTO =
  'La Universidad Tecnológica de Tecamachalco es una Institución comprometida con la igualdad Laboral y la promoción de los Derechos Humanos, erradicando cualquier forma de maltrato, y segregación por parte de cualquier miembro de la Comunidad Universitaria hacia aspirantes estudiantes, personal docente y/o administrativo y cualquier persona que se encuentre dentro de las instalaciones o asistiendo a cualquier evento organizado por la misma materia de:';

const FB_NODISC_COLS = [
  ['Apariencia Física', 'Cultura', 'Discapacidad', 'Idioma'],
  ['Estado civil', 'Religión', 'Sexo', 'Embarazo'],
  ['Opiniones', 'Origen étnico o nacional', 'Género', 'Edad'],
];

// Rutas de imágenes estáticas locales (siempre presentes)
const STATIC_IMAGES = {
  vision: 'nosotros/vision.jpg',
  mision: 'nosotros/mision.webp',
  valores: 'nosotros/valores.avif',
};

// ─────────────────────────────────────────────────────────────────────────────

export default function Nosotros() {
  const { content, loading, error } = useNosotros();

  // ── Estado de carga ───────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="mb-24 flex items-center justify-center py-32">
        <div className="flex flex-col items-center gap-3 text-amber-700">
          <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span className="text-sm font-medium">Cargando información institucional...</span>
        </div>
      </div>
    );
  }

  // ── Error de red/servidor — mostrar aviso pero seguir con fallback ─────────
  if (error) {
    console.warn('[Nosotros] Error al cargar desde la API, usando contenido estático.', error);
  }

  // ── Resolver datos (API + fallbacks) ───────────────────────────────────────
  const d = resolveNosotrosData(content, {
    vision: FB_VISION,
    mision: FB_MISION,
    valores: FB_VALORES,
    politica: FB_POLITICA,
    objetivo: FB_OBJETIVO,
    noDiscTexto: FB_NODISC_TEXTO,
    noDiscColumns: FB_NODISC_COLS,
  });

  // Features para el componente FeatureCard
  const features = [
    { imageSrc: STATIC_IMAGES.vision,  title: d.visionTitle,  description: d.visionText },
    { imageSrc: STATIC_IMAGES.mision,  title: d.misionTitle,  description: d.misionText },
    { imageSrc: STATIC_IMAGES.valores, title: d.valoresTitle, description: d.valoresItems },
  ];

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="mb-24">

      {/* ── Política Integral ─────────────────────────────────── */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Política Integral</h2>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">

          {/* Imagen (dinámica desde backend si existe, estática si no) */}
          <div className="w-full lg:w-1/2">
            <img
              src={d.politicaImage ?? '/PortadaPW.jpg'}
              alt="Vista del campus"
              className="w-auto h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <RenderHtml content={d.politicaText} className="text-gray-700" />
          </div>
        </div>
      </section>

      {/* ── Objetivo Integral ────────────────────────────────── */}
      <section className="bg-white py-12 px-20">
        <h2 className="text-5xl font-bold text-amber-700 mb-6 text-center">Objetivo Integral</h2>
        <RenderHtml content={d.objetivoText} className="text-gray-700" />
      </section>

      {/* ── Visión, Misión y Valores ─────────────────────────── */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <FeatureCardNosotros
              key={f.title}
              imageSrc={f.imageSrc}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </section>

      {/* ── Política de Igualdad / No Discriminación ─────────── */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-amber-700 mb-6 text-center">
            Política de Igualdad, No Discriminación y Derechos Humanos.
          </h2>

          {/* Descripción introductoria — dinámica desde el backend */}
          <div className="text-gray-700 leading-relaxed text-justify mb-8 px-4 md:px-20">
            <RenderHtml content={d.noDiscText} className="text-gray-700" />
          </div>

          {/* Columnas dinámicas */}
          {d.noDiscColumns.some((col) => col.length > 0) ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
              {d.noDiscColumns.map((items, idx) => (
                <ul key={idx} className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="mt-1 w-2 h-2 bg-teal-600 rounded-full flex-shrink-0 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ) : (
            /* Fallback si el array viene completamente vacío */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
              {FB_NODISC_COLS.map((items, idx) => (
                <ul key={idx} className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="mt-1 w-2 h-2 bg-teal-600 rounded-full flex-shrink-0 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}