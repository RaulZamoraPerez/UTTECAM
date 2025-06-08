import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { Mail, Phone } from "lucide-react";
import { ImagePerfil } from "./ImagePerfil";
import { formatPhone } from "@/util/Formatt";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  name: string;
  phone?: string;
  extension?: string;
  email?: string;
  imageUrl?: string;
}

export const ContactModal = ({
  isOpen,
  onClose,
  title,
  name,
  phone,
  extension,
  email,
  imageUrl,
}: ContactModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-sm transform overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 text-gray-800 shadow-2xl transition-all p-6">
                <ImagePerfil name={name} imageUrl={imageUrl} />

                <div className="mt-4 text-center">
                  <DialogTitle className="text-2xl font-semibold text-gray-900 capitalize">
                    {title}
                  </DialogTitle>
                  <p className="text-lg text-gray-600 font-medium capitalize">{name}</p>
                </div>

                <div className="mt-6 border-t pt-4 space-y-3 text-sm text-gray-700">
                  {/* Teléfono */}
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-orange-500" />
                    {phone ? (
                      <span className="font-medium">
                        { formatPhone( phone!)} {extension && <span>| Ext. {extension}</span>}
                      </span>
                    ) : (
                      <span className="text-gray-400 italic">Sin teléfono</span>
                    )}
                  </div>

                  {/* Correo */}
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    {email ? (
                      <a
                        href={`mailto:${email}`}
                        className="text-blue-600 underline hover:text-blue-800 transition"
                      >
                        {email}
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">
                        Sin correo electrónico
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={onClose}
                    className="w-full rounded-xl bg-orange-500 text-white py-2 font-semibold hover:bg-orange-600 transition"
                  >
                    Cerrar
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
