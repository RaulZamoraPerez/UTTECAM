
interface HeaderSectionProps {
  section: {
    title: string;
    description?: string;
    variant?: 'default' | 'green';
  };
  module?: 'becas' | 'estadia';
}

const HeaderSection = ({ section, module = 'becas' }: HeaderSectionProps) => {
  const { title, description, variant = 'default' } = section;

  // Función para resaltar texto entre asteriscos
  const renderTitle = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*[^*]+\*)/g);
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            const content = part.slice(1, -1);
            return (
              <span key={index} className="text-[#0a9782]">
                {content}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  if (module === 'estadia') {
    return (
      <div className="pt-24 pb-12 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-6">
            <div className="h-[2px] w-12 bg-[#0a9782] mb-6 opacity-30" />
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-[0.9]">
              {renderTitle(title)}
            </h1>
          </div>
          {description && (
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto opacity-70">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'green') {
    return (
      <div className="text-center py-8 mb-12">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#0a9782] mb-4 tracking-tight uppercase leading-tight">
            {title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-12 text-center mb-16">
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight px-4">
          {renderTitle(title)}
        </h2>

        {description && (
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium px-4 opacity-90">
            {description}
          </p>
        )}
      </div>

      {/* Sutil resplandor de fondo (sin caja) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-green-50/30 to-blue-50/30 blur-[130px] rounded-full -z-10"></div>
    </div>
  );
};

export default HeaderSection;
