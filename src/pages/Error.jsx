import React from 'react';

import error from '../media/error.gif';
import '../styles/error-page.scss';


const Error = () => {
  return (
    <div className='error-page'>
      <img className='error-page__image' src={ error } alt=' error gif '/>
      <p className='error-page__message'>Page has not found</p>
    </div>
  );
};


export default Error;
