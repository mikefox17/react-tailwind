import Hero from './sections/Hero';
import Overview from './sections/Overview';
import BlogSection from './sections/BlogSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import React from 'react';

const Home = () => {
    return (
        <>
            <Hero />
            <Overview />
            <BlogSection />
            <ProjectSection />
            <ContactSection />
        </>
    );
};

export default Home;
