import { ContactCard } from "@/components/ContactCard";
import { Search } from "lucide-react";
import { useState } from "react";
import { contactData } from "@/data/directorios.data"; 

export const Directorios = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = contactData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-2 py-10 shadow px-10 mb-5">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <ContactCard key={index} {...item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-xl">
              No se encontraron resultados.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
