import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#e6f7f2] py-8 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Contact Info */}
                    <div className="md:col-span-1">
                        <div className="mb-6">
                            <img src="/logo.png" alt="UTTECAM Logo" width={180} height={60} className="mb-4" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-[#008066] mr-2 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066] font-medium">Address:</p>
                                    <p className="text-[#008066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066]">Tel: +9229341037</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Clock className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066]">Response hours: 8 to 20</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-[#008066] mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-[#008066]">Email: info@onlearn.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-[#333] mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <link href="#" className="text-[#008066] hover:underline">
                                    Counseling
                                </link>
                            </li>
                            <li>
                                <link href="#" className="text-[#008066] hover:underline">
                                    Health and fitness
                                </link>
                            </li>
                            <li>
                                <link href="#" className="text-[#008066] hover:underline">
                                    Individual development
                                </link>
                            </li>
                            <li>
                                <link href="#" className="text-[#008066] hover:underline">
                                    more
                                </link>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-[#333] mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <link href="#" className="text-[#008066] hover:underline">
                                    About us
                                </link>
                            </li>
                            <li>
                                <link href="#" className="text-[#008066] hover:underline">
                                    blog
                                </link>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-1">
                        <div className="h-[200px] w-full rounded-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4775023685847!2d-98.31942492412985!3d19.04151055462014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0d4c4b9c973%3A0x8e6db86c5c7a5c9e!2sUniversidad%20Tecnol%C3%B3gica%20de%20Tecamachalco!5e0!3m2!1sen!2smx!4v1717522804000!5m2!1sen!2smx"
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
