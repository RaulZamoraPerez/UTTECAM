import { useState, useRef, useEffect } from "react";
import { type CustomOrgNode } from "@/data/Organigrama.data";
import { getOrganigrama, getOrganigramaImageUrl } from "@/services/organigrama.service";
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Minus, 
  Plus, 
  Info, 
  Loader2, 
  User, 
  
  Award, 
  Briefcase, 
  Quote, 

} from "lucide-react";

// --- BioModal Component (Diseño Específico solicitado) ---
const BioModal = ({ node, onClose }: { node: CustomOrgNode; onClose: () => void }) => {
  const imageUrl = getOrganigramaImageUrl(node.data?.image);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in fade-in zoom-in duration-500 border border-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Cabecera con Curva Teal y Efecto de Brillo (Shimmer) */}
        <div className="relative h-28 w-full bg-white overflow-hidden group/header">
          {/* Curva Teal Principal */}
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full z-10">
            <path d="M0,80 C150,150 350,-20 500,80 L500,0 L0,0 Z" fill="#0a9782" />
          </svg>
          
          {/* Efecto de Brillo (Shimmer) */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer skew-x-12"></div>
          </div>
          
          <style>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%) skewX(-15deg); }
              50% { transform: translateX(100%) skewX(-15deg); }
              100% { transform: translateX(100%) skewX(-15deg); }
            }
            .animate-shimmer {
              animation: shimmer 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
          `}</style>
        </div>
        
        <div className="px-10 py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-8">
            {/* Foto de Perfil con Efecto de Brillo Radial */}
            <div className="relative shrink-0 -mt-28 md:-mt-28 group/photo">
              <div className="absolute -inset-4 bg-[#0a9782]/10 rounded-full blur-2xl opacity-0 group-hover/photo:opacity-100 transition-opacity duration-700"></div>
              <div className="w-44 h-44 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white ring-1 ring-slate-100 relative z-10">
                {imageUrl ? (
                  <img src={imageUrl} alt={node.data.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50"><User size={64} /></div>
                )}
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#f3b14d] border-4 border-white rounded-full shadow-lg flex items-center justify-center z-20">
                <Award size={18} className="text-white" />
              </div>
            </div>

            {/* Información Principal */}
            <div className="text-center md:text-left flex-1 pt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight leading-tight mb-1">
                {node.data.name}
              </h2>
              <p className="text-[#0a9782] font-bold text-xs tracking-[0.15em] uppercase mb-4">
                {node.data.title}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-400 font-bold shadow-sm">
                  <Briefcase size={14} className="text-[#d1672a]" />
                  Directorio Institucional
                </div>
              </div>
            </div>
          </div>

          {/* Semblanza con Tipografía según referencia */}
          <div className="relative p-10 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 group">
            <Quote className="absolute top-6 left-6 text-[#0a9782] opacity-10" size={48} fill="currentColor" />
            <div className="max-h-52 overflow-y-auto overflow-x-hidden pr-2 relative z-10 custom-scrollbar">
              <p className="text-slate-500 text-lg leading-relaxed font-light italic text-center px-4 break-words whitespace-pre-wrap">
                "{node.data.text || 'Sin semblanza disponible.'}"
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0a9782] opacity-[0.02] rounded-full blur-2xl" />
          </div>

          {/* Acciones Horizontales Simplificadas */}
          <div className="mt-8 flex justify-center md:justify-end">
            <button 
              className="px-12 py-3.5 border-2 border-slate-100 bg-white text-slate-400 rounded-xl hover:bg-slate-50 hover:text-slate-600 transition-all font-black text-xs tracking-widest uppercase shadow-sm active:scale-95"
              onClick={onClose}
            >
              Cerrar Vista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Node Card (Diseño Original Minimalista) ---
const NodeCard = ({ node, depth, onToggle, onOpenBio }: { node: CustomOrgNode; depth: number; onToggle: () => void; onOpenBio: () => void }) => {
  const hasChildren = node.children && node.children.length > 0;
  
  const isRoot = depth === 0;
  const cardSize = isRoot ? "w-80" : "w-64";
  const titleColor = "text-slate-500";
  const ringColor = "border-slate-100";

  const imageUrl = getOrganigramaImageUrl(node.data?.image);

  return (
    <div className="relative z-10 p-4 group" onClick={onOpenBio}>
      <div 
        className={`
          relative flex flex-col items-center text-center
          bg-white rounded-xl shadow-sm border border-gray-100
          ${cardSize} p-6
          transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200
          cursor-pointer
        `}
      >
        <div className="relative mb-4">
          <div className={`absolute -inset-2 rounded-full border ${ringColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <img 
            src={imageUrl || "/logos/logo_ut.png"} 
            alt={node.data?.name}
            className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm bg-gray-50"
            onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${node.data?.name}`; }}
          />
          {hasChildren && (
            <button 
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 z-20"
            >
              {node.expanded ? <Minus size={14} /> : <Plus size={14} />}
            </button>
          )}
        </div>

        <div className="w-full space-y-1">
          <h3 className="font-bold text-gray-900 text-sm leading-tight">{node.data?.name}</h3>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${titleColor}`}>{node.data?.title}</p>
        </div>

        {node.data?.text && (
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] text-gray-300 font-bold uppercase tracking-widest">
            <Info size={12} className="inline mr-1" /> Ver Semblanza
          </div>
        )}
      </div>
    </div>
  );
};

