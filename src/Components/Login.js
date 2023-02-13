import React, { useRef, useState } from 'react';

import '../App.css';
import logo from '../logo.svg';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

function Login() {

  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const btnRef = useRef(null);
  
  const {setAuth} = useAuth();

  const onSubmit = async (data) => {
    
    const {userName, userPassword} = data;

    try {
      
      const response = await fetch('https://localhost:44346/api/login', {
      method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userName,
            userPassword
          })
      })
      const content = await response.json();

      localStorage.setItem('token',content.Response.token);
      setAuth(content.Response);
      
     //console.log(content.Response)
      reset()
      
  } catch (error) {
     
  }
}

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-2 gap-4'>
      <div>
        <div className='shadow-2xl bg-slate-300'>faa</div>
      </div>
      <div>
      <form className='flex flex-col p-20 shadow-2xl'
      onSubmit={handleSubmit(onSubmit)}>
      <img 
         src={logo}
         alt='Imagen logo'
         className='mx-auto'
         width = {106}
         height= {62}
         />
      <p className='text-center text-2xl'>Log In</p>
      <input
       {...register('userName', { required: 'Ese campo es requerido.' })}
        type='text'
        placeholder='User'
        className='bg-bggray w-full mt-2 p-2 rounded-lg border-2'
      />
        { errors.userName && <span className='text-red-500'>{errors.userName.message}</span>}
       <input
        {...register('userPassword', { required: 'Ese campo es requerido.' })}
        type='password'
        placeholder='Password'
        className='bg-bggray w-full mt-2 p-2 rounded-lg border-2'
      />
       { errors.userPassword && <span className='text-red-500'>{errors.userPassword.message}</span>}
       <button className='border-4 rounded-lg bg-cyan-500 mt-5' ref={btnRef}>Iniciar</button> 
      </form>
      </div>
      </div>
     
    </div>
  );
}

export default Login;