import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/EducationalModels"
import EducationalPrograms from "@/components/EducationalPrograms"
import Countdown from "@/components/Countdown"
import CarrucelNoticias from "@/components/CarrucelNoticias"

const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <Countdown/>
      <EducationalModels />
      <EducationalPrograms />
      <CarrucelNoticias/>
    </>
  )
}

export default Home;
