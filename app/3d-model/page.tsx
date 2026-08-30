import ModelCard from "@/app/components/common/ModelCard";
import type { Model } from "@/app/types"
import { getAllModels } from "../lib/models"



export default async function Models(){
    const models = await getAllModels()
    return(
        <section className="px-5 py-14">
            <div className="container">
                <div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    role="region"
                    aria-label="3D Models Gallery"
                >
                    {models.map((model: Model) => (
                    <ModelCard key={model.id} model={model} />
                    ))}
                </div>
            </div>
        </section>
    )
}