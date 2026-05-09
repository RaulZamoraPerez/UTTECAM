import { Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterLink {
    id: string;
    text: string;
    url: string;
}

interface FooterSectionProps {
    section: {
        title?: string;
        subtitle?: string;
        email?: string;
        phone?: string;
        links?: FooterLink[];
    };
}

const FooterSection = ({ section }: FooterSectionProps) => {
    // Default values if data is missing
    const content = {
        title: section?.title || '¿Tienes dudas?',
        subtitle: section?.subtitle || 'Estamos aquí para ayudarte en tu proceso',
        email: section?.email || 'serviciosestudiantiles@uttecam.edu.mx',
        phone: section?.phone || '249 422 3300 Ext. 161',
        links: section?.links || []
    };

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm border border-gray-100 max-w-6xl mx-auto">
            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A9782] mb-3">
                {content.title}
            </h2>
            <p className="text-gray-500 mb-8">
                {content.subtitle}
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10">
                {content.email && (
                    <a
                        href={`mailto:${content.email}`}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-700 hover:shadow-md hover:border-[#0A9782] hover:text-[#0A9782] transition-all duration-300 group"
                    >
                        <Mail className="text-gray-400 group-hover:text-[#0A9782] transition-colors" size={20} />
                        <span className="font-semibold">{content.email}</span>
                    </a>
                )}

                {content.phone && (
                    <a
                        href={`tel:${content.phone.replace(/[^0-9]/g, '')}`}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-700 hover:shadow-md hover:border-[#0A9782] hover:text-[#0A9782] transition-all duration-300 group"
                    >
                        <Phone className="text-gray-400 group-hover:text-[#0A9782] transition-colors" size={20} />
                        <span className="font-semibold">{content.phone}</span>
                    </a>
                )}
            </div>

            {/* Links */}
            {content.links.length > 0 && (
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {content.links.map((link, idx) => (
                        <a
                            key={link.id || idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0A9782] transition-colors text-sm font-medium flex items-center gap-1"
                        >
                            {link.text}
                            <ExternalLink size={12} />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FooterSection;
