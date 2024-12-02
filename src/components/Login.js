import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const handleSignUp = () =>{
    setIsLogin(!isLogin)
  }
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images8.alphacoders.com/118/thumb-1920-1185403.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="relative flex items-center justify-center min-h-screen">
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg bg-opacity-90">
          <h1 className="font-bold text-3xl mb-6 text-center">Login</h1>
          
          {
            !isLogin && 
            <input
            type="text"
            placeholder="Email address"
            className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          }
          <input
            type="text"
            placeholder="Email address"
            className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="block w-full bg-red-500 text-white font-semibold p-3 rounded-md hover:bg-red-600 transition"
          >
            {/* {!isSignUpForm ? "Sign Up" : 'Log In'} */}
          {isLogin ? 'Login' : 'Signup'}
          </button>
          <p className='p-1 mt-2 font-bold cursor-pointer' onClick={handleSignUp}>{!isLogin ? "Already have account ? Login.." : "Didn't have account ? Sign Up"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
