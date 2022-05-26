import React from 'react';
import classes from './AddNewButton.module.css';


const AddNewButton = ({ children, ...props }) => {
  return (
    <button className={ classes.post__new } { ...props }>
      { children }
    </button>
  )
}


export default AddNewButton;
