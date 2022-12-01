import Link from "next/link"
import { RecentPostDescription } from "./components/RecentPostDescription"
import { RecentPostTags } from "./components/RecentPostTags"
import { RecentPostsTitle } from "./components/RecentPostsTitle"
import { RecentPostTitle } from "./components/RecentPostTitle";

interface RecentPostsProps {
    posts: PostCard[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
    return(
        <div className="my-20">
            <RecentPostsTitle />
            <div className="max-w-screen-xl mx-auto flex flex-col gap-y-4">
                {posts.map(post => (
                    <Link 
                        key={post.uid} 
                        href={`/posts/${post.uid}`}
                        className="bg-slate-800 py-4 px-10 flex flex-col border-b border-amber-500 text-white hover:border-amber-800"
                    >
                        <RecentPostTitle title={post.title} />
                        <RecentPostTags postUid={post.uid} tags={post.tags} />
                        <RecentPostDescription description={post.description} />
                    </Link>
                ))}
            </div>
        </div>
    )
}