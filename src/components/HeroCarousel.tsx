import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useEffect, useRef } from 'react'
import { getHeroSlides, getHeroSlideFileUrl, type HeroSlide } from '../services/homeApi'

const carouselStyles = `
  .carousel .control-dots { bottom: 20px; margin: 0; z-index: 10; }
  .carousel .control-dots .dot { background: rgba(255, 255, 255, 0.4); border: 2px solid rgba(255, 255, 255, 0.8); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); width: 14px; height: 14px; margin: 0 8px; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(10px); }
  .carousel .control-dots .dot.selected { background: #D1672A; border-color: #D1672A; transform: scale(1.3); box-shadow: 0 4px 12px rgba(209, 103, 42, 0.5); }
  .carousel .control-arrow { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px); border-radius: 50%; width: 60px; height: 60px; top: 50%; transform: translateY(-50%); opacity: 0.9; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); border: 2px solid rgba(209, 103, 42, 0.3); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); }
  .carousel .control-arrow:hover { opacity: 1; background: rgba(255, 255, 255, 1); transform: translateY(-50%) scale(1.1); border-color: #D1672A; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); }
  .hero-slide { position: relative; overflow: hidden; min-height: 85vh; }
  .hero-slide img { width: 100% !important; height: 85vh !important; object-fit: cover !important; display: block !important; }
  .hero-slide video { width: 100% !important; height: 85vh !important; object-fit: cover !important; display: block !important; }
`

const HeroCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [loading, setLoading] = useState(true)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await getHeroSlides()
        // Filtrar solo slides activos y ordenarlos
        const activeSlides = data.filter(slide => slide.activo).sort((a, b) => a.orden - b.orden)
        setSlides(activeSlides)
      } catch (error) {
        console.error('Error al cargar hero slides:', error)
        // Fallback a slides por defecto si falla el API
        setSlides([])
      } finally {
        setLoading(false)
      }
    }

    fetchSlides()
  }, [])

  useEffect(() => {
    // Pausar otros videos cuando cambia el slide
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (video && parseInt(key) !== selectedIndex) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [selectedIndex])

  const handleVideoPlay = () => {
    setAutoPlay(false)
  }

  const handleVideoEnd = () => {
    setAutoPlay(true)
    setSelectedIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  // Mobile detection currently unused but can be used to show image-only variant.

  if (loading) {
    return (
      <section className="w-full bg-gradient-to-br from-[#00724E] to-[#004d35] h-96 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Cargando contenido...</p>
        </div>
      </section>
    )
  }

  if (slides.length === 0) {
    return (
      <section className="w-full bg-gray-200 h-96 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-lg">No hay contenido disponible</p>
          <p className="text-sm mt-2">Configure slides desde el panel de administración</p>
        </div>
      </section>
    )
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
          swipeScrollTolerance={50}
          preventMovementUntilSwipeScrollTolerance={true}
          className="relative"
          axis="horizontal"
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="hero-slide">
              {slide.tipo === 'imagen' ? (
                <img
                  src={getHeroSlideFileUrl(slide.archivo)}
                  alt={slide.titulo}
                  className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{
                    filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                  }}
                />
              ) : (
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  autoPlay={index === selectedIndex}
                  muted
                  playsInline
                  loop={false}
                  preload={index === 0 ? 'auto' : 'none'}
                  className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                  onPlay={handleVideoPlay}
                  onEnded={handleVideoEnd}
                  onError={(e) => {
                    console.error('Error loading video:', e)
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
                  }}
                >
                  <source src={getHeroSlideFileUrl(slide.archivo)} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 z-3"></div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  )
}

export default HeroCarousel
