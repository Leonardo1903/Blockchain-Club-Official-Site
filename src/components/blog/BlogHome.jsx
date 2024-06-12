import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from "react-router-dom";
import blogData from './data/blogData';

function BlogHome() {
    const [latestBlog, setLatestBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);
    
    useEffect(()=>{
        setLatestBlog(blogData[0]);
        setRecentBlogs(blogData.slice(1));
    },[])
  return (
    <div>
        <Helmet>
            <title>Blog Home</title>
            <meta  
                name='description'
                content="Read the latest and recent blogs on our site."
            />
        </Helmet>
        {
            latestBlog &&
            (
                <div>
                    <h1>{latestBlog.title}</h1>
                    <h2>{latestBlog.subtitle}</h2>
                    <img src={latestBlog.thumbnail} alt="" />
                    <NavLink to={`/blog/${latestBlog.id}`}>Read More...</NavLink>
                </div>
            )

        }
         <h2>Recent Blogs</h2>
            {recentBlogs.map(blog => (
                <div key={blog.id}>
                <h3>{blog.title}</h3>
                <NavLink to={`/blog/${blog.id}`}>Read More</NavLink>
                </div>
            ))}
            </div>
  )
}

export default BlogHome