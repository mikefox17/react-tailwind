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
        <div className='px-10 mx-auto container lg:pt24 pt-12'>
            <h2 className='text-5xl font-bold text-center mb-10 text-red-400'>
                Read My Hot Takes 🔥
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <BlogCard posts={postsData} />
            </div>
        </div>
    );
};

export default BlogSection;
