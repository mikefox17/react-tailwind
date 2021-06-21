import Hero from './sections/Hero';
import Overview from './sections/Overview';
import BlogSection from './sections/BlogSection';
import VideoSection from './sections/VideoSection';
import ContactSection from './sections/ContactSection';
import React from 'react';

const Home = () => {
    return (
        <>
            <Hero />
            <Overview />
            <BlogSection />
            <VideoSection />
            <ContactSection />
        </>
    );
};

export default Home;
