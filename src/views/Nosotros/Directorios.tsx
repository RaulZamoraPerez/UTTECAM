import { ContactCard } from "@/components/ContactCard";
import { Search } from "lucide-react";
import { useState } from "react";

export const Directorios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 py-3  ">
          <h1 className="text-4xl font-bold text-center my-6 p-2 text-gray-400">
            Directorios
          </h1>
          <p className="text-2xl font-light text-center p-3 text-gray-400">Explora nuestra colección de investigaciones académicas organizadas por año</p>
            <div className="relative max-w-xl mx-auto mb-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#0A9782]" />
              </div>
              <input
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-10 py-2 rounded-full text-lg  bg-white border-2 border-[#0A9782] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A9782] focus:border-transparent transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          <div className="grid grid-cols-1 w-full  sm:grid-cols-2 lg:grid-cols-3 gap-5 p-2 py-10 shadow px-10 mb-5 ">
            <ContactCard
              title="Secretaría de Vinculación"
              name="Mtro. Daniel Huerta Conde "
              imagenUrl="public/Organigrama/secretarioVinculacion.png"
             
            />
            <ContactCard
              title="Encargado de secretaria Académica "
              name="Mtro. Carlos Islas  Contreras"
              phone="2494223300"
              extension="120"
              email="Ssecretariaacademica@uttecam.edu.mx"
              imagenUrl="public/Organigrama/secretariaAcademica.png"
            />
            <ContactCard
              title="Encargado del Área de Abogado General "
              name="Mtro. Eleazar Carrillo  Camacho "
              phone="2494223300"
              extension="142"
              email="abogadogeneral@uttecam.edu.mx"
              imagenUrl="public/Organigrama/AbogadoGeneral.png"
              
            />
            <ContactCard
              title="Encargado del Área de Contraloría Interna "
              name="Abg. Alain Eloy Álvarez Sánchez "
              phone="2494223300"
              extension="110"
              email="contraloria@uttecam.edu.mx"
              imagenUrl="public/Organigrama/contraloriaInterna.png"
              isGray={true}
            />
            <ContactCard
              title="Direccion y administración y Finanzas"
              name=" Rodrigo Hernández Aguilar"
              phone="2494223300"
              extension="115"
              email="direccionfinanzas@uttecam.edu.mx"
              imagenUrl="public/Organigrama/admin_finanzas.png"
              isGray={true}
            />
            <ContactCard
              title="Extensión Universitaria"
              name="Veronica Elizabeth Centeno Fortiz"
              phone="2494223300"
              extension="109"
              email="extensionuniversitaria@uttecam.edu.mx"
              imagenUrl="public/Organigrama/enc_extend_universitaria.png"
              isGray={true}
               
            />
            {/* <ContactCard
              title="Dirección de Becas"
              name="Lic. Juan Pérez"
              phone="123-456-7890"
              extension="123"
              email="raul@gmail.com"
               isGray={true}
            />
           */}
           
          </div>
        </div>
      </div>
    </>
  );
};
