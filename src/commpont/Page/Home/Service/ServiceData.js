import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import fluoride from '../../../assets/images/fluoride.png'
import treatment from '../../../assets/images/treatment.png'
import Service from './Service';
import './Service.css'

const ServiceData = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening,
        }
    ]
    return (
        <div className=''>
            {/* TITLE */}
            <div className="hero ">
                <div className="hero-content text-center pt-32 pb-16">
                    <div className="max-w-md">
                        <p className='text-primary font-bold'>OUR SERVICES</p>
                        <h1 className="text-3xl">Services We Provide</h1>


                    </div>
                </div>
            </div>
            {/* SERVICE */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cardData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            {/* Exceptional */}
            <div className="hero container my-40">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={treatment} className="md:w-1/2 img-hight rounded-lg shadow-2xl" alt='' />
                    <div className=' md:w-1/2 md:ml-20'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;