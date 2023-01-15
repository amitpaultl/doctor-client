import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loding from '../../Loading/Loding';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
    const [deleteingDoctor, setDeleteingDoctor]=useState(null);
    const closeModal = ()=>{
        setDeleteingDoctor(null)
    } 

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctor-server-sigma.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },

                })
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    const successAction=(modalData)=>{
        fetch(`https://doctor-server-sigma.vercel.app/doctors/${modalData._id}`,{
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch()
        })

    }

    if (isLoading) {
        return <Loding></Loding>
    }
    return (
        <div>
            <h2 className='text-4xl'>Manage Doctor {doctors?.data.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                doctors?.data?.map((bookings, i) => <tr key={bookings?._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={bookings?.image} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{bookings?.name}</td>
                                    <td>{bookings?.email}</td>
                                    <td>{bookings?.special}</td>
                                    <td>
                                        
                                    <label
                                        onClick={()=>setDeleteingDoctor(bookings)}
                                        htmlFor="confirmationModal" 
                                        className='btn btn-xs btn-error'>Delete</label>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
            {
                 deleteingDoctor && <ConfirmationModal
                 title={`Are you sure you went to delete ?`}
                 message={`If you delete ${deleteingDoctor.name}`}
                 closeModal={closeModal}
                 successAction={successAction}
                 modalData={deleteingDoctor}
                 successButton={'Delete'}
                 >

                 </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctor;