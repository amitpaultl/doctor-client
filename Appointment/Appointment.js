import React, { useState } from 'react';
import Bannerimg from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const Appointment = () => {
    const [selectDate, setSecelectDate] = useState(new Date())
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Bannerimg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <DayPicker
                    mode='single'
                    selected={selectDate}
                    onSelect={setSecelectDate}
                    />
                    <p>your select data {format(selectDate,'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;