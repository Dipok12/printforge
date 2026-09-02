
import { NavLinkProps } from "@/app/types"
import Link from "next/link"

export default function NavLink({href, children, isActive}: NavLinkProps){
    return(
        <li 
        className={`mb-5 border-l-2 transition-all duration-200 hover:pl-3 hover:text-[#F77429] hover:border-l-[#F77429] leading-4 ${
        isActive ? "pl-3 border-l-[#F77429]" : "border-l-transparent"
        }`}>
            <Link href={href}
            className={`cursor-pointer text-[16px]  hover:text-orange-600 ${isActive ? "text-orange-600" : "text-gray-700"}`}
            >
            {children}
            </Link>
        </li>
    )
}