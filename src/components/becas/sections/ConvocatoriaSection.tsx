import { FileText, ArrowRight, Eye, Calendar, Info, FileCheck, X } from 'lucide-react';
import { useState } from 'react';
import { envs } from '../../../config/envs';

interface DocumentItem {
    title: string;
    subtitle: string;
    type: 'pdf' | 'link';
    url: string;
    actionText: string;
    variant?: 'default' | 'warning' | 'success' | 'info' | 'outline';
}

interface ConvocatoriaSectionProps {
    id: number;
    badge?: string;
    title: string;
    description?: string;
    documents?: DocumentItem[];
    imageUrl?: string;
    imageCaption?: string;
}

const getVariantStyles = (variant: string = 'default') => {
    switch (variant) {
        case 'warning': // Yellow (Convocatoria) - Full Width
            return {
                card: 'bg-[#FFF9E6] border-[#FFEeba] hover:border-orange-300',
                icon: 'bg-[#FFE0B2] text-orange-700',
                text: 'text-gray-900 text-lg',
                subtext: 'text-[#0a9782] font-medium',
                action: 'text-gray-900 font-semibold',
                span: 'md:col-span-2'
            };
        case 'success': // Green (Resultados) - Half Width
            return {
                card: 'bg-[#F0FDF4] border-green-100 hover:border-green-300',
                icon: 'bg-green-100 text-green-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-[#0a9782]',
                span: 'md:col-span-1'
            };
        case 'info': // Blue (Casos Especiales) - Half Width
            return {
                card: 'bg-[#EFF6FF] border-blue-100 hover:border-blue-300',
                icon: 'bg-blue-100 text-blue-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-[#0a9782]',
                span: 'md:col-span-1'
            };
        case 'outline': // Outline (Carta Compromiso) - Full Width
            return {
                card: 'bg-white border-2 border-orange-100 hover:border-orange-300',
                icon: 'bg-orange-50 text-orange-500',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-gray-400 group-hover:text-orange-500 transition-colors',
                span: 'md:col-span-2'
            };
        default: // Default Gray - Full Width
            return {
                card: 'bg-gray-50 border-gray-200 hover:border-[#0a9782]',
                icon: 'bg-gray-200 text-gray-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-gray-500 group-hover:text-[#0a9782]',
                span: 'md:col-span-2'
            };
    }
};

const getDocumentIcon = (variant: string = 'default') => {
    switch (variant) {
        case 'success': return <FileCheck size={24} />;
        case 'info': return <Info size={24} />;
        case 'warning': return <FileText size={24} />;
        case 'outline': return <ArrowRight size={24} className="rotate-90 md:rotate-0" />; // Icono de descarga
        default: return <FileText size={24} />;
    }
};

const getFullUrl = (url: string) => {
    if (!url) return '#';
    if (url.startsWith('http') || url.startsWith('https')) return url;
    // If it's a relative upload path, prepend API URL
    if (url.startsWith('/uploads/')) {
        return `${envs.API_BASE_URL}${url}`;
    }
    return url;
};

export const ConvocatoriaSection = ({
    badge,
    title,
    description,
    documents = [],
    imageUrl,
    imageCaption
}: ConvocatoriaSectionProps) => {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 relative">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column: Content & Documents */}
                <div className="flex-1 space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        {badge && (
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3E0] text-orange-800 text-xs font-bold tracking-wider uppercase border border-orange-100">
                                <Calendar size={14} />
                                {badge}
                            </div>
                        )}
                        <div>
                            <h2 className="text-4xl font-extrabold text-[#002B49] mb-3 tracking-tight">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Documents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {documents.map((doc, idx) => {
                            const styles = getVariantStyles(doc.variant);
                            return (
                                <a
                                    key={idx}
                                    href={getFullUrl(doc.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 group 
                                        ${styles.card} ${styles.span}
                                        hover:shadow-lg hover:-translate-y-0.5
                                    `}
                                >
                                    <div className={`p-3.5 rounded-xl ${styles.icon} shadow-sm`}>
                                        {getDocumentIcon(doc.variant)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`font-bold truncate ${styles.text}`}>
                                            {doc.title}
                                        </h3>
                                        <p className={`text-sm truncate mt-0.5 ${styles.subtext}`}>
                                            {doc.subtitle}
                                        </p>
                                    </div>
                                    <div className={`flex items-center gap-2 transition-colors whitespace-nowrap ${styles.action}`}>
                                        <span className="text-sm font-semibold hidden sm:inline">{doc.actionText}</span>
                                        {doc.type === 'pdf' ? <Eye size={20} /> : <ArrowRight size={20} />}
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Poster Image */}
                {imageUrl && (
                    <div className="lg:w-[380px] flex flex-col items-center pt-4">
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-gray-100 w-full transform rotate-1 hover:rotate-0 transition-transform duration-500 group cursor-pointer"
                            onClick={() => setIsImageExpanded(true)}
                        >
                            <img
                                src={getFullUrl(imageUrl)}
                                alt={imageCaption || title}
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay con botón de ampliar */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <div className="bg-white/90 backdrop-blur text-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                                    <Eye size={16} />
                                    Ampliar Resultado
                                </div>
                            </div>
                        </div>
                        {imageCaption && (
                            <p className="mt-4 text-sm font-semibold text-gray-800 text-center">
                                {imageCaption}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Modal de Imagen Expandida */}
            {isImageExpanded && imageUrl && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setIsImageExpanded(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                        onClick={() => setIsImageExpanded(false)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={getFullUrl(imageUrl)}
                        alt={title}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default ConvocatoriaSection;
