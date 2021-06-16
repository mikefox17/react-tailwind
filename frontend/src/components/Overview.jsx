import React from 'react';
import Video from './Video';

const Overview = () => {
    return (
        <div className='pb-24 bg-gray-300 text-center'>
            <div className='container mx-auto px-10'>
                <h2>Some Tutorials I've Made</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo voluptate impedit eius magni dolores soluta libero
                    nisi. Unde aspernatur quis dolorum molestias reprehenderit
                    consequatur placeat eligendi tenetur, iste sapiente eius!
                </p>

                <div
                    class='
                        lg:flex
                        lg:space-x-8
                        text-left
                        space-y-8
                        lg:space-y-0
                    '
                >
                    {' '}
                    <Video />
                    <Video />
                </div>
            </div>
        </div>
    );
};

export default Overview;
