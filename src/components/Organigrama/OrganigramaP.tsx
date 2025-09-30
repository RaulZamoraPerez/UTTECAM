import { useEffect, useState } from "react";
import {
  OrganizationChart,
  type OrganizationChartNodeData,
} from "primereact/organizationchart";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../../organigrama.css";
import { dataOrganigrama } from "@/data/Organigrama.data";
import { Card } from "./Card";
import type { OrgNode } from "types/Program";

export default function OrganigramaP() {
  const [zoom, setZoom] = useState(() => {
    // Zoom inicial adaptativo basado en el tamaño de pantalla
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 0.4 : window.innerWidth < 1024 ? 0.5 : 0.6;
    }
    return 0.6;
  });
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
  useEffect(() => {
    const container = document.querySelector(".organigrama-scroll") as HTMLElement;
    const content = container?.firstElementChild as HTMLElement;

    if (container && content) {
      // Función para centrar el contenido
      const centerContent = () => {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const contentWidth = content.scrollWidth;
        const contentHeight = content.scrollHeight;
        
        // Centrar horizontalmente
        container.scrollLeft = Math.max(0, (contentWidth - containerWidth) / 2);
        // Centrar verticalmente
        container.scrollTop = Math.max(0, (contentHeight - containerHeight) / 2);
      };

      // Centrar después del render inicial
      setTimeout(centerContent, 150);
      
      // Recentrar cuando cambie el tamaño de ventana
      const handleResize = () => {
        setTimeout(centerContent, 100);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [zoom]);

  const nodeTemplate = (node: OrgNode) => {
    //template o card jefes
    if (node.type === "person" && node.data) {
      return <Card node={node} />;
    }

    <Card node={node} />;
  };

  return (
    <div className="organigrama-wrapper relative w-full h-full">
      {/* Controles de Zoom - Derecha Abajo */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:gap-3">
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.1, 2))}
          className="organigrama-zoom-btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          title="Acercar"
        >
          <span className="text-lg sm:text-xl font-bold leading-none">+</span>
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.1, 0.3))}
          className="organigrama-zoom-btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          title="Alejar"
        >
          <span className="text-lg sm:text-xl font-bold leading-none">−</span>
        </button>
        {/* Indicador de zoom */}
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700 text-center shadow-md">
          {Math.round(zoom * 100)}%
        </div>
      </div>

      {/* Botón de reset centrado - Solo en móviles */}
      <div className="fixed bottom-4 left-4 z-50 block sm:hidden">
        <button
          onClick={() => {
            setZoom(0.6);
            const container = document.querySelector(".organigrama-scroll") as HTMLElement;
            const content = container?.firstElementChild as HTMLElement;
            if (container && content) {
              setTimeout(() => {
                container.scrollLeft = (content.scrollWidth - container.clientWidth) / 2;
                container.scrollTop = (content.scrollHeight - container.clientHeight) / 2;
              }, 100);
            }
          }}
          className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          title="Centrar y Reset"
        >
          <span className="text-sm font-bold">⌖</span>
        </button>
      </div>

      <p className="text-gray-600 text-xl sm:text-2xl font-bold capitalize p-3 mb-3 sm:mb-5 text-center">
        Organigrama UTTECAM
      </p>

      <div className="organigrama-scroll overflow-auto w-full h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)] bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-200 rounded-lg sm:rounded-xl shadow-inner">
        <div
          className="organigrama-content origin-center inline-flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 transition-transform duration-300 ease-out min-w-max min-h-full"
          style={{ transform: `scale(${zoom})` }}
        >
          <div className="mb-6 sm:mb-8 md:mb-10">
            <img
              src="/logos/PORTADAORGANIGRAMA.jpg"
              alt="Logo del Organigrama UTTECAM"
              className="h-32 sm:h-40 md:h-52 lg:h-60 object-contain rounded-lg sm:rounded-xl shadow-xl mb-3 sm:mb-5 border-2 sm:border-4 border-white"
            />
          </div>

          <OrganizationChart
            className="capitalize"
            value={data}
            selectionMode="single"
            selection={selection}
            onSelectionChange={(e) => setSelection(e.data!)}
            nodeTemplate={nodeTemplate}
          />
        </div>
      </div>
    </div>
  );
}
