import React from 'react';

const InfoCards = ({card}) => {
    const {name,description,img,bgClass} = card
    return (
        <div>
            <div className={`card p-6 md:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure>
                    <img src={img} alt="" />
                    </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;