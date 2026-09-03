import ModelCard from "@/app/components/common/ModelCard"
import {CategoryPageParams, Model} from '@/app/types'
import { getModels } from "@/app/lib/models"

import {getCategoryBySlug} from "@/app/lib/categories"
 
export default async function CategoryPage({params}: CategoryPageParams) {
    const {categoryName} = await params
    const category = getCategoryBySlug(categoryName);
    const models = await getModels({category: categoryName})
    
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">{category?.displayName || categoryName}</h2>
            <div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                role="region"
                aria-label="3D Models Gallery"
            >
                {models.map((model: Model) => (
                <ModelCard  key={model.id} model={model} />
            ))}
            </div>
        </div>
    )
        
}