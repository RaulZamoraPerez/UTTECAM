import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useRef, useEffect, useCallback } from 'react'

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
  
  /* Flechas: ocultas por defecto en desktop, siempre visibles en móvil */
  .carousel .control-arrow {
    opacity: 0 !important;
    background: rgba(255, 255, 255, 0.12) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.22) !important;
    width: 44px !important;
    height: 44px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 18px !important;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18) !important;
    transition: opacity 0.35s ease, transform 0.3s ease, background 0.3s ease !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    pointer-events: none !important;
  }

  /* Mostrar flechas al hacer hover sobre el carousel (desktop) */
  .hero-carousel-wrapper:hover .carousel .control-arrow {
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  /* En móvil: flechas completamente ocultas (se navega con swipe) */
  @media (max-width: 767px) {
    .carousel .control-arrow {
      display: none !important;
    }
  }

  /* Icono de flecha izquierda — chevron blanco suave */
  .carousel .control-prev.control-arrow:before {
    border-right: 9px solid rgba(255,255,255,0.85) !important;
    border-top: 7px solid transparent !important;
    border-bottom: 7px solid transparent !important;
    margin: 0 3px 0 0 !important;
  }

  /* Icono de flecha derecha — chevron blanco suave */
  .carousel .control-next.control-arrow:before {
    border-left: 9px solid rgba(255,255,255,0.85) !important;
    border-top: 7px solid transparent !important;
    border-bottom: 7px solid transparent !important;
    margin: 0 0 0 3px !important;
  }

  @media (min-width: 768px) {
    .carousel .control-arrow {
      width: 52px !important;
      height: 52px !important;
    }
  }
  
  .carousel .control-arrow:hover {
    background: rgba(255, 255, 255, 0.22) !important;
    border-color: rgba(255,255,255,0.4) !important;
    transform: translateY(-50%) scale(1.08) !important;
  }

  .hero-slide {
    position: relative;
    overflow: hidden;
    height: 60vh;
    background: #000;
  }

  /* En móvil: todos los slides con la misma altura para evitar espacios vacíos en el track del carousel */
  @media (max-width: 767px) {
    .hero-slide {
      height: 80vh;
    }
    .hero-slide--mobile-tall img {
      transform: scale(1.1) !important;
    }
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

  /* Spinner del hero */
  @keyframes hero-spin {
    to { transform: rotate(360deg); }
  }
  @keyframes hero-pulse-ring {
    0%   { transform: scale(0.85); opacity: 0.6; }
    50%  { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(0.85); opacity: 0.6; }
  }
  .hero-spinner {
    width: 52px;
    height: 52px;
    position: relative;
  }
  .hero-spinner::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid rgba(255,255,255,0.15);
    animation: hero-pulse-ring 1.6s ease-in-out infinite;
  }
  .hero-spinner::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #0D9488;
    border-right-color: #D1672A;
    animation: hero-spin 0.85s linear infinite;
  }

  /* Fade-in de imagen al cargar */
  .hero-img-loaded {
    animation: heroImgFadeIn 0.55s ease forwards;
  }
  @keyframes heroImgFadeIn {
    from { opacity: 0; transform: scale(1.03); }
    to   { opacity: 1; transform: scale(1); }
  }
`

const FIRST_SLIDE_INTERVAL = 20000  // 20 s para el primer slide
const DEFAULT_INTERVAL    = 8000   // 8 s para el resto

// ---------- Componente reutilizable: imagen con spinner ----------
interface SlideImageProps {
  src: string
  alt: string
  objectFit?: 'cover' | 'contain'
  bgColor?: string
  style?: React.CSSProperties
  priority?: boolean
}

const SlideImage: React.FC<SlideImageProps> = ({
  src,
  alt,
  objectFit = 'cover',
  bgColor = '#0a0a0a',
  style,
  priority = false,
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="w-full h-full relative flex items-center justify-center"
      style={{ background: bgColor }}
    >
      {/* Spinner visible mientras no carga */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
          <div className="hero-spinner" />
          <span style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            fontFamily: 'Inter, sans-serif',
          }}>
            Cargando…
          </span>
        </div>
      )}

      {/* Imagen: invisible hasta cargar, luego fade-in */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        {...(priority ? { fetchPriority: 'high' as any } : {})}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full transition-transform duration-700 hover:scale-105 ${
          loaded ? 'hero-img-loaded' : 'opacity-0'
        }`}
        style={{ objectFit, ...style }}
      />
    </div>
  )
}
// ----------------------------------------------------------------

