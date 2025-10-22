// Importación de componentes necesarios
import HeroCarousel from "@/components/HeroCarousel";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// IMPORTS DIRECTOS para carga rápida (sin lazy loading)
import EducationalModels from "@/components/ProgramsDetails/EducationalModels";
import EducationalPrograms from "@/components/ProgramsDetails/EducationalPrograms";
import Countdown from "@/components/Countdown";
import { FormContact } from "@/components/Form/FormContact";
import CarrucelNoticias from "@/components/CarrucelNoticias";

// Loader para la página completa
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white px-4 sm:px-6 text-center">
    <img
      src="/logo.png"
      alt="UTTECAM Logo"
      className="w-24 sm:w-28 h-auto mb-8 sm:mb-10 drop-shadow-md"
    />
    <h1 className="text-2xl sm:text-3xl font-semibold text-[#00724E] mb-4 sm:mb-6">
      Cargando página principal
    </h1>
    <div className="flex items-center justify-center space-x-2">
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F15A22] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#00724E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F15A22] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
    <p className="mt-10 sm:mt-12 text-gray-500 text-xs sm:text-sm uppercase tracking-wider font-medium">
      Universidad Tecnológica de Tecamachalco
    </p>
  </div>
);


const Home = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsPageLoading(false);
    setShowVideo(!isMobile); // Siempre muestra el video en escritorio

    if (location.hash === "#carreras") {
      setTimeout(() => {
        const el = document.getElementById("carreras");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  if (isPageLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {/* Carrusel principal de la página - Carga inmediata */}
      {showVideo ? (
        <HeroCarousel showVideo />
      ) : (
        <HeroCarousel showVideo={false} />
      )}

      {/* Componentes cargados directamente - Sin lazy loading */}
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

      {/* <ModalInicial /> */}
    </>
  );
};

export default Home;
