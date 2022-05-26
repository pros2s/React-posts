import React, { forwardRef } from 'react';
import classes from './PostInput.module.css';


const PostInput = forwardRef(({ children, ...props }, ref) => {
  return (
    <input ref={ ref } className={ classes.post__input } { ...props }>
      { children }
    </input>
  )
});


export default PostInput;
