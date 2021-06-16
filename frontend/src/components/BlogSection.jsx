import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
    return (
        <div className='px-10 mx-auto container py-24'>
            <h2 className='text-5xl font-bold text-center mb-10 text-red-400'>
                Read My Hot Takes
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default BlogSection;
