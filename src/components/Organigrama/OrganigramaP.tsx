import { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, Minus, Plus, Info } from "lucide-react";
import { getOrganigrama } from "@/services/organigramaService";
import type { OrganigramaNode } from "@/types/organigrama";
import { Spinner } from "@/components/Spinner";

// --- Components ---

const NodeCard = ({ node, depth, onToggle }: { node: OrganigramaNode; depth: number; onToggle: () => void }) => {
  const hasChildren = node.children && node.children.length > 0;
  const [showInfo, setShowInfo] = useState(false);
  
  // Strict White Minimalist Styling
  // Depth 0 (Rector): Larger, maybe a subtle border.
  // Depth > 0: Standard size.
  
  const isRoot = depth === 0;
  const cardSize = isRoot ? "w-80" : "w-64";
  const titleColor = isRoot ? "text-amber-600" : "text-slate-500";
  const ringColor = isRoot ? "border-amber-100" : "border-slate-100";

  return (
    <div 
      className="relative z-10 p-4 group hover:z-[100]"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div 
        className={`
          relative flex flex-col items-center text-center
          bg-white rounded-xl shadow-sm border border-gray-100
          ${cardSize} p-6
          transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200
          cursor-default
        `}
      >
        {/* Image & Status */}
        <div className="relative mb-4">
          <div className={`absolute -inset-2 rounded-full border ${ringColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <img 
            src={node.data?.image || "/logos/logo_ut.png"} 
            alt={node.data?.name}
            className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm bg-gray-50"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${node.data?.name}&background=random&color=fff`;
            }}
          />
          {/* Expand/Collapse Toggle */}
          {hasChildren && (
            <button 
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer z-20"
            >
              {node.expanded ? <Minus size={14} /> : <Plus size={14} />}
            </button>
          )}
        </div>

        {/* Text Content */}
        <div className="w-full space-y-1">
          <h3 className="font-bold text-gray-900 text-sm leading-tight">
            {node.data?.name}
          </h3>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${titleColor}`}>
            {node.data?.title}
          </p>
        </div>

        {/* Info Indicator (Visual Hint) */}
        {node.data?.text && (
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
              <Info size={12} />
              <span>Ver Semblanza</span>
            </div>
          </div>
        )}
      </div>

      {/* HOVER TOOLTIP / INFO CARD */}
      {/* Positioned absolutely relative to the card wrapper, but with high Z-index */}
      {showInfo && node.data?.text && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
          
          <div className="relative z-10">
            <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
              <Info size={14} className="text-blue-500" />
              Semblanza
            </h4>
            <div className="max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              <p className="text-xs text-gray-500 text-justify leading-relaxed">
                {node.data?.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TreeNode = ({ node, depth = 0 }: { node: OrganigramaNode; depth?: number }) => {
  const [expanded, setExpanded] = useState(node.expanded ?? true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <NodeCard node={{...node, expanded}} depth={depth} onToggle={() => setExpanded(!expanded)} />
      
      {hasChildren && expanded && (
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-300">
          {/* Vertical Line Down */}
          <div className="w-px h-12 bg-gray-300"></div>
          
          {/* Children Container */}
          <div className="flex relative">
            {/* Horizontal Connector Logic */}
            {node.children!.length > 1 && (
              <>
                {/* Left Half Line */}
                <div className="absolute top-0 left-0 w-1/2 h-px bg-gray-300 translate-y-px"></div> 
                {/* Right Half Line */}
                <div className="absolute top-0 right-0 w-1/2 h-px bg-gray-300 translate-y-px"></div>
                
                {/* Masking the center for the first and last child to create the "bracket" shape properly? 
                    Actually, a simpler way for perfect trees:
                    Each child has a top vertical line.
                    A horizontal line spans from the center of the first child to the center of the last child.
                */}
                 <div className="absolute top-0 left-[calc(50%/var(--child-count))] right-[calc(50%/var(--child-count))] h-px bg-gray-300 hidden"></div>
              </>
            )}

            {/* Render Children with Connectors */}
            <div className="flex items-start justify-center gap-8 px-4">
               {/* We use a wrapper for the horizontal line segment */}
               {node.children!.map((child, index, arr) => {
                 const isFirst = index === 0;
                 const isLast = index === arr.length - 1;
                 const isOnly = arr.length === 1;
                 
                 return (
                   <div key={index} className="flex flex-col items-center relative">
                     {/* Horizontal Lines for this child */}
                     {!isOnly && (
                       <>
                         {/* Line to Left (if not first) */}
                         <div className={`absolute top-0 right-1/2 w-[calc(100%+2rem)] h-px bg-gray-300 ${isFirst ? 'hidden' : 'block'}`}></div>
                         {/* Line to Right (if not last) */}
                         <div className={`absolute top-0 left-1/2 w-[calc(100%+2rem)] h-px bg-gray-300 ${isLast ? 'hidden' : 'block'}`}></div>
                       </>
                     )}
                     
                     {/* Vertical Line to Node */}
                     <div className="w-px h-12 bg-gray-300"></div>
                     
                     <TreeNode node={child} depth={depth + 1} />
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
  const [data, setData] = useState<OrganigramaNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Implement SWR (Stale-While-Revalidate) strategy with LocalStorage
    const CACHE_KEY = 'organigrama_cache';
    let isMounted = true;

    const loadData = async () => {
      // 1. Try to load from cache first for instant render
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        try {
          const { data } = JSON.parse(cachedRaw);
          // If valid data, show it immediately
          if (data && Array.isArray(data)) {
             if(isMounted) {
               setData(data);
               setLoading(false); 
             }
             // Optional: If cache is very fresh (< 1 min), maybe skip fetch? 
             // unique request: "no hacer muchas llamadas ... pero si hay cambios detecte"
             // SWR is the best answer: Show cache, then check server.
          }
        } catch (e) {
          console.error("Cache parse error", e);
        }
      }

      // 2. Fetch fresh data from API
      try {
        const freshData = await getOrganigrama();
        
        if (!isMounted) return;

        // Save to cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: freshData,
          timestamp: Date.now()
        }));

        // We could optimize by comparing 'freshData' with 'data' state before setting
        // But React likely handles setting same object ref nicely, 
        // passing a new object (even if identical content) might trigger re-render.
        // A simple JSON string comparison can avoid unnecessary state update if identical.
        if (cachedRaw) {
           const cachedData = JSON.parse(cachedRaw).data;
           if (JSON.stringify(freshData) === JSON.stringify(cachedData)) {
              // Data is strictly the same, no need to update state
              if(isMounted) setLoading(false); 
              return;
           }
        }

        setData(freshData);
        setLoading(false);

      } catch (err) {
        console.error(err);
        if(isMounted) {
           setError("Error cargando organigrama");
           setLoading(false);
        }
      }
    };

    loadData();

    return () => { isMounted = false; };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  };

  const resetView = () => {
    setScale(0.8);
    setPosition({ x: 0, y: 0 });
  };

  if (loading) return <div className="h-screen flex items-center justify-center"><Spinner text="Cargando organigrama..." /></div>;
  if (error) return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-white overflow-hidden select-none font-sans">
      {/* Pure White Background with Very Subtle Grid */}
      <div className="absolute inset-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#f1f5f9 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      {/* Minimalist Title */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Estructura Organizacional</h1>
        <p className="text-sm text-gray-400 mt-1">Universidad Tecnológica de Tecamachalco</p>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2 bg-white shadow-lg shadow-gray-100 rounded-xl p-2 border border-gray-100">
        <button onClick={() => setScale(s => Math.min(s + 0.1, 2))} className="p-2 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors">
          <ZoomIn size={20} />
        </button>
        <button onClick={() => setScale(s => Math.max(s - 0.1, 0.3))} className="p-2 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors">
          <ZoomOut size={20} />
        </button>
        <div className="h-px bg-gray-100 my-1"></div>
        <button onClick={resetView} className="p-2 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors">
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Canvas */}
      <div 
        ref={containerRef}
        className="w-full h-full cursor-grab flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="origin-top pt-32 pb-40"
        >
          {/* Root */}
          <div className="flex justify-center">
            {data.map((node, idx) => (
              <TreeNode key={idx} node={node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
