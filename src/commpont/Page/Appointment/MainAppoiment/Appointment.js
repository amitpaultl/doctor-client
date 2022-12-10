import React, { useState } from 'react';
import AppintmentBanner from '../AppintmentBanner/AppintmentBanner';
import AvailabeAppointmrnts from '../AvailabeAppointments/AvailabeAppointmrnts';


const Appointment = () => {
    const [selectDate, setSecelectDate] = useState(new Date())

    return (
            <div>
                <AppintmentBanner
                    selectDate={selectDate}
                    setSecelectDate={setSecelectDate}
                ></AppintmentBanner>
                
                <AvailabeAppointmrnts selectDate={selectDate}></AvailabeAppointmrnts>

            </div>
    );
};

export default Appointment;