import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PostItem from './PostItem';

import '../styles/post.scss';
import '../styles/postAnimation.scss';


const PostList = ({ err, posts, remove }) => {
  if (!posts.length && !err) {
    return (
      <h1>Post list is empty! :{'('}</h1>
    );
  };

  return (
    <div>
      <div className='post__list'>
        <TransitionGroup>
          {
            posts.map((post, i) => (
              <CSSTransition
                key={ post.id }
                timeout={ 450 }
                classNames='post__animation'
              >
                <PostItem remove={ remove } number={ post.id } post={ post }/>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    </div>
  );
};


export default PostList;
