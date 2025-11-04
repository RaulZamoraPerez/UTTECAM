import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useEffect } from 'react'
import { getHeroSlides, getHeroSlideFileUrl, type HeroSlide } from '../services/homeApi'

const HeroCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await getHeroSlides()
        setSlides(data)
      } catch (error) {
        console.error('Error al cargar hero slides:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSlides()
  }, [])

  const handleVideoPlay = () => {
    setAutoPlay(false)
  }

  const handleVideoEnd = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % slides.length)
    setAutoPlay(true)
  }

  if (loading) {
    return (
      <section className="w-full bg-gray-200 h-96 flex items-center justify-center">
        <p className="text-gray-600">Cargando...</p>
      </section>
    )
  }

  if (slides.length === 0) {
    return null
  }

  return (
    <section className="w-full bg-white overflow-hidden">
      <Carousel
        selectedItem={selectedIndex}
        onChange={setSelectedIndex}
        autoPlay={autoPlay}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={800}
        emulateTouch
        className="relative"
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            {slide.tipo === 'imagen' ? (
              <img
                src={getHeroSlideFileUrl(slide.archivo)}
                alt={slide.titulo}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                autoPlay
                controls
                muted
                playsInline
                preload="auto"
                className="w-full h-auto object-cover"
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnd}
              >
                <source src={getHeroSlideFileUrl(slide.archivo)} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            )}
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default HeroCarousel
