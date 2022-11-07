import InfoPost from "./InfoPost";

const FeaturedPost = () => {
  return (
    <article>
        <div className="flex -mx-6 items-center flex-wrap">
            <div className="px-6 lg:w-8/12 md:w-7/12 w-full">
                <img src="/asset/featured-thumbnail.png" alt="Image Featured" className="rounded-xl"/>
            </div>
            <div className='lg:w-4/12 md:w-5/12 w-full px-4'>
                <InfoPost category="UI Design" date="July 2, 2021" title="Understanding color theory: the color wheel and finding complementary colors" shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum." authorAvatar="/asset/author-1.png" authorName="Lesli Billar" authorJob="UI Design" />
            </div>
        </div>
    </article>
  )
}

export default FeaturedPost;