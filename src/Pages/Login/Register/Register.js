import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate()
    }
    const handleRegister = event => {
        event.preventDefault();
        
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div style={{textAlign: "center", color: 'blue'}} className='register-form'>
            <h2>This is Register</h2>
            <form onSubmit={handleRegister}>
                 <input type="text" name='name' id = '' placeholder='Your Name'/>
                 
                <input type="email" name="email" id="" placeholder='Email Address' required />
                
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value="Register" />
                
            </form>
            <p>New to Genius Car!! <Link to= "/login" className='text-danger text-decoration-none' onClick={navigateLogin} >Please Login</Link></p>
        </div>
    );
};

export default Register;