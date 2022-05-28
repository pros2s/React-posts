import React from "react";

import error from '../media/error.gif';
import './error.scss';


const Error = () => {
  return (
    <div className="error">
      <img className="error__image" src={ error } alt=' error gif '/>
      <p className="error__message">Page has not found</p>
    </div>
  );
};


export default Error;
