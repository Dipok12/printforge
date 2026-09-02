import {ModelDetailPageProps} from "@/app/types/"
import Image from "next/image";
import { getModelById } from "@/app/lib/models";

export default async function ModleSinglePage({params}: ModelDetailPageProps){
    const {id} = await params;
    const model = await getModelById(id)
    return (
        <section>
            <div className="container">
                <div className="detailsInr grid grid-cols-2 items-center gap-10">
                    <div className="imgCol relative">
                        <Image
                            src={model.image}
                            alt={model.name}
                            width={300}
                            height={300}
                            loading="eager"
                            className=" w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
    
                        />
                    </div>
                    <div className="content">
                        <div className="flex gap-2 items-center mt-4 text-gray-600" aria-label={`${model.likes} likes`}>
                            <img src="/heart-icon.svg" alt="" />
                            <span>{model.likes}</span>
                        </div>
                        <h2 id={`model-${model.id}-title`} className="text-[32px] font-bold text-gray-800">
                            {model.name}
                        </h2> 
                        <div className="mt-4 mb-5">
                            <div className="inline-block border border-gray-500 rounded-4xl p-2 capitalize text-[14px] leading-3.5">{model.category}</div>
                        </div>
                        <p className="text-gray-800 text-[24px] leading-5">
                            {model.description}
                        </p>
                        <p className="text-[#1E1E1E] leading-5 mt-10">
                            {model.dateAdded}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}