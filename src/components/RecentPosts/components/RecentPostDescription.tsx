interface RecentPostDescriptionProps {
    description: string;
}

export function RecentPostDescription({ description }: RecentPostDescriptionProps) {
    return(
        <div className="mt-4">
            <p className="text-sm text-slate-300">{description}</p>
        </div>
    )
}