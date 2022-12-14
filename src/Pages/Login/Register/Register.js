import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateErrror] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, {replace: true})
    }

    const handleRegister =async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
          console.log('Updated profile');
          navigate('/home');
    }
    return (
        <div style={{ textAlign: "", color: '' }} className='register-form'>
            <h2 style={{ textAlign: 'center' }}>This is Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className = {agree ? 'ps-2 text-primary': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms ans Condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms ans Condition</label>
                <input
                disabled = {!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>New to Genius Car!! <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin} >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;