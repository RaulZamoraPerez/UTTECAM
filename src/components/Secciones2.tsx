import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react";

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
    {
      title: "Agricultura",
      documentos: [
        {
          id: "agri1",
          titulo: "AS_Ingeniería Agrónomica.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Agricultura/AS_Ingeniería Agrónomica.PDF",
        },
        {
          id: "agri2",
          titulo: "AS_Licenciatura en Lenguas Modernas.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Agricultura/AS_Licenciatura en Lenguas Modernas.PDF",
        },
        {
          id: "agri3",
          titulo: "Ingeniería en Agricultura Sustentable y Protegida I.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Agricultura/Ingeniería en Agricultura Sustentable y Protegida I.PDF",
        },
        {
          id: "agri4",
          titulo: "Ingeniería Sustentable y Protegida II.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Agricultura/Ingeniería Sustentable y Protegida II.PDF",
        },
      ],
    },
    {
      title: "Alimentos",
      documentos: [
        {
          id: "alim1",
          titulo: "Ingeniería en Alimentos.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Alimentos/Alimentos/Ingeniería en Alimentos.PDF",
        },
      ],
    },
    {
      title: "Contaduría",
      documentos: [
        {
          id: "cont1",
          titulo: "Economía.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Contaduría/Contaduría/Economía.PDF",
        },
        {
          id: "cont2",
          titulo: "Licenciatura en contaduría Pública.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Contaduría/Contaduría/Licenciatura en contaduría Pública.PDF",
        },
      ],
    },
    {
      title: "Ingeniería Industrial",
      documentos: [
        {
          id: "ii1",
          titulo: "II_Licenciatura en Lenguas Modernas.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Ingeniería Industrial/Ingeniería Industrial/II_Licenciatura en Lenguas Modernas.PDF",
        },
        {
          id: "ii2",
          titulo: "Ingeniería Industrial I.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Ingeniería Industrial/Ingeniería Industrial/Ingeniería Industrial I.PDF",
        },
        {
          id: "ii3",
          titulo: "Ingeniería Industrial II.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Ingeniería Industrial/Ingeniería Industrial/Ingeniería Industrial II.PDF",
        },
      ],
    },
    {
      title: "Mantenimiento",
      documentos: [
        {
          id: "mant1",
          titulo: "Ingeniería Eléctrica o Electrónica.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Mantenimiento/Mantenimiento/Ingeniería Eléctrica o Electrónica.PDF",
        },
        {
          id: "mant2",
          titulo: "Licenciatura en Leguas Modernas_ Inglés.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Mantenimiento/Mantenimiento/Licenciatura en Leguas Modernas_ Inglés.PDF",
        },
      ],
    },
    {
      title: "Mecatrónica",
      documentos: [
        {
          id: "meca1",
          titulo: "Ingeniería Electromecánica o Mecatrónica.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Mecatrónica/Mecatrónica/Ingeniería Electromecánica o Mecatrónica.PDF",
        },
      ],
    },
    {
      title: "Negocios y Mercadotecnia",
      documentos: [
        {
          id: "neg1",
          titulo: "Licenciatura en Negocios y Mercadotecnia.PDF",
          archivo: "/Solicitud de publicación de convocatorias/Negocios y Mercadotecnia/Negocios y Mercadotecnia/Licenciatura en Negocios y Mercadotecnia.PDF",
        },
      ],
    },
  ],
};

export const Secciones2 = () => {
  return (
    <div className="w-full max-w-6xl mx-auto pt-3 px-4 sm:px-6">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-10">
        <div className="space-y-4">
          {data.subCarpetas.map((nivel1, index) => (
            <Carpeta key={index} carpeta={nivel1} nivel={1} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Carpeta = ({ carpeta, nivel }: any) => {
  const [abierto, setAbierto] = useState(false);
  const tieneSub = carpeta.subcarpetas?.length > 0;
  const tieneDocs = carpeta.documentos?.length > 0;

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
        <span className="text-slate-800 font-medium break-words">{carpeta.title}</span>
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
                  {doc.titulo}
                </span>
              </a>
            ))}

          {tieneSub &&
            carpeta.subcarpetas.map((sub: any, idx: any) => (
              <Carpeta key={idx} carpeta={sub} nivel={nivel + 1} />
            ))}
        </div>
      )}
    </div>
  );
};
