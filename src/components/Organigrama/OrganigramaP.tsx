import { useEffect, useState } from "react";
import {
  OrganizationChart,
  type OrganizationChartNodeData,
} from "primereact/organizationchart";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { dataOrganigrama } from "../../data/Organigrama";
import { Card } from "./Card";
import type { OrgNode } from "types/Program";

export default function OrganigramaP() {


 
  const [zoom, setZoom] = useState(0.6);
useEffect(() => {

  const container = document.querySelector(".organigrama-wrapper");

  if (!container) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          target.classList.add("line-visible");
        } else {
          target.classList.remove("line-visible");
        }
      });
    },
    {
      root: container,
      threshold: 0.01,
    }
  );

  // Seleccionamos solo las celdas que son líneas
  const lines = container.querySelectorAll(
    "td[class*='p-organizationchart-line']"
  );

  lines.forEach((line) => observer.observe(line));

  return () => {
    lines.forEach((line) => observer.unobserve(line));
  };
}, [zoom]);

  const [selection, setSelection] = useState<
    OrganizationChartNodeData | OrganizationChartNodeData[] | null
  >(null);



  const [data] = useState(dataOrganigrama);

  const nodeTemplate = (node: OrgNode) => {
    //template o card jefes
    if (node.type === "person" && node.data) {
      return <Card node={node} />;
    }

    <Card node={node} />;
  };

  return (
    <div className="organigrama-wrapper relative w-full h-full">
      <div className="fixed right-4 bottom-0 z-50 flex flex-col gap-2 transform -translate-y-1/2">
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.1, 2))}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full w-10 h-10  shadow-md"
          title="Zoom +"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.1, 0.3))}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md w-10 h-10"
          title="Zoom -"
        >
          −
        </button>
      </div>

      <p className="text-gray-500 text-2xl font-bold capitalize p-3  mb-5 text-center">
        Organigrama{" "}
      </p>

      <div className="overflow-auto max-w-max mx-auto    max-h-screen p-4  mb-10  bg-white  border border-gray-300">
        <div
          className="organigrama-wrapper origin-top-center inline-flex justify-center mt-10 transition-transform duration-300"
          style={{ transform: `scale(${zoom})` }}
        >
          <div className="flex justify-center items-center gap-4 mb-4  "></div>

          <OrganizationChart
            value={data}
            selectionMode="multiple"
            selection={selection}
            onSelectionChange={(e) => setSelection(e.data!)}
            nodeTemplate={nodeTemplate}
          />
        </div>
      </div>
    </div>
  );
}
