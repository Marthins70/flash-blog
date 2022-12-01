interface PostCardTagsProps {
    tags: string[];
    postUid: string;
}

export function PostCardTags({ tags, postUid }: PostCardTagsProps) {
    return(
        <div className="flex gap-x-2 my-2">
            {tags.map((tag) => (
                <div 
                    key={`${tag}-${postUid}`}
                    className="px-4 bg-amber-600 rounded-md"
                >
                    <p className="uppercase text-sm text-white">{tag}</p>
                </div>
            ))}
        </div>
    )
}