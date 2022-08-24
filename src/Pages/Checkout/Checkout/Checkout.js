import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId, 
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!')
                event.target.reset();
            }
        })

    }

    // const [user, setUser] = useState({
    //     name: 'Akbar the great',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '01312293233'
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.vlaue);
    //     const {address, ...rest} = user;
    //     const newAdress = event.target.value;
    //     const newUser = {address:newAdress, ...rest};
    //     console.log(newUser);
    //     setUser(newUser)
    // }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' type="text" name='name' value={user.displayName} placeholder='name' required readOnly/>
                <input className='w-100 mb-2' type="text" name='email' value={user.email} placeholder='Email' required readOnly disabled/>
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Service' required readOnly />
                <input className='w-100 mb-2' type="text"name='address' placeholder='Address' autoComplete='off' required />
                <input className='w-100 mb-2' type="text" name='phone'  placeholder='Phone' autoComplete='off' required />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default Checkout;