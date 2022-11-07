import InfoPost from "./InfoPost"

const CardPost = ({thumbnail, ...infoPost}) => {
  return (
    <article>
        <img src={thumbnail} alt="" className="w-full rounded" />
        <InfoPost {...infoPost} />
    </article>
  )
}

export default CardPost