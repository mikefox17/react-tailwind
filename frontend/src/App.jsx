import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import BlogSection from './components/BlogSection';
import VideoSection from './components/VideoSection';
const App = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <Overview />
            <BlogSection />
            <VideoSection />
        </>
    );
};

export default App;
