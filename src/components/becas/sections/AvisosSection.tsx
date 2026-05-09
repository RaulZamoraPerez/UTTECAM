import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    AlertTriangle, 
    Info, 
    CheckCircle, 
    Calendar, 
    ArrowRight, 
    Maximize2, 
    ZoomIn, 
    Image as ImageIcon,
    Bell
} from 'lucide-react';

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
    date?: string;
}

interface AvisosSectionProps {
    section: {
        title?: string;
        items?: AvisoCard[];
    };
}

const getFullUrl = (url?: string) => {
    if (!url) return '';
    if (url.startsWith('http') || url.startsWith('https')) return url;
    if (url.startsWith('/uploads/')) {
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
        return `${baseUrl}${url}`;
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
                badge: 'bg-red-100 text-red-700',
                hover: 'hover:border-red-200'
            };
        case 'warning':
            return {
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                text: 'text-amber-900',
                icon: 'text-amber-600',
                iconBg: 'bg-white',
                badge: 'bg-amber-100 text-amber-700',
                hover: 'hover:border-amber-200'
            };
        case 'success':
            return {
                bg: 'bg-green-50',
                border: 'border-green-100',
                text: 'text-green-900',
                icon: 'text-green-600',
                iconBg: 'bg-white',
                badge: 'bg-green-100 text-green-700',
                hover: 'hover:border-green-200'
            };
        case 'info':
            return {
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                text: 'text-blue-900',
                icon: 'text-blue-600',
                iconBg: 'bg-white',
                badge: 'bg-blue-100 text-blue-700',
                hover: 'hover:border-blue-200'
            };
        default:
            return {
                bg: 'bg-gray-50',
                border: 'border-gray-200',
                text: 'text-gray-900',
                icon: 'text-gray-600',
                iconBg: 'bg-white',
                badge: 'bg-gray-100 text-gray-700',
                hover: 'hover:border-gray-300'
            };
    }
};

const getIcon = (iconName?: string, size: number = 32) => {
    switch (iconName) {
        case 'alert': return <AlertTriangle size={size} strokeWidth={1.5} />;
        case 'info': return <Info size={size} strokeWidth={1.5} />;
        case 'check': return <CheckCircle size={size} strokeWidth={1.5} />;
        case 'calendar': return <Calendar size={size} strokeWidth={1.5} />;
        default: return <Bell size={size} strokeWidth={1.5} />;
    }
};

const AvisosSection: React.FC<AvisosSectionProps> = ({ section }) => {
    const { title, items = [] } = section;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const sortedCards = [...items].sort((a, b) => {
        const aText = (a.title + (a.badge || '')).toLowerCase();
        const bText = (b.title + (b.badge || '')).toLowerCase();

        if (aText.includes('prioritario')) return -1;
        if (bText.includes('prioritario')) return 1;
        if (aText.includes('resultado')) return -1;
        if (bText.includes('resultado')) return 1;
        
        if (a.type === 'alert' && b.type !== 'alert') return -1;
        if (a.type !== 'alert' && b.type === 'alert') return 1;

        return 0;
    });

    const featuredCards = sortedCards.filter(c => c.type === 'alert' || c.type === 'poster');
    const standardCards = sortedCards.filter(c => c.type === 'card' || (!c.type && c.description));

    const renderCard = (card: AvisoCard, index: number) => {
        const styles = getVariantStyles(card.variant || 'default');
        const isLink = !!card.url;
        const Wrapper = isLink ? 'a' : 'div';
        const wrapperProps = isLink ? { href: getFullUrl(card.url), target: "_blank", rel: "noopener noreferrer" } : {};

        if (card.type === 'alert') {
            return (
                <motion.div
                    key={card.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 h-full"
                >
                    <Wrapper
                        {...wrapperProps}
                        className={`block h-full relative overflow-hidden rounded-[2rem] border transition-all duration-300 bg-white ${styles.border} ${styles.hover} group shadow-sm`}
                    >
                        <div className="flex flex-col h-full">
                            <div className={`px-6 py-4 border-b flex items-center gap-3 ${styles.bg} ${styles.border}`}>
                                <div className={`p-2 rounded-full ${styles.iconBg} ${styles.icon} shadow-sm`}>
                                    {getIcon(card.icon || 'alert')}
                                </div>
                                <h3 className={`text-lg font-black ${styles.text}`}>
                                    {card.title}
                                </h3>
                                {card.badge && (
                                    <span className={`ml-auto inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}>
                                        {card.badge}
                                    </span>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {card.description}
                                </p>
                                {isLink && (
                                    <div className={`mt-auto text-[#0a9782] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                        {card.actionText || 'Ver más'}
                                        <ArrowRight size={14} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </Wrapper>
                </motion.div>
            );
        }

        if (card.type === 'poster') {
            return (
                <motion.div
                    key={card.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 h-full"
                >
                    <Wrapper
                        {...wrapperProps}
                        className={`block h-full flex flex-col rounded-[2rem] border transition-all duration-300 bg-white ${styles.border} ${styles.hover} overflow-hidden group shadow-sm`}
                    >
                        <div className={`px-6 py-4 border-b flex items-center gap-3 ${styles.bg} ${styles.border}`}>
                            <div className={`p-2 rounded-full ${styles.iconBg} ${styles.icon} shadow-sm`}>
                                {getIcon(card.icon || 'calendar')}
                            </div>
                            <h3 className={`text-lg font-black ${styles.text}`}>
                                {card.title}
                            </h3>
                            {card.badge && (
                                <span className={`ml-auto inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}>
                                    {card.badge}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 flex items-center justify-center bg-gray-50 relative group/img overflow-hidden min-h-[300px]">
                            {card.imageUrl ? (
                                <>
                                    <img
                                        src={getFullUrl(card.imageUrl)}
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                                        onClick={(e) => {
                                            if (card.imageUrl) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSelectedImage(getFullUrl(card.imageUrl));
                                            }
                                        }}
                                    >
                                        <ZoomIn className="text-white" size={32} />
                                    </div>
                                </>
                            ) : (
                                <div className="py-20 flex flex-col items-center opacity-20">
                                    <ImageIcon size={48} />
                                    <span className="text-[10px] font-black uppercase mt-2">Sin Imagen</span>
                                </div>
                            )}
                        </div>
                    </Wrapper>
                </motion.div>
            );
        }

        return (
            <motion.div
                key={card.id || index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 h-full"
            >
                <Wrapper
                    {...wrapperProps}
                    className={`block h-full flex flex-col rounded-[2rem] border bg-white shadow-sm border-gray-100 transition-all duration-500 hover:shadow-md group`}
                >
                    <div className={`px-6 py-4 border-b flex items-center gap-3 ${styles.bg} ${styles.border}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${styles.iconBg} ${styles.icon} shadow-sm`}>
                            {getIcon(card.icon, 20)}
                        </div>
                        <h3 className={`text-lg font-black ${styles.text}`}>
                            {card.title}
                        </h3>
                        {card.badge && (
                            <span className={`ml-auto inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}>
                                {card.badge}
                            </span>
                        )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {card.description}
                        </p>
                        {card.actionText && (
                            <div className="text-[#0a9782] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                                {card.actionText}
                                <ArrowRight size={14} />
                            </div>
                        )}
                    </div>
                </Wrapper>
            </motion.div>
        );
    };

    if (!items || items.length === 0) return null;

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto font-sans">


            {/* Featured Grid (Alerts and Posters) */}
            {featuredCards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuredCards.map(renderCard)}
                </div>
            )}

            {/* Standard Grid (Cards) */}
            {standardCards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standardCards.map(renderCard)}
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AvisosSection;

