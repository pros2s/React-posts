import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/context';

import '../styles/nav.scss';


const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)


  const logOut = (event) => {
    event.preventDefault();
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };

  return (
    isAuth
        ?
      <nav className='nav'>
        <Link className='header-link' to='/'>
          <h1>Posts</h1>
        </Link>

        <Button
          className='nav__btn'
          variant='outline-info'
          onClick={ logOut }>
            Log out
        </Button>
      </nav>
        :
      <h1 style={{ textAlign: 'center' }}>Posts</h1>
  );
};

export default NavBar;
