import React from 'react';
import classes from './login.module.css';
import Login from '@/components/Login'

const login = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mt-10'>Login Page</h1>

<Login />

      <button className={classes.loginBtn}>Login Now</button>
    </div>
  )
}

export default login;