import React from 'react';
import Bannerimg from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppintmentBanner = ({selectDate,setSecelectDate}) => {
    return (
        <div>
            <div>
                <div className="hero bg-hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Bannerimg} alt='' className="w-1/2  max-w-sm rounded-lg shadow-2xl" />
                        <div className='mr-10'>
                            <DayPicker
                                mode='single'
                                selected={selectDate}
                                onSelect={setSecelectDate}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppintmentBanner;