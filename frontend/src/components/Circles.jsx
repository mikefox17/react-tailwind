import React from 'react';

const Circles = () => {
    return (
        <div>
            {/*             <!-- left circle decoration -->
             */}{' '}
            <div
                className='
                    absolute
                    top-0
                    left-0
                    transform
                    translate-x-4 translate-y-4
                '
            >
                <div
                    className='
                        absolute
                        bg-gradient-to-br
                        from-blue-100
                        to-blue-200
                        w-64
                        h-64
                        rounded-full
                        opacity-50
                    '
                ></div>
                <div
                    className='
                        absolute
                        ml-10
                        mt-10
                        bg-gradient-to-br
                        from-pink-100
                        to-pink-200
                        w-64
                        h-64
                        rounded-full
                        opacity-50
                    '
                ></div>
                <div
                    className='
                        absolute
                        ml-24
                        bg-gradient-to-br
                        from-orange-100
                        to-orange-200
                        w-64
                        h-64
                        rounded-full
                        opacity-50
                    '
                ></div>
            </div>
            {/*             <!-- right circle decoration -->
             */}{' '}
            <div
                className='
                    hidden
                    lg:block
                    absolute
                    top-0
                    right-0
                    mr-48
                    transform
                    -translate-x-64
                    translate-y-64
                '
            >
                <div
                    className='
                        absolute
                        bg-gradient-to-br
                        from-lime-100
                        to-lime-200
                        w-64
                        h-64
                        rounded-full
                        opacity-50
                    '
                ></div>
                <div
                    className='
                        absolute
                        ml-10
                        mt-10
                        bg-gradient-to-br
                        from-yellow-100
                        to-yellow-200
                        w-64
                        h-64
                        rounded-full
                        opacity-50
                    '
                ></div>
                <div
                    className='
                        absolute
                        ml-24
                        bg-gradient-to-br
                        from-pink-100
                        to-pink-200
                        w-64
                        h-64
                        rounded-full
                        opacity-50
                    '
                ></div>
            </div>
        </div>
    );
};

export default Circles;
