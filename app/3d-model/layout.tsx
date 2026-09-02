import Link from "next/link";
import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"


export default function ModelSidebar({ children }: { children: ReactNode }) { 
    const categories: Category[] = getAllCategories()
    return(
        <section className="px-5 py-14">
            <div className="container">
                <div className="grid grid-cols-[150px_1fr] gap-20">
                    <nav>
                        <Link href="/3d-model" className="block text-[14px] uppercase font-medium text-[#606060] border-l-2 border-l-transparent transition-all duration-200 hover:pl-3 hover:text-[#F77429] hover:border-l-[#F77429]">
                            All
                        </Link>
                        <ul>
                        {categories.map((cat) => (
                            <li key={cat.slug}>
                            <Link
                                href={`/3d-model/categories/${cat.slug}`}
                                className="block my-5 text-[14px] uppercase font-medium text-[#606060] border-l-2 border-l-transparent transition-all duration-200 hover:pl-3 hover:text-[#F77429] hover:border-l-[#F77429]"
                            >
                                {cat.displayName}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                    {children}
                </div>
            </div>
            
        </section>
    )
}