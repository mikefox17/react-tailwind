import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
    return (
        <div className='px-10 mx-auto container'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default BlogSection;
