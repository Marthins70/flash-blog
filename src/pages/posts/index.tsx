import { PostCard } from "components/PostCard"
import { REVALIDATE_VALUE_IN_DAYS } from "lib/revalidate"
import { GetStaticProps } from "next"
import Head from "next/head"
import { prismic } from "services/prismic"
import * as prismicH from "@prismicio/helpers"
import { formattedDate } from "lib/dateFormatter"

interface PostsProps {
    posts: PostCard[];
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | Flash.Blog</title>
            </Head>

            <main className="mt-12">
                <div className="max-w-screen-xl mx-auto">
                    {posts.map(post => (
                        <PostCard post={post} key={post.uid} />
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await prismic.getAllByType('post', {
        fetch: ['post.title', 'post.content']
    })

    const posts: PostCard[] = response.map(post => {
        return {
            uid: String(post.uid),
            title: prismicH.asText(post.data.title) || '',
            description: String(post.data.content.find((content: any) => content.type == 'paragraph')?.text ?? ''),
            tags: post.tags,
            updatedAt: formattedDate(post.last_publication_date)
        }
    })

    return {
        props: {
            posts
        },
        revalidate: REVALIDATE_VALUE_IN_DAYS(1)
    }
}