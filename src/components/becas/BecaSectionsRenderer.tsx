import { useEffect, useState } from "react";
import { getSectionsByModule, BecaSection } from "../../services/becas.service";
import HeaderSection from "./sections/HeaderSection";
import BannerSection from "./sections/BannerSection";
import ResultsSection from "./sections/ResultsSection";
import ConvocatoriaSection from "./sections/ConvocatoriaSection";
import AvisosSection from "./sections/AvisosSection";
import FooterSection from "./sections/FooterSection";
import InfographicsSection from "./sections/InfographicsSection";
import RepositorySection from "./sections/RepositorySection";

interface Props {
  module: "becas" | "estadia";
  initialSections?: BecaSection[];
}

export const BecaSectionsRenderer = ({ module, initialSections }: Props) => {
  const [sections, setSections] = useState<BecaSection[]>(initialSections || []);
  const [loading, setLoading] = useState(!initialSections);

  useEffect(() => {
    if (initialSections) return; // Si ya vienen por props, no buscamos de nuevo
    
    const loadSections = async () => {
      setLoading(true);
      const data = await getSectionsByModule(module);
      console.log(`Loaded ${data.length} sections for ${module}:`, data);
      setSections(data.filter(s => s.active));
      setLoading(false);
    };
    loadSections();
  }, [module, initialSections]);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0a9782]"></div>
      </div>
    );
  }

  if (sections.length === 0) return null;

  return (
    <div className="w-full space-y-12">
      {sections.map((section) => {
        switch (section.type) {
          case "header":
            return (
              <HeaderSection
                key={section.id}
                section={{
                  ...section.data,
                  title: section.data.title || section.title
                }}
                module={module}
              />
            );
          case "banner":
            return (
              <BannerSection
                key={section.id}
                section={{
                  ...section.data,
                  title: section.data.title || section.title
                }}
                module={module}
              />
            );
          case "results":
            return (
              <ResultsSection
                key={section.id}
                section={{
                  ...section.data,
                  title: section.data.title || section.title
                }}
                module={module}
              />
            );
          case "convocatoria":
            return (
              <ConvocatoriaSection
                key={section.id}
                section={{
                  ...section.data,
                  title: section.data.title || section.title
                }}
                module={module}
              />
            );
          case "avisos":
            return (
              <AvisosSection
                key={section.id}
                section={section.data}
                module={module}
              />
            );
          case "footer":
            return (
              <FooterSection
                key={section.id}
                section={section.data}
                module={module}
              />
            );
          case "infographics":
            return (
              <InfographicsSection
                key={section.id}
                section={{
                  ...section.data,
                  title: section.data.title || section.title
                }}
              />
            );
          case "repository":
            return (
              <RepositorySection
                key={section.id}
                section={{
                  ...section.data,
                  title: section.data.title || section.title
                }}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BecaSectionsRenderer;