const HeroCarousel: React.FC<{ showVideo?: boolean }> = ({ showVideo = true }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoPlayInterval, setAutoPlayInterval] = useState(FIRST_SLIDE_INTERVAL)
  const videoRef = useRef<HTMLVideoElement>(null)
  const VIDEO_SLIDE = 4

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Preload / cache de imágenes mediante JS
    const imagesToPreload = [
      "/hero/PORTADA WEB UTTECAM - responsive.jpeg",
      "/hero/PORTADA FACEBOOK UTTECAM_2026.jpeg",
      "/hero/responsive 2.png",
      "/hero/discriminacion-slide.jpg",
      "/hero/buzon de quejas y sugerencias .jpeg",
      "/hero/image.png",
      "/hero/hero1.jpg",
      "/hero/hero2.jpg",
      "/noticias/_ADMISIÓN UTTECAM CONVOCATORIA_2026.jpg.jpeg"
    ]

    // Inyectar <link rel="preload"> para el primer slide (cache nativo del navegador)
    const existingPreload = document.querySelector('link[data-hero-preload]')
    if (!existingPreload) {
      const preloadLink = document.createElement('link')
      preloadLink.rel = 'preload'
      preloadLink.as = 'image'
      preloadLink.href = '/hero/PORTADA FACEBOOK UTTECAM_2026.jpeg'
      preloadLink.setAttribute('data-hero-preload', 'true')
      document.head.appendChild(preloadLink)
    }

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })

    return () => window.removeEventListener('resize', checkMobile)
  }, [showVideo])

  // Reproducir/pausar video cuando cambia el slide
  useEffect(() => {
    const video = videoRef.current
    if (!video || isMobile || !showVideo) return
    if (selectedIndex === VIDEO_SLIDE) {
      // El video ya está en el DOM y precargado — solo reproducirlo
      video.currentTime = 0
      video.play().catch(() => { /* autoplay bloqueado por el navegador */ })
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [selectedIndex, isMobile, showVideo])

  // Ajustar el intervalo según el slide activo
  const handleChange = useCallback((index: number) => {
    setSelectedIndex(index)
    setAutoPlayInterval(index === 0 ? FIRST_SLIDE_INTERVAL : DEFAULT_INTERVAL)
  }, [])

  const handleVideoEnd = () => {
    setSelectedIndex(0)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      {/* Wrapper con clase para el hover de flechas */}
      <section className="w-full overflow-hidden bg-black hero-carousel-wrapper">
        <Carousel
          selectedItem={selectedIndex}
          onChange={handleChange}
          autoPlay={isMobile ? true : selectedIndex !== 4}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={autoPlayInterval}
          transitionTime={800}
          emulateTouch
          swipeScrollTolerance={50}
          preventMovementUntilSwipeScrollTolerance={true}
          className="relative"
          axis="horizontal"
        >
          {/* Slide 0 - Portada principal (responsive en móvil) */}
          <div key="slide_portada_2026" className={`hero-slide${isMobile ? ' hero-slide--mobile-tall' : ''}`}>
            <SlideImage
              src={isMobile ? "/hero/PORTADA WEB UTTECAM - responsive.jpeg" : "/hero/PORTADA FACEBOOK UTTECAM_2026.jpeg"}
              alt="Portada UTTECAM 2026"
              objectFit="contain"
              bgColor="#0D312D"
              priority
            />
          </div>

          {/* Slide 1 - Discriminación */}
          <div key="slide_discriminacion" className="hero-slide cursor-pointer">
            <a
              href="https://www.facebook.com/share/p/1Dzmx6iuga/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <SlideImage
                src={isMobile ? "/hero/responsive 2.png" : "/hero/discriminacion-slide.jpg"}
                alt="Campaña No a la Discriminación"
                objectFit="contain"
                bgColor="#5F1A2C"
                priority
              />
            </a>
          </div>

          {/* Slide 2 - Buzón de Quejas */}
          <div key="slide_buzon" className="hero-slide cursor-pointer">
            <a
              href="https://www.facebook.com/share/p/18WtqPpU4n/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <SlideImage
                src={isMobile ? "/hero/buzon de quejas y sugerencias .jpeg" : "/hero/image.png"}
                alt="Buzón de quejas y sugerencias"
                objectFit="contain"
                bgColor="#5F1A2C"
              />
            </a>
          </div>

          {/* Slide 3 - Hero 1 */}
          <div key="slide2" className="hero-slide">
            <SlideImage
              src="/hero/hero1.jpg"
              alt="Proceso de ingreso UTTECAM 2025"
              objectFit="cover"
              bgColor="#0a0a0a"
              style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-2 pointer-events-none" />
          </div>

          {/* Slide 4 - Video (Solo Desktop) / Hero 2 en móvil */}
          <div key="slide3" className="hero-slide">
            {/* Video: siempre en DOM en desktop para precargar — se muestra u oculta con CSS */}
            {!isMobile && showVideo && (
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                loop={false}
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
                style={{
                  display: selectedIndex === VIDEO_SLIDE ? 'block' : 'none',
                  background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
                }}
              >
                <source src="/hero/UTTECAM.mp4" type="video/mp4" />
              </video>
            )}
            {/* Imagen de fallback: móvil siempre, desktop cuando no es el slide activo */}
            {(isMobile || !showVideo || selectedIndex !== VIDEO_SLIDE) && (
              <SlideImage
                src="/hero/hero2.jpg"
                alt="Instalaciones UTTECAM"
                objectFit="cover"
                bgColor="#0a0a0a"
                style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 z-3 pointer-events-none" />
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default HeroCarousel