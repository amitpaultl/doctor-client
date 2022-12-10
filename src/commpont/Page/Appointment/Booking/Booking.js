import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Booking = ({ tetment, selectDate,setTetment ,refetch}) => {
    // auth context
    const {user}=useContext(AuthProvider)
    const date = format(selectDate, 'PP')

    const handalSubmit=(e)=>{
        e.preventDefault()
        const form = e.target
        const slots = form.slecct.value
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const booking = {
            appintmentDate: date,
            treatment:tetment.name,
            slots,
            patient:name,
            email,
            phone,
            price:tetment.price

        }
        // fetch
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.success){
                toast.success('Successfully add crd')
                refetch()
            }
            setTetment(null)
        })
        
        
    }

    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{tetment.name}</h3>
                    <form onSubmit={handalSubmit} className='grid grid-cols-1 gap-3 mt-10'>

                        <input type="text" defaultValue={date}  className="input input-bordered input-primary w-full" />
                        <select name='slecct' className="select select-primary w-full ">
                            {
                                tetment.slots.map((slot ,i)=><option key={i} value={slot}>{slot}</option>)
                            }
                            
                            
                        </select>
                        <input type="text" name='name' placeholder="Your name" defaultValue={user?.displayName} className="input input-bordered input-primary w-full" />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered input-primary w-full" />
                        <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered input-primary w-full" />
                        <input type="submit" value='Submit' className="btn  input-primary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;