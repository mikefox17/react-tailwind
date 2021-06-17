import React from 'react';

export const BlogCard = props => {
    const { posts } = props;
    return (
        <div>
            {posts &&
                posts.map(post => (
                    <div className='border border-gray-700 rounded-lg col-span-1 shadow-xl mt-8 hover:shadow-2xl transition duration-300'>
                        <img
                            src='https://images.unsplash.com/photo-1561883088-039e53143d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                            alt=''
                            className='rounded-t-lg'
                        />{' '}
                        <div className='p-4 border-b-2 border-orange-400'>
                            <a
                                href='#'
                                className='font-bold text-lg text-gray-700'
                            >
                                {post.title}
                            </a>
                        </div>
                        <p className='p-4 text-lg text-gray-600'>{post.body}</p>
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
                ))}
        </div>
    );
};

export default BlogCard;
