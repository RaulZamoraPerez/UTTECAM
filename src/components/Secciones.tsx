import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText, Search } from "lucide-react";
// NOTE: Using `any` for data shape compatiblity across dev; define precise types if needed

interface Props {
  data: any;
  searchTerm?: string;
}

export const Secciones = ({ data, searchTerm = "" }: Props) => {
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
      <div className="text-center p-6 sm:p-8 md:p-10 bg-white rounded-lg md:rounded-xl border-2 border-dashed border-slate-300">
        <Search className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <div className="text-gray-600 text-sm sm:text-base mb-2 px-2">
          No se encontraron documentos que coincidan con 
          <span className="font-semibold text-gray-800">"{searchTerm}"</span>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm px-2">
          Intenta con otros términos de búsqueda
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto pt-3 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
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
  const [abierto, setAbierto] = useState(searchTerm ? true : false);
  const tieneSub = carpeta.subcarpetas?.length > 0;
  const tieneDocs = carpeta.documentos?.length > 0;

  const resaltarTexto = (texto: string, termino: string) => {
    if (!termino) return texto;
    
    const regex = new RegExp(`(${termino})`, 'gi');
    const partes = texto.split(regex);
    
    return partes.map((parte, index) => 
      regex.test(parte) ? 
        <mark key={index} className="bg-yellow-200 px-1 rounded">{parte}</mark> : 
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
        className="flex items-center w-full text-left bg-white hover:bg-slate-100 border border-slate-300 rounded-lg md:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        {abierto ? (
          <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px] text-slate-600 mr-2 flex-shrink-0 group-hover:text-slate-700" />
        ) : (
          <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px] text-slate-600 mr-2 flex-shrink-0 group-hover:text-slate-700" />
        )}
        <Folder size={18} className="sm:w-5 sm:h-5 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0 group-hover:text-yellow-600" />
        <span className="text-slate-800 font-medium text-sm sm:text-base break-words leading-tight">{resaltarTexto(carpeta.title, searchTerm)}</span>
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
                <FileText size={16} className="sm:w-[18px] sm:h-[18px] mr-2 text-slate-500 group-hover:text-slate-700 flex-shrink-0 transition-colors" />
                <span className=" group-hover:decoration-slate-600 break-words hover:underline text-sm sm:text-base leading-tight">
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
