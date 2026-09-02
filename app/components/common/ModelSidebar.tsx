import Link from "next/link";
import { getAllCategories } from "../../lib/categories"


export default function ModelSidebar() { 
    const category = getAllCategories();
    return(
        <div>
            <nav>
                <Link href="/3d-model" className="block px-4 py-2 text-sm font-medium text-gray-700">
                    All
                </Link>
                {category.map((cat) => (
                    <Link href={`/3d-model/categories/${cat.slug}`} key={cat.slug} className="block px-4 py-2 text-sm font-medium text-gray-700">
                        {cat.displayName}
                    </Link>
                ))}
            </nav>
        </div>
    )
}