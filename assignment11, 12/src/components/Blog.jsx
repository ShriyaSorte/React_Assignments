import React from 'react'
import Post1 from '../components/Post1';
import Post2 from '../components/Post2';
import { Link, Route, Routes } from 'react-router-dom';

const Blog = () => {
  return (
    <>
        <div>
          <h1>Blogs..</h1>
          <nav>
            <ul>
              <li><Link to="post1">Post 1</Link></li>
              <li><Link to="post2">Post 2</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="post1" element={<Post1/>}></Route>
            <Route path="post2" element={<Post2/>}></Route>
          </Routes>
        </div>
    </>
  )
}

export default Blog