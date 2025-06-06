import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/EducationalModels"
import EducationalPrograms from "@/components/EducationalPrograms"
import Countdown from "@/components/Countdown"
import { FormContact } from "@/components/Form/FormContact"


const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <Countdown/>
      <EducationalModels />
      <FormContact/>
      <EducationalPrograms />
    </>
  )
}

export default Home;
