
import { Mail, Phone } from "lucide-react";

interface Props {
  title: string;
  name: string;
  phone: string;
  extension?: string;
  email: string;
  className?: string;
}



export const ContactCard = ({ title, name, phone, extension, email, }: Props) => {
  return (
   <div className="w-full bg-white rounded-lg shadow p-4 flex border-l-8  border-orange-500 max-w-sm hover:shadow-lg">
      <div className="flex flex-col space-y-2">
        <h2 className="text-orange-600 font-bold text-lg">{title}</h2>
        <p className="text-gray-700">{name}</p>

        <div className="flex items-center text-sm text-gray-600">
          <Phone className="w-4 h-4 mr-2 text-orange-500" />
          <span>{phone}</span>
          {extension && <span className="ml-2">Ext. {extension}</span>}
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2 text-orange-500" />
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}
