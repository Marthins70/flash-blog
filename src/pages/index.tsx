import { MainCarousel } from "components/Carousel"
import { Header } from "components/Header"
import Head from "next/head"

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Flash.Blog</title>
            </Head>
            <Header />
            <main>
                <MainCarousel />
            </main>
        </>
    )
}
