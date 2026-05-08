import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ZoomIn, Search, Filter } from 'lucide-react';

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
        <section className="py-12 px-4 max-w-7xl mx-auto font-sans">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-l-4 border-[#0a9782] pl-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#012d48] uppercase tracking-tight">
                        {title || "Infografías"}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Material informativo y convocatorias oficiales
                    </p>
                </div>

                <div className="relative w-full md:w-80">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0a9782]/20 focus:border-[#0a9782] transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                            onClick={() => setSelectedImage(getFullUrl(item.imageUrl))}
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                                <img
                                    src={getFullUrl(item.imageUrl)}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 bg-white text-[#012d48] p-3 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300">
                                        <ZoomIn size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="font-bold text-[#012d48] text-lg mb-1 line-clamp-1">
                                    {item.title}
                                </h3>
                                {item.subtitle && (
                                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <Search size={40} className="text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#012d48] mb-1">Sin resultados</h3>
                    <p className="text-gray-500 text-sm mb-6">No encontramos material que coincida con tu búsqueda</p>
                    <button 
                        onClick={() => setSearchTerm("")}
                        className="px-6 py-2 bg-[#0a9782] text-white rounded-lg font-bold text-sm hover:bg-[#087a69] transition-colors"
                    >
                        Limpiar búsqueda
                    </button>
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Vista ampliada"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InfographicsSection;

