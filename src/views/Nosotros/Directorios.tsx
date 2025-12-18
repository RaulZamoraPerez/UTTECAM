import { ContactCard } from "@/components/ContactCard";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { getAllDirectorios, getImageUrl } from "@/services/directorioService";
import type { Directorio } from "@/types/directorio";

const Directorios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Directorio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // SWR Strategy
    const CACHE_KEY = 'directorios_cache_v2';
    let isMounted = true;

    const loadData = async () => {
      // 1. Try Cache
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        try {
          const { data: cachedData } = JSON.parse(cachedRaw);
          if (cachedData && Array.isArray(cachedData) && isMounted) {
            setData(cachedData);
            setLoading(false);
          }
        } catch (e) {
          console.error("Cache parse error", e);
        }
      }

      // 2. Fetch Network
      try {
        const directorios = await getAllDirectorios();
        
        if (!isMounted) return;

        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: directorios,
            timestamp: Date.now()
        }));

        // Optional: Check if we need to update state to avoid flicker used in other components
        if (cachedRaw) {
             const cachedData = JSON.parse(cachedRaw).data;
             if (JSON.stringify(directorios) === JSON.stringify(cachedData)) {
                 if (isMounted) setLoading(false);
                 return;
             }
        }

        setData(directorios);
      } catch (error) {
        console.error("Error fetching directorios:", error);
        if (isMounted) {
            // Only show error if we have ID data
            if (data.length === 0) {
                 setError("No se pudo cargar la información del directorio. Por favor intente más tarde.");
            }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, []);

  const filteredData = data.filter((item) => {
    const nombre = item.nombre || '';
    const titulo = item.titulo || '';
    const termino = searchTerm.toLowerCase();

    return (item.activo !== false) &&
           (nombre.toLowerCase().includes(termino) ||
            titulo.toLowerCase().includes(termino));
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <h1 className="text-4xl font-bold text-center my-6 p-2 text-gray-400">
          Directorios
        </h1>
        <p className="text-2xl font-light text-center p-3 text-gray-400">
          Explora nuestra colección de investigaciones académicas organizadas por año
        </p>

        <div className="relative max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#0A9782]" />
          </div>
          <input
            type="text"
            placeholder="Buscar documentos..."
            className="w-full pl-10 py-2 rounded-full text-lg bg-white border-2 border-[#0A9782] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A9782] focus:border-transparent transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {error ? (
          <div className="text-center py-10">
            <p className="text-red-500 text-xl font-semibold mb-2">Error</p>
            <p className="text-gray-600">{error}</p>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A9782]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-2 py-10 shadow px-10 mb-5">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <ContactCard 
                  key={item.id} 
                  title={item.titulo}
                  name={item.nombre}
                  phone={item.telefono}
                  extension={item.extension}
                  email={item.correo}
                  imagenUrl={getImageUrl(item.imagen)}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-xl">
                No se encontraron resultados.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default Directorios;