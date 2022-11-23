import { FeaturedCategoryCard } from "./components/FeaturedCategoryCard"
import { FeaturedCategoryTitle } from "./components/FeaturedCategoryTitle"

interface FeaturedCategoryProps {
    categories: Category[]
}

export function FeaturedCategory({ categories }: FeaturedCategoryProps) {
    return (
        <div className="my-20">
            <FeaturedCategoryTitle />
            <div className="max-w-screen-2xl mx-auto flex gap-4 justify-between">
                {categories.map(category => (
                    <FeaturedCategoryCard category={category} key={category.id} />
                ))}
            </div>
        </div>
    )
}