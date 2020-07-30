import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs =(props)=>{
  return(
    <>
    <div>Blogs</div>
     <p className='blogsGrid'>{props.data.length ? props.data.map((item,i)=>(
      <BlogCard data={item} key={i} url={`/blogs/${item.sys.id}`}/>
    )): 
      (<p>Now Loading...</p>)}
    </p>
    </>
  );
}

export default Blogs