const TreeNode = ({ node, depth = 0, onOpenBio }: { node: CustomOrgNode; depth?: number; onOpenBio: (n: CustomOrgNode) => void }) => {
  const [expanded, setExpanded] = useState(node.expanded ?? true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <NodeCard node={{...node, expanded}} depth={depth} onToggle={() => setExpanded(!expanded)} onOpenBio={() => onOpenBio(node)} />
      
      {hasChildren && expanded && (
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="flex relative">
            <div className="flex items-start justify-center gap-8 px-4">
               {node.children!.map((child, index, arr) => {
                 const isFirst = index === 0;
                 const isLast = index === arr.length - 1;
                 const isOnly = arr.length === 1;
                 return (
                   <div key={index} className="flex flex-col items-center relative">
                     {!isOnly && (
                       <>
                         <div className={`absolute top-0 right-1/2 w-[calc(100%+2rem)] h-px bg-gray-300 ${isFirst ? 'hidden' : 'block'}`}></div>
                         <div className={`absolute top-0 left-1/2 w-[calc(100%+2rem)] h-px bg-gray-300 ${isLast ? 'hidden' : 'block'}`}></div>
                       </>
                     )}
                     <div className="w-px h-12 bg-gray-300"></div>
                     <TreeNode node={child} depth={depth + 1} onOpenBio={onOpenBio} />
                   </div>
                 );
               })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function OrganigramaP() {
  const [nodes, setNodes] = useState<CustomOrgNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<CustomOrgNode | null>(null);
  const [scale, setScale] = useState(0.85);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getOrganigrama();
        setNodes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  };

  if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-[#70102b] mr-2" /> Cargando Estructura...</div>;

  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-white overflow-hidden select-none font-sans">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="absolute top-10 left-10 z-20">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-none uppercase italic border-l-4 border-[#70102b] pl-4">Organigrama Institucional</h1>
        <p className="text-[10px] font-black text-slate-300 mt-2 uppercase tracking-[0.5em] pl-5">UTTECAM</p>
      </div>

      <div className="absolute bottom-10 right-10 z-20 flex flex-col gap-2 bg-white shadow-2xl rounded-2xl p-2 border border-slate-100">
        <button onClick={() => setScale(s => Math.min(s+0.1, 2))} className="p-2 text-slate-400 hover:text-[#70102b] transition-colors"><ZoomIn size={22}/></button>
        <button onClick={() => setScale(s => Math.max(s-0.1, 0.3))} className="p-2 text-slate-400 hover:text-[#70102b] transition-colors"><ZoomOut size={22}/></button>
        <div className="h-px bg-slate-50 mx-2"></div>
        <button onClick={() => { setScale(0.85); setPosition({x:0,y:0}); }} className="p-2 text-slate-400 hover:text-[#70102b] transition-colors"><RotateCcw size={22}/></button>
      </div>

      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden" 
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp} 
        onMouseLeave={handleMouseUp}
      >
        <div style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} className="origin-top pt-32 pb-40 flex justify-center">
          <div className="flex justify-center text-center">{nodes.map((node, idx) => <TreeNode key={idx} node={node} onOpenBio={setSelectedNode} />)}</div>
        </div>
      </div>

      {selectedNode && <BioModal node={selectedNode} onClose={() => setSelectedNode(null)} />}
    </div>
  );
}
