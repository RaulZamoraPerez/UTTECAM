import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/ProgramsDetails/EducationalModels"
import EducationalPrograms from "@/components/ProgramsDetails/EducationalPrograms"
import Countdown from "@/components/Countdown"
import { FormContact } from "@/components/Form/FormContact"
import CarrucelNoticias from "@/components/CarrucelNoticias"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === "#carreras") {
      const el = document.getElementById("carreras")
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])
  return (
    <>
      <HeroCarousel />
      <Countdown />
      <EducationalModels />
      <section id="carreras">
  <EducationalPrograms />
</section>
      <CarrucelNoticias />
      <section className="w-full px-4 py-10 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <FormContact />
  </div>
</section>
    </>
  );
};


export default Home;
