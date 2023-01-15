import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const {data:users = [], refetch} = useQuery({
        queryKey:['createUser'],
        queryFn: async() =>{
            const res = await fetch('https://doctor-server-sigma.vercel.app/createUser');
            const data = await res.json();
            return data
        }
    })

    const handeleMakeAdmin =id=>{
        fetch(`https://doctor-server-sigma.vercel.app/createUser/admin/${id}`,{
            method : 'PUT',
            headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch()
        })
    }
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
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.data?.map((bookings, i) =><tr key={bookings?._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{bookings?.name}</td>
                            <td>{bookings?.email}</td>
                            <td>{bookings?.role !== 'admin' && <button onClick={()=>handeleMakeAdmin(bookings?._id)} className='btn btn-xs btn-primary'>Admin</button>}</td>
                            <td><button className='btn btn-xs '>Delete</button></td>
                        </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default AllUser;