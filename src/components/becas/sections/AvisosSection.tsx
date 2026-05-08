import { AlertTriangle, Info, CheckCircle, Calendar, ExternalLink, ArrowRight, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import * as React from 'react';

interface AvisoCard {
    id: string;
    type: 'alert' | 'poster' | 'card';
    variant: 'danger' | 'info' | 'success' | 'warning' | 'default';
    title: string;
    description: string;
    icon?: string;
    badge?: string;
    imageUrl?: string;
    url?: string;
    actionText?: string;
}

interface AvisosSectionProps {
    section: {
        cards?: AvisoCard[];
    };
}

const getFullUrl = (url?: string) => {
    if (!url) return undefined;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    if (url.startsWith('/uploads/')) {
        return `${import.meta.env.VITE_API_URL || 'http://localhost:3002'}${url}`;
    }
    return url;
};

const getVariantStyles = (variant: string) => {
    switch (variant) {
        case 'danger':
            return {
                bg: 'bg-red-50',
                border: 'border-red-100',
                text: 'text-red-900',
                icon: 'text-red-600',
                iconBg: 'bg-white',
                hover: 'hover:border-red-200',
                badge: 'bg-red-100 text-red-700',
                button: 'bg-white border-red-200 text-red-700 hover:bg-red-50'
            };
        case 'warning':
            return {
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                text: 'text-amber-900',
                icon: 'text-amber-600',
                iconBg: 'bg-white',
                hover: 'hover:border-amber-200',
                badge: 'bg-amber-100 text-amber-700',
                button: 'bg-white border-amber-200 text-amber-700 hover:bg-amber-50'
            };
        case 'success':
            return {
                bg: 'bg-green-50',
                border: 'border-green-100',
                text: 'text-green-900',
                icon: 'text-green-600',
                iconBg: 'bg-white',
                hover: 'hover:border-green-200',
                badge: 'bg-green-100 text-green-700',
                button: 'bg-white border-green-200 text-green-700 hover:bg-green-50'
            };
        case 'info':
            return {
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                text: 'text-blue-900',
                icon: 'text-blue-600',
                iconBg: 'bg-white',
                hover: 'hover:border-blue-200',
                badge: 'bg-blue-100 text-blue-700',
                button: 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50'
            };
        default:
            return {
                bg: 'bg-gray-50',
                border: 'border-gray-200',
                text: 'text-gray-900',
                icon: 'text-gray-600',
                iconBg: 'bg-white',
                hover: 'hover:border-gray-300',
                badge: 'bg-gray-100 text-gray-700',
                button: 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
            };
    }
};

const getIcon = (iconName?: string) => {
    switch (iconName) {
        case 'alert': return <AlertTriangle size={32} strokeWidth={1.5} />;
        case 'info': return <Info size={32} strokeWidth={1.5} />;
        case 'check': return <CheckCircle size={32} strokeWidth={1.5} />;
        case 'calendar': return <Calendar size={32} strokeWidth={1.5} />;
        default: return <Info size={32} strokeWidth={1.5} />;
    }
};

const AvisosSection = ({ section }: AvisosSectionProps) => {
    const { cards = [] } = section;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Cerrar modal con ESC
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImage]);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {cards.map((card, idx) => {
                    const styles = getVariantStyles(card.variant);
                    const href = getFullUrl(card.url);
                    const isLink = !!href;
                    const Wrapper = isLink ? 'a' : 'div';
                    const wrapperProps = isLink ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

                    if (card.type === 'alert') {
                        return (
                            <Wrapper
                                key={card.id || idx}
                                {...wrapperProps}
                                className={`col-span-1 md:col-span-12 relative overflow-hidden flex flex-col md:flex-row items-start gap-6 p-6 rounded-[2rem] border ${styles.bg} ${styles.border} shadow-sm ${isLink ? `transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 ${styles.hover}` : ''}`}
                            >
                                <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-50 blur-3xl ${styles.iconBg}`} />

                                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-sm ${styles.iconBg} ${styles.icon}`}>
                                    {getIcon(card.icon)}
                                </div>

                                <div className="flex-1 relative z-10">
                                    {card.badge && (
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${styles.badge}`}>
                                            {card.badge}
                                        </span>
                                    )}
                                    <h3 className={`text-2xl font-bold mb-2 ${styles.text}`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed mb-4 max-w-3xl">
                                        {card.description}
                                    </p>

                                    {card.actionText && (
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all shadow-sm ${styles.button}`}>
                                            {card.actionText}
                                            <ExternalLink size={14} />
                                        </div>
                                    )}
                                </div>
                            </Wrapper>
                        );
                    }

                    if (card.type === 'poster') {
                        return (
                            <Wrapper
                                key={card.id || idx}
                                {...wrapperProps}
                                className={`col-span-1 md:col-span-6 flex flex-col rounded-[2rem] overflow-hidden border bg-white shadow-sm border-gray-100 ${isLink ? `transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${styles.hover}` : ''}`}
                            >
                                <div className={`px-4 py-3 border-b flex items-center gap-3 ${styles.bg} ${styles.border}`}>
                                    <div className={`${styles.icon}`}>
                                        {getIcon(card.icon)}
                                    </div>
                                    <h3 className={`font-bold text-base ${styles.text}`}>
                                        {card.title}
                                    </h3>
                                </div>

                                {card.imageUrl && (
                                    <div className="w-full bg-gray-50 flex justify-center relative group/image cursor-pointer" onClick={(e) => {
                                        if (!isLink) {
                                            e.preventDefault();
                                            setSelectedImage(getFullUrl(card.imageUrl) || null);
                                        }
                                    }}>
                                        <img
                                            src={getFullUrl(card.imageUrl)}
                                            alt={card.title}
                                            className="w-full h-auto max-h-[600px] object-contain transition-transform duration-500 group-hover/image:scale-105"
                                        />
                                        {!isLink && (
                                            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                                                <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg transform translate-y-4 group-hover/image:translate-y-0 transition-all">
                                                    <Maximize2 size={16} /> Ampliar
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {card.actionText && (
                                    <div className="p-3 bg-white border-t border-gray-100 flex justify-end">
                                        <span className="text-sm font-semibold text-[#0a9782] flex items-center gap-1 hover:gap-2 transition-all">
                                            {card.actionText} <ArrowRight size={14} />
                                        </span>
                                    </div>
                                )}
                            </Wrapper>
                        );
                    }

                    return (
                        <div
                            key={card.id || idx}
                            onClick={() => {
                                if (card.imageUrl && !isLink) {
                                    setSelectedImage(getFullUrl(card.imageUrl) || null);
                                }
                            }}
                            className={`col-span-1 md:col-span-4 relative rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group cursor-pointer ${card.imageUrl && !isLink ? 'cursor-pointer' : ''}`}
                        >
                            {/* Imagen de fondo */}
                            {card.imageUrl ? (
                                <>
                                    <img
                                        src={getFullUrl(card.imageUrl)}
                                        alt={card.title}
                                        className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay oscuro */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center" />
                                </>
                            ) : (
                                <div className={`w-full h-48 flex items-center justify-center ${styles.bg}`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.icon}`}>
                                        {getIcon(card.icon)}
                                    </div>
                                </div>
                            )}

                            {/* Contenido en overlay - Solo para card type sin imagen */}
                            {!card.imageUrl && (
                                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-white">
                                    <div>
                                        {card.badge && (
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 w-fit ${styles.badge}`}>
                                                {card.badge}
                                            </span>
                                        )}
                                        <h3 className="text-base font-bold mb-2 text-gray-900">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                                            {card.description}
                                        </p>
                                        {card.actionText && (
                                            <div className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all text-[#0a9782]">
                                                {card.actionText}
                                                <Maximize2 size={16} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            
                            {/* Botón Ampliar para cards con imagen */}
                            {card.imageUrl && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg transition-colors">
                                        <Maximize2 size={18} />
                                        Ampliar información
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition flex items-center gap-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <span className="text-sm font-medium uppercase tracking-widest">Cerrar</span>
                            <div className="bg-white/10 p-2 rounded-full">
                                <Maximize2 size={20} className="rotate-45" />
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvisosSection;
