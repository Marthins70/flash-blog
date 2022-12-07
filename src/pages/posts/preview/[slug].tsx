import { GetStaticProps } from "next"
import { signIn, useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { asHTML, asText } from "@prismicio/helpers"
import { useEffect } from "react"
import { prismic } from "services/prismic"
import { getStripeJs } from "services/stripe-js"
import { api } from "services/api"

import styles from 'styles/post.module.scss'
import { formattedDate } from "lib/dateFormatter"

interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

export default function PostPreview({ post }: PostPreviewProps) {
    const { data: session }: any = useSession()
    const router = useRouter()

    useEffect(() => {
        if(session?.activeSubscription) {
            router.push(`/posts/${post.slug}`)
        }
    }, [session])

    async function handleSubscribe() {
        if(!session) {
            await signIn('github')
            return
        }

        try {
            const response = await api.post('/subscribe', { session })
    
            const { sessionId } = response.data
    
            const stripe = await getStripeJs()
    
            await stripe?.redirectToCheckout({ sessionId })
    
        } catch(error: any) {
            alert(error.message)
        }
    }

    return (
        <>
            <Head>
                <title>{ post.title } | Flash.Blog</title>
            </Head>

            <main className="max-w-screen-xl mx-auto mt-20">
                <article className="flex flex-col gap-y-8">
                    <h1 className="text-amber-500 text-5xl">{post.title}</h1>
                    <time className="text-slate-300 text-2xl">{post.updatedAt}</time>
                    <div 
                        className={`${styles.postContent} ${styles.previewContent}`}
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                    <div className={styles.continueReading}>
                        Wanna Continue Reading? 
                        <Link href="/" onClick={handleSubscribe}>
                            Subscribe now!
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {

    const slug = params?.slug

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: asText(response.data.title),
        content: asHTML(response.data.content.splice(0, 3)),
        updatedAt: formattedDate(response.last_publication_date)
    }

    return {
        props: {
            post
        },
        revalidate: 60 * 30, // 30 min
    }
} 