import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';


const SignUp = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    const terms = e.target.terms.checked

    console.log(email, password, terms)

    if (terms === false) {
      setError('Accept  terms and condition')
      return
    }


    setError('')
    setSuccess(false) // is used inside handleSubmit to reset the success status before starting a new submission.

    const isDigit = /\d/;
    const isUpperCase = /[A-Z]/;
    const isLowerCase = /[a-z]/

    if (isDigit.test(password) === false) {
      setError('Password Must Have digit')
      return
    }
    else if (isUpperCase.test(password) === false) {
      setError('Password Must Have Capital Letter')
      return;
    }
    else if (isLowerCase.test(password) === false) {
      setError('Password Must Have Small Letter')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result)
        // Verify Email
       
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          setSuccess(true)
          alert('We sent a verification email. Please check your email')
        })

      })
      .catch((error) => {
        console.log(error.message)
        setError(error.message)
      })

  }
  return (
    <div>
      <div className="hero min-h-70vh ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100  max-w-sm shrink-0 ">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <label className="label">Email</label>
                <input type="email" name='email' className="input mt-2" placeholder="Email" />
                <label className="label mt-4">Password</label>
                <div className='flex justify-center items-center relative mt-2'>
                  <input
                    type={`${showPassword ? 'text' : 'password'}`}
                    name='password'
                    className="input"
                    placeholder="Password" />

                  <div onClick={handleToggle} className='absolute ml-48 cursor-pointer'>
                    {
                      showPassword ? <FaEyeSlash /> : <FaEye />
                    }
                  </div>
                </div>
                <div className='mt-4'><a className="link link-hover">Forgot password?</a></div>
                <label className="label mt-4">
                  <input name='terms' type="checkbox" className="checkbox" />
                  Accept Terms & Condition
                </label>
                <div className='mt-4'>
                  <button className="btn btn-neutral ">Sign Up</button>
                </div>
                <p>Already Have an Account <Link to='/login' className='text-blue-600 font-semibold hover:underline'>Login</Link></p>
              </form>

              <div>
                {error && <p className='text-xl text-red-700'>{error}</p>}
              </div>
              <div>
                {
                  success && <p className='text-xl text-green-600'>User Created Account Successfully</p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;