import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="p-0 m-0">
            <Menubar />
            <Banner />
            <Services />
            <About />
            <Features />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;