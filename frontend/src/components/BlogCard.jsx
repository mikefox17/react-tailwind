import React from 'react';

export const BlogCard = props => {
    const { post } = props;
    return (
        <div className='border border-gray-700 rounded-lg col-span-1 shadow-xl mt-8 hover:shadow-2xl transition duration-300'>
            <div className='p-4 border-b-4 border-orange-400 bg-blue-300 rounded-t-lg'>
                <a href='#' className='font-bold text-lg text-gray-700'>
                    {post.title}
                </a>
            </div>
            <p className='p-4 text-lg text-gray-600'>{post.excerpt}</p>
            <a
                className='p-4 text-xs underline text-blue-500 hover:text-gray-500'
                href='#'
            >
                Read More 👉
            </a>
            <div className='p-4'>
                <div className='bg-blue-300 inline-block px-2 py-1 rounded-xl text-xs text-blue-700'>
                    Category
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
