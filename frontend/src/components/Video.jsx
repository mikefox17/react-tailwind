import React from 'react';

const Video = props => {
    return (
        <div
            className='
                            border-2 border-gray-700
                            rounded-lg
                            shadow-2xl
                            bg-white
                        '
        >
            <p className='text-lg p-4 text-gray-700'>
                Check out this other tutorial; we will build a simple blog using
                react and sanity.io
            </p>
            <iframe
                className='w-full rounded-b'
                height='315'
                src='https://www.youtube.com/embed/hY1Uqv-f-UY'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
