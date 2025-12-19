import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState, useRef, useEffect } from 'react'
import { getHeroSlides, getVideoInstitucional, type HeroSlide, type VideoInstitucional } from '@/services/home.service'
import { envs } from '@/config/envs'

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
    width: 14px;
    height: 14px;
    margin: 0 8px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  }
  
  .carousel .control-dots .dot.selected {
    background: #D1672A;
    border-color: #D1672A;
    transform: scale(1.3);
    box-shadow: 0 4px 12px rgba(209, 103, 42, 0.5);
  }
  
  .carousel .control-arrow {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.9;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid rgba(209, 103, 42, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .carousel .control-arrow:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    border-color: #D1672A;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  .hero-slide {
    position: relative;
    overflow: hidden;
    min-height: 85vh;
  }

  .hero-slide img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
`

const HeroCarousel: React.FC<{ showVideo?: boolean }> = ({ showVideo = true }) => {
  // Detectar si es móvil (evaluación segura en entornos sin window)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  // Hooks deben llamarse siempre en el mismo orden
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [videoInstitucional, setVideoInstitucional] = useState<VideoInstitucional | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      const [slidesData, videoData] = await Promise.all([
        getHeroSlides(),
        getVideoInstitucional()
      ])
      setSlides(slidesData)
      setVideoInstitucional(videoData)
      
      // Si hay video y showVideo es true, establecer el índice inicial
      if (showVideo && videoData && slidesData.length > 0) {
         // Insertar video en la posición 1 (o donde sea apropiado)
         // Por ahora, lo manejaremos en el renderizado
         setSelectedIndex(1)
      }
    }
    fetchData()
  }, [showVideo])

  const slidesCount = slides.length + (videoInstitucional && showVideo ? 1 : 0)

  // MÓVIL: Solo imagen estática sin carousel
  if (isMobile) {
    const firstImage = slides.length > 0 ? `${envs.API_BASE_URL}/uploads/hero/${slides[0].imagenUrl}` : "/fondoinicio.png"
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
        <section className="w-full overflow-hidden">
          <div className="hero-slide">
            <img
              src={firstImage}
              alt="Universidad Tecnológica de Tecamachalco"
              className="w-full h-[85vh] object-cover"
              loading="eager"
              decoding="async"
              style={{
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-2"></div>
          </div>
        </section>
      </>
    )
  }

  const handleVideoPlay = () => {
    setAutoPlay(false)
  }

  const handleVideoEnd = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % slidesCount)
    setAutoPlay(true)
  }

  // Combinar slides y video para el renderizado
  const renderSlides = () => {
    const items = []

    // Si no hay slides, usar los hardcoded como fallback (opcional, aquí asumo que habrá slides o se mostrará vacío)
    if (slides.length === 0 && !videoInstitucional) {
        // Fallback hardcoded
        return [
             /* Slide 1 - Imagen */
            <div key="slide1" className="hero-slide">
            <img
                src="/hero1.jpg"
                alt="Proceso de ingreso UTTECAM 2025"
                className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                loading="eager"
                decoding="async"
                style={{
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-2"></div>
            </div>,

            /* Slide 2 - Video o imagen alternativa */
            <div key="slide2" className="hero-slide">
            {showVideo ? (
                <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                loop
                preload="none"
                className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnd}
                onError={(e) => {
                    console.error('Error loading video:', e);
                    setSelectedIndex(2); 
                }}
                style={{
                    background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
                }}
                >
                <source src="/VIDEOS/UTTECAM.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
                </video>
            ) : (
                <img
                src="/hero2.jpg"
                alt="Imagen alternativa"
                className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                loading="eager"
                decoding="async"
                style={{
                    filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                }}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 z-3"></div>
            </div>,

            /* Slide 3 - Imagen */
            <div key="slide3" className="hero-slide">
            <img
                src="/hero2.jpg"
                alt="Beca Exención de Pago UTTECAM"
                className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                loading="eager"
                decoding="async"
                style={{
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-2"></div>
            </div>
        ]
    }

    // Renderizar slides dinámicos
    // Estrategia: Insertar video en la posición 1 si existe, luego el resto de slides
    
    // Slide 0
    if (slides.length > 0) {
        items.push(
            <div key={`slide-${slides[0].id}`} className="hero-slide">
                <img
                    src={`${envs.API_BASE_URL}/uploads/hero/${slides[0].imagenUrl}`} // Ajustar ruta según backend
                    alt={slides[0].titulo}
                    className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                    loading="eager"
                    decoding="async"
                    style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-2"></div>
            </div>
        )
    }

    // Video (Posición 1)
    if (videoInstitucional && showVideo) {
        items.push(
            <div key="video-slide" className="hero-slide">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="none"
                    className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                    onPlay={handleVideoPlay}
                    onEnded={handleVideoEnd}
                    style={{ background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)' }}
                >
                    <source src={`${envs.API_BASE_URL}/uploads/videos/${videoInstitucional.url}`} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 z-3"></div>
            </div>
        )
    }

    // Resto de slides
    for (let i = 1; i < slides.length; i++) {
        items.push(
            <div key={`slide-${slides[i].id}`} className="hero-slide">
                <img
                    src={`${envs.API_BASE_URL}/uploads/hero/${slides[i].imagenUrl}`}
                    alt={slides[i].titulo}
                    className="w-full h-[85vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-2"></div>
            </div>
        )
    }

    return items
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      <section className="w-full overflow-hidden">
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
            {renderSlides()}
        </Carousel>
      </section>
    </>
  )
}

export default HeroCarousel