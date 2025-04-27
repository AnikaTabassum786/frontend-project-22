import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

    const [error, setError] = useState('')

    const handleSubmit=(e)=>{
      e.preventDefault()

      const email = e.target.email.value
      const password= e.target.password.value

      console.log(email,password)
      setError('')

      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result)
       
      })
      .catch((error)=>{
         console.log(error.message)
         setError(error.message)
      })
    
    }
    return (
        <div>
           <div className="hero  min-h-70vh">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card bg-base-100  max-w-sm shrink-0 ">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <div>
            {error && <p className='text-xl text-red-700'>{error}</p>}
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;