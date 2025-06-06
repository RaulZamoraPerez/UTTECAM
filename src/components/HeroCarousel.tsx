import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={800}
        emulateTouch
        className="relative"
      >
        <div>
          <img
            src="/hero1.jpg"
            alt="Proceso de ingreso UTTECAM 2025"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="/hero2.jpg"
            alt="Beca Exención de Pago UTTECAM"
            className="w-full h-auto object-cover"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
