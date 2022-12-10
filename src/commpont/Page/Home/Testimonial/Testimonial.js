import React from 'react';

const Testimonial = ({ test }) => {
    const { name, description, place, img } = test
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description}</p>

                    <div className="flex items-center py-4">
                        <div className="avatar mr-6">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg">{name}</p>
                            <p>{place}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;