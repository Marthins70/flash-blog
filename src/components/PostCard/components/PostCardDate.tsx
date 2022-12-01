interface PostCardDateProps {
    updatedAt: string;
}

export function PostCardDate({ updatedAt }: PostCardDateProps) {
    return(
        <time className="flex gap-x-2 my-2 text-sm text-white border-r border-white pr-4">
            {updatedAt}
        </time>
    )
}