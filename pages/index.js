import CardPost from "@components/CardPost"
import FeaturedPost from "@components/FeaturedPost"
import { useState } from "react"
import mockPost from "../utils/posts.json"
import Container from "@components/Container"
import Layout from "@components/Layout"
import Head from "next/head"

export default function Home() {

  const [posts, SetPosts] = useState(mockPost)

  return (
    <Layout>
      <Head>
        <title>My Blog Epicetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 flex-wrap">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
        </Container>
    </Layout>
  )
}
