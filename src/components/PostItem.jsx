import React from 'react';
import DeleteButton from './UI/button/DeleteButton';

import './styles.css';


const PostItem = ({ post, number, remove }) => {
  const { title, description } = post;


  return (
    <div className='post__item'>
      <div className='post__left'>
        <h1 className='post__title'>{ number }. { title }</h1>
        <p className='post__description'>{ description }</p>
      </div>

      <div className='post__right'>
        <DeleteButton onClick={ () => remove(post) }>Delete</DeleteButton>
      </div>
    </div>
  )
};


export default PostItem;
