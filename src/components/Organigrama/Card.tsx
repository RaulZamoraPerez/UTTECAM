import { useState } from "react";
import type { OrgNode } from "types/Program";


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
    ? node.data?.image || "./Profesores/image.png"
    : "./Profesores/image.png";

  return (
   <div
  className="relative mt-10"
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
>
      {/* Card */}
      <div className="bg-gray-50 shadow-md rounded-xl p-4 text-center w-44">
        <img
          alt={name}
          src={image}
          className="mx-auto mb-2 w-16 h-16 rounded-full border-2 border-gray-200"
        />
        <div className="font-semibold text-gray-700">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
      </div>

      {/* Tooltip mejorado */}
{showTooltip && (
  <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 
                  bg-white text-sm text-gray-800 shadow-xl rounded-xl px-4 py-3 z-20 
                  w-72 max-w-xs transition-all duration-300 border border-gray-200">
    <div className="mb-1 font-semibold text-base text-indigo-600">{name}</div>
    {title && (
      <div className="mb-2 text-sm text-gray-500 italic">
        <strong>Cargo:</strong> {title}
      </div>
    )}
    {text && (
      <div className="text-xs text-gray-600 max-h-40 overflow-y-auto whitespace-pre-line">
        {text}
      </div>
    )}
  </div>
)}


    </div>
  );
};
