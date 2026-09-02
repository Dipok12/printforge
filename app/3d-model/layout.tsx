
import type { ReactNode } from "react"
import CategoriesNav from "../components/common/CategoriesNav";


export default function ModelSidebar({ children }: { children: ReactNode }) { 
    return(
        <section className="px-5 py-14">
            <div className="container">
                <div className="grid grid-cols-[150px_1fr] gap-20">
                    <CategoriesNav/>
                    {children}
                </div>
            </div>
            
        </section>
    )
}