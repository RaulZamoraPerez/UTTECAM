import { useState } from "react";
import type { OrgNode } from "types/Program";
import { User, Info, MoreHorizontal } from "lucide-react";

interface Props {
  node: OrgNode;
}

export const Card = ({ node }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const isPerson = node?.type === "person" && node?.data;
  const isLabelOnly = node?.label && !node?.data;

  const name = isPerson
    ? node.data?.name
    : isLabelOnly
    ? node.label?.split(" - ")[0]
    : "Sin nombre";

  const title = isPerson
    ? node.data?.title
    : isLabelOnly
    ? node.label?.split(" - ")[1] || ""
    : "";

  const text = isPerson
    ? node.data?.text || ""
    : isLabelOnly
    ? node.label?.split(" - ")[2] || ""
    : "";

  const image = isPerson
    ? node.data?.image || "/logos/logo_ut.png"
    : "/logos/logo_ut.png";

  // Hierarchy Logic for Styling
  const isRector = title?.toLowerCase().includes("rector");
  const isDirector = title?.toLowerCase().includes("director") || 
                     title?.toLowerCase().includes("abogado") || 
                     title?.toLowerCase().includes("secretario");

  // Dynamic Styles
  const cardBorder = isRector 
    ? "border-amber-200 hover:border-amber-400" 
    : isDirector 
      ? "border-emerald-100 hover:border-emerald-300" 
      : "border-gray-100 hover:border-blue-200";

  const gradientBar = isRector
    ? "from-amber-400 via-orange-400 to-amber-500"
    : isDirector
      ? "from-emerald-400 via-green-500 to-teal-500"
      : "from-blue-400 via-indigo-400 to-blue-500";

  const roleColor = isRector ? "text-amber-700" : isDirector ? "text-emerald-700" : "text-blue-700";
  const roleBg = isRector ? "bg-amber-50" : isDirector ? "bg-emerald-50" : "bg-blue-50";

  return (
    <div
      className="relative group z-10"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Main Card */}
      <div className={`
        relative bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] 
        hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] 
        transition-all duration-500 ease-out
        w-72 overflow-hidden border ${cardBorder}
        flex flex-col items-center p-6 cursor-pointer
        transform hover:-translate-y-2
      `}>
        
        {/* Top Gradient Bar */}
        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradientBar}`}></div>

        {/* Image Section */}
        <div className="relative mb-5 group-hover:scale-105 transition-transform duration-500">
          <div className={`absolute -inset-2 rounded-full ${roleBg} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`}></div>
          <img
            alt={name}
            src={image}
            className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
            }}
          />
          {isRector && (
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Rectoría">
              <User size={12} fill="currentColor" />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="text-center w-full space-y-2">
          <h3 className="text-gray-900 font-bold text-lg leading-tight line-clamp-2">
            {name}
          </h3>
          
          <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${roleBg} ${roleColor}`}>
            {title}
          </div>
        </div>

        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MoreHorizontal size={20} className="text-gray-300" />
        </div>
      </div>

      {/* Enhanced Tooltip */}
      {showTooltip && (
        <div
          className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 
                  bg-white/95 backdrop-blur-xl text-left shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] 
                  rounded-2xl p-6 z-50 w-96 border border-white/20 ring-1 ring-black/5
                  animate-in fade-in slide-in-from-top-4 duration-300 origin-top"
        >
          {/* Tooltip Header */}
          <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-100">
            <div className={`p-3 rounded-xl ${roleBg} ${roleColor}`}>
              <User size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base">{name}</h4>
              <p className={`text-xs font-bold uppercase tracking-wide mt-1 ${roleColor}`}>{title}</p>
            </div>
          </div>
          
          {/* Tooltip Body */}
          {text ? (
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100 rounded-full"></div>
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Info size={14} />
                  <span className="font-medium uppercase text-[10px] tracking-wider">Semblanza Profesional</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {text}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic text-center py-2">Información adicional no disponible</p>
          )}
        </div>
      )}
    </div>
  );
};
