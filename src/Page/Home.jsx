import React from 'react';
import Gallery from './Gallery';
import Testimonials from '../Components/Home/Testimonials';
import Hero from '../Components/Home/Hero';
import AboutSection from '../Components/Home/AboutSection';
import ServiceSection from '../Components/Home/ServiceSection';
import Plan from '../Components/Home/Plan';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection/>
            <ServiceSection/>
            <Testimonials/>
             <Plan/>
            <Gallery></Gallery>
           
        </div>
    );
};

export default Home;