import { useState, useEffect } from "react";
import { ChevronRight, Folder, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  searchTerm?: string;
  folders?: any[];
  title?: string;
}

export const Secciones2 = ({ searchTerm = "", folders = [], title = "Carpetas y Documentos" }: Props) => {
  // Función para filtrar carpetas
  const filtrarCarpetas = (carpetas: any[]): any[] => {
    if (!searchTerm) return carpetas;
    
    return carpetas
      .map(carpeta => {
        const subcarpetasFiltradas = carpeta.subcarpetas ? filtrarCarpetas(carpeta.subcarpetas) : [];
        const documentosFiltrados = carpeta.documentos ? carpeta.documentos.filter((doc: any) => 
          doc.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
        
        if (subcarpetasFiltradas.length > 0 || documentosFiltrados.length > 0) {
          return {
            ...carpeta,
            subcarpetas: subcarpetasFiltradas,
            documentos: documentosFiltrados
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  const datosFiltrados = filtrarCarpetas(folders);

  if (datosFiltrados.length === 0 && searchTerm) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center p-10 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm"
      >
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <Folder className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-gray-900 font-medium text-lg mb-1">No se encontraron resultados</h3>
        <p className="text-gray-500 text-center max-w-sm">
          No hay documentos que coincidan con "<span className="font-semibold text-gray-700">{searchTerm}</span>". Intenta con otras palabras.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="bg-gradient-to-r from-[#0A9782] to-[#0A9782]/90 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
             <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Folder className="h-6 w-6 text-white fill-white/20" />
             </div>
             <span className="text-xl font-bold tracking-tight">{title}</span>
        </div>
        <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium backdrop-blur-sm hidden sm:block">
            {datosFiltrados.length} {datosFiltrados.length === 1 ? 'carpeta' : 'carpetas'}
        </span>
      </div>
      
      <div className="p-3 sm:p-5 bg-[#f8fafc]/50">
        <div className="space-y-3">
          {datosFiltrados.map((nivel1, index) => (
            <Carpeta key={index} carpeta={nivel1} nivel={1} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Carpeta = ({ carpeta, nivel, searchTerm = "" }: any) => {
  const [abierto, setAbierto] = useState(searchTerm ? true : false);
  
  useEffect(() => {
    if (searchTerm) setAbierto(true);
  }, [searchTerm]);

  const tieneSub = carpeta.subcarpetas?.length > 0;
  const tieneDocs = carpeta.documentos?.length > 0;

  const resaltarTexto = (texto: string, termino: string) => {
    if (!termino) return texto;
    const regex = new RegExp(`(${termino})`, 'gi');
    const partes = texto.split(regex);
    return partes.map((parte, index) => 
      regex.test(parte) ? 
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded-sm font-medium">{parte}</mark> : 
        parte
    );
  };

  const isLevel1 = nivel === 1;

  return (
    <div className="w-full">
      <button
        onClick={() => setAbierto(!abierto)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
          ${isLevel1 
            ? 'bg-white hover:bg-gray-50 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_2px_15px_rgb(0,0,0,0.06)]' 
            : 'hover:bg-gray-100/50 transparent'
          }
        `}
      >
        <div className="flex items-center gap-3">
            <motion.div 
                initial={false}
                animate={{ rotate: abierto ? 90 : 0 }}
                className="w-7 h-7 rounded-md flex items-center justify-center bg-gray-100/80 group-hover:bg-gray-200/80 text-gray-500 transition-colors"
            >
                <ChevronRight size={16} className="stroke-[2.5]" />
            </motion.div>
            
            <div className="flex items-center gap-3">
                <Folder 
                    size={22} 
                    className={`transition-colors ${abierto ? 'text-[#0A9782] fill-[#0A9782]/20' : 'text-[#D1672A] fill-[#D1672A]/20'}`} 
                />
                <span className={`font-semibold text-left leading-tight ${isLevel1 ? 'text-gray-800 text-[15px]' : 'text-gray-700 text-sm'}`}>
                    {resaltarTexto(carpeta.title || carpeta.titulo, searchTerm)}
                </span>
            </div>
        </div>
        
        {/* Indicadores opcionales de contenido */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {tieneDocs && <span className="text-xs font-semibold text-[#0A9782] bg-[#0A9782]/10 px-2 py-1 rounded-md">{carpeta.documentos.length} docs</span>}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="mt-2 pl-6 sm:pl-11 space-y-2 relative before:absolute before:left-[1.4rem] sm:before:left-[2.65rem] before:top-0 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
              {tieneDocs &&
                carpeta.documentos.map((doc: any, index: number) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={doc.id}
                    href={encodeURI(doc.archivo)}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white hover:bg-[#0A9782]/5 border border-gray-100 hover:border-[#0A9782]/30 rounded-xl shadow-sm transition-all duration-200 group relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0A9782] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-3 overflow-hidden pl-2">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-red-100 transition-all">
                            <FileText size={18} />
                        </div>
                        <span className="text-[14px] font-medium text-gray-600 group-hover:text-gray-900 truncate">
                            {resaltarTexto(doc.titulo || doc.title, searchTerm)}
                        </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center text-gray-400 group-hover:text-[#0A9782] transition-colors flex-shrink-0 shadow-sm border border-transparent group-hover:border-gray-200 ml-2">
                        <Download size={14} />
                    </div>
                  </motion.a>
                ))}

              {tieneSub &&
                carpeta.subcarpetas.map((sub: any, idx: any) => (
                  <div key={idx} className="pt-2">
                      <Carpeta carpeta={sub} nivel={nivel + 1} searchTerm={searchTerm} />
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
