import React from 'react'
import PostAuthor from './PostAuthor';
import PostMetaTitle from './PostMetaTitle';

const InfoPost = ({category, date, title, shortDescription, authorAvatar, authorName, authorJob}) => {
  return (
    <>
        <PostMetaTitle category={category} title={title} date={date} />
        <p className="text-white mt-4 w-10/12 line">{shortDescription}</p>
        <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
    </>
  )
}

export default InfoPost;