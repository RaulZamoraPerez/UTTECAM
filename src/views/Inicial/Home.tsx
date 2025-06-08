// Importación de componentes necesarios
import HeroCarousel from "@/components/HeroCarousel"
import EducationalModels from "@/components/ProgramsDetails/EducationalModels"
import EducationalPrograms from "@/components/ProgramsDetails/EducationalPrograms"
import Countdown from "@/components/Countdown"
import { FormContact } from "@/components/Form/FormContact"
import CarrucelNoticias from "@/components/CarrucelNoticias" // <- Revisa si debería ser "CarruselNoticias"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
  const location = useLocation()

  // Efecto que detecta si hay un hash en la URL y hace scroll a esa sección
  useEffect(() => {
    if (location.hash === "#carreras") {
      // Pequeño retraso para asegurar que el DOM esté cargado
      setTimeout(() => {
        const el = document.getElementById("carreras")
        if (el) {
          el.scrollIntoView({ behavior: "smooth" }) // Scroll suave
        }
      }, 100)
    }
  }, [location])

  return (
    <>
      {/* Carrusel principal de la página */}
      <HeroCarousel />

      {/* Contador regresivo para algún evento importante */}
      <Countdown />

      {/* Sección de modelos educativos */}
      <EducationalModels />

      {/* Sección de programas educativos, con ancla para navegación directa */}
      <section id="carreras">
        <EducationalPrograms />
      </section>

      {/* Carrusel de noticias relevantes */}
      <CarrucelNoticias />

      {/* Formulario de contacto */}
      <FormContact />
    </>
  )
}

export default Home
