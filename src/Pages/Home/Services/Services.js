import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-services1-server.onrender.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id = 'services' className='container'>
          <div className="row">
          <h2 className='text-primary text-center m-5'>Our Services</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
          </div>
        </div>
    );
};

export default Services;