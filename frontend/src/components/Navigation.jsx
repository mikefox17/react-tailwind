import React from 'react';

const Navigation = () => {
    return (
        <div className='relative text-gray-600 bg-gray-100'>
            <div class='h-1 bg-gradient-to-r from-pink-300 to-orange-300 w-full absolute bottom-0'></div>{' '}
            <div className='container px-6 py-6 lg:px-0 mx-auto flex justify-between items-center'>
                {/* leftside */}
                <div>
                    <a
                        className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 text-2xl font-bold'
                        href='#'
                    >
                        Foxtree.io
                    </a>
                </div>
                {/* rightride */}
                <div className='space-x-4 lg:space-x-8'>
                    <a href='#'>About</a>
                    <a href='#'>Portfolio</a>
                    <a
                        className='bg-gradient-to-r from-pink-500 to-orange-500 py-3 px-6 rounded text-pink-100 font-semibold text-lg shadow-lg hover:shadow-2xl transform transition duration-300 '
                        href='#'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
