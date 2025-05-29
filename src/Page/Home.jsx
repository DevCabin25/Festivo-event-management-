import React from 'react';
import Gallery from './Gallery';
import Testimonials from '../Components/Home/Testimonials';
import Hero from '../Components/Home/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Testimonials/>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;