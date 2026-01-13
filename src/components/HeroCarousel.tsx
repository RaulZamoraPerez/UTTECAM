import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useRef, useEffect } from 'react'

// Estilos personalizados para el carousel
const carouselStyles = `
  .carousel .control-dots {
    bottom: 20px;
    margin: 0;
    z-index: 10;
  }
  
  .carousel .control-dots .dot {
    background: rgba(255, 255, 255, 0.4);
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    width: 12px;
    height: 12px;
    margin: 0 6px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  }
  
  .carousel .control-dots .dot.selected {
    background: #D1672A;
    border-color: #D1672A;
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(209, 103, 42, 0.5);
  }
  
  .carousel .control-arrow {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.8;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(209, 103, 42, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: none;
  }

  @media (min-width: 768px) {
    .carousel .control-arrow {
      display: block;
      width: 60px;
      height: 60px;
    }
  }
  
  .carousel .control-arrow:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    border-color: #D1672A;
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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
          {/* Slide 1 - Nueva Portada (Flyer 2026) */}
          <div key="slide0" className="hero-slide bg-black">
            <img
              src="/hero/FB.png"
              alt="¡Sigamos Adelante! 2026"
              className="w-full h-full object-contain object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{
                filter: 'contrast(1.1) brightness(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-2"></div>
          </div>

          {/* Slide 2 - Navidad UTTECAM */}
          <div key="slide1" className="hero-slide">
            <img
              src={isMobile ? "/hero/uttecamNavidad-responsive.png" : "/hero/uttecamNavidad.png"}
              alt="Navidad en UTTECAM"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              style={{
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-2"></div>
          </div>

          {/* Slide 3 - Hero 1 */}
          <div key="slide2" className="hero-slide">
            <img
              src="/hero/hero1.jpg"
              alt="Proceso de ingreso UTTECAM 2025"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              style={{
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-2"></div>
          </div>

          {/* Slide 4 - Video (Solo Desktop) o Imagen (Móvil) */}
          <div key="slide3" className="hero-slide">
            {!isMobile && showVideo && selectedIndex === 3 ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
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
                loading="lazy"
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