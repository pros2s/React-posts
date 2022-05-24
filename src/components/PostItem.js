import React, { useState } from "react";

import '../styles.css';

const PostItem = ({ post }) => {
  const { title, description } = post;

  return (
    <div className="post__item">
      <div className="post__left">
        <h1 className="post__title">{ title }</h1>
        <p className="post__description">{ description }</p>
      </div>

      <div className="post__right">
        <button className="post__delete">Delete</button>
      </div>
    </div>
  )
};

export default PostItem;
