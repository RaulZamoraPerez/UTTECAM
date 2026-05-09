import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ZoomIn, Search } from 'lucide-react';

interface InfographicItem {
    title: string;
    subtitle?: string;
    imageUrl: string;
}

interface InfographicsSectionProps {
    section: {
        title?: string;
        items?: InfographicItem[];
    };
}

const getFullUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${import.meta.env.VITE_API_URL || 'http://localhost:3002'}${url}`;
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

const InfographicsSection: React.FC<InfographicsSectionProps> = ({ section }) => {
    const { title, items = [] } = section;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = useMemo(() => {
        if (!searchTerm.trim()) return items;
        const lowerSearch = searchTerm.toLowerCase();
        return items.filter(item => 
            item.title.toLowerCase().includes(lowerSearch) || 
            (item.subtitle && item.subtitle.toLowerCase().includes(lowerSearch))
        );
    }, [items, searchTerm]);

    if (!items || items.length === 0) return null;

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto font-sans group/section">
            {/* Header - Centered Layout */}
            {/* Header - Centered Layout (Removed title and search bar as requested) */}


            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full flex flex-col bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-3 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            onClick={() => item.imageUrl && setSelectedImage(getFullUrl(item.imageUrl))}
                        >
                            {/* Premium Image Container */}
                            <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-6 bg-gray-50 border border-gray-50">
                                <img
                                    src={getFullUrl(item.imageUrl)}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Premium Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#012d48]/80 via-[#012d48]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/30 mb-2">
                                            <ZoomIn size={14} /> Ver Detalle
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Info */}
                            <div className="px-5 pb-5 mt-auto space-y-4">
                                <div>
                                    <h3 className="text-xl font-black text-[#012d48] mb-1 group-hover:text-[#008f39] transition-colors line-clamp-2">
                                        {renderTitle(item.title)}
                                    </h3>
                                    {item.subtitle && (
                                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                                            {renderTitle(item.subtitle)}
                                        </p>
                                    )}
                                </div>
                                
                                {/* Action Button */}
                                <div className="pt-2">
                                    <div className="w-full py-3 bg-[#0A9782] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#008f39] transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-[#0A9782]/20">
                                        <ImageIcon size={14} />
                                        Ver material
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="py-24 flex flex-col items-center justify-center text-gray-400 border-4 border-dashed border-gray-100 rounded-[3rem] bg-gray-50/50">
                    <ImageIcon size={64} className="opacity-10 mb-4" />
                    <h3 className="text-xl font-black text-[#012d48] mb-1 uppercase tracking-tight">Sin resultados</h3>
                    <p className="text-sm font-medium mb-8">No encontramos material que coincida con tu búsqueda</p>
                    <button 
                        onClick={() => setSearchTerm("")}
                        className="px-8 py-3 bg-[#0A9782] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#087a69] transition-all shadow-lg hover:shadow-[#0A9782]/20"
                    >
                        Limpiar búsqueda
                    </button>
                </div>
            )}

            {/* Premium Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-[#012d48]/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/20 z-[10000]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Vista ampliada"
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InfographicsSection;
