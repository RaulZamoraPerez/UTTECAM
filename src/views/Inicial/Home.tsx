import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/EducationalModels"
import EducationalPrograms from "@/components/EducationalPrograms"
import Countdown from "@/components/Countdown"

const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <Countdown/>
      <EducationalModels />
      <EducationalPrograms />
    </>
  )
}

export default Home;
