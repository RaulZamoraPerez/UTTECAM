import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState } from 'react'

const slidesCount = 3

const HeroCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1) // Empieza en el video (slide 2)
  const [autoPlay, setAutoPlay] = useState(false) // Sin autoplay hasta que termine el video

  const handleVideoPlay = () => {
    setAutoPlay(false)
  }

  const handleVideoEnd = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % slidesCount)
    setAutoPlay(true)
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
        {/* Slide 1 */}
        <div key="slide1">
          <img
            src="/hero1.jpg"
            alt="Proceso de ingreso UTTECAM 2025"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Slide 2 - Video */}
        <div key="slide2">
          {selectedIndex === 1 ? (
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
              <source src="/VIDEOS/UTTECAM.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          ) : (
            <img
              src="/video-poster.jpg"
              alt="Video UTTECAM"
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        {/* Slide 3 */}
        <div key="slide3">
          <img
            src="/hero2.jpg"
            alt="Beca Exención de Pago UTTECAM"
            className="w-full h-auto object-cover"
          />
        </div>
      </Carousel>
    </section>
  )
}

export default HeroCarousel
