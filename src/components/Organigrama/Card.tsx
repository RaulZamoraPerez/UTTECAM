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
      className="relative mt-4"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Card */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white rounded-xl p-5 w-52 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-lg">
        <img
          alt={name}
          src={image}
          className="mx-auto mb-4 w-24 h-28 rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        <div className="text-sm font-bold text-gray-900 capitalize leading-tight mb-1">
          {name}
        </div>
        <div className="text-xs font-medium text-gray-700 tracking-wide capitalize bg-gray-100 px-3 py-1 rounded-full">
          {title?.toLowerCase()}
        </div>
      </div>

      {showTooltip && (
        <div
          className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 
                  bg-white text-sm shadow-xl rounded-xl px-4 py-3 z-20 
                  w-72 max-w-xs transition-all duration-300"
        >
          <div className="mb-1 font-bold text-sm text-gray-900 capitalize leading-tight">
            {name}
          </div>
          {title && (
            <div className="mb-2 text-xs font-medium text-gray-700 tracking-wide capitalize">
              <strong>Cargo:</strong>{" "}
              <span className="capitalize">{title.toLowerCase()}</span>
            </div>
          )}
          {text && (
            <div className="text-xs text-gray-600 max-h-40 overflow-y-auto whitespace-pre-line capitalize">
              {text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
