
import HeroCarousel from "@/components/HeroCarousel";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
  const [showScrollTop, setShowScrollTop] = useState(false);
  

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

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  if (isPageLoading) {
    return <LoaderSuspense />;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showVideo ? (
        <HeroCarousel showVideo /> 
      ) : (
        <HeroCarousel showVideo={false} />
      )}

      {/* es un contador */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Countdown />
      </motion.div>

      <EducationalModels />

      {/* Sección de programas educativos, con ancla para navegación directa */}
      <section id="carreras">
        <EducationalPrograms />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <CarrucelNoticias />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full px-4 py-10 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <FormContact />
        </div>
      </motion.section>

       <ModalInicial /> 

      {/* Botón Volver Arriba */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: "#D1672A" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#0A9782] text-white rounded-full shadow-2xl transition-colors duration-200 focus:outline-none flex items-center justify-center cursor-pointer"
            style={{ boxShadow: "0 4px 20px rgba(10, 151, 130, 0.4)" }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
