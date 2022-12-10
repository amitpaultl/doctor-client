import React from 'react';
import Doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import ButtonCompont from '../../../ButtonCompont/ButtonCompont';

const MakAppointment = () => {
    return (
        <section className='mt-12' style={{
            background:`url(${appointment})`
        }}>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Doctor} alt='' className=" -mt-32 hidden md:block lg:w-1/2 rounded-lg " />
                    <div >
                        <p  className='text-primary font-bold'>Appointment</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonCompont>GET STARTED</ButtonCompont>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakAppointment;