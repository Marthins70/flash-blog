import { GetServerSideProps } from "next"
import { prismic } from "services/prismic"
import * as prismicH from "@prismicio/helpers"
import { formattedDate } from "lib/dateFormatter"
import Head from "next/head"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import styles from "styles/post.module.scss"

type Post = {
    slug: string;
    title: string | null;
    content: string;
    updatedAt: string;
}

interface PostProps {
    post: Post;
}

export default function Post({ post }: PostProps) {
    const { data: session }: any = useSession()
    const router = useRouter()

    useEffect(() => {
        if(!session?.activeSubscription) {
            router.push(`/posts/preview/${post.slug}`)
        }
    }, [session])

    return(
        <>
            <Head>
                <title>{post.title} | Flash.Blog</title>
            </Head>

            <main className="max-w-screen-xl mx-auto mt-20">
                <article className="flex flex-col gap-y-8">
                    <h1 className="text-amber-500 text-5xl">{post.title}</h1>
                    <time className="text-slate-300 text-2xl">{post.updatedAt}</time>
                    <div 
                        className={styles.postContent}
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const slug = params?.slug

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: prismicH.asText(response.data.title),
        content: prismicH.asHTML(response.data.content) || '',
        updatedAt: formattedDate(response.last_publication_date)
    }

    return {
        props: {
            post
        }
    }
}