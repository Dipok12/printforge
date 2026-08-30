import Link from "next/link"

type Post = {
  id: number
  title: string
}

export default async function PostPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = (await res.json()) as Post[]

  return (
    <section className="px-5 py-14">
      <div className="container">
        <div className="blogsSec">
          <h2 className="text-4xl font-bold">Blog Post</h2>
          <div className="pt-10">
            <ul className="grid grid-cols-3 gap-4">
              {posts.map((post) => {
                return (
                  <li
                    key={post.id}
                    className="text-xl font-semibold p-4 border border-black rounded-xl"
                  >
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}