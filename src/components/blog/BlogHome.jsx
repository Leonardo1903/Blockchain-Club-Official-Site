import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from "react-router-dom";
import blogData from './data/blogData';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function BlogHome() {
    const [latestBlog, setLatestBlog] = useState([{}]);
    const [recentBlogs, setRecentBlogs] = useState([]);

    

    useEffect(()=>{
        setLatestBlog([blogData[0],blogData[1],blogData[2]]);
        setRecentBlogs(blogData.slice(0));
        
    },[])
  return (
    <div className='bg-gray-950'>
        <Helmet>
            <title>Blog Home</title>
            <meta  
                name='description'
                content="Read the latest and recent blogs on our site."
            />
        </Helmet>
            <div id='swiper' className='m-4 p-4 w-7/12 mx-auto mt-12 '>
            <Swiper
               spaceBetween={30}
               style={{
                '--swiper-navigation-color': '#FFA500',
                '--swiper-pagination-color': '#FFA500',
              }}
               centeredSlides={true}
               autoplay={{
                 delay: 2500,
                 disableOnInteraction: false,
               }}
               pagination={{
                 clickable: true,
               }}
               navigation={true}
               modules={[Autoplay,Pagination, Navigation]}
                >
                    {/* id: 1,
                        title: 'AI ABC',
                        thumbnail:'./thumbnail.webp',
                        subtitle: 'This is the latest blog post subtitle.',
                        body: 'This is the body of the latest blog post.' */}
            
                
                {latestBlog.map((blog)=>{
                    return(
                        <div className='m-4 p-4' key={blog.id}>                       
                        <SwiperSlide className=' bg-amber-400' key={blog.id}>
                            <NavLink to={`/blog/${blog.id}`}>
                            <div id='background-image' className="flex flex-col" style={{backgroundImage: `url('./sample.png')`,backgroundSize:'cover'}}>
                                <div id='empty-space' className='h-80'>
                                    
                                </div>
                                <div id='content blur' className='text-white'>
                                    <div id='content' className='flex backdrop-blur-sm flex-col mx-2 my-4'>
                                    <div id='title' className='text-2xl md:text-4xl p-0.5'> {blog.title} </div>
                                    <div id='subtitle' className='text-xl md:text-2xl px-0.5 pb-1'>{blog.subtitle}</div>
                                    <div id='footer' className='px-0.5'>
                                        <div className='flex md:text-xl'>
                                        <div id='date' className=''>9 June,  </div> <div id='time-read' className=''>5-minute read</div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                            </NavLink>
                        </SwiperSlide>
                        </div> 
                        
                    )
                })}
                
               
            </Swiper>
            </div>
            <div id='blog-list' className="m-8 p-8">
                 <div id='title' className='p-4 my-4 text-5xl text-amber-400'>Hot Articles</div>
                    <div className='flex flex-wrap '>
                        {recentBlogs.map(blog => (
                                <div id='card' className='bg-gray-800 rounded m-x-fit m-4 p-4 ' key={blog.id}>
                                    <img src={blog.thumbnail} alt="Thumbnail" />
                                    <div id='content' className='flex backdrop-blur-sm flex-col mx-2 my-4'>
                                    <div id='title' className='text-2xl text-white p-0.5'> {blog.title} </div>
                                    <div id='subtitle' className='text-xl text-white px-0.5 pb-1'>{blog.subtitle}</div>
                                    <div id='footer' className='px-0.5 text-amber-400'>
                                        <div className='flex md:text-xl'>
                                        <div id='date' className=''>9 June,  </div> <div id='time-read' className=''>5-minute read</div>
                                        </div>
                                    </div>
                                    </div>
                                    <NavLink to={`/blog/${blog.id}`}><span className='text-white hover:text-amber-400 mx-2'>Read More...</span></NavLink>

                                </div>
                            
                        ))}
                    </div>
            </div>


        {/* {
            latestBlog &&
            (
                <div>
                    <h1>{latestBlog.title}</h1>
                    <h2>{latestBlog.subtitle}</h2>
                    <img src={latestBlog.thumbnail} alt="" />
                    <NavLink to={`/blog/${latestBlog.id}`}>Read More...</NavLink>
                </div>
            )

        } */}
        
            </div>
  )
}

export default BlogHome