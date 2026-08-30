export default async function PostSingle({params}){
    const {id} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return(

        <section className="px-5 py-14">
            <div className="container">
                <div className="max-w-200 mx-auto space-y-4">
                    <h2 className="text-3xl font-medium">{post.title}</h2>
                    <div className="tex-lg">
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}