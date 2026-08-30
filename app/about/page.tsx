import Image from "next/image"

export default function AboutsPage(){
    return(
        <>
        <section className="px-5 py-10">
            <div className="container">
                <div className="grid sm:grid-cols-2 items-center gap-7 sm:gap-16 md:gap-25">
                    <div className="img-col">
                        <Image
                            src="/about-img-01.png"
                            alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                            className="w-full h-full"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="content">
                        <div className="flex flex-col gap-2.5 sm:gap-5">
                            <span>About printforge</span>
                            <h1 className="text-[33px] sm:text-[45px] md:text-[56px] font-bold">Empowering makers worldwide</h1>
                            <div className="text-[18px] sm:text-[24px] md:text-[26px] space-y-4">
                                <p>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                                <p>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr className="bg-gray-300 h-0.5 w-full border-gray-300"/>
        <section className="px-5 py-10">
            <div className="container">
                <div className="grid gap-0 sm:grid-cols-3 -mx-6">
                    <div className="px-6">
                        <div className="articleIntro mb-3.5 flex items-center gap-1.5">
                            <img 
                                src="/model-stack.svg"
                                alt="Models"
                                className="w-8 h-8"
                            />
                            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text[24px]">100K+ Models</h3>
                        </div>
                        <p className="text-lg">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                    </div>
                    <div className="px-6 border-x border-gray-300">
                        <div className="articleIntro mb-3.5 flex items-center gap-1.5">
                            <img 
                                src="/GlobeSimple.svg"
                                alt="Models"
                                className="w-8 h-8"
                            />
                            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text[24px]">Free to Use</h3>
                        </div>
                        <p className="text-lg">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                    </div>
                    <div className="px-6">
                        <div className="articleIntro mb-3.5 flex items-center gap-1.5">
                            <img 
                                src="/Flag.svg"
                                alt="Models"
                                className="w-8 h-8"
                            />
                            <h3 className="font-bold text-[18px] sm:text-[20px] md:text[24px]">100K+ Models</h3>
                        </div>
                        <p className="text-lg">Most models are free to download, with optional premium features for power users.</p>
                    </div>
                </div>
            </div>
        </section>

        <hr className="border-gray-200" aria-hidden="true" />

        <section className="container max-w-3xl px-4 py-8 mx-auto">
            <div className="prose max-w-200 mx-auto">
                <h2 className="font-bold text-[18px] sm:text-[28px] md:text[28px] mb-4">Our vision</h2>
                <p className="mb-4 text-gray-700">
                    At PrintForge, we believe that 3D printing is
                    revolutionizing the way we create, prototype, and
                    manufacture. Our platform serves as a bridge between
                    designers and makers, enabling the sharing of knowledge
                    and creativity that pushes the boundaries of what's
                    possible with 3D printing.
                </p>
                <p className="text-gray-700">
                    Whether you're a hobbyist looking for your next weekend
                    project, an educator seeking teaching materials, or a
                    professional designer wanting to share your creations,
                    PrintForge provides the tools and community to support
                    your journey in 3D printing.
                </p>
            </div>
        </section>
        </>
        
    )
}