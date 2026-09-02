
import {CategoryPageParams} from '@/app/types'
import {getCategoryBySlug} from "@/app/lib/categories"
 
export default async function CategoryPage({params}: CategoryPageParams) {
    const {categoryName} = await params
    const category = getCategoryBySlug(categoryName);
    console.log(category);
    return (
        <h2>{category.displayName}</h2>
    )
        
}