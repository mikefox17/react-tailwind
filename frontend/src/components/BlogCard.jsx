import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = props => {
    const { post } = props;
    return (
        <div className='border border-gray-700 rounded-lg col-span-1 shadow-xl mt-8 hover:shadow-2xl transition duration-300'>
            <div className='p-4 border-b-4 border-orange-400 bg-blue-300 rounded-t-lg'>
                <Link
                    to={'/post/' + post.slug.current}
                    key={post.slug.current}
                    className='font-bold text-lg text-gray-700'
                >
                    {post.title}
                </Link>
            </div>
            <p className='p-4 text-lg text-gray-600'>{post.excerpt}</p>
            <Link
                to={'/post/' + post.slug.current}
                key={post.slug.current}
                className='p-4 text-xs underline text-blue-500 hover:text-gray-500'
            >
                Read More 👉
            </Link>
            <div className='p-4'>
                <div className='flex space-x-2'>
                    {post.tags.map((tag, i) => (
                        <span
                            key={i}
                            className=' bg-blue-400 py-1 px-2 rounded-xl text-xs text-blue-100 '
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
