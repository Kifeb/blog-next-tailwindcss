import CardPost from "@components/CardPost";
import Container from "@components/Container";
import FeaturedPost from "@components/FeaturedPost";
import Layout from "@components/Layout";
import SectionHeader from "@components/SectionHeader";
import { useState } from "react";
import mockPost from "../utils/posts.json"

export default function Posts(){

    const [posts, SetPosts] = useState(mockPost)

    return(
        <Layout>
        <Container>
        <SectionHeader>Ui Design</SectionHeader>
        {!posts.length ? (
            <div className="text-center py-20">
                <h2 className="text-6xl">No Result :(</h2>
                <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">Post yang anda Cari tidak ditemukan pada sistem kami
                </p>
            </div>
        ) : (
          <div className="flex -mx-4 flex-wrap">
            {posts.map(post => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
          )}
          </Container>
      </Layout>
    )
}