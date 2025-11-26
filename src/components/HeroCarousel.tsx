import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useEffect } from 'react'
import { getHeroSlides, getHeroSlideFileUrl, type HeroSlide } from '../services/homeApi'

const carouselStyles = `
  .carousel .control-dots { bottom: 20px; margin: 0; z-index: 10; }
  .carousel .control-dots .dot { background: rgba(255, 255, 255, 0.4); border: 2px solid rgba(255, 255, 255, 0.8); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); width: 14px; height: 14px; margin: 0 8px; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(10px); }
  .carousel .control-dots .dot.selected { background: #D1672A; border-color: #D1672A; transform: scale(1.3); box-shadow: 0 4px 12px rgba(209, 103, 42, 0.5); }
  .carousel .control-arrow { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px); border-radius: 50%; width: 60px; height: 60px; top: 50%; transform: translateY(-50%); opacity: 0.9; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); border: 2px solid rgba(209, 103, 42, 0.3); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); }
  .carousel .control-arrow:hover { opacity: 1; background: rgba(255, 255, 255, 1); transform: translateY(-50%) scale(1.1); border-color: #D1672A; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); }
  .hero-slide { position: relative; overflow: hidden; min-height: 85vh; }
  .hero-slide img { width: 100% !important; height: 85vh !important; object-fit: cover !important; display: block !important; }
`

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

  // Mobile detection currently unused but can be used to show image-only variant.

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
    <>
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
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
                className="w-full h-auto object-cover hero-slide"
              />
            ) : (
              // Video player
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
    </>
  )
}

export default HeroCarousel
