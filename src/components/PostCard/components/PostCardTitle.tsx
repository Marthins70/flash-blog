interface PostCardTitleProps {
    title: string;
}

export function PostCardTitle({ title }: PostCardTitleProps) {
    return(
        <div className="w-full">
            <h2 className="text-amber-600 text-3xl font-bold">{title}</h2>
        </div>
    )
}