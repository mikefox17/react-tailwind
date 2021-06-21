import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div className='py-10'>
            <div className=' text-gray-600 bg-gray-100 fixed inset-x-0 top-0 z-10'>
                <div className='h-1 bg-gradient-to-r from-pink-300 to-orange-300 w-full absolute bottom-0'></div>{' '}
                <div className='container px-10 py-6 lg:px-0 mx-auto flex justify-between items-center'>
                    {/* leftside */}
                    <div>
                        <Link
                            to='/'
                            className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 text-2xl font-bold'
                        >
                            Foxtree.io
                        </Link>
                    </div>
                    {/* rightride */}
                    <div className='space-x-4  space-x-8'>
                        <HashLink
                            to='/#tuts'
                            className='hidden lg:inline-block hover:text-gray-800'
                        >
                            Tutorials
                        </HashLink>
                        <HashLink
                            to='/#blog'
                            className='hidden lg:inline-block hover:text-gray-800'
                        >
                            Blog Posts
                        </HashLink>
                        <HashLink
                            to='/#contact'
                            className='bg-gradient-to-r from-pink-500 to-orange-500 py-3 px-10 rounded text-pink-100 font-semibold text-lg shadow-lg hover:shadow-2xl transform transition duration-300 '
                        >
                            Contact
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
