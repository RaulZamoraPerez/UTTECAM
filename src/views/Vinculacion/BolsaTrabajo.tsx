import React, { useEffect, useState, useCallback } from "react";


export interface PdfItem {
  name?: string;
  url: string;
}

export interface BolsaTrabajoItem {
  id: string | number;
  title: string;
  bannerUrl?: string;
  description?: string;
  externalUrl?: string;
  images?: string[];
  pdfs?: (PdfItem | string)[];
}

interface MediaItem {
  type: "image" | "pdf";
  url: string;
  name?: string;
}

interface BolsaTrabajoViewProps {
  apiUrl?: string;
}

const BACKEND_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3004';

const ensureProtocol = (url: string) => {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
};

const BolsaTrabajoView: React.FC<BolsaTrabajoViewProps> = ({
  apiUrl = `${BACKEND_URL}/api/bolsa-trabajo`,
}) => {
  const [items, setItems] = useState<BolsaTrabajoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Modal
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<BolsaTrabajoItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // ====== Fetch API ======
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    // NOTE: We are bypassing the mock data check to ensure we consume the Dashboard API as requested.
    // If you want to use mocks in dev, uncomment the following block.
    /*
    if (isDev) {
      const t = setTimeout(() => {
        if (!mounted) return;
        setItems(mockBolsaTrabajo);
        setError(null);
        setLoading(false);
      }, 200);

      return () => {
        mounted = false;
        clearTimeout(t);
      };
    }
    */

    // Production: try to fetch JSON; if the response isn't JSON, surface an error
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const ct = res.headers.get("content-type") || "";
        if (!ct.toLowerCase().includes("application/json")) {
          throw new Error("Respuesta del servidor no es JSON (posible HTML)");
        }
        return res.json();
      })
      .then((data: any) => {
        if (!mounted) return;
        
        // Adapt Dashboard API response (Array of Sections) to Component State (BolsaTrabajoItem[])
        if (Array.isArray(data)) {
            const transformedItems: BolsaTrabajoItem[] = data.map((section: any) => ({
                id: section.id,
                title: section.title || section.titulo || "Sin Título",
                description: section.description || section.descripcion,
                externalUrl: section.externalUrl || section.url_externa,
                bannerUrl: section.bannerUrl || (section.imagen_banner ? `${BACKEND_URL}/uploads/${section.imagen_banner}` : undefined),
                images: section.images || [],
                pdfs: section.pdfs || (section.items || []).map((pdf: any) => ({
                    name: pdf.titulo,
                    url: `${BACKEND_URL}/uploads/${pdf.archivo_pdf}`
                }))
            }));
            setItems(transformedItems);
        } else if (data.header && Array.isArray(data.items)) {
            // Fallback for old structure if API hasn't updated yet
            const transformed: BolsaTrabajoItem = {
                id: 'dashboard-data',
                title: data.header.titulo || "Bolsa de Trabajo",
                description: data.header.descripcion,
                externalUrl: data.header.url_externa,
                bannerUrl: data.header.imagen_banner ? `${BACKEND_URL}/uploads/${data.header.imagen_banner}` : undefined,
                images: [],
                pdfs: data.items.map((i: any) => ({
                    name: i.titulo,
                    url: `${BACKEND_URL}/uploads/${i.archivo_pdf}`
                }))
            };
            setItems([transformed]);
        } else {
            setItems([]);
        }
        
        setError(null);
      })
      .catch((err: Error) => {
        if (!mounted) return;
        console.warn("Fetch error:", err.message);
        setError(err.message);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [apiUrl]);

  // ====== Media Builder ======
  const buildMedia = useCallback((item: BolsaTrabajoItem): MediaItem[] => {
    const images: MediaItem[] = (item.images ?? []).map((url) => ({
      type: "image",
      url,
    }));

    const pdfs: MediaItem[] = (item.pdfs ?? []).map((p) => {
      if (typeof p === "string") {
        return { type: "pdf", url: p, name: "Documento.pdf" };
      }
      return { type: "pdf", url: p.url, name: p.name ?? "Documento.pdf" };
    });

    return [...images, ...pdfs];
  }, []);

  // ====== Modal handlers ======
  const openModal = (item: BolsaTrabajoItem, index = 0) => {
    setActiveItem(item);
    setActiveIndex(index);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    setActiveItem(null);
    setActiveIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextMedia = () => {
    if (!activeItem) return;
    const media = buildMedia(activeItem);
    setActiveIndex((i) => (i + 1) % media.length);
  };

  const prevMedia = () => {
    if (!activeItem) return;
    const media = buildMedia(activeItem);
    setActiveIndex((i) => (i - 1 + media.length) % media.length);
  };

  // ====== Keyboard ======
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, activeItem]);

  // ====== Render ======
  return (
    <div className="max-w-7xl mx-auto p-4">
      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && items.length === 0 && (
        <p className="text-center">No hay información disponible</p>
      )}

      <div className="space-y-10">
        {items.map((item) => {
          const media = buildMedia(item);

          return (
            <section
              key={item.id}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              {item.bannerUrl && (
                <div className="h-56 md:h-80 w-full bg-gray-100">
                  <img
                    src={item.bannerUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    )}
                  </div>

                  {item.externalUrl && (
                    <a
                      href={ensureProtocol(item.externalUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Ir al sitio
                    </a>
                  )}
                </div>

                {/* Media grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {media.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => openModal(item, idx)}
                      className="rounded-lg border-2 border-gray-300 overflow-hidden bg-gray-50 hover:shadow"
                    >
                      <div className="h-32 flex items-center justify-center">
                        {m.type === "image" ? (
                          <img
                            src={m.url}
                            alt={`media-${idx}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-2 text-center h-full w-full">
                             <span className="text-red-600 mb-1">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                             </span>
                             <span className="text-xs font-medium truncate w-full">{m.name}</span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal */}
      {open && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={(e) => e.currentTarget === e.target && closeModal()}
        >
          <div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden">
            <header className="flex justify-between items-center p-3 border-b">
              <h3 className="font-medium">{activeItem.title}</h3>
              <button onClick={closeModal} className="border px-3 py-1 rounded">
                Cerrar
              </button>
            </header>

            <main className="h-[calc(80vh-56px)] flex items-center justify-center bg-gray-50">
              {(() => {
                const m = buildMedia(activeItem)[activeIndex];
                if (!m) return null;

                return m.type === "image" ? (
                  <img
                    src={m.url}
                    alt="preview"
                    className="max-h-full w-full object-contain"
                  />
                ) : (
                  <iframe src={m.url} title={m.name} className="w-full h-full" />
                );
              })()}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default BolsaTrabajoView;
