interface PostCardDescriptionProps {
    description: string;
}

export function PostCardDescription({ description }: PostCardDescriptionProps) {
    return(
        <div className="w-full">
            <p className="text-slate-300 text-md">{description}</p>
        </div>
    )
}