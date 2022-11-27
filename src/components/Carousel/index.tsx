import { CarouselButton } from './components/CarouselButton'
import Slider from 'react-slick'
import { CarouselSlide } from './components/CarouselSlide';

interface MainCarouselProps {
    slides: CarouselSlide[];
}

export function MainCarousel({ slides }: MainCarouselProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <Slider {...settings}>
            {slides.map(slide => (
                <CarouselSlide slide={slide} key={slide.title} />
            ))}
        </Slider>
    )
}