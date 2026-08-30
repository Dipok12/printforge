import Link from "next/link"
import Image from "next/image"
import { ModelCardProps } from "@/app/types"

export default function ModelCard({ model }: ModelCardProps ){
    return(
        <Link 
    href={`/3d-model/${model.id}`}
    className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
    >
        <div className="overflow-hidden group transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg" role="article">
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={model.image}
                        alt={model.name}
                        width={300}
                        height={300}
                        loading="eager"
                        className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"

                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between mb-4">
                        <h2 id={`model-${model.id}-title`} className="text-xl font-semibold text-gray-800">
                            {model.name}
                        </h2>
                    </div>
                    <p className="text-gray-800 text-sm leading-5">
                        {model.description}
                    </p>
                    <div className="mt-4">
                        <div className="inline-block border border-gray-500 rounded-4xl p-2 capitalize text-[14px] leading-3.5">{model.category}</div>
                    </div>
                    <div className="flex gap-2 items-center mt-4 text-gray-600" aria-label={`${model.likes} likes`}>
                        <Image src="/heart-icon.svg" alt="" width={18} height={18} />
                        <span>{model.likes}</span>
                    </div>
                </div>
            </div>
    </Link>
    )
}