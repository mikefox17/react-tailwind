import React from 'react';

const ContactForm = () => {
    return (
        <div className='py-32 container mx-auto px-10 md:w-1/2'>
            <h2 className='text-5xl font-bold mb-2 text-center text-blue-400'>
                Get in Touch
            </h2>
            <p className='text-gray-300 text-center text-lg mb-10'>
                Let's talk all things tech, memes, D&D, and NBA.
            </p>
            <form
                className='text-xl mx-auto  bg-gray-400 rounded-lg p-12'
                name='contact'
                method='post'
            >
                <input type='hidden' name='form-name' value='contact' />
                <p className='flex bg-white mb-2 rounded p-2 text-gray-400'>
                    <label
                        className='border-r-2 border-orange-400 pr-2'
                        htmlFor='name'
                    >
                        Name
                    </label>{' '}
                    <br />
                    <input type='text' id='name' name='name' required />
                </p>
                <p className='flex bg-white mb-2 rounded p-2 text-gray-400'>
                    <label
                        className='border-r-2 border-orange-400 pr-2'
                        htmlFor='email'
                    >
                        Email
                    </label>{' '}
                    <br />
                    <input type='email' id='email' name='email' required />
                </p>
                <p className='flex bg-white mb-2 rounded p-2 text-gray-400 items-center'>
                    <label
                        className='border-r-2 border-orange-400 pr-2'
                        htmlFor='message'
                    >
                        Message
                    </label>{' '}
                    <br />
                    <textarea id='message' name='message' required></textarea>
                </p>
                <p>
                    <input
                        className='py-3 px-6 rounded-lg  mt-4 shadow-lg bg-orange-400 text-orange-200'
                        type='submit'
                        value='Submit message'
                    />
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
