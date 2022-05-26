import React from 'react';
import PostItem from './PostItem';

import './styles.css';


const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ 'textAlign': 'center' }}>{ title }</h1>
      <div className='post__list'>
        { posts.map((post, i) => <PostItem remove={ remove } number={ i + 1 } post={ post } key={ post.id }/>) }
      </div>
    </div>
  )
}


export default PostList;
