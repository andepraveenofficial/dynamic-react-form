import React from 'react'
import { Button } from '../StyledComponents/FormElements'
import useGoogleAuth from '../Authentication/useGoogleAuth';

/* -----> Assets <----- */
import googleImage from "../Assets/google.png";

const Login = () => {

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-xl mb-8 font-bold text-slate-800'>Login with Google Authentication</h1>
      <Button onClick={useGoogleAuth()} style={{backgroundColor:"transparent"}} className='shadow-2xl w-52 rounded border  border-slate-800' ><div className='flex flex-row gap-2'><img src={googleImage}  width="25px" height="25px"/><p className='text-black'>SignIn</p></div></Button>
    </div>
  )
}

export default Login
