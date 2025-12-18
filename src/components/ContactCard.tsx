import { useState } from "react";
import { Mail, Phone, User, ArrowUpRight } from "lucide-react";
import { ContactModal } from "./Modal/ContactModal";
import { formatPhone } from "@/util/Formatt";

interface Props {
  title: string;
  name: string;
  phone?: string;
  extension?: string;
  email?: string;
  className?: string;
  imagenUrl?: string;
  variant?: 'green' | 'orange';
}

export const ContactCard = ({
  title,
  name,
  phone,
  extension,
  email,
  className = "",
  imagenUrl = "",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col items-center text-center h-full ${className}`}
      >
        {/* Hover Accent - Top Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0A9782] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Avatar - Clean & Floating */}
        <div className="relative mb-5">
          <div className="w-24 h-24 rounded-full p-1 bg-white shadow-sm ring-1 ring-gray-100 group-hover:ring-[#0A9782]/30 transition-all duration-300">
             <div className="w-full h-full rounded-full overflow-hidden bg-gray-50 flex items-center justify-center relative">
              {imagenUrl ? (
                <img 
                  src={imagenUrl} 
                  alt={name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`absolute inset-0 flex items-center justify-center ${imagenUrl ? 'hidden' : ''}`}>
                <User className="w-8 h-8 text-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Info Container */}
        <div className="w-full flex flex-col flex-grow">
            {/* Title (Area) - Now Primary */}
            <h3 className="text-gray-600 font-bold text-lg leading-tight mb-2 group-hover:text-[#0A9782] transition-colors h-12 flex items-center justify-center line-clamp-2">
              {title}
            </h3>
            
            {/* Name - Now Secondary */}
            <p className="text-sm font-medium text-gray-500 mb-6">
              {name}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mb-6"></div>

            {/* Contact Details - Aligned & Clean */}
            <div className="space-y-4 w-full text-sm mt-auto">
                {/* Phone Row */}
                <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#0A9782] shrink-0 group-hover:bg-[#0A9782]/10 transition-colors">
                        <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Teléfono</span>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">{phone ? formatPhone(phone) : "N/A"}</span>
                            {extension && <span className="text-[#0A9782] text-xs font-bold">Ext. {extension}</span>}
                        </div>
                    </div>
                </div>

                {/* Email Row */}
                <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#0A9782] shrink-0 group-hover:bg-[#0A9782]/10 transition-colors">
                        <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col items-start min-w-0 flex-1">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Correo</span>
                        <span className="font-medium truncate w-full text-left" title={email}>{email || "N/A"}</span>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Corner Action Icon */}
        <div className="absolute top-4 right-4 text-gray-300 group-hover:text-[#0A9782] transition-colors opacity-0 group-hover:opacity-100">
            <ArrowUpRight className="w-5 h-5" />
        </div>

      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        name={name}
        phone={phone}
        extension={extension}
        email={email}
        imageUrl={imagenUrl}
      />
    </>
  );
};
