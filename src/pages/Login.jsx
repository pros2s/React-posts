import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import PostInput from '../components/UI/input/PostInput';
import { AuthContext } from '../context/context';

import '../styles/login.scss';


const Login = () => {
  //eslint-disable-next-line
  const { isAuth, setIsAuth } = useContext(AuthContext);


  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
  };

  return (
    <div className='login'>
      <h2 className='login__title'>log in</h2>
      <form
        onSubmit={ login }
        className='login__form'
        id='submit'>
          <PostInput
            type='text'
            placeholder='Enter your login'/>
          <PostInput
            type='password'
            placeholder='Enter your password'/>

          <Button
            className='login__btn'
            variant='outline-secondary'
            type='submit'>
              Log In
          </Button>
      </form>
    </div>
  );
};


export default Login;
