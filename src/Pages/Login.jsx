import React from 'react'
import { Button } from '../StyledComponents/FormElements'
import useGoogleAuth from '../Authentication/useGoogleAuth';

const Login = () => {

  return (
    <div className='flex h-screen justify-center items-center'>
      <Button onClick={useGoogleAuth()}>Google Login</Button>
    </div>
  )
}

export default Login
