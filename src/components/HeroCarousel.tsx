import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useRef, useEffect } from 'react'

// Estilos personalizados para el carousel
const carouselStyles = `
  .carousel .control-dots {
    bottom: 30px;
    margin: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  
  .carousel .control-dots .dot {
    background: #fff !important;
    opacity: 0.5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4) !important;
    width: 14px !important;
    height: 14px !important;
    margin: 0 !important;
    transition: all 0.3s ease;
    border: none !important;
    cursor: pointer !important;
  }
  
  .carousel .control-dots .dot.selected {
    background: #D1672A !important;
    opacity: 1;
    transform: scale(1.3);
    box-shadow: 0 0 15px rgba(209, 103, 42, 0.6) !important;
  }
  
  /* Flechas más visibles */
  .carousel .control-arrow {
    opacity: 1 !important;
    background: rgba(255, 255, 255, 0.9) !important;
    width: 45px !important;
    height: 45px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 15px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
    transition: all 0.3s ease !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }

  /* Flecha izquierda específica */
  .carousel .control-prev.control-arrow:before {
    border-right: 12px solid #D1672A !important;
    margin: 0 4px 0 0 !important;
  }

  /* Flecha derecha específica */
  .carousel .control-next.control-arrow:before {
    border-left: 12px solid #D1672A !important;
    margin: 0 0 0 4px !important;
  }

  @media (min-width: 768px) {
    .carousel .control-arrow {
      width: 60px !important;
      height: 60px !important;
    }
  }
  
  .carousel .control-arrow:hover {
    background: #fff !important;
    transform: translateY(-50%) scale(1.1) !important;
  }

  .hero-slide {
    position: relative;
    overflow: hidden;
    height: 60vh;
    background: #000;
  }

  @media (min-width: 768px) {
    .hero-slide {
      height: 85vh;
    }
  }

  .hero-slide img {
    width: 100%;
    height: 100%;
    display: block;
  }
`

const HeroCarousel: React.FC<{ showVideo?: boolean }> = ({ showVideo = true }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Preload images for 'caching'
    const imagesToPreload = [
      "/hero/Discriminación_pages-to-jpg-0001.jpg",
      "/hero/buzon de quejas y sugerencias .jpeg",
      "/hero/image.png",
      "/hero/hero1.jpg",
      "/hero/hero2.jpg",
      "/noticias/_ADMISIÓN UTTECAM CONVOCATORIA_2026.jpg.jpeg"
    ]

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Preload video
    if (window.innerWidth > 768 && showVideo) {
      const video = document.createElement('video')
      video.src = "/hero/UTTECAM.mp4"
      video.preload = "auto"
      video.oncanplaythrough = () => {
        setIsVideoReady(true)
      }
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [showVideo])

  const handleVideoPlay = () => {
    setAutoPlay(false)
  }

  const handleVideoEnd = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % 4)
    setAutoPlay(true)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      <section className="w-full overflow-hidden bg-black">
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
          

          

          {/* Slide 1 - Discriminación */}
          <div key="slide_discriminacion" className="hero-slide cursor-pointer">
            <a 
              href="https://www.facebook.com/share/p/1Dzmx6iuga/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full bg-[#5F1A2C]" // Color guinda exacto solicitado
            >
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                <img
                  src="/hero/Discriminación_pages-to-jpg-0001.jpg"
                  alt="Campaña No a la Discriminación"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </a>
          </div>

          {/* Slide 2 - Buzón de Quejas */}
          <div key="slide_buzon" className="hero-slide cursor-pointer">
            <a 
              href="https://www.facebook.com/share/p/18WtqPpU4n/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full bg-[#5F1A2C]" // Fondo guinda igual al primer slide
            >
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                <img
                  src={isMobile ? "/hero/buzon de quejas y sugerencias .jpeg" : "/hero/image.png"}
                  alt="Buzón de quejas y sugerencias"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </a>
          </div>

          {/* Slide 3 - Hero 1 */}
          <div key="slide2" className="hero-slide">
            <img
              src="/hero/hero1.jpg"
              alt="Proceso de ingreso UTTECAM 2025"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              style={{
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-2"></div>
          </div>

          {/* Slide 4 - Video (Solo Desktop y si está listo) o Imagen (Móvil/Cargando) */}
          <div key="slide3" className="hero-slide">
            {!isMobile && showVideo && selectedIndex === 3 && isVideoReady ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover animate-fadeIn"
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnd}
                style={{
                  background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
                }}
              >
                <source src="/hero/UTTECAM.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            ) : (
              <img
                src="/hero/hero2.jpg"
                alt="Instalaciones UTTECAM"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                style={{
                  filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 z-3"></div>
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default HeroCarousel