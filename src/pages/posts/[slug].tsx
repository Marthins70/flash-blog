import { GetServerSideProps } from "next"
import { prismic } from "services/prismic"
import * as prismicH from "@prismicio/helpers"
import { formattedDate } from "lib/dateFormatter"
import Head from "next/head"
import { Header } from "components/Header"

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
    return(
        <>
            <Head>
                <title>{post.title} | Flash.Blog</title>
            </Head>
            <Header />
            <main className="max-w-screen-xl mx-auto mt-10">
                <article className="">
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
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

    const response = await prismic.getByUID('post', String(slug), {});

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