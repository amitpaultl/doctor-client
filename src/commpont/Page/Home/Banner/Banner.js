import { format } from 'date-fns';
import React, { useState } from 'react';
// import { DayPicker } from 'react-day-picker';
import Bannerimg from '../../../assets/images/chair.png';
import './Banner.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Banner = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [startDa, setStartDa] = useState(new Date())
    const date = format(startDate, 'PP')
    const dat = format(startDa, 'PP')
    console.log(date);
    console.log(dat);

    // const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="hero bg-hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Bannerimg} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
                {/* <DayPicker
                
                mode='single'
                onSelect={setStartDate}
                selected={startDate}
                ></DayPicker> */}

            <div>

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={startDa} onChange={(date) => setStartDa(date)} />
                
            </div>

        </>
    );
};

export default Banner;