import { MainCarousel } from "components/Carousel"
import { FeaturedCategory } from "components/FeaturedCategory"
import { Header } from "components/Header"
import { GetServerSideProps } from "next"
import Head from "next/head"

interface HomeProps {
    categories: Category[]
}

export default function Home({ categories }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home | Flash.Blog</title>
            </Head>
            <Header />
            <main>
                <MainCarousel />
                <FeaturedCategory categories={categories} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = [
        {
            id: 1,
            name: 'weather',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh.',
            image_url: '/images/cloud-solid.png',
            link: '/'
        },
        {
            id: 2,
            name: 'coding',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh.',
            image_url: '/images/code-solid.png',
            link: '/'
        },
        {
            id: 3,
            name: 'architecture',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh.',
            image_url: '/images/compass-drafting-solid.png',
            link: '/'
        },
        {
            id: 4,
            name: 'gaming',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh.',
            image_url: '/images/gamepad-solid.png',
            link: '/'
        },
    ]

    return {
        props: {
            categories
        }
    }
}
