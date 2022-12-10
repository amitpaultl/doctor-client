import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setprocessing] = useState(false)
    const [transactionid, setTransactionid] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {price,email,patient,_id } = booking[0]

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json" ,
            authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('');
        }
        setSuccess('')
        setprocessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email:email, 
                },
              },
            },
        );

        if(confirmError){
            setCardError(confirmError.message);
            return
        }

console.log('pamente',paymentIntent);

    if(paymentIntent.status === "succeeded"){
        setSuccess('Congrats! your pament');
        setTransactionid(paymentIntent.id);
         const payment ={
            price,
            transactionId:paymentIntent.id,
            email,
            bookingId:_id
         }
        fetch('http://localhost:5000/payments',{
            method: "POST",
            headers: {
              "Content-Type": "application/json" ,
              authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
            body: JSON.stringify(payment),
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            setSuccess('Congrats! your pament');
            setTransactionid(paymentIntent.id);
        })
    }
    setprocessing(false)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm my-10 bg-success' type="submit" disabled={!stripe || processing || !clientSecret}>
                    Pay
                </button>
            </form>
                <p className='text-red-500'>{cardError}</p>
                {
                    success && <div>
                        <p className='text-green-400'>{success}</p>
                        <p>Your TransactionId {transactionid}</p>
                    </div>
                }
        </>
    );
};

export default CheckoutForm;