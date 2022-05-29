import React from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteButton from './UI/button/DeleteButton';
import '../styles/posts.scss';


const PostItem = ({ post, number, remove }) => {
  const { id, title, body } = post;
  const route = useNavigate();


  return (
    <div className='posts__item' onClick={ () => route(`/posts/${ id }`) }>
      <div className='posts__left'>
        <h1 className='posts__title' title={ title }>{ number }. { title }</h1>
        <p className='posts__description'>{ body }</p>
      </div>

      <div className='posts__right'>
        <DeleteButton onClick={ (e) => remove(post, e) }>Delete</DeleteButton>
      </div>
    </div>
  );
};


export default PostItem;
