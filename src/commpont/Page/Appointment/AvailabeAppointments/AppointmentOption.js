import React from 'react';
import ButtonCompont from '../../../ButtonCompont/ButtonCompont';

const AppointmentOption = ({ option,setTetment }) => {
    const { name, slots,price } = option
    return (
        <div className="card text-center bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className=" text-center text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}</p>
                <p>Price $ {price}</p>
                <div className="card-actions justify-center">
                    <ButtonCompont>
                    <label 
                    disabled={slots.length === 0}
                    onClick={()=>setTetment(option)} 
                    htmlFor="booking-modal" 
                    >Book Appointment</label>
                    </ButtonCompont>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;