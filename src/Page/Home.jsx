import React from 'react';
import Gallery from './Gallery';
import Testimonials from '../Components/Home/Testimonials';
import Hero from '../Components/Home/Hero';
import AboutSection from '../Components/Home/AboutSection';
import ServiceSection from '../Components/Home/ServiceSection';
import Plan from '../Components/Home/Plan';
import FaqSection from '../Components/Home/FaqSection';
import Packegs from '../Components/Home/Packegs';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
             <Hero/>
             <AboutSection/>
             <ServiceSection/>
             <Testimonials/>
             <section className='flex flex-col justify-center items-center my-4' >
                <Packegs></Packegs>
             <Link to={'/customplan'} className='px-4 py-2 bg-purple-300 rounded-md'>Custom Plan</Link>
             </section>
             <FaqSection/>
             <Gallery></Gallery>
           
        </div>
    );
};

export default Home;