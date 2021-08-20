import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const hello = (name) => {
        console.log(`hello there ${name}`);
    }
    hello('mike')
    
    return (
        <div className='bg-gray-800 py-12 px-10 mx-auto w-full text-center mt-auto'>
            <div className='flex items-center justify-center '>
                <div className='text-gray-400'>
                    <h3 className='text-xl text-center'>
                        Developed by Mike Fox &copy; 2021{' '}
                    </h3>
                    Follow me on socials 👇👇
                </div>
            </div>
            <div className='flex text-3xl text-gray-400 mt-4 justify-center items-center '>
                <a
                    className='hover:text-gray-600'
                    href='https://www.youtube.com/channel/UCPEEwc1dPVXv2azLNtrqxoA'
                    target='_blank'
                >
                    <FaYoutube className='m-2' />
                </a>
                <a
                    className='hover:text-gray-600'
                    href='https://github.com/mikefox17'
                    target='_blank'
                >
                    <FaGithub className='m-2' />
                </a>
                <a
                    className='hover:text-gray-600'
                    href='https://www.instagram.com/thefoxdownstairs/?hl=en'
                    target='_blank'
                >
                    <FaInstagram className='m-2' />
                </a>
            </div>
        </div>
    );
};

export default Footer;
