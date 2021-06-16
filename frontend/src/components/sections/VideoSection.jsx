import React from 'react';
import Video from '../Video';

const VideoSection = () => {
    return (
        <div className='px-10 mx-auto container  bg-green-400 rounded-lg py-24'>
            <h2 className='text-5xl text-center font-bold py-24 text-green-100 italic'>
                Watch as I Learn
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    );
};

export default VideoSection;