import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/ProgramsDetails/EducationalModels"
import EducationalPrograms from "@/components/ProgramsDetails/EducationalPrograms"
import Countdown from "@/components/Countdown"
import { FormContact } from "@/components/Form/FormContact"
import CarrucelNoticias from "@/components/CarrucelNoticias"

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Countdown />
      <EducationalModels />
      <FormContact />
      <EducationalPrograms />
      <CarrucelNoticias />
    </>
  )
}

export default Home;
