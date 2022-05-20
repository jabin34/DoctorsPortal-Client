import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import YourTerms from '../YourTerms/YourTerms';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <YourTerms/>
            <MakeAppointment/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;