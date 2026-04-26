import { Briefcase, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function BolsaTrabajo() {
  const jobPosters = [
    {
      src: "/vinculacion/bolsa de trabajo/analista de recursos humanos.jpeg",
      alt: "Analista de Recursos Humanos",
      title: "Analista de Recursos Humanos"
    },
    {
      src: "/vinculacion/bolsa de trabajo/ingeniero industrial.jpeg",
      alt: "Ingeniero Industrial",
      title: "Ingeniero Industrial"
    }
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A9782]/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F15A22]/5 rounded-full -ml-64 -mb-64 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-5 tracking-tight" style={{ color: '#0A9782' }}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Briefcase className="h-12 w-12 md:h-16 md:w-16 text-[#F15A22]" />
            </motion.div>
            Bolsa de Trabajo
          </h1>
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-[#0A9782] to-[#F15A22] rounded-full mt-4 shadow-sm" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {jobPosters.map((poster, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group"
            >
              {/* Discrete Accent Bar */}
              <div className="h-1.5 w-full bg-[#0A9782]" />

              <div className="relative p-2 flex-1 flex items-center justify-center bg-gray-50/30">
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="w-full h-auto object-contain p-2"
                />
                
                {/* Discrete Download Button */}
                <div className="absolute top-4 right-4">
                  <a
                    href={poster.src}
                    download={poster.title}
                    className="flex items-center justify-center w-11 h-11 bg-white hover:bg-gray-50 text-[#0A9782] rounded-xl shadow-md transition-all duration-200 border border-gray-100 active:scale-95"
                    title={`Descargar ${poster.title}`}
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3">
             <div className="h-px w-24 bg-gray-200" />
             <p className="text-gray-400 text-sm font-medium tracking-[0.2em] uppercase">
               Universidad Tecnológica de Tecamachalco
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
