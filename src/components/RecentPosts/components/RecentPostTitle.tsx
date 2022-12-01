interface RecentPostTitleProps {
    title: string;
}

export function RecentPostTitle({ title }: RecentPostTitleProps) {
    return(
        <div className="w-full flex justify-start mb-4">
            <h3 className="text-amber-600 text-xl font-bold">{title}</h3>
        </div>

    )
}