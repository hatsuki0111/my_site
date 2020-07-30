import React from 'react'
import BlogCard from '../components/BlogCard'
import logo from '../static/images/background.jpg'
import logo2 from '../static/images/background5.jpg'
import logo3 from '../static/images/background3.jpg'
import logo4 from '../static/images/background4.jpg'
import { Link } from 'react-router-dom';


const Top =(props)=>{
    let bloglist = ''
    let bloglist2 = []
    if (props.data.length && props.data.length <= 4) {
      bloglist = props.data.map((item,i) => (
        <div key={item.sys.id}>
          <BlogCard data={item} key={i} url={`/blogs/${item.sys.id}`}/>
        </div>
      ))
    } else if (props.data.length) {
      for (let i = 0; i < 4; i++) {
        bloglist2.push(
          <BlogCard data={props.data[i]} key={i} url={`/blogs/${props.data[i].sys.id}`}/>
        )
      }
    } else {
      bloglist = <p>loading...</p>
    }
  return(
    <>
    <img src={logo} alt=''/>
    <img  src={logo2} alt=''/>
    <img src={logo3} alt=''/>
    <img src={logo4} alt=''/>

    <div className='top'>Top</div>

    <div>
        {bloglist}
        {bloglist2}
    </div>

    <Link to='/blogs'>
          <p>MORE...</p> 
        </Link>
    </>
    )
    }

export default Top