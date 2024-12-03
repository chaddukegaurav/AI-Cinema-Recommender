import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleSignUp = () => {
    setIsLogin(!isLogin);
  };

  const [credentialMessage, setCredentialMessage] = useState(null);

  const name = useRef()
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    //validate the form data

    const message = checkValidData(name?.current?.value, email?.current?.value, password?.current?.value);
    setCredentialMessage(message);
  };
  return (
    <div className='relative min-h-screen bg-gray-100'>
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='https://images8.alphacoders.com/118/thumb-1920-1185403.jpg'
          alt='logo'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Form Container */}
      <div className='relative flex items-center justify-center min-h-screen'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg bg-opacity-90'
        >
          <h1 className='font-bold text-3xl mb-6 text-center'>
            {!isLogin ? 'Sign Up' : 'Login'}
          </h1>

          {!isLogin && (
            <input
              ref={name}
              type='text'
              placeholder='Enter your name'
              className='block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          )}
          <input
            ref={email}
            type='text'
            placeholder='Email address'
            className='block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <p className='text-red-600 text-center  mb-3 font-bold'>
            {credentialMessage}
          </p>
          <button
            className='block w-full bg-red-500 text-white font-semibold p-3 rounded-md hover:bg-red-600 transition'
            onClick={handleButtonClick}
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
          <p
            className='p-1 mt-2 font-bold cursor-pointer'
            onClick={handleSignUp}
          >
            {!isLogin
              ? 'Already have account ? Login..'
              : "Didn't have account ? Sign Up"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
