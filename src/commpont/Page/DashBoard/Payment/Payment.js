import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loding from '../../Loading/Loding';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_Stripe_key);
const Payment = () => {
    const { data } = useLoaderData()
    const navigation = useNavigation()
    const { appintmentDate, price, treatment, slots } = data[0]
    if(navigation.state === "loading"){
        return <Loding></Loding>
    }

    return (
        <div>
            <h1>Payment <strong>{treatment}</strong></h1>
            <p>Place Pay <strong>${price}</strong>For your appointment {slots} {appintmentDate}</p>
            <div className="w-96 my-12">

                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;