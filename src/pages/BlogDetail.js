import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const BlogDetail =(props)=>{
  let { id } = useParams()
  const mydetail = !!props.data.filter((item) => item.sys.id === id)
    ? props.data.filter((item) => item.sys.id === id)[0]
    : false
  
  const contents = mydetail ? (
      <>
        <img src={mydetail.fields.image.fields.file.url}/>
        <ReactMarkdown source={mydetail.fields.title} />
        <ReactMarkdown source={mydetail.fields.publishDate} />
        <ReactMarkdown source={mydetail.fields.body} />
      </>
  ):(<p>Nowloading...</p>)



  return(
    <> 
    <div>
    <Link to='/blogs'><button type="button">記事一覧へ</button></Link>
    {contents}
    </div>
    </>
  );
}

export default BlogDetail