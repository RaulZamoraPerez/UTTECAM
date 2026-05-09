import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ExternalLink } from 'lucide-react';

interface HeaderSectionProps {
  section: {
    title: string;
    description?: string;
    style?: 'default' | 'green';
  };
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ section }) => {
  const { title, description, style = 'default' } = section;

  // Renderizado para el estilo "Principal" (Negro con acento verde)
  const renderDefault = () => {
    const renderTitle = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={index} className="text-[#0a9782]">
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      });
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center py-12 px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-8 shadow-sm"
        >
          <Sparkles size={14} className="text-orange-400" />
          <span className="text-xs font-black uppercase tracking-widest text-gray-600">
            Portal de Becas Institucionales
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black text-[#012d48] mb-6 tracking-tight uppercase leading-tight max-w-4xl">
          {renderTitle(title)}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl font-medium">
            {description}
          </p>
        )}

        <div className="w-24 h-1.5 mt-10 rounded-full bg-[#0a9782] opacity-20"></div>
      </motion.div>
    );
  };

  // Renderizado para el estilo "Programa" (Todo verde)
  const renderGreen = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center py-12 px-4 max-w-6xl mx-auto"
      >
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Icono Badge Verde */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-[#f0fdf4] rounded-full flex items-center justify-center mb-8 shadow-sm border border-[#dcfce7]"
          >
            <Award size={40} className="text-[#008f39]" />
          </motion.div>

          {/* Título Todo Verde y Mayúsculas */}
          <h2 className="text-3xl md:text-5xl font-black text-[#008f39] mb-4 tracking-tight uppercase leading-tight max-w-4xl">
            {title.replace(/\*\*/g, '')}
          </h2>

          {/* Divisor con Icono */}
          <div className="flex items-center gap-4 w-full max-w-md my-8 opacity-30">
            <div className="h-px bg-gradient-to-r from-transparent via-[#008f39] to-transparent flex-1"></div>
            <div className="bg-[#008f39] text-white p-1.5 rounded-full">
              <ExternalLink size={14} />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#008f39] to-transparent flex-1"></div>
          </div>

          {description && (
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl font-medium">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-transparent overflow-hidden font-sans">
      {style === 'green' ? renderGreen() : renderDefault()}
    </section>
  );
};

export default HeaderSection;
