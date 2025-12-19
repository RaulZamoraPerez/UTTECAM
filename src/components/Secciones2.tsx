import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react";

// Tipos locales para evitar 'any' y mantener compatibilidad con Secciones
interface Documento {
  id: string;
  titulo: string;
  archivo?: string;
}

type CarpetaTipo = { title: string; documentos?: Documento[]; subcarpetas?: CarpetaTipo[] }

interface Props {
  searchTerm?: string;
  folders?: CarpetaTipo[];
  title?: string;
}

export const Secciones2 = ({ searchTerm = "", folders = [], title = "Carpetas y Documentos" }: Props) => {
  // Función para filtrar carpetas
  const filtrarCarpetas = (carpetas: CarpetaTipo[]): CarpetaTipo[] => {
    if (!searchTerm) return carpetas;
    
    return carpetas
      .map(carpeta => {
        const subcarpetasFiltradas = carpeta.subcarpetas ? filtrarCarpetas(carpeta.subcarpetas) : [];
        const documentosFiltrados = carpeta.documentos ? carpeta.documentos.filter((doc: Documento) => 
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
      .filter(Boolean) as CarpetaTipo[];
  };

  const datosFiltrados = filtrarCarpetas(folders);

  if (datosFiltrados.length === 0 && searchTerm) {
    return (
      <div className="text-center p-6 sm:p-8 md:p-10 bg-white rounded-lg md:rounded-xl border-2 border-dashed border-slate-300">
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
    <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
      <div className="bg-[#0A9782] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
             <Folder className="h-6 w-6" />
             <span className="text-xl font-bold">{title}</span>
        </div>
        <span className="text-white/80 text-sm font-medium hidden sm:block">
            {datosFiltrados.length} {datosFiltrados.length === 1 ? 'carpeta' : 'carpetas'}
        </span>
      </div>
      
      <div className="p-4 sm:p-6 bg-slate-50/50">
        <div className="space-y-3">
          {datosFiltrados.map((nivel1, index) => (
            <Carpeta key={index} carpeta={nivel1} nivel={1} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CarpetaProps2 { carpeta: CarpetaTipo; nivel: number; searchTerm?: string }

const Carpeta = ({ carpeta, nivel, searchTerm = "" }: CarpetaProps2) => {
  const [abierto, setAbierto] = useState(searchTerm ? true : false); // Auto-expandir si hay búsqueda
  const tieneSub = (carpeta.subcarpetas?.length ?? 0) > 0;
  const tieneDocs = (carpeta.documentos?.length ?? 0) > 0;

  // Función para resaltar texto
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

  const paddingClasses: Record<number, string> = {
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
            carpeta.documentos!.map((doc: Documento) => (
              <a
                key={doc.id}
                href={doc.archivo ? encodeURI(doc.archivo) : '#'}
                download={Boolean(doc.archivo)}
                rel="noopener noreferrer"
                className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-200 group py-1"
              >
                <FileText
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] mr-2 text-slate-500 group-hover:text-slate-700 flex-shrink-0 transition-colors"
                />
                <span className=" group-hover:decoration-slate-600 break-words hover:underline text-sm sm:text-base leading-tight">
                  {resaltarTexto(doc.titulo, searchTerm)}
                </span>
              </a>
            ))}

          {tieneSub &&
            carpeta.subcarpetas!.map((sub: CarpetaTipo, idx: number) => (
              <Carpeta key={idx} carpeta={sub} nivel={nivel + 1} searchTerm={searchTerm} />
            ))}
        </div>
      )}
    </div>
  );
};
