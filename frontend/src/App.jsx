import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import BlogSection from './components/sections/BlogSection';
import VideoSection from './components/sections/VideoSection';
import ContactForm from './components/ContactForm';
const App = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <Overview />
            <BlogSection />
            <VideoSection />
            <ContactForm />
        </>
    );
};

export default App;
