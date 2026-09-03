"use client"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function CategoriesNav() {
    const pathname = usePathname();
    const categories: Category[] = getAllCategories()
    return(
        <div>
            <div className="sticky top-[20%]">
                 <ul>
                    <NavLink
                        href="/3d-model"
                        isActive={pathname === "/3d-model"}
                        >
                        All
                    </NavLink>
                    {categories.map((cat) => (
                        <NavLink
                            href={`/3d-model/categories/${cat.slug}`}
                            key={cat.slug}
                            isActive={pathname === `/3d-model/categories/${cat.slug}`}
                        >
                            {cat.displayName}
                        </NavLink>
                        ))}
                 </ul>
            </div>
        </div>
    )
}