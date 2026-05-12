
import HeroCarousel from "@/components/HeroCarousel";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import EducationalModels from "@/components/ProgramsDetails/EducationalModels";
import EducationalPrograms from "@/components/ProgramsDetails/EducationalPrograms";
import Countdown from "@/components/Countdown";
import { FormContact } from "@/components/Form/FormContact";
import CarrucelNoticias from "@/components/CarrucelNoticias";
import ModalInicial from "@/components/Modal/ModalInicial";
import LoaderSuspense from "@/components/Loader/LoaderSuspense";



const Home = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const loadingTime = isMobile ? 800 : 600; 
    const timer = setTimeout(() => {
     

      setIsPageLoading(false);
      setShowVideo(true); 
    }, loadingTime);

    if (location.hash === "#carreras") {
      setTimeout(() => {
        const el = document.getElementById("carreras");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [location]);

  if (isPageLoading) {
    return <LoaderSuspense />;
  }

  return (
    <>
      {showVideo ? (
        <HeroCarousel showVideo /> 
      ) : (
        <HeroCarousel showVideo={false} />
      )}

      {/* es un contador */}
      <Countdown />

      <EducationalModels />

      {/* Sección de programas educativos, con ancla para navegación directa */}
      <section id="carreras">
        <EducationalPrograms />
      </section>

      <CarrucelNoticias />

      <section className="w-full px-4 py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <FormContact />
        </div>
      </section>

       <ModalInicial /> 
    </>
  );
};

export default Home;
