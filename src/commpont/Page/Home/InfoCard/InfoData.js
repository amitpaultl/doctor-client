import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phon from '../../../assets/icons/phone.svg'
import InfoCards from './InfoCards';

const InfoData = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Ipsum simply dummy text of the pri',
            img: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States ',
            img: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            img: phon,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
       

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cardData.map(card => <InfoCards card={card} key={card.id}></InfoCards>)
                }
            </div>
       
    );
};

export default InfoData;