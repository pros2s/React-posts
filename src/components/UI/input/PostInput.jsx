import React from "react";
import classes from './PostInput.module.css';

const PostInput = ({ children, ...props }) => {
  return (
    <input className={ classes.post__input } { ...props }>
      { children }
    </input>
  )
}

export default PostInput;
