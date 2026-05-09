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
    const parseData = (s: BecaSection) => {
      let parsedData = s.data || {};
      if (typeof parsedData === 'string') {
        try {
          parsedData = JSON.parse(parsedData);
        } catch (e) {
          console.error('Error parsing section data:', e);
          parsedData = {};
        }
      }
      return { ...s, data: parsedData };
    };

    if (initialSections) {
      setSections(initialSections.map(parseData));
      setLoading(false);
      return;
    }
    
    const loadSections = async () => {
      setLoading(true);
      const data = await getSectionsByModule(module);
      console.log(`Loaded ${data.length} sections for ${module}:`, data);
      setSections(data.filter(s => s.active).map(parseData));
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
    <div className="w-full">
      {sections.map((section) => {
        const sectionData = {
          ...section.data,
          title: section.data?.title || section.title
        };

        switch (section.type) {
          case "header":
            return (
              <HeaderSection
                key={section.id}
                section={sectionData}
                module={module}
              />
            );
          case "banner":
            return (
              <BannerSection
                key={section.id}
                section={sectionData}
                module={module}
              />
            );
          case "results":
            return (
              <ResultsSection
                key={section.id}
                section={sectionData}
                module={module}
              />
            );
          case "convocatoria":
            return (
              <ConvocatoriaSection
                key={section.id}
                section={sectionData}
                module={module}
              />
            );
          case "avisos":
            return (
              <AvisosSection
                key={section.id}
                section={{
                  ...sectionData,
                  items: sectionData.items || sectionData.cards || []
                }}
                module={module}
              />
            );
          case "footer":
            return (
              <FooterSection
                key={section.id}
                section={sectionData}
                module={module}
              />
            );
          case "infographics":
            return (
              <InfographicsSection
                key={section.id}
                section={{
                  ...sectionData,
                  items: sectionData.items || sectionData.cards || []
                }}
              />
            );
          case "repository":
            return (
              <RepositorySection
                key={section.id}
                section={sectionData}
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
