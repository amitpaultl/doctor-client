import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { json, useNavigate } from 'react-router-dom';
import Loding from '../../Loading/Loding';

const AddDoctor = () => {
    const navigate = useNavigate()
        // form control
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const imageHost = 'a63dcfb0e23fcf9045311a1d95d22ab8';
    const {data:specialties, isLoading}=useQuery({
        queryKey: ['specialty'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/optionSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleLogin = (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=a63dcfb0e23fcf9045311a1d95d22ab8`;
        fetch(url,{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgdata =>{
            if(imgdata.success){
                const doctor = {
                    image:imgdata.data.url,
                    name: data.name,
                    special: data.special,
                    email: data.email
                }
                console.log(doctor);
                fetch(`http://localhost:5000/doctors`,{
                    method:'POST',
                    headers:{

                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                    navigate('/dashboard/manageDoctor')
                } )
            }
             
        } )



    }
    if(isLoading){
        return <Loding></Loding>
    }

    return (
        <div>
            <h2 className='text-4xl'>Add Doctor</h2>
            <form onSubmit={handleSubmit(handleLogin)}>

                <div className="">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Name Address is required" })} className="max-w-xs input input-bordered w-full " />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", {required: "Email Address is required" })} className="input input-bordered  w-full max-w-xs" />

                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                </div>

                <div className="">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    
                    <select {...register('special')} className="select select-primary w-full max-w-xs">
                        {
                            specialties.map(special => <option value={special.name} key={special._id}>{special.name}</option>)
                        }
                    </select>
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    
                    <input type="file" {...register('image')}  />
                   
                </div>


                <input className='btn w-full max-w-xs mt-4' value='Submit' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;