import { MapPin, Phone, Clock, Mail, ChevronRight } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#e6f7f2] py-8 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-">
                        <div className="mb-6">
                            <img src="/logo.png" alt="UTTECAM Logo" width={180} height={60} className="mb-4" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-[#008066] mr-2 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066] font-medium">Dirección:</p>
                                    <p className="text-[#008066]">Avenida, Universidad Tecnológica 1, Barrio la Villita, 75483 Tecamachalco,Pue.</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066]">Tel: +52-249-422-3303</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Clock className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066]">Horario: de 9:00 a 17:00</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-1">
                                <Mail className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <p className="text-[#008066]">Email: rectoria@uttcam.edu.mx</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <p className="text-[#008066]">Email: extensionuniversitaria@uttecam.edu.mx</p>
                            </div>
                        </div>
                    </div>

                    {/* categorias */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-[#333] mb-4"></h3>
                        <ul className="space-y-2">
                            <li className="mb-8">
                                <a href="/finanzas" className="text-[#0A9782] hover:text-[#D1672A] text-base font-semibold flex items-center transition-colors duration-200"><ChevronRight /> Finanzas</a>
                            </li>
                            <li className="mb-8">
                                <a href="/recursosHumanos" className="text-[#0A9782] hover:text-[#D1672A] text-base font-semibold flex items-center transition-colors duration-200"><ChevronRight /> Recursos Humanos</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-[#333] mb-4"></h3>
                        <ul className="space-y-2">
                            <li className="mb-8">
                                <a href="/sga" className="text-[#0A9782] hover:text-[#D1672A] text-base font-semibold flex items-center transition-colors duration-200"><ChevronRight /> Sistema de Gestión Ambiental</a>
                            </li>
                            <li className="mb-8">
                                <a href="/sigc" className="text-[#0A9782] hover:text-[#D1672A] text-base font-semibold flex items-center transition-colors duration-200"><ChevronRight /> Sistema de Gestión de la Calidad</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-1">
                        <div className="h-[200px] w-full rounded-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.651011064499!2d-97.72351492533981!3d18.863898058597947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5631524041a17%3A0x43073fb16f64edc2!2sUTTcam!5e1!3m2!1sen!2smx!4v1749089731375!5m2!1sen!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="UTTECAM Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
