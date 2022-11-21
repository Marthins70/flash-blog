import { CarouselButton } from './components/CarouselButton'
import Slider from 'react-slick'

export function MainCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings}>
            <div className='relative flex justify-center items-center'>
                <img src="/images/bg-hero-banner-06.jpg" className='w-full brightness-50' />
                <div className='w-full z-10 absolute inset-y-1/3 flex flex-col items-center gap-y-4'>
                    <h3 className='text-8xl text-white font-bold'>First slide label</h3>
                    <p className='text-2xl text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <CarouselButton href="/">read now</CarouselButton>
                </div>
            </div>
            <div className='relative flex justify-center items-center'>
                <img src="/images/bg-hero-banner-06.jpg" className='w-full brightness-50' />
                <div className='w-full z-10 absolute inset-y-1/3 flex flex-col items-center gap-y-4'>
                    <h3 className='text-8xl text-white font-bold'>Second slide label</h3>
                    <p className='text-2xl text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <CarouselButton href="/">read now</CarouselButton>
                </div>
            </div>
        </Slider>
    )
}