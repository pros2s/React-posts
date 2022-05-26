import React from 'react';
import classes from './DeleteButton.module.css';


const DeleteButton = ({ children, ...props }) => {
  return (
    <button className={ classes.post__delete } { ...props }>
      { children }
    </button>
  )
}


export default DeleteButton;
