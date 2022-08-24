import React from 'react';
import google1 from '../../../images/social/google1.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if(loading || loading1) {
        return <Loading></Loading>
    }

    if(error||error1)
      errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '15px' }} src={google1} alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button >
                <button
                   
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '20px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign in</span>
                </button>
                <button
                 onClick={() => signInWithGithub()}
                className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '20px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;