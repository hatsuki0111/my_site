import React from 'react';
import ReactMarkdown from 'react-markdown'

const BlogCard =(props)=>{
  return(
    <>
    <div className='blogCard'></div>
    <div onClick={()=>console.log(props.data)}>clg</div>
    <img src={props.data.fields.image.fields.file.url}/>
    <h3>{props.data.fields.title}</h3>
    <p>{props.data.fields.publishDate}</p>
  <ReactMarkdown className='body'>{props.data.fields.body}</ReactMarkdown>
  </>
  )
}

export default BlogCard