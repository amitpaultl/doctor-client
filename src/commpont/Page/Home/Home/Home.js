import React from 'react';
import Banner from '../Banner/Banner';
import Concate from '../Concate/Concate';
import InfoData from '../InfoCard/InfoData';
import MakAppointment from '../MakeAppointment/MakAppointment';
import ServiceData from '../Service/ServiceData';
import TestimonialData from '../Testimonial/TestimonialData';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <InfoData></InfoData>
            <ServiceData></ServiceData>
            <MakAppointment></MakAppointment>
            <Concate></Concate>
            <TestimonialData></TestimonialData>
        </div>
    );
};

export default Home;