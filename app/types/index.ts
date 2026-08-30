import type { ReactNode } from "react"

// Data Types
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

export type ModelCardProps = {
    model: Model
}