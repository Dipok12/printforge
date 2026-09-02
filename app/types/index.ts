// Data Types
import type { ReactNode } from "react"

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type Category = {
    displayName: string
    slug: string
}

export type CategoryPageParams = {
    params: Promise<{
        categoryName: string
    }>
}

export type GetModelsParams = {
    category?: string
}

export type ModelCardProps = {
    model: Model
}

export type NavLinkProps = {
    href: string,
    children: ReactNode,
    isActive?: boolean

}