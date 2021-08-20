import React from 'react';

const Project = props => {
    const { project } = props;
    return (
        <div
            className='
                            border-2 border-gray-700
                            rounded-lg
                            shadow-2xl
                            bg-white
                            flex flex-col
                            
                        '
        >
            <div className='border-b-2 border-gray-700'>
                <p className='text-lg p-4 text-gray-700 '>{project.title}</p>
            </div>

            <div className='flex space-x-2  px-2 border-b-2 border-gray-700 py-2 items-center'>
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className=' bg-blue-400 py-1 px-2 rounded-xl text-xs text-blue-100 '
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <img src={project.image} alt='' />
            <div className='bg-blue-200  rounded-b text-blue-500 border-t-2 border-gray-700 flex justify-between items-center'>
                <a
                    className='py-3 px-3  underline hover:text-blue-700'
                    href={project.link}
                >
                    Live Demo
                </a>
                <a className='py-3 px-3  underline hover:text-blue-700' href=''>
                    See the code{' '}
                </a>
            </div>
        </div>
    );
};

export default Project;
