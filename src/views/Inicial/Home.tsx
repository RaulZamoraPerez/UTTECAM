import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/EducationalModels"
import EducationalPrograms from "@/components/EducationalPrograms"
import Countdown from "@/components/Countdown"
import { FormContact } from "@/components/Form/FormContact"
import CarrucelNoticias from "@/components/CarrucelNoticias"

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Countdown />
      <EducationalModels />
      <EducationalPrograms />
      <CarrucelNoticias />
      <FormContact />
    </>
  )
}

export default Home;
