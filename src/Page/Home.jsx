import React from 'react';
import Gallery from './Gallery';
import Testimonials from '../Components/Home/Testimonials';
import Hero from '../Components/Home/Hero';
import AboutSection from '../Components/Home/AboutSection';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection/>
            <Testimonials/>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;