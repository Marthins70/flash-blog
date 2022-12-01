import { MainCarousel } from "components/Carousel"
import { FeaturedCategory } from "components/FeaturedCategory"
import { Header } from "components/Header"
import { GetStaticProps } from "next"
import Head from "next/head"
import { prismic } from "services/prismic"
import { RecentPosts } from "components/RecentPosts"
import { REVALIDATE_VALUE_IN_MINUTES } from "lib/revalidate"
import * as prismicH from "@prismicio/helpers"

interface HomeProps {
    categories: Category[];
    carouselSlides: CarouselSlide[];
    posts: PostCard[];
}

export default function Home({ categories, carouselSlides, posts }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home | Flash.Blog</title>
            </Head>
            <Header />
            <main>
                <MainCarousel slides={carouselSlides} />
                <FeaturedCategory categories={categories} />
                <RecentPosts posts={posts} />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const responseCategories = await prismic.getSingle('most_viewed_categories')
    const responseSlides = await prismic.getAllByType('main_carousel_slide')
    const responsePosts = await prismic.getAllByType('post', { limit: 4 })

    const categories: Category[] = responseCategories.data.categories.map((category: Category, index: Number) => {
        return {
            id: index,
            title: category.title,
            subtitle: category.subtitle,
            image: category.image,
            link: category.link
        }
    })

    const carouselSlides: CarouselSlide[] = responseSlides.map(slide => {
        return {
            title: slide.data.slide_title,
            summary: slide.data.slide_summary,
            link: slide.data.slide_link,
            image: slide.data.slide_image
        }
    })

    const posts: PostCard[] = responsePosts.map(post => {
        return {
            uid: String(post.uid),
            title: prismicH.asText(post.data.title) || '',
            description: String(post.data.content.find((content: any) => content.type == 'paragraph')?.text ?? ''),
            tags: post.tags,
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            categories,
            carouselSlides,
            posts
        },
        revalidate: REVALIDATE_VALUE_IN_MINUTES(30)
    }
}
