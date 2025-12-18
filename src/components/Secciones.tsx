import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText, Search } from "lucide-react";
import type {DataCarpetas } from "@/data/CapetaStructura.data";

interface Props {
  data: DataCarpetas;
  searchTerm?: string;
}

export const Secciones = ({ data, searchTerm = "" }: Props) => {
  // Función para filtrar carpetas recursivamente
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

  const datosFiltrados = filtrarCarpetas(data.subCarpetas || []);

  if (datosFiltrados.length === 0 && searchTerm) {
    return (
      <div className="text-center p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900 rounded-lg md:rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-800">
        <Search className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 dark:text-gray-500 mx-auto mb-3 sm:mb-4" />
        <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2 px-2">
          No se encontraron documentos que coincidan con 
          <span className="font-semibold text-gray-800 dark:text-white">"{searchTerm}"</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm px-2">
          Intenta con otros términos de búsqueda
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto pt-3 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-800 border border-slate-200 dark:border-gray-800 shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="space-y-3 md:space-y-4">
          {datosFiltrados.map((nivel1, index) => (
            <Carpeta key={index} carpeta={nivel1} nivel={1} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Carpeta = ({ carpeta, nivel, searchTerm = "" }: any) => {
  const [abierto, setAbierto] = useState(searchTerm ? true : false); // Auto-expandir si hay búsqueda
  const tieneSub = carpeta.subcarpetas?.length > 0;
  const tieneDocs = carpeta.documentos?.length > 0;

  // Función para resaltar texto
  const resaltarTexto = (texto: string, termino: string) => {
    if (!termino) return texto;
    
    const regex = new RegExp(`(${termino})`, 'gi');
    const partes = texto.split(regex);
    
    return partes.map((parte, index) => 
      regex.test(parte) ? 
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-200 px-1 rounded">{parte}</mark> : 
        parte
    );
  };

  const paddingClasses : any= {
    1: "pl-2 sm:pl-4",
    2: "pl-3 sm:pl-6",
    3: "pl-4 sm:pl-8",
    4: "pl-5 sm:pl-10",
    5: "pl-6 sm:pl-12",
  };

  return (
    <div className={`transition-all ${paddingClasses[nivel] || "pl-12"}`}>
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex items-center w-full text-left bg-white dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700 border border-slate-300 dark:border-gray-700 rounded-lg md:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        {abierto ? (
          <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px] text-slate-600 dark:text-gray-400 mr-2 flex-shrink-0 group-hover:text-slate-700 dark:group-hover:text-gray-300" />
        ) : (
          <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px] text-slate-600 dark:text-gray-400 mr-2 flex-shrink-0 group-hover:text-slate-700 dark:group-hover:text-gray-300" />
        )}
        <Folder size={18} className="sm:w-5 sm:h-5 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0 group-hover:text-yellow-600" />
        <span className="text-slate-800 dark:text-gray-200 font-medium text-sm sm:text-base break-words leading-tight">{resaltarTexto(carpeta.title, searchTerm)}</span>
      </button>

      {abierto && (
        <div className="mt-2 sm:mt-3 ml-1 sm:ml-2 md:ml-6 pl-2 sm:pl-3 md:pl-4 border-l-2 border-dashed border-slate-300 space-y-2 sm:space-y-3">
          {tieneDocs &&
            carpeta.documentos.map((doc: any) => (
              <a
                key={doc.id}
                href={encodeURI(doc.archivo)}
                download
                rel="noopener noreferrer"
                className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-200 group py-1"
              >
                <FileText
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] mr-2 text-slate-500 dark:text-gray-400 group-hover:text-slate-700 dark:group-hover:text-gray-200 flex-shrink-0 transition-colors"
                />
                <span className=" group-hover:decoration-slate-600 break-words hover:underline text-sm sm:text-base leading-tight text-slate-700 dark:text-gray-300">
                  {resaltarTexto(doc.titulo, searchTerm)}
                </span>
              </a>
            ))}

          {tieneSub &&
            carpeta.subcarpetas.map((sub: any, idx: any) => (
              <Carpeta key={idx} carpeta={sub} nivel={nivel + 1} searchTerm={searchTerm} />
            ))}
        </div>
      )}
    </div>
  );
};