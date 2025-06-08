import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { ContactModal } from "./Modal/ContactModal";
import { formatPhone } from "@/util/Formatt";


interface Props {
  title: string;
  name: string;
  phone?: string;
  extension?: string;
  email?: string;
  className?: string;
  isGray?: boolean;
  imagenUrl?: string; 
}

export const ContactCard = ({
  title,
  name,
  phone,
  extension,
  email,
  className = "",
  isGray = false,
  imagenUrl =""
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconBorderColor = isGray ? "border-gray-500" : "border-orange-500";
  const iconColor = isGray ? "text-gray-400" : "text-orange-500";
  const titleColor = isGray ? "text-gray-500" : "text-orange-600";

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer w-full bg-gray-50 rounded-2xl shadow ${iconBorderColor} p-4 flex border-l-15 max-w-sm hover:shadow-2xl transition-shadow ${className}`}
      >
        <div className="flex flex-col space-y-2 w-full">
          <h2 className={`${titleColor} font-bold text-lg break-words capitalize`}>{title}</h2>
          <p className="text-gray-400 text-base break-words capitalize">{name}</p>

          {/* Teléfono */}
          <div className="flex flex-wrap items-center gap-2">
            <div className={`w-7 h-7 flex items-center justify-center rounded-full border ${iconBorderColor} bg-white`}>
              <Phone className={`w-4 h-4 ${iconColor}`} />
            </div>
            <span className="text-sm sm:text-base text-gray-400">{ phone ? formatPhone(phone) : "sin datos "}</span>
            {extension && (
              <span className="text-sm sm:text-base text-gray-400">Ext. {extension}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex justify-centerp items-center gap-2">
            <div className={`w-7 h-7 flex items-center justify-center rounded-full border ${iconBorderColor} bg-white`}>
              <Mail className={`w-4 h-4 ${iconColor}`} />
            </div>
            <span className="text-sm sm:text-base underline text-gray-400 break-all break-words whitespace-normal ">{email ? email : "No disponible"}</span>
          </div>
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
