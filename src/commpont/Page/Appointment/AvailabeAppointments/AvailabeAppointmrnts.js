import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loding from '../../Loading/Loding';
import Booking from '../Booking/Booking';
import AppointmentOption from './AppointmentOption';

const AvailabeAppointmrnts = ({selectDate}) => {

    const [tetment, setTetment] = useState(null);
    const date = format(selectDate, 'PP')
    const {data: appointmentdate = [],refetch, isLoading}=useQuery({
        queryKey:['option'],
        queryFn: async () => {
            const res = await fetch(`https://doctor-server-sigma.vercel.app/option?date=${date}`)
            const data = await res.json();
            return data.data
        }
    })

if(isLoading){
    return <Loding></Loding>
}


    return (
        <section>

            <div className='my-16'>
                <p   className='text-primary font-bold text-center'>Available Appointments on {format(selectDate, 'PP')} </p>
            </div>
            {/* appointment date select */}
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16'>
                {
                    appointmentdate.map(option => <AppointmentOption setTetment={setTetment} key={option._id} option={option}></AppointmentOption>)
                }
            </div>
            {
                tetment && <Booking
                selectDate={selectDate}
                tetment={tetment}
                setTetment={setTetment}
                refetch={refetch}
                ></Booking>
            }
            
        </section>
    );
};

export default AvailabeAppointmrnts;