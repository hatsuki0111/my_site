import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Top from './pages/Top';
import Blogs from './pages/Blogs'

import * as contentful from "contentful";
import ApiKey from './constants/contentful';

import React ,{useState, useEffect} from 'react';
import BlogDetail from './pages/BlogDetail';

const App =()=> {
  const client = contentful.createClient(ApiKey)
  const [blog, setBlog] = useState([])
  useEffect(() => {
    client
      .getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'blog'
      })
      .then((res) => setBlog(res.items))
  },[])

  return (
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact
      path="/"
      render={() => <Top data={blog}/>}>
    </Route>
    <Route exact
      path="/blogs"
      render={() => <Blogs data={blog}/>}>
    </Route>
    <Route exact
      path="/blogs/:id"
      render={() => <BlogDetail data={blog}/>}>
    </Route>
  </Switch>
  <Footer />
  </BrowserRouter>
  )
}

export default App;
