import type { OrgNode } from "types/Program";

interface Props {
  node: OrgNode;
}

export const Card = ({ node }: Props) => {
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

  const image = isPerson
    ? node.data?.image || "./Profesores/image.png"
    : "./Profesores/image.png";

  return (
    <div className="relative group  mt-10" >
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

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white text-sm text-gray-700 shadow-lg rounded-md px-3 py-2 z-10 w-48">
        <div><strong>Nombre:</strong> {name}</div>
        {title && <div><strong>Cargo:</strong> {title}</div>}
      </div>
    </div>
  );
};
