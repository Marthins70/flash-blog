import Link from "next/link"

interface FeaturedCategoryCardProps {
    category: Category;
}

export function FeaturedCategoryCard({ category }: FeaturedCategoryCardProps) {
    return(
        <Link href={category.link}
            className="
                p-4
                pt-12  
                flex
                flex-col
                items-center
                gap-y-6
                justify-between
                bg-slate-800
                border-b
                border-solid
                border-amber-500
        ">
            <div className="w-full h-24 flex justify-center items-center">
                <img
                    src={category.image_url}
                    alt={`categoria - ${category.name}`}
                    loading="lazy"
                    width="80"
                    height="80"
                />
            </div>
            <div className="flex flex-col justify-center gap-y-2 ">
                <h3 className="text-amber-500 text-3xl text-center font-bold">{category.name}</h3>
                <p className="text-white text-md text-center">{category.summary}</p>
            </div>
        </Link>
    )
}