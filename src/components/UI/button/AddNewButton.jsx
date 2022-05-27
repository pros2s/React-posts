import React from 'react';
import classes from './AddNewButton.module.scss';


const AddNewButton = ({ children, ...props }) => {
  return (
    <button className={ classes.post__new } { ...props }>
      { children }
    </button>
  );
};


export default AddNewButton;
