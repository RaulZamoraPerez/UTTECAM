import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { getNosotrosContent, type NosotrosData } from "@/services/nosotrosService";
import { Spinner } from "@/components/Spinner";

export default function Nosotros() {
  const [data, setData] = useState<NosotrosData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // SWR Strategy
    const CACHE_KEY = 'nosotros_content_cache';
    let isMounted = true;

    const loadData = async () => {
      // 1. Convert Cache
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        try {
          const { data: cachedData } = JSON.parse(cachedRaw);
          if (cachedData && isMounted) {
            setData(cachedData);
            setLoading(false);
          }
        } catch (e) {
             console.error("Cache parse error", e);
        }
      }

      // 2. Fetch API
      try {
        const freshData = await getNosotrosContent();
        
        if (!isMounted) return;

        localStorage.setItem(CACHE_KEY, JSON.stringify({
           data: freshData,
           timestamp: Date.now()
        }));

        if (cachedRaw) {
           const cachedData = JSON.parse(cachedRaw).data;
           if (JSON.stringify(freshData) === JSON.stringify(cachedData)) {
              if (isMounted) setLoading(false);
              return;
           }
        }

        setData(freshData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        if (isMounted) {
           // On error, we just keep loading false, data might be null or cached
           setLoading(false);
        }
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, []);

  if (loading && !data) {
     return <div className="h-[50vh] flex items-center justify-center"><Spinner text="Cargando información..." /></div>;
  }

  // Construct features array dynamically
  const features = [
    {
      imageSrc: data?.vision?.imageSrc || 'nosotros/vision.jpg',
      title: data?.vision?.title || 'Visión',
      description: data?.vision?.description || 'Nuestra visión...'
    },
    {
      imageSrc: data?.mision?.imageSrc || 'nosotros/mision.webp',
      title: data?.mision?.title || 'Misión',
      description: data?.mision?.description || 'Nuestra misión...'
    },
    {
      imageSrc: data?.valores?.imageSrc || 'nosotros/valores.avif',
      title: data?.valores?.title || 'Valores',
      description: data?.valores?.description || []
    },
  ];

  // Process discrimination items for columns
  const discriminationItems = (data?.noDiscriminacion?.items && Array.isArray(data.noDiscriminacion.items)) 
    ? data.noDiscriminacion.items 
    : [];

  return (
    <div className="mb-24 bg-white">
      {/* Política Integral */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-8 text-center">Política Integral</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12 max-w-6xl">
          {/* Image */}
          <div className="w-full md:w-1/2">
             <img
                src={data?.politicaIntegral?.imageSrc || "/PortadaPW.jpg"}
                alt="Política Integral"
                className="w-full h-auto rounded-lg shadow-md object-cover"
             />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
             <p className="text-gray-700 text-lg leading-relaxed text-justify">
               {data?.politicaIntegral?.text || (typeof data?.politicaIntegral?.description === 'string' ? data.politicaIntegral.description : 'Información de política integral...')}
             </p>
          </div>
        </div>
      </section>

      {/* Objetivo Integral */}
      <section className="py-16 px-8 lg:px-20 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-8">Objetivo Integral</h2>
            <p className='text-gray-700 text-lg leading-relaxed text-justify md:text-center'>
            {data?.objetivoIntegral?.text || (typeof data?.objetivoIntegral?.description === 'string' ? data.objetivoIntegral.description : 'Información de objetivo integral en proceso de carga...')}
            </p>
        </div>
      </section>

      {/* Grid: Visión, Misión, Valores */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          {features.map((feature, idx) => (
             <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center h-full group p-6">
                {/* Icon/Image Area */}
                <div className="w-full flex justify-center mb-6">
                   <div className="w-40 h-40 p-2 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-amber-50/50 transition-colors duration-300">
                     <img 
                        src={feature.imageSrc} 
                        alt={feature.title} 
                        className="w-full h-full object-contain drop-shadow-sm transform group-hover:scale-110 transition-transform duration-500" 
                     />
                   </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-amber-700 mb-6 text-center relative">
                  {feature.title}
                  <div className="h-1 w-12 bg-amber-500 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-3 left-0 right-0" />
                </h3>
                
                {/* Content */}
                <div className="w-full">
                   {Array.isArray(feature.description) ? (
                      <ul className="space-y-3 px-2">
                         {feature.description.map((val, vIdx) => (
                            <li key={vIdx} className="flex items-start gap-3 group/item">
                               <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:text-emerald-600 transition-colors" />
                               <span className="text-gray-700 font-medium text-sm group-hover/item:text-gray-900 transition-colors border-b border-transparent group-hover/item:border-emerald-100">
                                 {val}
                               </span>
                            </li>
                         ))}
                      </ul>
                   ) : (
                      <p className="text-gray-600 leading-relaxed text-justify text-[16px] font-normal">
                         {feature.description}
                      </p>
                   )}
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Política de Igualdad y No Discriminación */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 relative overflow-hidden">
             
             <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 relative z-10">
               Política de Igualdad, No Discriminación y Derechos Humanos
               <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-4 rounded-full" />
             </h2>

             <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl text-center mx-auto text-[16px] font-normal">
               {data?.noDiscriminacion?.text || (typeof data?.noDiscriminacion?.description === 'string' ? data.noDiscriminacion.description : "La Universidad Tecnológica de Tecamachalco es una Institución comprometida con la igualdad Laboral y la promoción de los Derechos Humanos, erradicando cualquier forma de maltrato, y segregación por parte de cualquier miembro de la Comunidad Universitaria hacia aspirantes, estudiantes, personal docente y/o administrativo.")}
             </p>

             <div className="flex flex-wrap justify-center gap-3">
               {discriminationItems.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                     {discriminationItems.map((item: string, index: number) => (
                        <span 
                          key={index} 
                          className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 transition-all duration-300 cursor-default shadow-sm hover:shadow"
                        >
                          {item}
                        </span>
                     ))}
                  </div>
               ) : (
                 <p className="text-gray-400 italic">No hay políticas definidas.</p>
               )}
             </div>

          </div>
        </div>
      </section>
    </div>
  )
}