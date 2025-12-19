import React, { useEffect, useState } from "react";

// Define interface locally to match what we need
export interface ServicioItem {
  id: number | string;
  title: string;
  date: string;
  pdfUrl: string;
  description?: string;
}

interface ServiciosViewProps {
  apiUrl?: string;
}

const BACKEND_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3004';

const ServiciosTecnologicosRealizados: React.FC<ServiciosViewProps> = ({
  apiUrl = `${BACKEND_URL}/api/servicios-tecnologicos-realizados`,
}) => {
  const [items, setItems] = useState<ServicioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Modal
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<ServicioItem | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const ct = res.headers.get("content-type") || "";
        if (!ct.toLowerCase().includes("application/json")) {
          throw new Error("Respuesta del servidor no es JSON");
        }
        return res.json();
      })
      .then((data: any[]) => {
        if (!mounted) return;
        
        if (Array.isArray(data)) {
            const mappedItems: ServicioItem[] = data.map((item) => ({
                id: item.id,
                title: item.titulo,
                date: item.fecha_realizacion ? new Date(item.fecha_realizacion).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
                pdfUrl: `${BACKEND_URL}/uploads/${item.archivo}`,
                description: '' // Backend doesn't have description yet
            }));
            setItems(mappedItems);
        } else {
            setItems([]);
        }
        setError(null);
      })
      .catch((err: Error) => {
        if (!mounted) return;
        console.warn(err.message);
        setError(err.message);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [apiUrl]);

  const openPreview = (item: ServicioItem) => {
    setActive(item);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closePreview = () => {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header centered */}
      <header className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Servicios Tecnológicos Realizados
        </h1>
        <p className="text-gray-600 mt-2">
          Documentos y reportes técnicos con opción de vista previa y descarga.
        </p>
      </header>

      {loading ? (
        <div className="text-center py-12">Cargando...</div>
      ) : error ? (
        <div className="text-center text-red-600 py-6">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article
              key={it.id}
              className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl shadow p-4 gap-4"
            >
              {/* PDF icon */}
              <div className="flex-shrink-0 w-full md:w-48 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200">
                {/* Simple PDF icon: document with folded corner and 'PDF' text */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  className="text-orange-500"
                  aria-hidden
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M6 2h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                    <path d="M13 2v6h6" />
                  </g>
                  <rect x="7" y="12" width="10" height="6" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <text
                    x="12"
                    y="16.2"
                    textAnchor="middle"
                    fontSize="3.2"
                    fontWeight="700"
                    fill="currentColor"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    PDF
                  </text>
                </svg>
              </div>

              {/* Title + controls (only title and pdf actions) */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  {it.date && (
                    <p className="text-sm text-gray-500 mt-1">Realizado: {it.date}</p>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => openPreview(it)}
                    className="px-3 py-2 rounded-md border border-orange-500 text-orange-600 font-medium hover:bg-orange-50"
                  >
                    Ver
                  </button>

                  <a
                    href={it.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-3 py-2 rounded-md bg-orange-500 text-white font-medium shadow hover:opacity-95"
                  >
                    Descargar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal preview */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={(e) => e.currentTarget === e.target && closePreview()}
        >
          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-lg overflow-hidden">
            <header className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-3">
                <h4 className="font-medium">{active.title}</h4>
                {active.date && <span className="text-sm text-gray-500">({active.date})</span>}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={active.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="px-3 py-1 rounded-md bg-orange-500 text-white text-sm"
                >
                  Descargar
                </a>
                <button onClick={closePreview} className="px-3 py-1 rounded-md border">
                  Cerrar
                </button>
              </div>
            </header>

            <main className="w-full h-[calc(85vh-56px)] bg-gray-50">
              <iframe src={active.pdfUrl} title={active.title} className="w-full h-full" />
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiciosTecnologicosRealizados;
