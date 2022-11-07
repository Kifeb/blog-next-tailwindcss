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
            </Container>
        </Layout>
   )
}