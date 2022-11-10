import Link from "next/link"
import InfoPost from "./InfoPost"
import Image from "next/image"

const CardPost = ({thumbnail, ...infoPost}) => {
  return (
    <article>
      <Link href='/detail'>
        <Image src={thumbnail} alt="" className="w-full rounded" />
        <InfoPost {...infoPost} />
      </Link>
    </article>
  )
}

export default CardPost