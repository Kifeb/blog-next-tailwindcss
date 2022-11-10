import Container from "@components/Container";
import Layout from "@components/Layout";
import PostAuthor from "@components/PostAuthor";
import PostMetaTitle from "@components/PostMetaTitle";

export default function Detail(){
    return(
        <Layout>
            <Container>
                <div className="w-6/12 mx-auto flex items-center flex-col">
                    <PostMetaTitle
                        category='UI Design'
                        date='July, 22, 2022'
                        title='Understanding color theory: the color wheel and finding complementary colors'
                        center
                    />
                    <PostAuthor
                        authorName='Lesti Alar'
                        authorJob='UI Design'
                        authorAvatar='asset/author-1.png'
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/asset/detail-image.png" alt="Detail Image" className="w-full rounded-lg" />
                </div>
                <div className="md:w-10/12 mx-auto leading-relaxed">
                    <p className="text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur nam ullam natus delectus amet animi sunt officiis. Veniam rem totam eveniet reprehenderit neque possimus nesciunt molestias dignissimos voluptates? Modi!</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur nam ullam natus delectus amet animi sunt officiis. Veniam rem totam eveniet reprehenderit neque possimus nesciunt molestias dignissimos voluptates? Modi! ullam natus delectus amet animi sunt officiis. Veniam rem totam eveniet reprehenderit neque possimus nesciunt molestias dignissimos voluptates? Modi!</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur nam ullam natus delectus amet animi sunt officiis. Veniam rem totam eveniet reprehenderit neque possimus nesciunt molestias dignissimos voluptates? Modi! reprehenderit neque possimus nesciunt molestias dignissimos voluptates? Modi!</p>
                    <h1 className="text-2xl">Data kami</h1>
                    <ol>
                        <li>Hallo</li>
                        <li>Hallo</li>
                        <li>Hallo</li>
                        <li>Hallo</li>
                    </ol>
                </div>
            </Container>
        </Layout>
   )
}