interface RecentPostsTagsProps {
    tags: string[];
    postUid: string;
}

export function RecentPostTags({ tags, postUid }: RecentPostsTagsProps) {
    return(
        <div className="flex gap-x-2">
            {tags.map((tag) => (
                <div 
                    key={`${tag}-${postUid}`}
                    className="px-4 bg-amber-600 rounded-md"
                >
                    <p className="text-sm uppercase">{tag}</p>
                </div>
            ))}
        </div>
    )
}