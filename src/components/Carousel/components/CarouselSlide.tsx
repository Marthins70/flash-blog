import { CarouselButton } from "./CarouselButton"

interface CarouselSlideProps {
    slide: CarouselSlide;
}

export function CarouselSlide({ slide }: CarouselSlideProps) {
    return(
        <div className='relative flex justify-center items-center'>
            <img src={slide.image.url} alt={String(slide.image.alt)} className='w-full brightness-50' />
            <div className='w-full z-10 absolute inset-y-1/3 flex flex-col items-center gap-y-4'>
                <h3 className='text-8xl text-white font-bold'>{slide.title}</h3>
                <p className='text-2xl text-white'>{slide.summary}</p>
                <CarouselButton href={slide.link}>read now</CarouselButton>
            </div>
        </div>
    )
}