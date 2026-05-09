import { useState } from 'react';
import { Download, Eye, Info, X } from 'lucide-react';
import { getImageUrl } from '../../../services/becas.service';

interface BannerSectionProps {
  section: {
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    buttons?: {
      text: string;
      url: string;
      type: 'primary' | 'secondary';
      icon?: 'download' | 'eye';
    }[];
    footerNote?: string;
  };
}

const BannerSection = ({ section }: BannerSectionProps) => {
  const { title, subtitle, description, imageUrl, buttons = [], footerNote } = section;
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const renderRichText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*[^*]+\*)/g);
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            const content = part.slice(1, -1);
            return (
              <span key={index} className="text-[#0a9782] font-bold">
                {content}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <>
      <div className="mb-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
          {/* Contenido */}
          <div className="p-8 md:p-12 md:w-3/5 flex flex-col relative">
            {subtitle && (
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                <span className="text-[11px] font-bold text-[#059669] tracking-[0.15em] uppercase">
                  {subtitle}
                </span>
              </div>
            )}

            <div className="mb-8">
              {title.split('\n').map((line, i) => {
                const renderLine = (text: string) => {
                  if (!text) return null;
                  const parts = text.split(/(\*[^*]+\*)/g);
                  return (
                    <>
                      {parts.map((part, index) => {
                        if (part.startsWith('*') && part.endsWith('*')) {
                          const content = part.slice(1, -1);
                          return (
                            <span key={index} className="text-[#0a9782] font-bold">
                              {content}
                            </span>
                          );
                        }
                        return <span key={index}>{part}</span>;
                      })}
                    </>
                  );
                };

                return i === 0 ? (
                  <h2 key={i} className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                    {renderLine(line)}
                  </h2>
                ) : (
                  <h3 key={i} className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                    {renderLine(line)}
                  </h3>
                );
              })}
            </div>

            {description && (
              <div className="text-slate-500 mb-10 leading-relaxed text-sm md:text-base max-w-xl">
                {description.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            )}

            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-10">
                {buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold transition-all transform hover:-translate-y-1 ${
                      btn.type === 'primary'
                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 hover:bg-slate-800'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {btn.icon === 'download' && <Download size={18} strokeWidth={2.5} />}
                    {btn.icon === 'eye' && <Eye size={18} strokeWidth={2.5} />}
                    {btn.text}
                  </a>
                ))}
              </div>
            )}

            {footerNote && (
              <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 mt-auto pt-6 border-t border-slate-50">
                <Info size={16} className="flex-shrink-0 text-[#0a9782]" />
                <p className="italic">{footerNote}</p>
              </div>
            )}
          </div>

          {/* Imagen */}
          <div className="md:w-2/5 relative group flex items-center justify-center p-8 lg:p-12 bg-slate-50">
            {imageUrl ? (
              <div 
                className="relative w-full aspect-[4/5] md:aspect-auto md:h-full max-h-[500px] transform transition-all duration-700 hover:scale-[1.02] cursor-pointer"
                onClick={() => setIsImageExpanded(true)}
              >
                <div className="absolute inset-0 bg-slate-200 rounded-[1.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white">
                  <img
                    src={getImageUrl(imageUrl)}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                     <div className="bg-white/90 backdrop-blur-md text-slate-900 px-5 py-2.5 rounded-full shadow-2xl text-xs font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <Eye size={16} strokeWidth={3} /> VER CARTEL
                     </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center text-slate-300 gap-3">
                <Eye size={48} strokeWidth={1} className="opacity-20" />
                <span className="text-xs font-bold tracking-widest uppercase">Sin imagen de cartel</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isImageExpanded && imageUrl && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-gray-300">
            <X size={40} />
          </button>
          <img
            src={getImageUrl(imageUrl)}
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default BannerSection;
