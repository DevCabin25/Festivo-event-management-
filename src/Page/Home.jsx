import React from 'react';
import Gallery from './Gallery';
import Testimonials from '../Components/Home/Testimonials';
import Hero from '../Components/Home/Hero';
import AboutSection from '../Components/Home/AboutSection';
import ServiceSection from '../Components/Home/ServiceSection';
import Plan from '../Components/Home/Plan';
import FaqSection from '../Components/Home/FaqSection';
import Packegs from '../Components/Home/Packegs';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection/>
            <ServiceSection/>
            <Testimonials/>
             <Plan/>
            
            <FaqSection/>
           <Gallery></Gallery>
           <Packegs></Packegs>
        </div>
    );
};

export default Home;