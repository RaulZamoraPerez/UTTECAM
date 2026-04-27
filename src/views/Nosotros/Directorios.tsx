import { ContactCard } from "@/components/ContactCard";
import { Search, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getDirectorios, getImageUrl } from "@/services/directorio.service";
import type { DBDirectorio} from "@/services/directorio.service";

const Directorios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [directorios, setDirectorios] = useState<DBDirectorio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDirectorios();
        setDirectorios(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error al cargar directorios:", error);
        setDirectorios([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = directorios.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <h1 className="text-4xl font-bold text-center my-6 p-2 text-gray-400">
          Directorios
        </h1>
        <p className="text-2xl font-light text-center p-3 text-gray-400">
          Explora nuestro directorio institucional y encuentra a las autoridades universitarias.
        </p>

        <div className="relative max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#0A9782]" />
          </div>
          <input
            type="text"
            placeholder="Buscar en el directorio..."
            className="w-full pl-10 py-2 rounded-full text-lg bg-white border-2 border-[#0A9782] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A9782] focus:border-transparent transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-[#0A9782] animate-spin" />
            <p className="text-gray-500 animate-pulse">Cargando directorio...</p>
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
                  imagenUrl={item.imagen ? getImageUrl(item.imagen) : ""}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-xl py-10">
                No se encontraron resultados para "{searchTerm}".
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Directorios;