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
      <FormContact />
    </>
  );
};


export default Home;
