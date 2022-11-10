import Image from 'next/image'

const PostAuthor = ({authorAvatar, authorName, authorJob}) => {
  return (
    <>
        <div className="flex items-center mt-4">
            <Image src={authorAvatar} alt="Author Pertama" className="w-10 h-10 rounded-full object-cover" />
            <div className="ml-4">
                <h3>{authorName}</h3>
                <div className="text-white/60 text-sm">{authorJob}</div>
            </div>
        </div>
    </>
  )
}

export default PostAuthor