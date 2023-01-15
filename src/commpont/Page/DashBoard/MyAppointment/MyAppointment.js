import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';

const MyAppointment = () => {
    const {user} = useContext(AuthProvider);
    const url = `https://doctor-server-sigma.vercel.app/booking?email=${user?.email}`;
    const {data : booking = [] }=  useQuery({
        queryKey:['booking', user?.email],
        queryFn: async () =>{
            const res = await fetch(url,{
                headers: { authorization: `bearer ${localStorage.getItem('accessToken')}`}
                   
            });
            const data = await res.json();
            return data
        }
    })

   
    return (
        <div>
            <h2 className='text-2xl mb-4'>My Appointment</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Tk</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                booking?.data?.map((bookings, i) =><tr key={bookings?._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{bookings?.patient}</td>
                                <td>{bookings?.treatment}</td>
                                <td>{bookings?.slots}</td>
                                <td>
                                    {
                                        bookings?.price && !bookings?.paid && <Link to={`/dashboard/payment/${bookings?._id}`}><button className='btn '>Pay</button></Link>
                                    }
                                    {
                                        bookings?.price && bookings.paid && <span className='text-green-500'>paid</span>
                                    }
                                </td>
                            </tr>)
                            }
                            
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;