import React from 'react';

const Service = ({service}) => {
    const {name,description,img,bgClass} = service
    return (
        <div>
            <div className="text-center card card-compact bg-base-100 shadow-xl py-8 px-14">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;