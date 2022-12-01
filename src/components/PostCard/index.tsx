import { Stack } from "components/misc/Stack"
import Link from "next/link"
import { PostCardDate } from "./components/PostCardDate"
import { PostCardDescription } from "./components/PostCardDescription"
import { PostCardTags } from "./components/PostCardTags."
import { PostCardTitle } from "./components/PostCardTitle"

interface PostCardProps {
    post: PostCard;
}

export function PostCard({ post }: PostCardProps) {
    return(
        <Link href={`/posts/${post.uid}`} className="flex flex-col gap-y-2 my-8 pb-8 border-b border-amber-600">
            <PostCardTitle title={post.title} />
            <Stack direction="row" gap="gap-x-4">
                <PostCardDate updatedAt={post.updatedAt} />
                <PostCardTags tags={post.tags} postUid={post.uid} />
            </Stack>
            <PostCardDescription description={post.description} />
        </Link>
    )
}