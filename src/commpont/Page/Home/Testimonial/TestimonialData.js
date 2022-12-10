import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial';

const TestimonialData = () => {

    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place:'California',
            img: people1,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place:'California',
            img: people2,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place:'California',
            img: people3,
        }
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <h1 className="text-2xl md:text-5xl">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cardData.map(test=><Testimonial test={test} key={test.id}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default TestimonialData;