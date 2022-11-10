import Image from "next/image";
import Link from "next/link";
import InfoPost from "./InfoPost";

const FeaturedPost = () => {
  return (
    <article>
        <div className="flex -mx-4 lg:items-center items-start flex-wrap">
            <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
              <Link href='/detail'>
                <Image src="/asset/featured-thumbnail.png" alt="Image Featured" className="rounded-xl w-full mb-4 md:mb-0"/>
              </Link>
            </div>
            <div className='md:w-4/12 w-full px-8'>
                <InfoPost category="UI Design" date="July 2, 2021" title="Understanding color theory: the color wheel and finding complementary colors" shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum." authorAvatar="/asset/author-1.png" authorName="Lesli Billar" authorJob="UI Design" />
            </div>
        </div>
        <hr className="border-white/10 mt-10 md:hidden"/>
    </article>
  )
}

export default FeaturedPost;