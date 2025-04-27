import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const [error,setError] = useState('')
    const [success,setSuccess] = useState(false)
    const emailRef = useRef()
    const handleLogin=(e)=>{

          e.preventDefault()

          const email= e.target.email.value
          const password = e.target.password.value
          console.log(email,password)

          //Reset
          setError(' ')
          setSuccess(false)

          //Login 
          signInWithEmailAndPassword(auth,email,password)
          .then(result=>{
            if(result.user.emailVerified === true)
            {
                setSuccess(true)
                console.log(result)
            }
            else{
                alert('Please Verify You Email')
                console.log(result)
            }
            
          })
          .catch(error=>{
            console.log(error)
            setError(error.message)
          })
    }

    const handleForgot=()=>{
       console.log(emailRef.current.value)
       const email = emailRef.current.value;

       sendPasswordResetEmail(auth, email)
       .then(()=>{
        alert('A password reset email is send. Please Check Your email')
       })
    }

    return (
        <div>
            <div className="hero min-h-70vh">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <label className="label font-semibold text-lg mt-4">Email</label>
                                <input type="email" name='email' ref={emailRef} className="input mt-2" placeholder="Email" />
                                <label className="label font-semibold text-lg mt-8">Password</label>
                                <input type="password" name='password' className="input mt-2" placeholder="Password" />
                                <div onClick={handleForgot}><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                             <div>
                                <p>New to this website? Please <Link className='text-blue-600 font-semibold hover:underline' to='/sign-up'>Sign Up</Link></p>
                             </div>
                             <div>
                                {
                                    success && <p className='text-green-600'>Login Successfully</p>
                                }
                             </div>
                            <div>
                                {error && <p className='text-red-600'>{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;