import { 
  Library, 
  BookOpen, 
  Globe, 
  Search, 
  GraduationCap, 
  Scale, 
  MonitorPlay, 
  Sprout, 
  Laptop, 
  Wheat, 
  Database, 
  ExternalLink, 
  BookA, 
  FileText,
  Sparkles
} from 'lucide-react';

const links = [
  {
    title: "eLibro - Biblioteca Digital",
    description: "Plataforma de libros electrónicos académicos. Acceso a miles de títulos en español.",
    url: "https://elibro.net/es/lc/uttecam/login_usuario/?next=/es/lc/uttecam/inicio/",
    icon: BookOpen,
    color: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    title: "Biblioteca Colmex",
    description: "Recursos bibliográficos y acervos digitales de El Colegio de México.",
    url: "https://biblioteca.colmex.mx/",
    icon: Library,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Contaduría y Administración UNAM",
    description: "Revista internacional de investigación financiera y administrativa.",
    url: "http://www.cya.unam.mx/index.php/cya",
    icon: FileText,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    title: "Biblioteca RAE",
    description: "Colección bibliográfica y recursos lingüísticos de la Real Academia Española.",
    url: "https://www.rae.es/biblioteca",
    icon: BookA,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    title: "Biblioteca Virtual Miguel de Cervantes",
    description: "Fondo digital de obras clásicas en lenguas hispánicas.",
    url: "https://www.cervantesvirtual.com/",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "Redalyc",
    description: "Red de Revistas Científicas de América Latina y el Caribe, España y Portugal.",
    url: "https://www.redalyc.org/",
    icon: Globe,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "SciELO México",
    description: "Biblioteca científica electrónica en línea con acceso abierto.",
    url: "https://scielo.org.mx/",
    icon: Search,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Biblioteca Digital UNAM",
    description: "Acceso libre a tesis, libros y revistas de la Universidad Nacional Autónoma de México.",
    url: "https://bidi.unam.mx/acceso-libre",
    icon: GraduationCap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    title: "Biblioteca Digital SCJN",
    description: "Acervo jurídico y documental de la Suprema Corte de Justicia de la Nación.",
    url: "https://bibliotecadigital.scjn.gob.mx/",
    icon: Scale,
    color: "text-slate-600",
    bgColor: "bg-slate-50"
  },
  {
    title: "ILCE",
    description: "Recursos educativos del Instituto Latinoamericano de la Comunicación Educativa.",
    url: "https://www.ilce.edu.mx/",
    icon: MonitorPlay,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50"
  },
  {
    title: "Biblioteca Chapingo",
    description: "Recursos especializados en agronomía y ciencias afines.",
    url: "https://biblioteca.chapingo.mx/biblioteca-digital-3/",
    icon: Sprout,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "PruebaT",
    description: "Plataforma de aprendizaje y biblioteca digital gratuita de la Fundación Carlos Slim.",
    url: "https://pruebat.org/biblioteca-digital",
    icon: Laptop,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Ciencias Agrícolas INIFAP",
    description: "Revista Mexicana de Ciencias Agrícolas.",
    url: "https://cienciasagricolas.inifap.gob.mx/index.php/agricolas",
    icon: Wheat,
    color: "text-lime-600",
    bgColor: "bg-lime-50"
  },
  {
    title: "Recursos Digitales UANL",
    description: "Bases de datos y colecciones de la Universidad Autónoma de Nuevo León.",
    url: "https://recursos.db.uanl.mx/",
    icon: Database,
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
];

const Enlaces = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* Header */}
      <div className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium mb-6">
            <Sparkles size={14} className="text-amber-500" />
            <span>Recursos Digitales</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Biblioteca Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> y enlaces institucionales</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Acceso directo a las mejores fuentes de información académica, científica y cultural para fortalecer tu investigación.
          </p>
        </div>
      </div>

      {/* Grid de Enlaces */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-500"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${link.bgColor} rounded-2xl flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="p-2 bg-gray-50 rounded-full text-gray-400 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                  <ExternalLink size={18} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {link.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {link.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-sm font-medium text-gray-400 group-hover:text-green-600 transition-colors">
                <span>Visitar sitio web</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Simple */}
      <div className="max-w-4xl mx-auto px-4 pb-12 text-center">
        <p className="text-gray-400 text-sm">
          Estos enlaces son externos a la UTTECAM y se proporcionan como recursos de apoyo académico.
        </p>
      </div>

    </div>
  );
};

export default Enlaces;
