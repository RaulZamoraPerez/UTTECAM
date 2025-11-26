import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText, Search } from "lucide-react";

interface Props {
  searchTerm?: string;
}

const data = {
  id: "seccion2",
  titulo: "Convocatorias para Profesor de Asignatura SEP-DIC-2025",
  subTitulo: " Convocatorias para Profesor",

  subCarpetas: [
    {
      title: "Administración",
      documentos: [
        {
          id: "admin1",
          titulo: "A_Licenciatura en Administración.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Administración/A_Licenciatura en Administración.PDF",
        },
        {
          id: "admin2",
          titulo: "A_Licenciatura en Lenguas Modernas.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Administración/A_Licenciatura en Lenguas Modernas.PDF",
        },
      ],
    },
    // ... truncated for brevity - initial seed complete in published
  ],
};

export const Secciones2 = ({ searchTerm = "" }: Props) => {
  const filtrarCarpetas = (carpetas: any[]): any[] => {
    if (!searchTerm) return carpetas;
    
    return carpetas
      .map(carpeta => {
        const documentosFiltrados = carpeta.documentos ? carpeta.documentos.filter((doc: any) => 
          doc.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
        
        if (documentosFiltrados.length > 0) {
          return {
            ...carpeta,
            documentos: documentosFiltrados
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  const datosFiltrados = filtrarCarpetas(data.subCarpetas);

  if (datosFiltrados.length === 0 && searchTerm) {
    return (
      <div className="text-center p-10 bg-white rounded-lg border-2 border-dashed border-[#0A9782]">
        <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <div className="text-gray-600 mb-2">
          No se encontraron documentos que coincidan con "{searchTerm}"
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto pt-3 px-4 sm:px-6">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-10">
        <div className="space-y-4">
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

  const paddingClasses: any = {
    1: "pl-4",
    2: "pl-6",
    3: "pl-8",
    4: "pl-10",
    5: "pl-12",
  };

  return (
    <div className={`transition-all ${paddingClasses[nivel] || "pl-12"}`}>
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex flex-wrap items-center w-full text-left bg-white hover:bg-slate-100 border border-slate-300 rounded-xl px-4 py-3 shadow-sm transition-all"
      >
        {abierto ? (
          <ChevronDown size={18} className="text-slate-600 mr-2" />
        ) : (
          <ChevronRight size={18} className="text-slate-600 mr-2" />
        )}
        <Folder size={20} className="text-yellow-500 mr-3" />
        <span className="text-slate-800 font-medium break-words">{resaltarTexto(carpeta.title, searchTerm)}</span>
      </button>

      {abierto && (
        <div className="mt-3 ml-2 sm:ml-6 pl-3 sm:pl-4 border-l-2 border-dashed border-slate-300 space-y-3">
          {tieneDocs &&
            carpeta.documentos.map((doc: any) => (
              <a
                key={doc.id}
                href={encodeURI(doc.archivo)}
                download
                rel="noopener noreferrer"
                className="flex items-center text-blue-800 hover:text-blue-900 transition-colors group"
              >
                <FileText
                  size={18}
                  className="mr-2 text-blue-500 group-hover:text-blue-700"
                />
                <span className="underline underline-offset-2 decoration-blue-300 group-hover:decoration-blue-500 break-words">
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
