import { useState, useEffect } from 'react';
import { FolderOpen, FileText, Download, ChevronRight, Loader2, Search } from 'lucide-react';
import { obtenerCategorias, type Categoria } from '../../../services/documentosApi';

interface RepositorySectionProps {
    id: number;
    title: string;
    data: {
        areaId?: number;
        areaName?: string;
        description?: string;
    };
}

const RepositorySection = ({ title, data }: RepositorySectionProps) => {
    const [categories, setCategories] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const loadDocuments = async () => {
            if (!data.areaId) {
                setError('Configuración inválida: No se especificó el área de documentos.');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const result = await obtenerCategorias(data.areaId);
                setCategories(result);
                if (result.length > 0) {
                    setActiveTab(result[0].id);
                }
            } catch (err) {
                console.error('Error loading repository:', err);
                setError('No se pudieron cargar los documentos.');
            } finally {
                setLoading(false);
            }
        };

        loadDocuments();
    }, [data.areaId]);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-amber-600" size={32} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center my-8">
                <p>{error}</p>
            </div>
        );
    }

    if (categories.length === 0) {
        return (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center my-8">
                <div className="mx-auto w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3 text-gray-500">
                    <FolderOpen size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Repositorio Vacío</h3>
                <p className="text-gray-500">Aún no hay documentos públicos disponibles en esta sección.</p>
            </div>
        );
    }

    const activeCategory = categories.find(c => c.id === activeTab) || categories[0];
    const filteredFiles = activeCategory?.archivos.filter(f =>
        f.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <div className="my-12 scroll-mt-24" id="repositorio">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
                {data.description && (
                    <p className="mt-4 text-gray-600 max-w-3xl">{data.description}</p>
                )}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                {/* Sidebar / Tabs */}
                <div className="w-full md:w-1/4 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Carpetas</h3>
                    <div className="space-y-1">
                        {categories.map((cat, index) => (
                            <button
                                key={cat.id || index}
                                onClick={() => setActiveTab(cat.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === cat.id
                                    ? 'bg-amber-100 text-amber-800 font-medium'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                <FolderOpen size={18} className={activeTab === cat.id ? 'text-amber-600' : 'text-gray-400'} />
                                <span className="truncate">{cat.nombre}</span>
                                {activeTab === cat.id && <ChevronRight size={16} className="ml-auto text-amber-600" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <FolderOpen className="text-amber-500" />
                                {activeCategory?.nombre}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{filteredFiles.length} documentos disponibles</p>
                        </div>

                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Buscar archivo..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2">
                        {filteredFiles.length > 0 ? (
                            <div className="grid grid-cols-1 gap-3">
                                {filteredFiles.map((file) => (
                                    <a
                                        key={file.id}
                                        href={file.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center p-4 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-orange-100/50 text-orange-600 flex items-center justify-center mr-4 group-hover:bg-orange-100 group-hover:scale-110 transition-transform">
                                            <FileText size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0 pr-4">
                                            <h4 className="font-medium text-gray-900 truncate group-hover:text-amber-700">{file.nombre}</h4>
                                            <p className="text-xs text-gray-500 mt-0.5 truncate">{file.descripcion || 'Documento descargable'}</p>
                                        </div>
                                        <div className="flex items-center text-gray-400 group-hover:text-amber-600">
                                            <span className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">Descargar</span>
                                            <Download size={18} />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                                <FileText size={48} className="mb-4 opacity-20" />
                                <p>No se encontraron documentos en esta carpeta.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepositorySection;
