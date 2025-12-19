import { Sparkles, Award, ExternalLink } from 'lucide-react';

interface HeaderSectionProps {
    id: number;
    title: string;
    description: string;
    variant?: 'default' | 'green';
}

export const HeaderSection = ({ title, description, variant = 'default' }: HeaderSectionProps) => {

    // Renderizado para el estilo "Principal" (Negro con acento verde)
    const renderDefault = () => {
        // Función para resaltar texto entre asteriscos: "Hola *Mundo*" -> "Hola " + <span green>Mundo</span>
        const renderTitle = (text: string) => {
            if (!text) return null;
            const parts = text.split(/(\*[^*]+\*)/g); // Separa por bloques entre asteriscos
            return (
                <>
                    {parts.map((part, index) => {
                        if (part.startsWith('*') && part.endsWith('*')) {
                            // Es un bloque destacado: quitar asteriscos y poner color
                            const content = part.slice(1, -1);
                            return (
                                <span key={index} className="text-[#0a9782]">
                                    {content}
                                </span>
                            );
                        }
                        // Texto normal
                        return <span key={index}>{part}</span>;
                    })}
                </>
            );
        };

        return (
            <div className="relative text-center py-8">
                <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-6 shadow-sm">
                        <Sparkles size={14} className="text-orange-400" />
                        <span className="text-sm font-medium text-gray-600">
                            Portal de Becas Institucionales
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        {renderTitle(title)}
                    </h2>

                    <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                        {description}
                    </p>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#0a9782]/5 to-blue-500/5 blur-3xl rounded-full -z-10 pointer-events-none"></div>
                </div>
            </div>
        );
    };

    // Renderizado para el estilo "Programa" (Todo verde, estilo imagen subida)
    const renderGreen = () => {
        return (
            <div className="relative text-center mt-8">
                <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                    {/* Icono Badge Verde */}
                    <div className="w-16 h-16 bg-[#f0fdf4] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#dcfce7]">
                        <Award size={32} className="text-[#008f39]" />
                    </div>

                    {/* Título Todo Verde y Mayúsculas */}
                    <h2 className="text-3xl md:text-4xl font-black text-[#008f39] mb-2 tracking-tight uppercase leading-tight">
                        {title}
                    </h2>

                    {/* Divisor con Icono */}
                    <div className="flex items-center gap-4 w-full max-w-md my-6 opacity-50">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#008f39] to-transparent flex-1"></div>
                        <div className="bg-[#008f39] text-white p-1.5 rounded-full">
                            <ExternalLink size={14} />
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-[#008f39] to-transparent flex-1"></div>
                    </div>
                </div>
            </div>
        );
    };

    return variant === 'green' ? renderGreen() : renderDefault();
};

export default HeaderSection;
