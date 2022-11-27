import { MainCarousel } from "components/Carousel"
import { FeaturedCategory } from "components/FeaturedCategory"
import { Header } from "components/Header"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { prismic } from "services/prismic"

interface HomeProps {
    categories: Category[];
    carouselSlides: CarouselSlide[];
}

export default function Home({ categories, carouselSlides }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home | Flash.Blog</title>
            </Head>
            <Header />
            <main>
                <MainCarousel slides={carouselSlides} />
                <FeaturedCategory categories={categories} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const responseCategories = await prismic.getSingle('most_viewed_categories')

    const categories: Category[] = responseCategories.data.categories.map((category: Category, index: Number) => {
        return {
            id: index,
            title: category.title,
            subtitle: category.subtitle,
            image: category.image,
            link: category.link
        }
    })

    const responseSlides = await prismic.getAllByType('main_carousel_slide')

    const carouselSlides = responseSlides.map(slide => {
        return {
            title: slide.data.slide_title,
            summary: slide.data.slide_summary,
            link: slide.data.slide_link,
            image: slide.data.slide_image
        } as CarouselSlide
    })

    return {
        props: {
            categories,
            carouselSlides
        }
    }
}
