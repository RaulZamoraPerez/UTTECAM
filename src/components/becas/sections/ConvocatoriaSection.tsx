import { useState } from 'react';
import { FileText, ArrowRight, Eye, Calendar, Info, FileCheck, AlertCircle, X } from 'lucide-react';

interface DocumentItem {
    title: string;
    subtitle: string;
    type: 'pdf' | 'link';
    url: string;
    actionText: string;
    variant?: 'default' | 'warning' | 'success' | 'info' | 'outline' | 'danger';
}

interface ConvocatoriaSectionProps {
    section: {
        badge?: string;
        mainTitle?: string;
        title: string;
        subtitle?: string;
        description?: string;
        documents?: DocumentItem[];
        imageUrl?: string;
        imageCaption?: string;
    };
}

const getVariantStyles = (variant: string = 'default') => {
    switch (variant) {
        case 'warning':
            return {
                card: 'bg-[#FFF9E6] border-[#FFEeba] hover:border-orange-300',
                icon: 'bg-[#FFE0B2] text-orange-700',
                text: 'text-gray-900 text-lg',
                subtext: 'text-[#0A9782] font-medium',
                action: 'text-gray-900 font-semibold',
                span: 'md:col-span-2'
            };
        case 'success':
            return {
                card: 'bg-[#F0FDF4] border-green-100 hover:border-green-300',
                icon: 'bg-green-100 text-green-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-[#0A9782]',
                span: 'md:col-span-1'
            };
        case 'info':
            return {
                card: 'bg-[#EFF6FF] border-blue-100 hover:border-blue-300',
                icon: 'bg-blue-100 text-blue-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-[#0A9782]',
                span: 'md:col-span-1'
            };
        case 'danger':
            return {
                card: 'bg-[#FEF2F2] border-red-100 hover:border-red-300',
                icon: 'bg-red-100 text-red-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-[#0A9782]',
                span: 'md:col-span-1'
            };
        case 'outline':
            return {
                card: 'bg-white border-2 border-orange-100 hover:border-orange-300',
                icon: 'bg-orange-50 text-orange-500',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-gray-400 group-hover:text-orange-500 transition-colors',
                span: 'md:col-span-2'
            };
        default:
            return {
                card: 'bg-gray-50 border-gray-200 hover:border-[#0A9782]',
                icon: 'bg-gray-200 text-gray-600',
                text: 'text-gray-900',
                subtext: 'text-gray-500',
                action: 'text-[#0A9782]',
                span: 'md:col-span-1'
            };
    }
};

const getDocumentIcon = (variant: string = 'default') => {
    switch (variant) {
        case 'success': return <FileCheck size={24} />;
        case 'info': return <Info size={24} />;
        case 'warning': return <FileText size={24} />;
        case 'danger': return <AlertCircle size={24} />;
        case 'outline': return <ArrowRight size={24} className="rotate-90 md:rotate-0" />;
        default: return <FileText size={24} />;
    }
};

const getFullUrl = (url: string) => {
    if (!url) return '#';
    if (url.startsWith('http') || url.startsWith('https')) return url;
    if (url.startsWith('/uploads/')) {
        return `${import.meta.env.VITE_API_URL || 'http://localhost:3002'}${url}`;
    }
    return url;
};

const renderTitle = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
        if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('*') && part.endsWith('*'))) {
            const content = part.startsWith('**') ? part.slice(2, -2) : part.slice(1, -1);
            return (
                <span key={index} className="text-[#0A9782]">
                    {content}
                </span>
            );
        }
        return part;
    });
};

const ConvocatoriaSection = ({ section }: ConvocatoriaSectionProps) => {
    const {
        badge,
        mainTitle,
        title,
        subtitle,
        description,
        documents = [],
        imageUrl,
        imageCaption
    } = section;

    const [isImageExpanded, setIsImageExpanded] = useState(false);

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto relative group/section font-sans">
            {/* Header del Componente - Estilo Oficial UTTECAM (Sección) */}
            {(mainTitle || badge) && (
                <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center gap-4 flex-1 text-left">
                        {/* Barra de acento vertical */}
                        <div className="w-1.5 h-10 bg-[#00a499] rounded-full hidden md:block" />

                        <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-green-50 rounded-xl text-[#00a499]">
                                <FileText size={28} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col text-left">
                                {badge && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700 uppercase tracking-widest mb-1 w-fit">
                                        {badge}
                                    </span>
                                )}
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight leading-tight">
                                    {mainTitle || ""}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 relative text-left">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Left Column: Content & Documents */}
                    <div className="flex-1 space-y-8">
                        {/* Title and Subtitle inside the card */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#002B49] mb-2 tracking-tight leading-tight">
                                    {renderTitle(title)}
                                </h3>
                                {subtitle && (
                                    <p className="text-gray-800 text-lg font-bold leading-relaxed max-w-2xl mt-1">
                                        {renderTitle(subtitle)}
                                    </p>
                                )}
                                {description && (
                                    <p className="text-gray-500 text-base leading-relaxed max-w-2xl mt-4">
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Documents Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
                            {documents.map((doc, idx) => {
                                const styles = getVariantStyles(doc.variant);
                                return (
                                    <a
                                        key={idx}
                                        href={getFullUrl(doc.url)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            flex items-center gap-5 p-5 rounded-[2rem] border transition-all duration-500 group 
                                            ${styles.card} ${styles.span}
                                            hover:shadow-md hover:-translate-y-0.5
                                        `}
                                    >
                                        <div className={`p-3.5 rounded-xl ${styles.icon} shadow-sm group-hover:scale-110 transition-transform`}>
                                            {getDocumentIcon(doc.variant)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`font-bold text-lg truncate ${styles.text}`}>
                                                {doc.title}
                                            </h3>
                                            <p className={`text-xs truncate mt-0.5 uppercase tracking-wider font-bold opacity-70`}>
                                                {doc.subtitle}
                                            </p>
                                        </div>
                                        <div className={`flex items-center gap-2 transition-colors whitespace-nowrap ${styles.action} opacity-40 group-hover:opacity-100`}>
                                            <ArrowRight size={20} />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Poster Image */}
                    {imageUrl && (
                        <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0 flex flex-col items-center justify-start">
                            <div
                                className="relative rounded-[2rem] overflow-hidden w-full group cursor-pointer shadow-lg"
                                onClick={() => setIsImageExpanded(true)}
                            >
                                <img
                                    src={getFullUrl(imageUrl)}
                                    alt={imageCaption || title}
                                    className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    style={{ maxHeight: '420px' }}
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur text-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Eye size={16} />
                                        Ver Imagen
                                    </div>
                                </div>
                            </div>
                            {imageCaption && (
                                <p className="mt-4 text-sm font-semibold text-gray-400 text-center italic">
                                    {imageCaption}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de Imagen Expandida */}
            {isImageExpanded && imageUrl && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setIsImageExpanded(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
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
        </section>
    );
};

export default ConvocatoriaSection;
