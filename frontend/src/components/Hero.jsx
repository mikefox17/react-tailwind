import React from 'react';
import Button from '../components/Button';
import Circles from './Circles';

const Hero = () => {
    return (
        <div className='relative bg-orange-100'>
            <Circles />
            <div className='container py-32 mx-auto px-10  bg-orange-100'>
                <div className='text-center bg-orange-100'>
                    <h2 className='mb-4 text-5xl font-extrabold text-blue-500 bg-orange-100'>
                        Web Development Made Easy
                    </h2>
                    <p className='text-lg mb-10 text-orange-400 bg-orange-100'>
                        Designed for your brand.{' '}
                        <span className='font-bold text-blue-500'>
                            WordPress
                        </span>{' '}
                        &{' '}
                        <span className='font-bold text-blue-500'>
                            Sanity.io
                        </span>{' '}
                        CMS development.
                    </p>
                    <Button
                        bgColor='yellow-500'
                        textColor='yellow-100'
                        text='See Our Work'
                        url='#'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
