import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard';
import sanityClient from '../../../client';

const BlogSection = () => {
    const [postsData, setPostsData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            title,
            slug,
            excerpt,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                
                 body
            }
        }`
            )
            .then(data => setPostsData(data))
            .catch(err => console.log(err));
    }, []);

    console.log(postsData);

    return (
        <div
            className='px-10 mx-auto container  pt-12  bg-gray-200 rounded-lg pb-12'
            id='blog'
        >
            <h2 className='text-5xl font-bold text-center mb-10 text-red-400'>
                Read My Hot Takes 🔥
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
                {postsData &&
                    postsData.map((post, i) => (
                        <BlogCard key={i} post={post} />
                    ))}
            </div>
        </div>
    );
};

export default BlogSection;
